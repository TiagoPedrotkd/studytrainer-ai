#!/usr/bin/env node
/**
 * Importa HTML de estudo e gera ficheiros em /data
 *
 * Estrutura do curso: imports/course.json
 *   └── units[] → subunits[] (HTML, extras, painéis)
 *
 * Saída:
 *   data/course.js        — manifesto leve (menu principal)
 *   data/<unit-id>.js     — conteúdo completo de cada unidade
 *
 * Uso:
 *   npm run import
 *
 * Para adicionar nova unidade:
 *   1. Adiciona bloco em imports/course.json → units[]
 *   2. Coloca entradas em subunits[] com caminho HTML
 *   3. Corre: npm run import
 *
 * Extras: extraFlashcards / extraQuiz por subunidade
 * Banco rotativo: imports/exam-quiz.json → { "unit-id": { "sub-id": [...] } }
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const COURSE_FILE = path.join(ROOT, 'imports', 'course.json');
const EXAM_QUIZ_FILE = path.join(ROOT, 'imports', 'exam-quiz.json');

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

function normalizeTopicAccordionContent(html) {
  const parts = [];
  const topicRegex = /<div class="topic">([\s\S]*?)<\/div>\s*(?=<div class="topic">|$)/g;
  let match;

  while ((match = topicRegex.exec(html)) !== null) {
    const topicHtml = match[1];
    const headerMatch = topicHtml.match(/<h3>([\s\S]*?)<\/h3>/);
    const bodyMatch = topicHtml.match(/<div class="topic-body[^"]*">([\s\S]*)/);
    if (!headerMatch || !bodyMatch) continue;

    const title = headerMatch[1].replace(/<span[^>]*>[\s\S]*?<\/span>/g, '').trim();
    let body = bodyMatch[1].replace(/<\/div>\s*$/, '');
    body = body.replace(/<div class="pt"([^>]*)>/g, '<div class="point"$1>');
    body = body.replace(/<div class="point"([^>]*)>/g, '<p class="point"$1>');
    body = body.replace(/<\/div>(\s*)(?=<p class="point"|<div class="(?:tip|ex|grid3|grid4|grid|cycle|six|three|two-col|four|dim|mini|law|warn|quote|perc-grid|steps)")/g, '</p>$1');
    body = body.replace(/<div class="ex"([^>]*)>/g, '<div class="alert-box ex-box"$1>');
    body = body.replace(/<div class="warn"([^>]*)>/g, '<div class="alert-box warn-box"$1>');
    parts.push(`<div class="card topic-card"><p class="section-label">${title}</p>${body}</div>`);
  }

  return parts.join('\n');
}

function normalizeResumoContent(html) {
  let content = html.trim();

  content = content.replace(
    /<div class="(?:card-title|ct)">([\s\S]*?)<\/div>/g,
    '<p class="section-label">$1</p>'
  );
  content = content.replace(
    /<div class="topic-title">([\s\S]*?)<\/div>/g,
    '<p class="section-label">$1</p>'
  );
  content = content.replace(/<div class="topic-card">/g, '<div class="card topic-card">');
  content = content.replace(
    /<div class="quote-box">([\s\S]*?)<\/div>/g,
    '<div class="alert-box quote-box">$1</div>'
  );
  content = content.replace(
    /<div class="law-box">([\s\S]*?)<\/div>/g,
    '<div class="alert-box law-box">$1</div>'
  );
  content = content.replace(
    /<div class="warn-box">([\s\S]*?)<\/div>/g,
    '<div class="alert-box warn-box">$1</div>'
  );
  content = content.replace(/<div class="(?:point|pt)">/g, '<p class="point">');
  content = content.replace(/<\/div>\s*(?=<p class="point">|<div class="(?:card|alert-box)")/g, '</p>\n');

  return content;
}

function extractTopicCards(html) {
  const cards = [];
  const re = /<div class="topic-card[^"]*">/g;
  let match;

  while ((match = re.exec(html)) !== null) {
    const contentStart = match.index + match[0].length;
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
        if (depth === 0) {
          cards.push(html.slice(contentStart, nextClose));
          break;
        }
        i = nextClose + 6;
      }
    }
  }

  return cards;
}

function normalizeTopicCardBody(body) {
  let content = body.trim();

  content = content.replace(
    /<div class="(concept-block|purple-block|orange-block|warn-block)">([\s\S]*?)<\/div>/g,
    (_, className, inner) => {
      const boxClass =
        className === 'purple-block'
          ? 'purple-box'
          : className === 'orange-block'
            ? 'orange-box'
            : className === 'warn-block'
              ? 'warn-block-box'
              : 'concept-box';
      const label = inner.match(/<div class="label">([\s\S]*?)<\/div>/);
      const paragraph = inner.match(/<p>([\s\S]*?)<\/p>/);
      const labelHtml = label ? `<p class="section-label">${label[1].trim()}</p>` : '';
      const text = paragraph ? paragraph[1] : inner;
      return `<div class="alert-box ${boxClass}">${labelHtml}<p class="point">${text}</p></div>`;
    }
  );

  content = content.replace(/<ul class="point-list">([\s\S]*?)<\/ul>/g, (_, inner) => {
    const items = inner.match(/<li>([\s\S]*?)<\/li>/g) || [];
    return items
      .map((li) => `<p class="point">${li.replace(/<\/?li>/g, '').trim()}</p>`)
      .join('\n');
  });

  content = content.replace(
    /<div class="example-box">([\s\S]*?)<\/div>/g,
    (_, inner) => {
      const label = inner.match(/<div class="ex-label">([\s\S]*?)<\/div>/);
      const paragraph = inner.match(/<p>([\s\S]*?)<\/p>/);
      const labelText = label ? label[1].trim() : 'Exemplo';
      const text = paragraph ? paragraph[1] : '';
      return `<div class="alert-box ex-box"><strong>${labelText}</strong><p>${text}</p></div>`;
    }
  );

  content = content.replace(
    /<div class="key-rule">([\s\S]*?)<\/div>/g,
    '<div class="alert-box key-rule">$1</div>'
  );

  content = content.replace(
    /<div style="[^"]*font-weight:\s*600[^"]*">([\s\S]*?)<\/div>/g,
    '<p class="section-label subsection-label">$1</p>'
  );

  content = content.replace(
    /<p style="[^"]*font-weight:\s*600[^"]*">([\s\S]*?)<\/p>/g,
    '<p class="section-label subsection-label">$1</p>'
  );

  content = content.replace(
    /<p style="[^"]*">([\s\S]*?)<\/p>/g,
    '<p class="point intro-text">$1</p>'
  );

  return content;
}

function normalizeTopicCardContent(html) {
  const parts = [];

  for (const cardHtml of extractTopicCards(html)) {
    const titleMatch = cardHtml.match(/<h2>([\s\S]*?)<\/h2>/);
    const bodyMatch = cardHtml.match(/<div class="topic-body">([\s\S]*)/);
    if (!titleMatch || !bodyMatch) continue;

    const title = titleMatch[1].trim();
    let body = bodyMatch[1].replace(/<\/div>\s*$/, '');
    body = normalizeTopicCardBody(body);
    parts.push(`<div class="card topic-card"><p class="section-label">${title}</p>${body}</div>`);
  }

  return parts.join('\n');
}

function extractResumoConteudo(html) {
  const inner = extractElementById(html, 'resumo');
  if (!inner) return null;

  let normalized;
  if (inner.includes('class="topic"')) {
    normalized = normalizeTopicAccordionContent(inner);
  } else if (inner.includes('class="topic-card"')) {
    normalized = normalizeTopicCardContent(inner);
  } else {
    normalized = normalizeResumoContent(inner);
  }

  return { html: normalized, sections: [] };
}

function extractConteudo(html, panels) {
  const panelList = panels?.length ? panels : DEFAULT_CONTENT_PANELS;
  const multi = extractMultiPanelConteudo(html, panelList);
  if (multi) return multi;

  const resumo = extractResumoConteudo(html);
  if (resumo) return resumo;

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
  if (/const cards\s*=/.test(html)) {
    return toFlashcards(extractArray(html, 'cards'));
  }
  if (/const flashData\s*=/.test(html)) {
    return extractArray(html, 'flashData').map((item) => {
      if (Array.isArray(item)) {
        return { question: item[0], answer: item[1] };
      }
      return toFlashcards([item])[0];
    });
  }
  throw new Error('Flashcards não encontrados no HTML (flashcards, cards ou flashData)');
}

function extractQuizFromHtml(html) {
  if (/const questions\s*=/.test(html)) {
    return toQuiz(extractArray(html, 'questions'));
  }
  if (/const qs\s*=/.test(html)) {
    return toQuiz(extractArray(html, 'qs'));
  }
  if (/const quizData\s*=/.test(html)) {
    return toQuiz(extractArray(html, 'quizData'));
  }
  throw new Error('Quiz não encontrado no HTML (questions, qs ou quizData)');
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
  return arr.map(({ q, opts, ans, question, options, correct, c }) => ({
    question: q || question,
    options: opts || options,
    correct: ans !== undefined ? ans : correct !== undefined ? correct : c,
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

function getBlockCount(sub) {
  if (sub.content?.length) return sub.content.length;
  if (sub.contentHtml) {
    const labels = (sub.contentHtml.match(/class="section-label"/g) || []).length;
    if (labels > 0) return labels;
    const topics = (sub.contentHtml.match(/class="topic-card"/g) || []).length;
    if (topics > 0) return topics;
  }
  if (sub.contentSections?.length) return sub.contentSections.length;
  return 0;
}

function getExamQuizForSub(examQuizBank, unitId, subId) {
  if (examQuizBank[unitId]?.[subId]) return examQuizBank[unitId][subId];
  if (examQuizBank[subId]) return examQuizBank[subId];
  return [];
}

function importSubunit(subunit, unitId, examQuizBank) {
  const htmlPath = path.isAbsolute(subunit.html)
    ? subunit.html
    : path.join(ROOT, subunit.html);

  if (!fs.existsSync(htmlPath)) {
    throw new Error(`Ficheiro não encontrado: ${htmlPath}`);
  }

  const html = fs.readFileSync(htmlPath, 'utf8');
  const extracted = extractConteudo(html, subunit.contentPanels);
  const contentHtml = extracted.html;
  const contentSections = subunit.contentSections || extracted.sections || [];
  const rawFlashcards = extractFlashcardsFromHtml(html);
  const rawQuiz = extractQuizFromHtml(html);

  const flashcards = mergeUniqueFlashcards(
    toFlashcards(rawFlashcards),
    toFlashcards(subunit.extraFlashcards || [])
  );

  const quiz = mergeUniqueQuiz(
    mergeUniqueQuiz(toQuiz(rawQuiz), toQuiz(subunit.extraQuiz || [])),
    toQuiz(getExamQuizForSub(examQuizBank, unitId, subunit.id))
  );

  const data = {
    id: subunit.id,
    number: subunit.number,
    title: subunit.title,
    description: subunit.description,
    flashcards,
    quiz,
  };

  if (contentSections.length) {
    data.contentSections = contentSections;
  }
  data.contentHtml = contentHtml;

  console.log(
    `  ✓ ${subunit.id} — ${flashcards.length} flashcards, ${quiz.length} perguntas quiz`
  );

  return data;
}

function indentJson(obj) {
  return JSON.stringify(obj, null, 2).replace(/\n/g, '\n  ');
}

function serializeSubunit(sub) {
  const sectionsLine = sub.contentSections?.length
    ? `    contentSections: ${indentJson(sub.contentSections)},\n`
    : '';
  const rest = {
    id: sub.id,
    number: sub.number,
    title: sub.title,
    description: sub.description,
    flashcards: sub.flashcards,
    quiz: sub.quiz,
  };
  const restLines = JSON.stringify(rest, null, 2).split('\n').slice(1, -1).join('\n');
  return `  {\n${restLines},\n${sectionsLine}    contentHtml: \`${escapeTemplate(sub.contentHtml)}\`\n  }`;
}

function generateUnitFile(unit, subunits) {
  const subunitsJson = subunits.map((sub) => serializeSubunit(sub)).join(',\n');

  return `/**
 * Gerado automaticamente por scripts/import-unit.js
 * Unidade: ${unit.title}
 *
 * Para actualizar: edita o HTML fonte e corre «npm run import»
 */

