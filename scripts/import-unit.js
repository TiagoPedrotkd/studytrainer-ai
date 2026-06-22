#!/usr/bin/env node
/**
 * Importa HTML de estudo e gera ficheiros /data/subN.js
 *
 * Uso:
 *   npm run import                          → importa todas as unidades em imports/units.json
 *   node scripts/import-unit.js <ficheiro>   → importa uma unidade (ver abaixo)
 *
 * Para adicionar nova unidade:
 *   1. Coloca o HTML em imports/ (ou aponta o caminho em units.json)
 *   2. Adiciona entrada em imports/units.json
 *   3. Corre: npm run import
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const UNITS_FILE = path.join(ROOT, 'imports', 'units.json');

function extractConteudo(html) {
  const startTag = '<div id="conteudo"';
  const startIdx = html.indexOf(startTag);
  if (startIdx === -1) throw new Error('Painel #conteudo não encontrado no HTML');

  const contentStart = html.indexOf('>', startIdx) + 1;
  const endMarker = '<div id="flashcards"';
  const endIdx = html.indexOf(endMarker, contentStart);
  if (endIdx === -1) throw new Error('Painel #flashcards não encontrado no HTML');

  return html.slice(contentStart, endIdx).replace(/\s*<\/div>\s*$/, '').trim();
}

function extractArray(html, name) {
  const regex = new RegExp(`const ${name}=\\[([\\s\\S]*?)\\];`);
  const match = html.match(regex);
  if (!match) throw new Error(`Array «${name}» não encontrado no HTML`);
  return new Function(`return [${match[1]}];`)();
}

function escapeTemplate(str) {
  return str.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
}

function toFlashcards(arr) {
  return arr.map(({ q, a, question, answer }) => ({
    question: q || question,
    answer: a || answer,
  }));
}

function toQuiz(arr) {
  return arr.map(({ q, opts, ans, question, options, correct }) => ({
    question: q || question,
    options: opts || options,
    correct: ans !== undefined ? ans : correct,
  }));
}

function mergeUniqueFlashcards(base, extra) {
  const seen = new Set();
  const result = [];
  for (const fc of [...base, ...extra]) {
    const key = fc.question.trim().toLowerCase();
    if (!seen.has(key)) {
      seen.add(key);
      result.push(fc);
    }
  }
  return result;
}

function mergeUniqueQuiz(base, extra) {
  const seen = new Set();
  const result = [];
  for (const q of [...base, ...extra]) {
    const key = q.question.trim().toLowerCase();
    if (!seen.has(key)) {
      seen.add(key);
      result.push(q);
    }
  }
  return result;
}

function generateSubFile(unit, contentHtml, flashcards, quiz) {
  const indent = (obj) => JSON.stringify(obj, null, 2).replace(/\n/g, '\n  ');

  return `/**
 * Gerado automaticamente por scripts/import-unit.js
 * Fonte: ${unit.html}
 *
 * Para actualizar: edita o HTML fonte e corre «npm run import»
 * Para flashcards/quiz extra: adiciona em imports/units.json → extraFlashcards / extraQuiz
 */

window.STUDY_SUBUNITS = window.STUDY_SUBUNITS || [];
window.STUDY_SUBUNITS = window.STUDY_SUBUNITS.filter((s) => s.id !== '${unit.id}');

window.STUDY_SUBUNITS.push({
  id: '${unit.id}',
  number: ${unit.number},
  title: ${JSON.stringify(unit.title)},
  description: ${JSON.stringify(unit.description)},
  contentHtml: \`${escapeTemplate(contentHtml)}\`,
  flashcards: ${indent(flashcards)},
  quiz: ${indent(quiz)},
});
`;
}

function importUnit(unit) {
  const htmlPath = path.isAbsolute(unit.html)
    ? unit.html
    : path.join(ROOT, unit.html);

  if (!fs.existsSync(htmlPath)) {
    throw new Error(`Ficheiro não encontrado: ${htmlPath}`);
  }

  const html = fs.readFileSync(htmlPath, 'utf8');
  const contentHtml = extractConteudo(html);
  const rawFlashcards = extractArray(html, 'flashcards');
  const rawQuiz = extractArray(html, 'questions');

  const flashcards = mergeUniqueFlashcards(
    toFlashcards(rawFlashcards),
    toFlashcards(unit.extraFlashcards || [])
  );

  const quiz = mergeUniqueQuiz(
    toQuiz(rawQuiz),
    toQuiz(unit.extraQuiz || [])
  );

  const outPath = path.join(ROOT, 'data', `${unit.id}.js`);
  fs.writeFileSync(outPath, generateSubFile(unit, contentHtml, flashcards, quiz), 'utf8');

  console.log(`✓ ${unit.id}.js — ${flashcards.length} flashcards, ${quiz.length} perguntas quiz`);
  return unit.id;
}

function syncScriptTags(units) {
  const scripts = units.map((u) => `  <script src="data/${u.id}.js"></script>`).join('\n');
  const scriptsPages = units.map((u) => `  <script src="../data/${u.id}.js"></script>`).join('\n');

  const indexPath = path.join(ROOT, 'index.html');
  let indexHtml = fs.readFileSync(indexPath, 'utf8');
  indexHtml = indexHtml.replace(
    /  <script src="data\/sub\d+\.js"><\/script>(\n  <script src="data\/sub\d+\.js"><\/script>)*/,
    scripts
  );
  if (!indexHtml.includes('data/sub1.js')) {
    indexHtml = indexHtml.replace(
      '  <script src="app.js"></script>',
      `${scripts}\n  <script src="app.js"></script>`
    );
  }
  fs.writeFileSync(indexPath, indexHtml, 'utf8');

  const pagePath = path.join(ROOT, 'pages', 'subunidade.html');
  let pageHtml = fs.readFileSync(pagePath, 'utf8');
  pageHtml = pageHtml.replace(
    /  <script src="..\/data\/sub\d+\.js"><\/script>(\n  <script src="..\/data\/sub\d+\.js"><\/script>)*/,
    scriptsPages
  );
  fs.writeFileSync(pagePath, pageHtml, 'utf8');

  const swPath = path.join(ROOT, 'sw.js');
  let sw = fs.readFileSync(swPath, 'utf8');
  const dataAssets = units.map((u) => `  '/data/${u.id}.js',`).join('\n');
  sw = sw.replace(
    /  '\/data\/sub\d+\.js',(\n  '\/data\/sub\d+\.js',)*/,
    dataAssets
  );
  sw = sw.replace(
    "  '/styles/main.css',",
    "  '/styles/main.css',\n  '/styles/content.css',"
  );
  if (!sw.includes("content.css")) {
    sw = sw.replace("  '/styles/main.css',", "  '/styles/main.css',\n  '/styles/content.css',");
  }
  fs.writeFileSync(swPath, sw, 'utf8');

  console.log('✓ index.html, subunidade.html e sw.js sincronizados');
}

function main() {
  if (!fs.existsSync(UNITS_FILE)) {
    console.error('Ficheiro imports/units.json não encontrado.');
    process.exit(1);
  }

  const units = JSON.parse(fs.readFileSync(UNITS_FILE, 'utf8'));
  const ids = [];

  for (const unit of units) {
    ids.push(importUnit(unit));
  }

  syncScriptTags(units);
  console.log(`\nImportação concluída: ${ids.join(', ')}`);
}

main();
