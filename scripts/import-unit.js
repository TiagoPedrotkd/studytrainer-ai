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

const DEFAULT_CONTENT_PANELS = [
  { id: 'resistencia', label: 'Resistência' },
  { id: 'metodos', label: 'Métodos' },
  { id: 'avaliacao', label: 'Avaliação' },
  { id: 'velocidade', label: 'Velocidade' },
];

function extractElementById(html, id) {
  const re = new RegExp(`<div[^>]*\\bid="${id}"[^>]*>`, 'i');
  const match = html.match(re);
  if (!match) return null;

  const startIdx = html.indexOf(match[0]);
  const contentStart = startIdx + match[0].length;
  let depth = 1;
  let i = contentStart;

  while (i < html.length && depth > 0) {
    const nextOpen = html.indexOf('<div', i);
    const nextClose = html.indexOf('</div>', i);
    if (nextClose === -1) break;

    if (nextOpen !== -1 && nextOpen < nextClose) {
      depth += 1;
      i = nextOpen + 4;
    } else {
      depth -= 1;
      if (depth === 0) return html.slice(contentStart, nextClose).trim();
      i = nextClose + 6;
    }
  }
  return null;
}

function extractSectionBodyContent(html, sectionId) {
  const inner = extractElementById(html, sectionId);
  if (!inner) return null;

  const bodyTag = '<div class="section-body">';
  const bodyStart = inner.indexOf(bodyTag);
  if (bodyStart === -1) return inner;

  const contentStart = bodyStart + bodyTag.length;
  let depth = 1;
  let i = contentStart;

  while (i < inner.length && depth > 0) {
    const nextOpen = inner.indexOf('<div', i);
    const nextClose = inner.indexOf('</div>', i);
    if (nextClose === -1) break;

    if (nextOpen !== -1 && nextOpen < nextClose) {
      depth += 1;
      i = nextOpen + 4;
    } else {
      depth -= 1;
      if (depth === 0) return inner.slice(contentStart, nextClose).trim();
      i = nextClose + 6;
    }
  }
  return null;
}

function extractVfSection(html) {
  const marker = '<!-- V/F -->';
  const idx = html.indexOf(marker);
  if (idx === -1) return null;

  const slice = html.slice(idx);
  const bodyTag = '<div class="section-body">';
  const bodyStart = slice.indexOf(bodyTag);
  if (bodyStart === -1) return null;

  const contentStart = bodyStart + bodyTag.length;
  let depth = 1;
  let i = contentStart;

  while (i < slice.length && depth > 0) {
    const nextOpen = slice.indexOf('<div', i);
    const nextClose = slice.indexOf('</div>', i);
    if (nextClose === -1) break;

    if (nextOpen !== -1 && nextOpen < nextClose) {
      depth += 1;
      i = nextOpen + 4;
    } else {
      depth -= 1;
      if (depth === 0) return slice.slice(contentStart, nextClose).trim();
      i = nextClose + 6;
    }
  }
  return null;
}

function extractPanelInner(html, panelId) {
  if (panelId === 'vf') return extractVfSection(html);
  const body = extractSectionBodyContent(html, panelId);
  if (body) return body;
  return extractElementById(html, panelId);
}

function isSectionBodyFormat(html, panelId) {
  if (panelId === 'vf') return true;
  return extractSectionBodyContent(html, panelId) !== null;
}

function normalizeImportedContent(html, panelLabel, isSectionFormat) {
  let content = html.trim();

  if (isSectionFormat) {
    content = `<p class="section-label">${panelLabel}</p>\n${content}`;
  }

  content = content.replace(
    /<div class="subsec-title">([\s\S]*?)<\/div>/g,
    '<p class="section-label">$1</p>'
  );

  content = content.replace(
    /<div class="box-good">([\s\S]*?)<\/div>/g,
    '<div class="alert-box" style="border-left-color:#1D9E75">$1</div>'
  );
  content = content.replace(
    /<div class="box-warn">([\s\S]*?)<\/div>/g,
    '<div class="alert-box" style="border-left-color:#EF9F27">$1</div>'
  );
  content = content.replace(
    /<div class="box-info">([\s\S]*?)<\/div>/g,
    '<div class="alert-box" style="border-left-color:#378ADD">$1</div>'
  );
  content = content.replace(
    /<div class="box-purple">([\s\S]*?)<\/div>/g,
    '<div class="alert-box" style="border-left-color:#533AB7">$1</div>'
  );

  content = content.replace(
    /<p>([\s\S]*?)<\/p>\s*(?=<div class="alert-box")/g,
    '<div class="card"><p style="font-size:13px;line-height:1.6;margin:0">$1</p></div>\n'
  );
  content = content.replace(
    /<p>([\s\S]*?)<\/p>\s*(?=<table class="data-table")/g,
    '<div class="card"><p style="font-size:13px;line-height:1.6;margin:0">$1</p></div>\n'
  );

  return content;
}