window.STUDY_UNITS = window.STUDY_UNITS || [];
window.STUDY_UNITS = window.STUDY_UNITS.filter((u) => u.id !== '${unit.id}');

window.STUDY_UNITS.push({
  id: '${unit.id}',
  number: ${unit.number},
  title: ${JSON.stringify(unit.title)},
  description: ${JSON.stringify(unit.description)},
  subunits: [
${subunitsJson}
  ],
});
`;
}

function generateCourseManifest(units) {
  const manifestUnits = units.map(({ unit, subunits }) => {
    const totalFlashcards = subunits.reduce((n, s) => n + s.flashcards.length, 0);
    const totalQuiz = subunits.reduce((n, s) => n + s.quiz.length, 0);
    const totalBlocks = subunits.reduce((n, s) => n + getBlockCount(s), 0);

    return {
      id: unit.id,
      number: unit.number,
      title: unit.title,
      description: unit.description,
      subunitCount: subunits.length,
      flashcardCount: totalFlashcards,
      quizCount: totalQuiz,
      blockCount: totalBlocks,
      subunits: subunits.map((s) => ({
        id: s.id,
        number: s.number,
        title: s.title,
        description: s.description,
        flashcardCount: s.flashcards.length,
        quizCount: s.quiz.length,
        blockCount: getBlockCount(s),
      })),
    };
  });

  return `/**
 * Gerado automaticamente por scripts/import-unit.js
 * Manifesto do curso (menu principal)
 */

