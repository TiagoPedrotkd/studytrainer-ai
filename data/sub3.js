/**
 * Gerado automaticamente por scripts/import-unit.js
 * Fonte: d:/Treinador_Curso/Resumos/SubUnidade2_V1.html
 *
 * Para actualizar: edita o HTML fonte e corre «npm run import»
 * Para flashcards/quiz extra: adiciona em imports/units.json → extraFlashcards / extraQuiz
 */

window.STUDY_SUBUNITS = window.STUDY_SUBUNITS || [];
window.STUDY_SUBUNITS = window.STUDY_SUBUNITS.filter((s) => s.id !== 'sub3');

window.STUDY_SUBUNITS.push({
  id: 'sub3',
  number: 3,
  title: "Princípios Biológicos do Treino",
  description: "Sobrecarga, especificidade, reversibilidade, heterocronia e supercompensação.",
  contentHtml: `<p class="section-label">Introdução — Objectivo do treino</p>
  <div class="card">
    <div style="font-size:13px;color:var(--color-text-secondary);line-height:1.7;margin-bottom:.75rem">O objectivo do treino é permitir que o atleta se <strong>adapte às cargas</strong> de treino e competição. Cria-se um conjunto variável de situações condicionadas pelos <strong>princípios biológicos e metodológicos</strong>, provocando alterações nos planos <strong>morfológico, fisiológico, técnico, táctico e psicológico</strong>.</div>
    <div class="alert-box" style="margin:0">Há <strong>perturbação da homeostasia</strong> com intuito de alcançar um nível qualitativo superior → <strong>adaptação</strong>. A sobrecarga não significa treinar sempre «mais e mais forte» — pode esgotar a capacidade do organismo de responder ao estímulo (Bompa &amp; Buzzichelli, 2019).</div>
  </div>

  <p class="section-label">Princípio da Sobrecarga</p>
  <div class="card">
    <div style="font-size:14px;font-weight:500;margin-bottom:.75rem">Sequência do estímulo de treino</div>
    <div class="step"><div class="step-num">1</div><div class="step-text"><strong>Carga</strong> — aplicação do estímulo de treino</div></div>
    <div class="step"><div class="step-num">2</div><div class="step-text"><strong>Fadiga</strong> — reservas de energia reduzidas, acumulação de metabolitos, dano muscular; perturbação da homeostasia</div></div>
    <div class="step"><div class="step-num">3</div><div class="step-text"><strong>Recuperação</strong> — reabastecimento energético, remoção de metabolitos, reparação do micro-dano tecidual</div></div>
    <div class="step"><div class="step-num">4</div><div class="step-text"><strong>Supercompensação</strong> — homeostasia ligeiramente superior (mais glicogénio, mais músculo, melhor transporte de O₂); adaptações físicas, metabólicas e neuropsicológicas</div></div>
  </div>
  <div class="alert-box" style="border-left-color:#E24B4A"><strong>Atenção ao timing da carga:</strong> demasiado cedo → fadiga acumulada. Demasiado tarde → perda de benefícios. Estímulos <strong>muito espaçados</strong> tornam-se ineficazes (regressão); <strong>muito próximos</strong> instalam fadiga sem supercompensação.</div>
  <div class="param-grid">
    <div class="param-card"><div class="icon">📦</div><h4>Volume</h4><p>Séries, repetições, distância, tempo total de treino</p></div>
    <div class="param-card"><div class="icon">⚡</div><h4>Intensidade</h4><p>Velocidade, carga, frequência cardíaca</p></div>
    <div class="param-card"><div class="icon">⏱️</div><h4>Densidade</h4><p>Tempo de descanso entre exercícios e séries</p></div>
  </div>

  <p class="section-label">Princípio da Especificidade</p>
  <div class="alert-box"><strong>Regra de ouro:</strong> a mudança estrutural e funcional muscular é determinada pela natureza do estímulo. Quanto mais o treino se assemelhar à competição, maior a <strong>transferência</strong> para o rendimento real.</div>
  <div class="card" style="margin-bottom:.75rem">
    <div style="font-size:13px;font-weight:500;margin-bottom:.5rem">Transferência do treino</div>
    <div style="font-size:13px;color:var(--color-text-secondary);line-height:1.6">Grau de adaptação ao desempenho resultante de um exercício. Inclui associações <strong>cinéticas e cinemáticas</strong>: padrões de movimento, pico de força, taxa de produção de força, aceleração e velocidade. Tarefas específicas induzem adaptações neuromusculares e metabólicas → melhor economia motora.</div>
  </div>
  <div class="two-col">
    <div class="col-card">
      <div class="badge badge-blue">Dimensão Mecânica</div>
      <div class="col-item">Padrões de movimento e técnica</div>
      <div class="col-item">Músculos e articulações envolvidos</div>
      <div class="col-item">Velocidade de execução</div>
      <div class="col-item">Recrutamento de unidades motoras específicas</div>
    </div>
    <div class="col-card">
      <div class="badge badge-amber">Dimensão Bioenergética</div>
      <div class="col-item">Sistema energético predominante da modalidade</div>
      <div class="col-item">Ex: desporto anaeróbio → treino anaeróbio</div>
      <div class="col-item">Objetivo: atrasar a fadiga competitiva</div>
      <div class="col-item">Cada posição em campo pode ter exigências distintas</div>
    </div>
  </div>
  <div class="card">
    <div style="font-size:13px;font-weight:500;margin-bottom:.5rem">Ao planear, considerar sempre:</div>
    <div class="detail-row"><span class="detail-key">Movimentos</span><span class="detail-val">Replicar os gestos da competição</span></div>
    <div class="detail-row"><span class="detail-key">Músculos / articulações</span><span class="detail-val">Trabalhar os grupos musculares do desporto</span></div>
    <div class="detail-row"><span class="detail-key">Sistema energético</span><span class="detail-val">Treinar o sistema mais solicitado na prova</span></div>
    <div class="detail-row"><span class="detail-key">Velocidade do movimento</span><span class="detail-val">Determina quais unidades motoras são recrutadas</span></div>
  </div>

  <p class="section-label">Princípio da Reversibilidade</p>
  <div class="card">
    <div style="font-size:13px;line-height:1.6;margin-bottom:.75rem">Eliminação do estímulo → perda de adaptações (<strong>destreino</strong>). O corpo regredir pela <strong>plasticidade</strong> — atrofia muscular e queda de desempenho. 8 semanas de destreino: perda de <strong>4 a 20%</strong> das adaptações.</div>
    <div class="two-col" style="margin-bottom:0">
      <div>
        <div style="font-size:12px;font-weight:500;color:var(--color-text-secondary);margin-bottom:.4rem">Causas de destreino</div>
        <div class="col-item">Lesão</div>
        <div class="col-item">Férias</div>
        <div class="col-item">Doença</div>
        <div class="col-item">Abandono da prática</div>
      </div>
      <div>
        <div style="font-size:12px;font-weight:500;color:var(--color-text-secondary);margin-bottom:.4rem">Como minimizar</div>
        <div class="col-item">Plano de manutenção em períodos de pausa</div>
        <div class="col-item">Em lesão: treinar os segmentos não afetados</div>
        <div class="col-item">Preferir recuperação ativa à paragem total</div>
        <div class="col-item">Assegurar continuidade dos fatores de rendimento</div>
      </div>
    </div>
  </div>
  <div class="alert-box" style="border-left-color:#EF9F27"><strong>Castelo (1996):</strong> Grande volume + baixa intensidade = efeito mais prolongado. Grande intensidade + baixo volume = efeito mais breve. Adaptações obtidas mais lentamente mantêm-se mais tempo. Perdem-se primeiro as mais recentes e menos consolidadas.</div>
  <div class="card">
    <div style="font-size:13px;font-weight:500;margin-bottom:.5rem">Como evitar a reversibilidade (PP_01)</div>
    <div class="col-item">Evitar interrupções totais do treino sempre que possível</div>
    <div class="col-item">Assegurar continuidade no desenvolvimento de todos os factores de rendimento</div>
    <div class="col-item">Em lesão: evitar paragens completas — treinar segmentos não afectados</div>
    <div class="col-item">Ajustar fases de recuperação para minimizar restrições ao treino</div>
  </div>

  <p class="section-label">Princípio da Heterocronia</p>
  <div class="hetero-wrap">
    <div class="hetero-card">
      <div class="badge badge-teal">Baixa intensidade</div>
      <h4>Efeito lento mas duradouro</h4>
      <p>O efeito de treino surge mais tarde, mas demora mais tempo a desaparecer após interrupção.</p>
    </div>
    <div class="hetero-card">
      <div class="badge badge-coral">Alta intensidade</div>
      <h4>Efeito rápido mas fugaz</h4>
      <p>O efeito surge mais depressa, mas também desaparece mais rapidamente após interrupção.</p>
    </div>
  </div>
  <div class="alert-box"><strong>Em resumo:</strong> Heterocronia = tempo entre aplicar a carga e sentir a adaptação. Complementa a reversibilidade — intensidade determina tanto a velocidade de ganho como a velocidade de perda das adaptações.</div>

  <p class="section-label">Princípios Biológicos vs. Metodológicos</p>
  <div class="princip-grid">
    <div class="princip-card">
      <div class="badge badge-teal">Biológicos</div>
      <h4>Resposta fisiológica</h4>
      <p>Sobrecarga · Especificidade · Reversibilidade · Heterocronia — centrados em como o organismo responde à carga.</p>
    </div>
    <div class="princip-card">
      <div class="badge badge-purple">Metodológicos</div>
      <h4>Organização do treino</h4>
      <p>Focados na estrutura e organização do processo de treino para otimizar a adaptação.</p>
    </div>
  </div>

</div>

<!-- FLASHCARDS -->`,
  flashcards: [
    {
      "question": "Qual é a sequência completa do princípio da sobrecarga?",
      "answer": "1. Carga (estímulo) → 2. Fadiga (perturbação da homeostasia) → 3. Recuperação (reparação e reabastecimento) → 4. Supercompensação (nível superior ao anterior). A nova carga deve ser aplicada no pico da supercompensação."
    },
    {
      "question": "O que acontece se a carga for aplicada antes da recuperação completa?",
      "answer": "Fadiga acumulada e declínio contínuo da performance — o organismo não tem tempo de supercompensar. É a principal causa de overtraining."
    },
    {
      "question": "Quais os 3 parâmetros de gestão da carga no princípio da sobrecarga?",
      "answer": "Volume (séries, repetições, distância, tempo), Intensidade (velocidade, carga, FC) e Densidade (tempo de descanso entre exercícios)."
    },
    {
      "question": "O que define o princípio da especificidade?",
      "answer": "O treino deve replicar as exigências reais da competição. Quanto mais semelhante o treino à competição, maior a transferência. Inclui dimensão mecânica (movimentos, músculos, velocidade) e bioenergética (sistema energético predominante)."
    },
    {
      "question": "Quais as duas dimensões da especificidade?",
      "answer": "Dimensão mecânica: padrões de movimento, técnica, músculos/articulações envolvidos, velocidade. Dimensão bioenergética: treinar o sistema energético mais solicitado na modalidade."
    },
    {
      "question": "Que 4 aspetos considerar ao planear segundo a especificidade?",
      "answer": "Movimentos (replicar gestos da competição), músculos/articulações envolvidos, sistema energético solicitado e velocidade do movimento (que determina quais unidades motoras são recrutadas)."
    },
    {
      "question": "O que é o destreino e qual é a sua magnitude em 8 semanas?",
      "answer": "Destreino é a perda de adaptações ao treino quando o estímulo é eliminado. Em 8 semanas de paragem total, podem perder-se 4 a 20% das adaptações conquistadas."
    },
    {
      "question": "Segundo Castelo (1996), quais adaptações se perdem primeiro?",
      "answer": "As mais recentes e menos consolidadas. Cargas de alta intensidade e baixo volume perdem-se primeiro. Cargas de grande volume e baixa intensidade têm efeitos mais duradouros."
    },
    {
      "question": "Como minimizar os efeitos da reversibilidade durante uma lesão?",
      "answer": "Treinar os segmentos não afetados pela lesão, manter recuperação ativa em vez de paragem total, e assegurar um plano de manutenção para não perder as adaptações já conquistadas."
    },
    {
      "question": "O que define o princípio da heterocronia?",
      "answer": "É o intervalo de tempo entre a aplicação da carga (agressão) e o aparecimento da adaptação. As adaptações não são imediatas — dependem da intensidade e volume do exercício."
    },
    {
      "question": "Como a intensidade afeta a heterocronia?",
      "answer": "Alta intensidade: efeito surge rapidamente mas desaparece depressa. Baixa intensidade: efeito surge mais tarde mas mantém-se por mais tempo. Complementa o princípio da reversibilidade."
    },
    {
      "question": "Qual a diferença entre princípios biológicos e metodológicos?",
      "answer": "Biológicos (sobrecarga, especificidade, reversibilidade, heterocronia): focados na resposta fisiológica do organismo à carga. Metodológicos: focados na organização e estrutura do processo de treino."
    },
    {
      "question": "Qual é o objectivo fundamental do treino?",
      "answer": "Permitir adaptação às cargas de treino e competição, com perturbação controlada da homeostasia nos planos morfológico, fisiológico, técnico, táctico e psicológico."
    },
    {
      "question": "O que acontece durante a fase de fadiga na sobrecarga?",
      "answer": "Redução das reservas de energia, acumulação de metabolitos e dano muscular — perturbação da homeostasia."
    },
    {
      "question": "O que caracteriza a supercompensação além do glicogénio?",
      "answer": "Mais músculo, melhor transporte de oxigénio e adaptações físicas, metabólicas e neuropsicológicas — nível de homeostasia superior ao anterior."
    }
  ],
  quiz: [
    {
      "question": "Qual é o momento ideal para aplicar uma nova carga de treino?",
      "options": [
        "Logo após a fadiga",
        "Durante a recuperação",
        "No pico da supercompensação",
        "Antes do início da fadiga"
      ],
      "correct": 2
    },
    {
      "question": "O que representa a 'densidade' no princípio da sobrecarga?",
      "options": [
        "A quantidade de repetições",
        "A velocidade de execução",
        "O tempo de descanso entre exercícios",
        "O número de sessões por semana"
      ],
      "correct": 2
    },
    {
      "question": "Um nadador que treina sprints de 50m pretende melhorar para competição de 50m. Qual princípio está a aplicar?",
      "options": [
        "Sobrecarga",
        "Reversibilidade",
        "Especificidade",
        "Heterocronia"
      ],
      "correct": 2
    },
    {
      "question": "Segundo Castelo (1996), que tipo de carga tem efeitos mais duradouros?",
      "options": [
        "Alta intensidade e baixo volume",
        "Baixa intensidade e grande volume",
        "Intensidade e volume equilibrados",
        "Alta intensidade e alto volume"
      ],
      "correct": 1
    },
    {
      "question": "8 semanas de destreino causam uma perda de adaptações de:",
      "options": [
        "1 a 5%",
        "4 a 20%",
        "20 a 40%",
        "Mais de 50%"
      ],
      "correct": 1
    },
    {
      "question": "No princípio da heterocronia, um exercício de alta intensidade:",
      "options": [
        "Tem efeito lento mas duradouro",
        "Tem efeito rápido mas que desaparece depressa",
        "Não tem efeito de treino",
        "Tem o mesmo efeito que um de baixa intensidade"
      ],
      "correct": 1
    },
    {
      "question": "Qual NÃO é uma causa de destreino?",
      "options": [
        "Lesão",
        "Férias",
        "Aumento do volume de treino",
        "Abandono da prática"
      ],
      "correct": 2
    },
    {
      "question": "A dimensão bioenergética da especificidade refere-se a:",
      "options": [
        "Padrões de movimento e técnica",
        "O sistema energético predominante na modalidade",
        "A velocidade de execução dos exercícios",
        "Os músculos e articulações envolvidos"
      ],
      "correct": 1
    },
    {
      "question": "O que complementa o princípio da reversibilidade na relação volume/intensidade vs. duração do efeito?",
      "options": [
        "Princípio da sobrecarga",
        "Princípio da especificidade",
        "Princípio da heterocronia",
        "Princípios metodológicos"
      ],
      "correct": 2
    },
    {
      "question": "Os princípios biológicos do treino incluem:",
      "options": [
        "Sobrecarga, especificidade, reversibilidade e heterocronia",
        "Planeamento, avaliação, calendário e meios",
        "Volume, intensidade, densidade e recuperação",
        "Fatores diretos e fatores de apoio"
      ],
      "correct": 0
    },
    {
      "question": "Estímulos de treino aplicados com intervalo excessivo entre sessões:",
      "options": [
        "Causam overtraining imediato",
        "Tornam-se ineficazes e podem causar regressão",
        "Aumentam sempre a supercompensação",
        "Eliminam a heterocronia"
      ],
      "correct": 1
    },
    {
      "question": "A transferência do treino está relacionada com:",
      "options": [
        "Apenas o volume semanal",
        "Grau de semelhança entre exercício e competição",
        "O número de competições por época",
        "A idade cronológica do atleta"
      ],
      "correct": 1
    }
  ],
});
