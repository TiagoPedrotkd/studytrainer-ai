/**
 * StudyTrainer — Lógica central
 * Navegação, flashcards, quiz, tema e progresso (localStorage)
 */

(function () {
  'use strict';

  const STORAGE_THEME = 'studytrainer-theme';
  const STORAGE_FC_PREFIX = 'studytrainer-fc-';
  const QUIZ_PER_SESSION = 14;
  const EXAM_GLOBAL_PER_SESSION = 14;
  const QUIZ_OPTION_LETTERS = ['A', 'B', 'C', 'D'];

  function shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function getQuizSessionSize(poolSize, perSession) {
    return Math.min(perSession, poolSize);
  }

  function pickQuizQuestions(pool, perSession) {
    return shuffle(pool).slice(0, getQuizSessionSize(pool.length, perSession));
  }

  function formatQuizIntro(poolSize, sessionSize, contextLabel) {
    if (poolSize <= sessionSize) {
      return `Testa os teus conhecimentos com ${poolSize} perguntas de escolha múltipla sobre ${contextLabel}. A ordem é aleatória em cada tentativa.`;
    }
    return `Banco de ${poolSize} perguntas sobre ${contextLabel}. Cada teste sorteia ${sessionSize} perguntas diferentes — repete para treinar com combinações novas.`;
  }

  function getAllQuizQuestions(unitId) {
    if (unitId) {
      const unit = getUnitById(unitId);
      return unit ? unit.subunits.flatMap((sub) => sub.quiz) : [];
    }
    return getUnits().flatMap((unit) => unit.subunits.flatMap((sub) => sub.quiz));
  }

  // ---- Carregamento de dados ----

  function getDataBasePath() {
    return window.location.pathname.includes('/pages/') ? '../data/' : 'data/';
  }

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const absoluteSrc = new URL(src, document.baseURI).href;
      const existing = [...document.scripts].find((s) => s.src === absoluteSrc);

      if (existing) {
        if (existing.dataset.loaded === 'true') {
          resolve();
          return;
        }
        if (existing.readyState === 'complete' || existing.readyState === 'loaded') {
          existing.dataset.loaded = 'true';
          resolve();
          return;
        }
        existing.addEventListener('load', () => resolve(), { once: true });
        existing.addEventListener('error', () => reject(new Error(`Não foi possível carregar ${src}`)), {
          once: true,
        });
        return;
      }

      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        script.dataset.loaded = 'true';
        resolve();
      };
      script.onerror = () => reject(new Error(`Não foi possível carregar ${src}`));
      document.head.appendChild(script);
    });
  }

  async function ensureCourseLoaded() {
    if (window.STUDY_COURSE?.units?.length) return;
    await loadScript(`${getDataBasePath()}course.js`);
  }

  async function ensureUnitLoaded(unitId) {
    await loadScript(`${getDataBasePath()}${unitId}.js`);
  }

  async function ensureAllUnitsLoaded() {
    await ensureCourseLoaded();
    for (const unit of getCourseUnits()) {
      await ensureUnitLoaded(unit.id);
    }
  }

  function getCourseUnits() {
    return (window.STUDY_COURSE?.units || []).sort((a, b) => a.number - b.number);
  }

  function getCourseUnitById(id) {
    return getCourseUnits().find((u) => u.id === id);
  }

  function getUnits() {
    return (window.STUDY_UNITS || []).sort((a, b) => a.number - b.number);
  }

  function getUnitById(id) {
    return getUnits().find((u) => u.id === id);
  }

  function getSubunits(unitId) {
    const unit = getUnitById(unitId);
    if (!unit) return [];
    return [...unit.subunits].sort((a, b) => a.number - b.number);
  }

  function getSubunit(unitId, subId) {
    return getSubunits(unitId).find((s) => s.id === subId);
  }

  function getFcStorageKey(unitId, subunitId) {
    return `${STORAGE_FC_PREFIX}${unitId}-${subunitId}`;
  }

  function loadFcProgress(unitId, subunitId) {
    try {
      const data = localStorage.getItem(getFcStorageKey(unitId, subunitId));
      if (data) return JSON.parse(data);
      const legacy = localStorage.getItem(STORAGE_FC_PREFIX + subunitId);
      return legacy ? JSON.parse(legacy) : { known: [], index: 0 };
    } catch {
      return { known: [], index: 0 };
    }
  }

  function saveFcProgress(unitId, subunitId, progress) {
    localStorage.setItem(getFcStorageKey(unitId, subunitId), JSON.stringify(progress));
  }

  function getUnitFlashcardProgress(unitId, subunits) {
    let known = 0;
    let total = 0;
    for (const sub of subunits) {
      const progress = loadFcProgress(unitId, sub.id);
      known += progress.known.length;
      total += sub.flashcards.length;
    }
    return { known, total, pct: total > 0 ? Math.round((known / total) * 100) : 0 };
  }

  function initTheme() {
    const saved = localStorage.getItem(STORAGE_THEME);
    const theme = saved || 'dark';
    applyTheme(theme);

    const toggle = document.getElementById('theme-toggle');
    if (toggle) {
      toggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
        const next = current === 'dark' ? 'light' : 'dark';
        applyTheme(next);
        localStorage.setItem(STORAGE_THEME, next);
      });
    }
  }

  function applyTheme(theme) {
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    const icon = document.querySelector('.theme-icon');
    if (icon) icon.textContent = theme === 'light' ? '🌙' : '☀️';
  }

  // ---- Conteúdo ----

  function renderContentBlock(block) {
    const el = document.createElement('article');
    el.className = 'content-block';

    let html = `<h3>${block.title}</h3>`;

    if (block.paragraphs) {
      block.paragraphs.forEach((p) => {
        html += `<p>${p}</p>`;
      });
    }

    if (block.list && block.list.length) {
      html += '<ul>';
      block.list.forEach((item) => {
        html += `<li>${item}</li>`;
      });
      html += '</ul>';
    }

    if (block.highlight) {
      html += `<div class="highlight-box">${block.highlight}</div>`;
    }

    if (block.extra) {
      block.extra.forEach((p) => {
        html += `<p>${p}</p>`;
      });
    }

    el.innerHTML = html;
    return el;
  }

  // ---- Página principal (index) ----

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

  function initIndex() {
    const grid = document.getElementById('units-grid');
    if (!grid) return;

    const units = getCourseUnits();

    if (units.length === 0) {
      grid.innerHTML =
        '<p class="hero-text">Nenhuma unidade disponível. Corre <code>npm run import</code> e actualiza a página (Ctrl+F5).</p>';
      return;
    }

    units.forEach((unit) => {
      const card = document.createElement('a');
      card.className = 'subunit-card unit-card';
      card.href = `pages/unidade.html?unit=${unit.id}`;
      card.setAttribute('role', 'listitem');
      card.innerHTML = `
        <div class="subunit-card-header">
          <span class="subunit-number">${unit.number}</span>
          <h3>${unit.title}</h3>
        </div>
        <p>${unit.description}</p>
        <div class="subunit-meta">
          <span class="meta-badge">📑 ${unit.subunitCount} subunidades</span>
          <span class="meta-badge">🃏 ${unit.flashcardCount} cards</span>
          <span class="meta-badge">❓ ${unit.quizCount} perguntas</span>
        </div>
      `;
      grid.appendChild(card);
    });

    const totalQuiz = units.reduce((n, u) => n + u.quizCount, 0);
    if (units.length > 1 && totalQuiz > 0) {
      const examSection = document.createElement('section');
      examSection.className = 'exam-promo';
      examSection.innerHTML = `
        <a href="pages/exame.html?scope=course" class="subunit-card exam-card" role="listitem">
          <div class="subunit-card-header">
            <span class="subunit-number exam-icon" aria-hidden="true">🎯</span>
            <h3>Exame Rotativo do Curso</h3>
          </div>
          <p>${EXAM_GLOBAL_PER_SESSION} perguntas sorteadas de um banco de ${totalQuiz} — mistura todas as unidades.</p>
          <div class="subunit-meta">
            <span class="meta-badge">🔄 Rotativo</span>
            <span class="meta-badge">📚 ${units.length} unidades</span>
            <span class="meta-badge">❓ ${totalQuiz} no banco</span>
          </div>
        </a>
      `;
      grid.parentNode.insertBefore(examSection, grid);
    }
  }

  function initUnit(unitId) {
    const grid = document.getElementById('subunits-grid');
    const unit = getUnitById(unitId);
    const courseUnit = getCourseUnitById(unitId);

    if (!grid || !unit || !courseUnit) {
      document.querySelector('.container').innerHTML =
        '<p class="hero-text">Unidade não encontrada. <a href="../index.html">Voltar ao menu</a></p>';
      return;
    }

    document.title = `${unit.title} — StudyTrainer`;
    document.getElementById('unit-title').textContent = `Unidade ${unit.number}`;
    document.getElementById('unit-subtitle').textContent = unit.title;

    const hero = document.getElementById('unit-hero-text');
    if (hero) hero.textContent = unit.description;

    const backLink = document.getElementById('unit-back');
    if (backLink) backLink.href = '../index.html';

    const subunits = getSubunits(unitId);
    const unitProgress = getUnitFlashcardProgress(unitId, subunits);

    subunits.forEach((sub) => {
      const manifestSub = courseUnit.subunits.find((s) => s.id === sub.id) || sub;
      const progress = loadFcProgress(unitId, sub.id);
      const total = sub.flashcards.length;
      const known = progress.known.length;
      const pct = total > 0 ? Math.round((known / total) * 100) : 0;
      const blockCount = manifestSub.blockCount ?? getBlockCount(sub);

      const sessionSize = getQuizSessionSize(sub.quiz.length, QUIZ_PER_SESSION);
      const quizLabel =
        sub.quiz.length > sessionSize
          ? `❓ ${sub.quiz.length} (${sessionSize} rotativas)`
          : `❓ ${sub.quiz.length} perguntas`;

      const card = document.createElement('a');
      card.className = 'subunit-card';
      card.href = `subunidade.html?unit=${unitId}&id=${sub.id}`;
      card.setAttribute('role', 'listitem');
      card.innerHTML = `
        <div class="subunit-card-header">
          <span class="subunit-number">${sub.number}</span>
          <h3>${sub.title}</h3>
        </div>
        <p>${sub.description}</p>
        <div class="subunit-meta">
          <span class="meta-badge">📖 ${blockCount} blocos</span>
          <span class="meta-badge">🃏 ${sub.flashcards.length} cards</span>
          <span class="meta-badge">${quizLabel}</span>
        </div>
        <div class="subunit-progress">
          <span class="meta-badge">Flashcards: ${known}/${total} (${pct}%)</span>
          <div class="progress-bar">
            <div class="progress-fill" style="width: ${pct}%"></div>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });

    const progressEl = document.getElementById('unit-progress');
    if (progressEl) {
      progressEl.innerHTML = `
        <span class="meta-badge">Progresso global: ${unitProgress.known}/${unitProgress.total} flashcards (${unitProgress.pct}%)</span>
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${unitProgress.pct}%"></div>
        </div>
      `;
    }

    const totalPool = getAllQuizQuestions(unitId).length;
    if (totalPool > 0) {
      const examSection = document.createElement('section');
      examSection.className = 'exam-promo';
      examSection.innerHTML = `
        <a href="exame.html?unit=${unitId}" class="subunit-card exam-card" role="listitem">
          <div class="subunit-card-header">
            <span class="subunit-number exam-icon" aria-hidden="true">🎯</span>
            <h3>Exame Rotativo da Unidade</h3>
          </div>
          <p>${EXAM_GLOBAL_PER_SESSION} perguntas sorteadas de um banco de ${totalPool} — todas as subunidades desta unidade.</p>
          <div class="subunit-meta">
            <span class="meta-badge">🔄 Rotativo</span>
            <span class="meta-badge">📑 ${subunits.length} subunidades</span>
            <span class="meta-badge">❓ ${totalPool} no banco</span>
          </div>
        </a>
      `;
      grid.parentNode.insertBefore(examSection, grid);
    }
  }

  // ---- Página da subunidade ----

  function initSubunit(unitId, subId) {
    const sub = getSubunit(unitId, subId);
    const unit = getUnitById(unitId);

    if (!sub || !unit) {
      document.querySelector('.container').innerHTML =
        '<p class="hero-text">Subunidade não encontrada. <a href="../index.html">Voltar ao menu</a></p>';
      return;
    }

    document.title = `${sub.title} — StudyTrainer`;
    document.getElementById('subunit-title').textContent = `Subunidade ${sub.number}`;
    document.getElementById('subunit-subtitle').textContent = sub.title;

    const unitLabel = document.getElementById('subunit-unit');
    if (unitLabel) unitLabel.textContent = unit.title;

    const backLink = document.getElementById('subunit-back');
    if (backLink) backLink.href = `unidade.html?unit=${unitId}`;

    renderContent(sub);
    initTabs();
    initFlashcards(unitId, sub);
    initQuiz(sub);
  }

  function renderContent(sub) {
    const container = document.getElementById('content-blocks');
    container.innerHTML = '';

    if (sub.contentHtml) {
      if (sub.contentSections && sub.contentSections.length > 1) {
        const nav = document.createElement('nav');
        nav.className = 'content-subnav';
        nav.setAttribute('aria-label', 'Secções do conteúdo');
        sub.contentSections.forEach((section) => {
          const btn = document.createElement('button');
          btn.type = 'button';
          btn.className = 'content-subnav-btn';
          btn.textContent = section.label;
          btn.addEventListener('click', () => {
            const target = document.getElementById(section.id);
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          });
          nav.appendChild(btn);
        });
        container.appendChild(nav);
      }

      const wrapper = document.createElement('div');
      wrapper.className = 'rich-content';
      wrapper.innerHTML = sub.contentHtml;
      container.appendChild(wrapper);
      return;
    }

    if (sub.content) {
      sub.content.forEach((block) => {
        container.appendChild(renderContentBlock(block));
      });
    }
  }

  // ---- Tabs ----

  function initTabs() {
    const tabs = document.querySelectorAll('.tab');
    const panels = document.querySelectorAll('.tab-panel');

    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const target = tab.dataset.tab;

        tabs.forEach((t) => {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
        });
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');

        panels.forEach((panel) => {
          const isTarget =
            (target === 'conteudo' && panel.id === 'panel-conteudo') ||
            (target === 'flashcards' && panel.id === 'panel-flashcards') ||
            (target === 'quiz' && panel.id === 'panel-quiz');

          panel.classList.toggle('active', isTarget);
          panel.hidden = !isTarget;
        });
      });
    });
  }

  // ---- Flashcards ----

  function initFlashcards(unitId, sub) {
    const flashcard = document.getElementById('flashcard');
    const fcQuestion = document.getElementById('fc-question');
    const fcAnswer = document.getElementById('fc-answer');
    const fcProgressText = document.getElementById('fc-progress-text');
    const fcProgressFill = document.getElementById('fc-progress-fill');
    const btnPrev = document.getElementById('fc-prev');
    const btnNext = document.getElementById('fc-next');
    const btnKnow = document.getElementById('fc-know');
    const btnDontKnow = document.getElementById('fc-dont-know');
    const btnReset = document.getElementById('fc-reset');

    let progress = loadFcProgress(unitId, sub.id);
    let currentIndex = Math.min(progress.index, sub.flashcards.length - 1);
    if (currentIndex < 0) currentIndex = 0;

    function updateUI() {
      const total = sub.flashcards.length;
      const card = sub.flashcards[currentIndex];

      fcQuestion.textContent = card.question;
      fcAnswer.textContent = card.answer;
      flashcard.classList.remove('flipped', 'known', 'unknown');

      const knownCount = progress.known.length;
      fcProgressText.textContent = `${knownCount} / ${total} dominados · Cartão ${currentIndex + 1}/${total}`;
      fcProgressFill.style.width = total > 0 ? `${(knownCount / total) * 100}%` : '0%';

      btnPrev.disabled = currentIndex === 0;
      btnNext.disabled = currentIndex === total - 1;

      if (progress.known.includes(currentIndex)) {
        flashcard.classList.add('known');
      }
    }

    function flip() {
      flashcard.classList.toggle('flipped');
    }

    flashcard.addEventListener('click', flip);
    flashcard.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        flip();
      }
    });

    btnPrev.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        progress.index = currentIndex;
        saveFcProgress(unitId, sub.id, progress);
        updateUI();
      }
    });

    btnNext.addEventListener('click', () => {
      if (currentIndex < sub.flashcards.length - 1) {
        currentIndex++;
        progress.index = currentIndex;
        saveFcProgress(unitId, sub.id, progress);
        updateUI();
      }
    });

    btnKnow.addEventListener('click', () => {
      if (!progress.known.includes(currentIndex)) {
        progress.known.push(currentIndex);
      }
      progress.index = currentIndex;
      saveFcProgress(unitId, sub.id, progress);
      flashcard.classList.add('known');
      flashcard.classList.remove('unknown');

      if (currentIndex < sub.flashcards.length - 1) {
        setTimeout(() => {
          currentIndex++;
          progress.index = currentIndex;
          saveFcProgress(unitId, sub.id, progress);
          updateUI();
        }, 400);
      } else {
        updateUI();
      }
    });

    btnDontKnow.addEventListener('click', () => {
      progress.known = progress.known.filter((i) => i !== currentIndex);
      progress.index = currentIndex;
      saveFcProgress(unitId, sub.id, progress);
      flashcard.classList.add('unknown');
      flashcard.classList.remove('known');
      updateUI();
    });

    btnReset.addEventListener('click', () => {
      if (confirm('Repor todo o progresso dos flashcards desta subunidade?')) {
        progress = { known: [], index: 0 };
        currentIndex = 0;
        saveFcProgress(unitId, sub.id, progress);
        updateUI();
      }
    });

    updateUI();
  }

  // ---- Quiz ----

  function runQuizEngine(config) {
    const {
      pool,
      perSession,
      introTextEl,
      introEl,
      activeEl,
      resultsEl,
      btnStart,
      btnConfirm,
      btnNext,
      btnRetry,
      quizQuestion,
      quizOptions,
      quizCounter,
      quizProgressFill,
      quizScore,
      quizTotal,
      quizFeedback,
    } = config;

    const sessionSize = getQuizSessionSize(pool.length, perSession);
    introTextEl.textContent = formatQuizIntro(pool.length, sessionSize, config.contextLabel);

    let questions = [];
    let currentQ = 0;
    let score = 0;
    let selectedOption = -1;
    let answered = false;

    function showIntro() {
      introEl.hidden = false;
      activeEl.hidden = true;
      resultsEl.hidden = true;
    }

    function startQuiz() {
      questions = pickQuizQuestions(pool, perSession);
      currentQ = 0;
      score = 0;
      selectedOption = -1;
      answered = false;
      quizTotal.textContent = questions.length;

      introEl.hidden = true;
      activeEl.hidden = false;
      resultsEl.hidden = true;

      renderQuestion();
    }

    function renderQuestion() {
      const q = questions[currentQ];
      selectedOption = -1;
      answered = false;

      quizQuestion.textContent = q.question;
      quizCounter.textContent = `${currentQ + 1} / ${questions.length}`;
      quizProgressFill.style.width = `${(currentQ / questions.length) * 100}%`;

      quizOptions.innerHTML = '';
      q.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option';
        btn.type = 'button';
        btn.innerHTML = `<span class="option-letter">${QUIZ_OPTION_LETTERS[i]}</span><span>${opt}</span>`;
        btn.addEventListener('click', () => selectOption(i, btn));
        quizOptions.appendChild(btn);
      });

      btnConfirm.hidden = false;
      btnConfirm.disabled = true;
      btnNext.hidden = true;
    }

    function selectOption(index, btn) {
      if (answered) return;
      selectedOption = index;

      quizOptions.querySelectorAll('.quiz-option').forEach((o) => o.classList.remove('selected'));
      btn.classList.add('selected');
      btnConfirm.disabled = false;
    }

    function confirmAnswer() {
      if (selectedOption === -1 || answered) return;
      answered = true;

      const q = questions[currentQ];
      const options = quizOptions.querySelectorAll('.quiz-option');

      options.forEach((opt, i) => {
        opt.disabled = true;
        if (i === q.correct) opt.classList.add('correct');
        if (i === selectedOption && i !== q.correct) opt.classList.add('incorrect');
      });

      if (selectedOption === q.correct) score++;

      btnConfirm.hidden = true;
      btnNext.hidden = false;
    }

    function nextQuestion() {
      currentQ++;
      if (currentQ >= questions.length) {
        showResults();
      } else {
        renderQuestion();
      }
    }

    function showResults() {
      activeEl.hidden = true;
      resultsEl.hidden = false;
      quizProgressFill.style.width = '100%';
      quizScore.textContent = score;

      const pct = Math.round((score / questions.length) * 100);
      if (pct >= 90) {
        quizFeedback.textContent = 'Excelente! Dominas muito bem este tema. 🎉';
      } else if (pct >= 70) {
        quizFeedback.textContent = 'Bom trabalho! Revê os pontos onde falhaste. 👍';
      } else if (pct >= 50) {
        quizFeedback.textContent = 'Razoável. Recomendo rever o conteúdo e os flashcards. 📖';
      } else {
        quizFeedback.textContent = 'Precisas de mais estudo. Revê o conteúdo e tenta novamente. 💪';
      }
    }

    btnStart.addEventListener('click', startQuiz);
    btnConfirm.addEventListener('click', confirmAnswer);
    btnNext.addEventListener('click', nextQuestion);
    btnRetry.addEventListener('click', startQuiz);
  }

  function initQuiz(sub) {
    runQuizEngine({
      pool: sub.quiz,
      perSession: QUIZ_PER_SESSION,
      contextLabel: sub.title,
      introTextEl: document.getElementById('quiz-intro-text'),
      introEl: document.getElementById('quiz-intro'),
      activeEl: document.getElementById('quiz-active'),
      resultsEl: document.getElementById('quiz-results'),
      btnStart: document.getElementById('quiz-start'),
      btnConfirm: document.getElementById('quiz-confirm'),
      btnNext: document.getElementById('quiz-next'),
      btnRetry: document.getElementById('quiz-retry'),
      quizQuestion: document.getElementById('quiz-question'),
      quizOptions: document.getElementById('quiz-options'),
      quizCounter: document.getElementById('quiz-counter'),
      quizProgressFill: document.getElementById('quiz-progress-fill'),
      quizScore: document.getElementById('quiz-score'),
      quizTotal: document.getElementById('quiz-total'),
      quizFeedback: document.getElementById('quiz-feedback'),
    });
  }

  function initGlobalExam(scope, unitId) {
    let pool;
    let contextLabel;
    let backHref = '../index.html';

    if (scope === 'course') {
      pool = getAllQuizQuestions();
      contextLabel = 'todo o curso';
    } else if (unitId) {
      const unit = getUnitById(unitId);
      pool = getAllQuizQuestions(unitId);
      contextLabel = unit ? unit.title : 'esta unidade';
      backHref = `unidade.html?unit=${unitId}`;
    } else {
      pool = getAllQuizQuestions();
      contextLabel = 'todo o curso';
    }

    if (pool.length === 0) {
      document.querySelector('.container').innerHTML =
        `<p class="hero-text">Nenhuma pergunta disponível. <a href="${backHref}">Voltar</a></p>`;
      return;
    }

    const subtitle = document.getElementById('exam-subtitle');
    if (subtitle) subtitle.textContent = contextLabel;

    const backLink = document.getElementById('exam-back');
    if (backLink) backLink.href = backHref;

    const backLinkResults = document.getElementById('exam-back-link');
    if (backLinkResults) backLinkResults.href = backHref;

    runQuizEngine({
      pool,
      perSession: EXAM_GLOBAL_PER_SESSION,
      contextLabel,
      introTextEl: document.getElementById('quiz-intro-text'),
      introEl: document.getElementById('quiz-intro'),
      activeEl: document.getElementById('quiz-active'),
      resultsEl: document.getElementById('quiz-results'),
      btnStart: document.getElementById('quiz-start'),
      btnConfirm: document.getElementById('quiz-confirm'),
      btnNext: document.getElementById('quiz-next'),
      btnRetry: document.getElementById('quiz-retry'),
      quizQuestion: document.getElementById('quiz-question'),
      quizOptions: document.getElementById('quiz-options'),
      quizCounter: document.getElementById('quiz-counter'),
      quizProgressFill: document.getElementById('quiz-progress-fill'),
      quizScore: document.getElementById('quiz-score'),
      quizTotal: document.getElementById('quiz-total'),
      quizFeedback: document.getElementById('quiz-feedback'),
    });
  }

  // ---- Instalação PWA ----

  let deferredInstallPrompt = null;

  function initInstallPrompt() {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredInstallPrompt = e;
      showInstallButton();
    });

    const btn = document.getElementById('install-app');
    if (btn) {
      btn.addEventListener('click', async () => {
        if (!deferredInstallPrompt) return;
        deferredInstallPrompt.prompt();
        const { outcome } = await deferredInstallPrompt.userChoice;
        deferredInstallPrompt = null;
        if (outcome === 'accepted') btn.hidden = true;
      });
    }

    if (window.matchMedia('(display-mode: standalone)').matches) {
      const btn = document.getElementById('install-app');
      if (btn) btn.hidden = true;
    }
  }

  function showInstallButton() {
    const btn = document.getElementById('install-app');
    if (btn) btn.hidden = false;
  }

  // ---- Inicialização ----

  async function init() {
    initTheme();
    initInstallPrompt();

    const params = new URLSearchParams(window.location.search);

    try {
      if (document.getElementById('units-grid')) {
        initIndex();
      } else if (document.getElementById('unit-page')) {
        const unitId = params.get('unit');
        await ensureCourseLoaded();
        await ensureUnitLoaded(unitId);
        initUnit(unitId);
      } else if (document.getElementById('global-exam')) {
        const unitId = params.get('unit');
        const scope = params.get('scope');
        await ensureCourseLoaded();
        if (scope === 'course') {
          await ensureAllUnitsLoaded();
        } else if (unitId) {
          await ensureUnitLoaded(unitId);
        } else {
          await ensureAllUnitsLoaded();
        }
        initGlobalExam(scope, unitId);
      } else if (document.getElementById('subunit-title')) {
        const unitId = params.get('unit');
        const subId = params.get('id');
        await ensureCourseLoaded();
        await ensureUnitLoaded(unitId);
        initSubunit(unitId, subId);
      }
    } catch (err) {
      const container = document.querySelector('.container');
      if (container) {
        container.innerHTML = `<p class="hero-text">Erro ao carregar conteúdo: ${err.message}</p>`;
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