window.STUDY_COURSE = ${JSON.stringify({ units: manifestUnits }, null, 2)};
`;
}

function cleanupLegacySubFiles(currentUnitIds) {
  const dataDir = path.join(ROOT, 'data');
  if (!fs.existsSync(dataDir)) return;

  for (const file of fs.readdirSync(dataDir)) {
    if (/^sub\d+\.js$/.test(file)) {
      fs.unlinkSync(path.join(dataDir, file));
      console.log(`  − removido legado data/${file}`);
    }
  }
}

function syncServiceWorker(unitIds) {
  const swPath = path.join(ROOT, 'sw.js');
  let sw = fs.readFileSync(swPath, 'utf8');

  const dataAssets = [
    "  '/data/course.js',",
    ...unitIds.map((id) => `  '/data/${id}.js',`),
  ].join('\n');

  sw = sw.replace(
    /(  '\/data\/(?:course|unit-|sub)\S*',\r?\n)+/,
    `${dataAssets}\n`
  );

  if (!sw.includes('/pages/unidade.html')) {
    sw = sw.replace(
      "  '/pages/subunidade.html',",
      "  '/pages/unidade.html',\n  '/pages/subunidade.html',"
    );
  }

  const cacheMatch = sw.match(/const CACHE_NAME = 'studytrainer-v(\d+)'/);
  if (cacheMatch) {
    const next = parseInt(cacheMatch[1], 10) + 1;
    sw = sw.replace(/const CACHE_NAME = 'studytrainer-v\d+'/, `const CACHE_NAME = 'studytrainer-v${next}'`);
  }

  fs.writeFileSync(swPath, sw, 'utf8');
  console.log('✓ sw.js sincronizado');
}

function importCourseUnit(courseUnit, examQuizBank) {
  console.log(`\n${courseUnit.title} (${courseUnit.id})`);

  const subunits = courseUnit.subunits.map((sub) =>
    importSubunit(sub, courseUnit.id, examQuizBank)
  );

  const outPath = path.join(ROOT, 'data', `${courseUnit.id}.js`);
  fs.writeFileSync(outPath, generateUnitFile(courseUnit, subunits), 'utf8');
  console.log(`✓ ${courseUnit.id}.js — ${subunits.length} subunidades`);

  return { unit: courseUnit, subunits };
}

function main() {
  if (!fs.existsSync(COURSE_FILE)) {
    console.error('Ficheiro imports/course.json não encontrado.');
    process.exit(1);
  }

  const course = JSON.parse(fs.readFileSync(COURSE_FILE, 'utf8'));
  const examQuizBank = fs.existsSync(EXAM_QUIZ_FILE)
    ? JSON.parse(fs.readFileSync(EXAM_QUIZ_FILE, 'utf8'))
    : {};

  const imported = [];

  for (const courseUnit of course.units) {
    imported.push(importCourseUnit(courseUnit, examQuizBank));
  }

  const manifestPath = path.join(ROOT, 'data', 'course.js');
  fs.writeFileSync(manifestPath, generateCourseManifest(imported), 'utf8');
  console.log(`\n✓ course.js — ${imported.length} unidade(s)`);

  cleanupLegacySubFiles(imported.map((i) => i.unit.id));
  syncServiceWorker(imported.map((i) => i.unit.id));

  console.log(`\nImportação concluída: ${imported.map((i) => i.unit.id).join(', ')}`);
}

module.exports = {
  extractQuizFromHtml,
  toQuiz,
  extractFlashcardsFromHtml,
  toFlashcards,
};

if (require.main === module) {
  main();
}