function extractMultiPanelConteudo(html, panels) {
  const parts = [];
  const sections = [];

  for (const panel of panels) {
    const inner = extractPanelInner(html, panel.id);
    if (inner) {
      const normalized = normalizeImportedContent(
        inner,
        panel.label,
        isSectionBodyFormat(html, panel.id)
      );
      parts.push(`<div id="sec-${panel.id}" class="content-section">${normalized}</div>`);
      sections.push({ id: `sec-${panel.id}`, label: panel.label });
    }
  }

  if (parts.length === 0) return null;
  return { html: parts.join('\n\n'), sections };
}

function extractConteudo(html, panels) {
  const panelList = panels?.length ? panels : DEFAULT_CONTENT_PANELS;
  const multi = extractMultiPanelConteudo(html, panelList);
  if (multi) return multi;

  const startTag = '<div id="conteudo"';
  const startIdx = html.indexOf(startTag);
  if (startIdx === -1) throw new Error('Painel #conteudo (ou painéis resistencia/metodos/…) não encontrado no HTML');

  const contentStart = html.indexOf('>', startIdx) + 1;
  const endMarker = '<div id="flashcards"';
  const endIdx = html.indexOf(endMarker, contentStart);
  if (endIdx === -1) throw new Error('Painel #flashcards não encontrado no HTML');

  return { html: html.slice(contentStart, endIdx).replace(/\s*<\/div>\s*$/, '').trim(), sections: [] };
}

function extractArray(html, name) {
  const regex = new RegExp(`const ${name}\\s*=\\s*\\[([\\s\\S]*?)\\];`);
  const match = html.match(regex);
  if (!match) throw new Error(`Array «${name}» não encontrado no HTML`);
  return new Function(`return [${match[1]}];`)();
}

function extractFlashcardsFromHtml(html) {
  if (/const flashcards\s*=/.test(html)) {
    return toFlashcards(extractArray(html, 'flashcards'));
  }
  if (/const flashData\s*=/.test(html)) {
    return extractArray(html, 'flashData').map((item) => {
      if (Array.isArray(item)) {
        return { question: item[0], answer: item[1] };
      }
      return toFlashcards([item])[0];
    });
  }
  throw new Error('Flashcards não encontrados no HTML (flashcards ou flashData)');
}

function extractQuizFromHtml(html) {
  if (/const questions\s*=/.test(html)) {
    return toQuiz(extractArray(html, 'questions'));
  }
  if (/const quizData\s*=/.test(html)) {
    return toQuiz(extractArray(html, 'quizData'));
  }
  throw new Error('Quiz não encontrado no HTML (questions ou quizData)');
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

function generateSubFile(unit, contentHtml, contentSections, flashcards, quiz) {
  const indent = (obj) => JSON.stringify(obj, null, 2).replace(/\n/g, '\n  ');
  const sectionsLine = contentSections.length
    ? `  contentSections: ${indent(contentSections)},\n`
    : '';

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
${sectionsLine}  contentHtml: \`${escapeTemplate(contentHtml)}\`,
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
  const extracted = extractConteudo(html, unit.contentPanels);
  const contentHtml = extracted.html;
  const contentSections = unit.contentSections || extracted.sections || [];
  const rawFlashcards = extractFlashcardsFromHtml(html);
  const rawQuiz = extractQuizFromHtml(html);

  const flashcards = mergeUniqueFlashcards(
    toFlashcards(rawFlashcards),
    toFlashcards(unit.extraFlashcards || [])
  );

  const quiz = mergeUniqueQuiz(
    toQuiz(rawQuiz),
    toQuiz(unit.extraQuiz || [])
  );

  const outPath = path.join(ROOT, 'data', `${unit.id}.js`);
  fs.writeFileSync(outPath, generateSubFile(unit, contentHtml, contentSections, flashcards, quiz), 'utf8');

  console.log(`✓ ${unit.id}.js — ${flashcards.length} flashcards, ${quiz.length} perguntas quiz`);
  return unit.id;
}

function syncScriptTags(units) {
  const scripts = units.map((u) => `  <script src="data/${u.id}.js"></script>`).join('\n');
  const scriptsPages = units.map((u) => `  <script src="../data/${u.id}.js"></script>`).join('\n');

  const indexPath = path.join(ROOT, 'index.html');
  let indexHtml = fs.readFileSync(indexPath, 'utf8');
  indexHtml = indexHtml.replace(
    /(  <script src="data\/sub\d+\.js"><\/script>\r?\n)+/,
    `${scripts}\r\n`
  );
  fs.writeFileSync(indexPath, indexHtml, 'utf8');

  const pagePath = path.join(ROOT, 'pages', 'subunidade.html');
  let pageHtml = fs.readFileSync(pagePath, 'utf8');
  pageHtml = pageHtml.replace(
    /(  <script src="\.\.\/data\/sub\d+\.js"><\/script>\r?\n)+/,
    `${scriptsPages}\r\n`
  );
  fs.writeFileSync(pagePath, pageHtml, 'utf8');

  const swPath = path.join(ROOT, 'sw.js');
  let sw = fs.readFileSync(swPath, 'utf8');
  const dataAssets = units.map((u) => `  '/data/${u.id}.js',`).join('\n');
  sw = sw.replace(
    /(  '\/data\/sub\d+\.js',\r?\n)+/,
    `${dataAssets}\r\n`
  );
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
