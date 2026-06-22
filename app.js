/**
 * StudyTrainer — Lógica central
 * Navegação, flashcards, quiz, tema e progresso (localStorage)
 */

(function () {
  'use strict';

  const STORAGE_THEME = 'studytrainer-theme';
  const STORAGE_FC_PREFIX = 'studytrainer-fc-';

  // ---- Tema (modo escuro / claro) ----

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

  // ---- Utilitários ----

  function getSubunits() {
    return (window.STUDY_SUBUNITS || []).sort((a, b) => a.number - b.number);
  }

  function getSubunitById(id) {
    return getSubunits().find((s) => s.id === id);
  }

  function getFcStorageKey(subunitId) {
    return STORAGE_FC_PREFIX + subunitId;
  }

  function loadFcProgress(subunitId) {
    try {
      const data = localStorage.getItem(getFcStorageKey(subunitId));
      return data ? JSON.parse(data) : { known: [], index: 0 };
    } catch {
      return { known: [], index: 0 };
    }
  }

  function saveFcProgress(subunitId, progress) {
    localStorage.setItem(getFcStorageKey(subunitId), JSON.stringify(progress));
  }

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

  function initIndex() {
    const grid = document.getElementById('subunits-grid');
    if (!grid) return;

    const subunits = getSubunits();

    if (subunits.length === 0) {
      grid.innerHTML = '<p class="hero-text">Nenhuma subunidade disponível.</p>';
      return;
    }

    subunits.forEach((sub) => {
      const progress = loadFcProgress(sub.id);
      const total = sub.flashcards.length;
      const known = progress.known.length;
      const pct = total > 0 ? Math.round((known / total) * 100) : 0;

      const blockCount = sub.content?.length
        || (sub.contentHtml ? (sub.contentHtml.match(/class="section-label"/g) || []).length : 0);

      const card = document.createElement('a');
      card.className = 'subunit-card';
      card.href = `pages/subunidade.html?id=${sub.id}`;
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
          <span class="meta-badge">❓ ${sub.quiz.length} perguntas</span>
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
  }

  // ---- Página da subunidade ----

  function initSubunit() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const sub = getSubunitById(id);

    if (!sub) {
      document.querySelector('.container').innerHTML =
        '<p class="hero-text">Subunidade não encontrada. <a href="../index.html">Voltar ao menu</a></p>';
      return;
    }

    document.title = `${sub.title} — StudyTrainer`;
    document.getElementById('subunit-title').textContent = `Subunidade ${sub.number}`;
    document.getElementById('subunit-subtitle').textContent = sub.title;

    renderContent(sub);
    initTabs();
    initFlashcards(sub);
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

  function initFlashcards(sub) {
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

    let progress = loadFcProgress(sub.id);
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
        saveFcProgress(sub.id, progress);
        updateUI();
      }
    });

    btnNext.addEventListener('click', () => {
      if (currentIndex < sub.flashcards.length - 1) {
        currentIndex++;
        progress.index = currentIndex;
        saveFcProgress(sub.id, progress);
        updateUI();
      }
    });

    btnKnow.addEventListener('click', () => {
      if (!progress.known.includes(currentIndex)) {
        progress.known.push(currentIndex);
      }
      progress.index = currentIndex;
      saveFcProgress(sub.id, progress);
      flashcard.classList.add('known');
      flashcard.classList.remove('unknown');

      if (currentIndex < sub.flashcards.length - 1) {
        setTimeout(() => {
          currentIndex++;
          progress.index = currentIndex;
          saveFcProgress(sub.id, progress);
          updateUI();
        }, 400);
      } else {
        updateUI();
      }
    });

    btnDontKnow.addEventListener('click', () => {
      progress.known = progress.known.filter((i) => i !== currentIndex);
      progress.index = currentIndex;
      saveFcProgress(sub.id, progress);
      flashcard.classList.add('unknown');
      flashcard.classList.remove('known');
      updateUI();
    });

    btnReset.addEventListener('click', () => {
      if (confirm('Repor todo o progresso dos flashcards desta subunidade?')) {
        progress = { known: [], index: 0 };
        currentIndex = 0;
        saveFcProgress(sub.id, progress);
        updateUI();
      }
    });

    updateUI();
  }

  // ---- Quiz ----

  function initQuiz(sub) {
    const intro = document.getElementById('quiz-intro');
    const active = document.getElementById('quiz-active');
    const results = document.getElementById('quiz-results');
    const btnStart = document.getElementById('quiz-start');
    const btnConfirm = document.getElementById('quiz-confirm');
    const btnNext = document.getElementById('quiz-next');
    const btnRetry = document.getElementById('quiz-retry');
    const quizQuestion = document.getElementById('quiz-question');
    const quizOptions = document.getElementById('quiz-options');
    const quizCounter = document.getElementById('quiz-counter');
    const quizProgressFill = document.getElementById('quiz-progress-fill');
    const quizScore = document.getElementById('quiz-score');
    const quizTotal = document.getElementById('quiz-total');
    const quizFeedback = document.getElementById('quiz-feedback');

    document.getElementById('quiz-intro-text').textContent =
      `Testa os teus conhecimentos com ${sub.quiz.length} perguntas de escolha múltipla sobre ${sub.title}.`;

    let questions = [];
    let currentQ = 0;
    let score = 0;
    let selectedOption = -1;
    let answered = false;

    const letters = ['A', 'B', 'C', 'D'];

    function shuffle(array) {
      const arr = [...array];
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    }

    function showIntro() {
      intro.hidden = false;
      active.hidden = true;
      results.hidden = true;
    }

    function startQuiz() {
      questions = shuffle(sub.quiz);
      currentQ = 0;
      score = 0;
      selectedOption = -1;
      answered = false;
      quizTotal.textContent = questions.length;

      intro.hidden = true;
      active.hidden = false;
      results.hidden = true;

      renderQuestion();
    }

    function renderQuestion() {
      const q = questions[currentQ];
      selectedOption = -1;
      answered = false;

      quizQuestion.textContent = q.question;
      quizCounter.textContent = `${currentQ + 1} / ${questions.length}`;
      quizProgressFill.style.width = `${((currentQ) / questions.length) * 100}%`;

      quizOptions.innerHTML = '';
      q.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option';
        btn.type = 'button';
        btn.innerHTML = `<span class="option-letter">${letters[i]}</span><span>${opt}</span>`;
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
      active.hidden = true;
      results.hidden = false;
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

  function init() {
    initTheme();
    initInstallPrompt();

    if (document.getElementById('subunits-grid')) {
      initIndex();
    } else if (document.getElementById('subunit-title')) {
      initSubunit();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
