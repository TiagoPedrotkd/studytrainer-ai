/**
 * Gerado automaticamente por scripts/import-unit.js
 * Fonte: d:/Treinador_Curso/Resumos/SubUnidade1_V1.html
 *
 * Para actualizar: edita o HTML fonte e corre «npm run import»
 * Para flashcards/quiz extra: adiciona em imports/units.json → extraFlashcards / extraQuiz
 */

window.STUDY_SUBUNITS = window.STUDY_SUBUNITS || [];
window.STUDY_SUBUNITS = window.STUDY_SUBUNITS.filter((s) => s.id !== 'sub1');

window.STUDY_SUBUNITS.push({
  id: 'sub1',
  number: 1,
  title: "Planeamento e Treino",
  description: "Prazos de planeamento, modelo de Bompa, desenvolvimento motor e fases LTAD.",
  contentHtml: `<p class="section-label">Bloco 1 — Planeamento e Treino</p>
  <div class="card">
    <div style="font-size:14px;font-weight:500;margin-bottom:.75rem">Prazos de planeamento</div>
    <div class="detail-row"><span class="detail-key">Longo prazo</span><span class="detail-val">8–10 anos (carreira do atleta)</span></div>
    <div class="detail-row"><span class="detail-key">Médio prazo</span><span class="detail-val">~4 anos (ciclo olímpico)</span></div>
    <div class="detail-row"><span class="detail-key">Curto prazo</span><span class="detail-val">~2 anos (Mundial / Europeu)</span></div>
    <div class="detail-row"><span class="detail-key">Anual</span><span class="detail-val">1 época</span></div>
  </div>
  <div class="alert-box"><strong>Relação-chave:</strong> Carga + Recuperação equilibradas → adaptação positiva. Carga &gt; Recuperação (repetida) → fadiga excessiva → <strong>overtraining</strong>.</div>
  <div class="two-col">
    <div class="col-card">
      <div class="badge badge-teal">4 componentes da unidade de treino</div>
      <div class="col-item"><strong style="font-weight:500">Objetivo</strong> — foco fisiológico, psicológico ou cognitivo</div>
      <div class="col-item"><strong style="font-weight:500">Conteúdo</strong> — tarefas gerais, específicas ou de competição</div>
      <div class="col-item"><strong style="font-weight:500">Métodos</strong> — princípios científicos do treino</div>
      <div class="col-item"><strong style="font-weight:500">Meios</strong> — recursos materiais, organizacionais e informativos</div>
    </div>
    <div class="col-card">
      <div class="badge badge-blue">Indicadores de controlo</div>
      <div class="col-item">Frequência cardíaca de repouso</div>
      <div class="col-item">Variabilidade da FC</div>
      <div class="col-item">Estado de humor</div>
      <div class="col-item">Questionários de monitorização</div>
    </div>
  </div>

  <p class="section-label">Bloco 2 — Fatores de Treino (Bompa)</p>
  <div class="two-col">
    <div class="col-card">
      <div class="badge badge-coral">Fatores Diretos</div>
      <h4 style="font-size:12px;color:var(--color-text-secondary);margin-bottom:.5rem">Atuam diretamente no treino</h4>
      <div class="col-item">Formação técnica/tática do treinador e atleta</div>
      <div class="col-item">Planeamento e avaliação</div>
      <div class="col-item">Calendário competitivo (base do planeamento)</div>
      <div class="col-item">Conhecimento científico e personalidade do treinador</div>
      <div class="col-item">Espaço e equipamento disponível</div>
    </div>
    <div class="col-card">
      <div class="badge badge-purple">Fatores de Apoio</div>
      <h4 style="font-size:12px;color:var(--color-text-secondary);margin-bottom:.5rem">Contexto à volta do atleta</h4>
      <div class="col-item">Estrutura administrativa e recursos económicos do clube</div>
      <div class="col-item">Estilo de vida: alimentação, recuperação e descanso</div>
    </div>
  </div>
  <div class="alert-box" style="border-left-color:#533AB7"><strong>Truque:</strong> Diretos = o que acontece no treino. Apoio = o que está à volta do atleta.</div>

  <p class="section-label">Bloco 3 — Desenvolvimento Motor e Maturação</p>
  <div class="card">
    <div class="detail-row"><span class="detail-key">Desenvolvimento motor</span><span class="detail-val">Alterações na capacidade motora ao longo de toda a vida</span></div>
    <div class="detail-row"><span class="detail-key">Controlo motor</span><span class="detail-val">Coordenação dos movimentos e graus de liberdade</span></div>
    <div class="detail-row"><span class="detail-key">Aprendizagem motora</span><span class="detail-val">Evolução de uma habilidade até à performance especializada</span></div>
  </div>
  <div class="newell-grid">
    <div class="newell-card">
      <div class="icon">🧍</div>
      <h4>Praticante</h4>
      <p>Características individuais físicas e psicológicas do atleta</p>
    </div>
    <div class="newell-card">
      <div class="icon">🏟️</div>
      <h4>Envolvimento</h4>
      <p>Contexto e ambiente de treino, local e valores</p>
    </div>
    <div class="newell-card">
      <div class="icon">🎯</div>
      <h4>Tarefa</h4>
      <p>Exercício proposto pelo treinador</p>
    </div>
  </div>
  <div style="margin-top:.75rem" class="card">
    <div style="font-size:13px;font-weight:500;margin-bottom:.5rem">Maturação — avaliação</div>
    <div style="font-size:13px;color:var(--color-text-secondary);line-height:1.7">Radiografia óssea do punho · Desenvolvimento sexual · Crescimento somático · Dentição<br><span style="color:var(--color-text-primary);font-weight:500">Atenção:</span> Idade cronológica ≠ idade biológica — podem divergir significativamente.</div>
  </div>
  <div class="alert-box" style="border-left-color:#EF9F27"><strong>Relative Age Effect (RAE):</strong> Atletas nascidos no início do ano têm vantagem maturacional dentro do mesmo escalão — podem ter quase 12 meses a mais de desenvolvimento físico. Pode levar à desistência de quem nasce no fim do ano.</div>
  <div class="phv-wrap">
    <div class="phv-card">
      <div class="badge badge-teal">Antes do PHV</div>
      <h4>Janela da Flexibilidade</h4>
      <p>Meninas ~12 anos / Rapazes ~14 anos. Período ideal para trabalhar amplitude de movimento.</p>
    </div>
    <div class="phv-card">
      <div class="badge badge-blue">Depois do PHV</div>
      <h4>Janela da Força e Aeróbia</h4>
      <p>Após o pico de crescimento abrem-se as janelas de força e capacidade aeróbia. Velocidade tem duas janelas: antes e depois.</p>
    </div>
  </div>

  <p class="section-label">Bloco 4 — Etapas LTAD (especialização tardia)</p>
  <table class="phase-table">
    <thead><tr><th>#</th><th>Fase</th><th>Rapazes</th><th>Meninas</th><th>Foco</th></tr></thead>
    <tbody>
      <tr><td class="phase-num">1</td><td><strong style="font-weight:500">Fase FUN</strong></td><td>6–9 anos</td><td>6–8 anos</td><td>Movimentos fundamentais, divertimento</td></tr>
      <tr><td class="phase-num">2</td><td><strong style="font-weight:500">Aprender a Treinar</strong></td><td>9–12 anos</td><td>8–11 anos</td><td>Habilidades motoras, coordenação</td></tr>
      <tr><td class="phase-num">3</td><td><strong style="font-weight:500">Treinar para Treinar</strong></td><td>12–16 anos</td><td>11–15 anos</td><td>Capacidade aeróbia e força</td></tr>
      <tr><td class="phase-num">4</td><td><strong style="font-weight:500">Treinar para Competir</strong></td><td>—</td><td>—</td><td>Otimização física, técnica e tática</td></tr>
      <tr><td class="phase-num">5</td><td><strong style="font-weight:500">Treinar para a Vitória</strong></td><td>≥ 18 anos</td><td>≥ 17 anos</td><td>Maximização do rendimento</td></tr>
      <tr><td class="phase-num">6</td><td><strong style="font-weight:500">Abandono</strong></td><td>—</td><td>—</td><td>Transição pós-competitiva</td></tr>
    </tbody>
  </table>
  <div class="mnem-box">🧠 <strong>Mnemónica:</strong> "Fico Atento, Treino, Treino, Triunfo, Acabo."<br>FUN → Aprender → Treinar p/ Treinar → Treinar p/ Competir → Treinar p/ Vitória → Abandono</div>
  <div class="alert-box"><strong>Regra geral:</strong> Meninas iniciam cada fase 1–2 anos mais cedo que os rapazes — alinhado com o PHV mais precoce.</div>`,
  flashcards: [
    {
      "question": "Quais os 4 prazos de planeamento, do maior para o menor?",
      "answer": "Longo prazo (8–10 anos) → Médio prazo (~4 anos, ciclo olímpico) → Curto prazo (~2 anos, Mundial/Europeu) → Anual (1 época)."
    },
    {
      "question": "O que acontece quando a carga supera consistentemente a recuperação?",
      "answer": "Surgem fadiga excessiva e overtraining — o atleta não se adapta positivamente e o rendimento cai."
    },
    {
      "question": "Quais as 4 componentes da unidade de treino?",
      "answer": "Objetivo (fisiológico, psicológico ou cognitivo), Conteúdo (tarefas gerais/específicas/competição), Métodos (princípios científicos) e Meios (recursos materiais e organizacionais)."
    },
    {
      "question": "Qual a diferença entre fatores diretos e fatores de apoio no modelo de Bompa?",
      "answer": "Diretos atuam diretamente no treino (treinador, planeamento, calendário, espaço). Apoio criam condições à volta do atleta (clube, alimentação, descanso)."
    },
    {
      "question": "Quais os 3 constrangimentos da aprendizagem segundo Newell?",
      "answer": "Praticante (características individuais), Envolvimento (contexto de treino e ambiente) e Tarefa (exercício proposto pelo treinador)."
    },
    {
      "question": "O que é o Relative Age Effect (RAE)?",
      "answer": "Atletas nascidos no início do ano têm vantagem maturacional dentro do mesmo escalão — podem ter quase 12 meses a mais de desenvolvimento físico. Pode levar à desistência de quem nasce no fim do ano."
    },
    {
      "question": "O que é o PHV e quando ocorre em cada sexo?",
      "answer": "Peak Height Velocity — momento de maior velocidade de crescimento em altura. Ocorre ~12 anos nas meninas e ~14 anos nos rapazes."
    },
    {
      "question": "O que se deve desenvolver antes e depois do PHV?",
      "answer": "Antes do PHV: janela ideal para a flexibilidade. Depois do PHV: abrem-se as janelas para força e capacidade aeróbia. A velocidade tem dois momentos: antes e depois do PHV."
    },
    {
      "question": "Quais as 6 fases do LTAD para modalidades de especialização tardia?",
      "answer": "1. Fase FUN, 2. Aprender a Treinar, 3. Treinar para Treinar, 4. Treinar para Competir, 5. Treinar para a Vitória, 6. Abandono da carreira."
    },
    {
      "question": "A partir de que idade entram os rapazes na fase 'Treinar para a Vitória'?",
      "answer": "A partir dos 18 anos (meninas a partir dos 17 anos)."
    },
    {
      "question": "Na fase 'Aprender a Treinar', qual é o foco principal?",
      "answer": "Desenvolvimento de habilidades motoras especializadas e janela de coordenação motora. Rapazes: 9–12 anos; meninas: 8–11 anos."
    },
    {
      "question": "Como se avalia a maturação biológica de um atleta?",
      "answer": "Por 4 métodos: radiografia óssea do punho, desenvolvimento sexual (puberdade), crescimento somático (altura/peso) e dentição."
    },
    {
      "question": "Qual é a relação entre carga, recuperação e adaptação?",
      "answer": "Carga + Recuperação equilibradas → adaptação positiva. Se a carga supera consistentemente a recuperação → fadiga excessiva e overtraining, com queda de rendimento."
    },
    {
      "question": "O que é a fase «Treinar para Competir» no LTAD?",
      "answer": "Fase de otimização física, técnica e tática. Preparação específica para competição de alto nível, sem idades fixas — depende do desenvolvimento do atleta."
    },
    {
      "question": "O que incluem os «Meios» na unidade de treino?",
      "answer": "Recursos materiais (equipamento, espaço), organizacionais (estrutura de treino) e informativos (vídeo, dados, feedback)."
    },
    {
      "question": "Porque é o calendário competitivo um factor directo de Bompa?",
      "answer": "Porque é a base do planeamento — define os macrociclos, picos de forma e distribuição de carga ao longo da época."
    },
    {
      "question": "O que é o desenvolvimento motor?",
      "answer": "Alterações na capacidade motora ao longo de toda a vida, desde a infância até à idade adulta e terceira idade."
    },
    {
      "question": "Qual é o foco da fase «Treinar para Treinar»?",
      "answer": "Capacidade aeróbia de base e força. Rapazes: 12–16 anos; meninas: 11–15 anos."
    }
  ],
  quiz: [
    {
      "question": "Qual é a duração de um planeamento de médio prazo?",
      "options": [
        "2 anos",
        "4 anos",
        "8 anos",
        "1 época"
      ],
      "correct": 1
    },
    {
      "question": "Quais os 4 indicadores de controlo e avaliação do atleta?",
      "options": [
        "Peso, altura, VO₂ máx, força",
        "FC repouso, variabilidade da FC, humor, questionários",
        "Lactato, FC, potência, velocidade",
        "Tensão arterial, sono, nutrição, treino"
      ],
      "correct": 1
    },
    {
      "question": "No modelo de Bompa, o calendário competitivo é um fator:",
      "options": [
        "De apoio",
        "Direto",
        "Indireto",
        "Externo"
      ],
      "correct": 1
    },
    {
      "question": "Os 3 constrangimentos de Newell são:",
      "options": [
        "Treinador, atleta, envolvimento",
        "Praticante, envolvimento, tarefa",
        "Tarefa, objetivo, método",
        "Físico, psicológico, técnico"
      ],
      "correct": 1
    },
    {
      "question": "O Relative Age Effect refere-se a:",
      "options": [
        "Atletas que treinam desde mais novos terem vantagem",
        "Atletas nascidos no início do ano terem vantagem maturacional no mesmo escalão",
        "Atletas mais velhos serem sempre melhores",
        "O efeito do envelhecimento no rendimento"
      ],
      "correct": 1
    },
    {
      "question": "Antes do PHV, qual capacidade física tem janela de oportunidade privilegiada?",
      "options": [
        "Força máxima",
        "Capacidade aeróbia",
        "Flexibilidade",
        "Velocidade de reação"
      ],
      "correct": 2
    },
    {
      "question": "Na fase 'Treinar para Treinar', qual é o foco principal?",
      "options": [
        "Divertimento e exploração",
        "Habilidades motoras especializadas",
        "Capacidade aeróbia de base e força",
        "Otimização técnica e tática"
      ],
      "correct": 2
    },
    {
      "question": "A fase FUN corresponde a que idades nos rapazes?",
      "options": [
        "4–6 anos",
        "6–9 anos",
        "9–12 anos",
        "12–16 anos"
      ],
      "correct": 1
    },
    {
      "question": "Qual método NÃO é usado para avaliar a maturação biológica?",
      "options": [
        "Radiografia óssea do punho",
        "Teste de VO₂ máximo",
        "Desenvolvimento sexual",
        "Crescimento somático"
      ],
      "correct": 1
    },
    {
      "question": "As meninas iniciam cada fase do LTAD em comparação aos rapazes:",
      "options": [
        "Ao mesmo tempo",
        "1–2 anos depois",
        "1–2 anos antes",
        "3–4 anos antes"
      ],
      "correct": 2
    },
    {
      "question": "Qual é o prazo de planeamento de longo prazo?",
      "options": [
        "2 anos",
        "4 anos",
        "8–10 anos",
        "1 época"
      ],
      "correct": 2
    },
    {
      "question": "O equilíbrio entre carga e recuperação promove:",
      "options": [
        "Fadiga crónica",
        "Adaptação positiva",
        "Lesão imediata",
        "Overtraining"
      ],
      "correct": 1
    },
    {
      "question": "A mnemónica «Fico Atento, Treino, Treino, Triunfo, Acabo» ajuda a memorizar:",
      "options": [
        "Sistemas energéticos",
        "Fases do LTAD",
        "Zonas de treino",
        "Tipos de fibras"
      ],
      "correct": 1
    },
    {
      "question": "Na fase FUN, qual é o foco principal?",
      "options": [
        "Rendimento máximo",
        "Movimentos fundamentais e divertimento",
        "Força máxima",
        "Especialização táctica"
      ],
      "correct": 1
    },
    {
      "question": "O que significa «controlo motor»?",
      "options": [
        "Evolução de uma habilidade especializada",
        "Coordenação dos movimentos e graus de liberdade",
        "Alterações na capacidade motora ao longo da vida",
        "Avaliação da maturação biológica"
      ],
      "correct": 1
    }
  ],
});
