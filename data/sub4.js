/**
 * Gerado automaticamente por scripts/import-unit.js
 * Fonte: d:/Treinador_Curso/Resumos/SubUnidade2_V2.html
 *
 * Para actualizar: edita o HTML fonte e corre «npm run import»
 * Para flashcards/quiz extra: adiciona em imports/units.json → extraFlashcards / extraQuiz
 */

window.STUDY_SUBUNITS = window.STUDY_SUBUNITS || [];
window.STUDY_SUBUNITS = window.STUDY_SUBUNITS.filter((s) => s.id !== 'sub4');

window.STUDY_SUBUNITS.push({
  id: 'sub4',
  number: 4,
  title: "Princípios Metodológicos do Treino",
  description: "Progressão, individualização, multilateralidade, especialização e literacia física.",
  contentHtml: `<p class="section-label">Progressão, Continuidade e Ciclicidade</p>
  <div class="card">
    <div style="font-size:14px;font-weight:500;margin-bottom:.5rem">Ideia central</div>
    <div style="font-size:13px;color:var(--color-text-secondary);line-height:1.6">As adaptações exigem progressão contínua — o ponto de partida de cada sessão deve ser ligeiramente superior ao anterior. O mesmo esforço repetido deixa de provocar adaptação quando o organismo se habitua.</div>
  </div>
  <div class="alert-box" style="border-left-color:#EF9F27"><strong>Timing do estímulo:</strong> Muito cedo → fadiga excessiva e lesão. Muito tarde → reversibilidade e regressão. O novo estímulo deve ser aplicado no <strong>pico da supercompensação</strong>.</div>

  <div style="font-size:13px;font-weight:500;margin:.75rem 0 .5rem">Sequência de progressão da carga (Navarro)</div>
  <div class="steps-horiz">
    <div class="step-h"><span class="num">1</span><div class="lbl">Frequência</div><div class="ex">2x → 3x/sem</div></div>
    <div class="step-h"><span class="num">2</span><div class="lbl">Volume</div><div class="ex">40 → 120 min</div></div>
    <div class="step-h"><span class="num">3</span><div class="lbl">Densidade</div><div class="ex">Intervalos mais curtos</div></div>
    <div class="step-h"><span class="num">4</span><div class="lbl">Intensidade</div><div class="ex">Última a aumentar</div></div>
  </div>
  <div class="alert-box"><strong>Regra:</strong> Quanto maior o aumento repentino da carga, maior o período de adaptação necessário — e maior o risco de lesão. A progressão deve ser sempre gradual.</div>

  <p class="section-label">Princípio da Individualização</p>
  <div class="card">
    <div style="font-size:13px;line-height:1.6;margin-bottom:.75rem">A mesma carga pode produzir respostas muito diferentes dentro da mesma equipa. O treinador deve considerar as características de cada atleta — mesmo em desportos coletivos, ajustar na medida do possível.</div>
    <div class="detail-row"><span class="detail-key">Non-responders</span><span class="detail-val" style="font-size:12px;text-align:right">Atletas com resposta nula ou reduzida — pode indicar método inadequado, não incapacidade</span></div>
    <div class="detail-row"><span class="detail-key">Fatores que afetam</span><span class="detail-val" style="font-size:12px">Fisiológicos, psicológicos e genéticos</span></div>
  </div>
  <div class="factor-grid">
    <div class="factor-card"><div class="icon">🧬</div><h4>Genética</h4><p>Tipo de fibras, propensão para lesão</p></div>
    <div class="factor-card"><div class="icon">🌱</div><h4>Maturação</h4><p>Fase de desenvolvimento do atleta</p></div>
    <div class="factor-card"><div class="icon">🥗</div><h4>Nutrição</h4><p>Qualidade da alimentação e suplementação</p></div>
    <div class="factor-card"><div class="icon">😴</div><h4>Repouso</h4><p>Sono com influência crescente na performance</p></div>
    <div class="factor-card"><div class="icon">💪</div><h4>Motivação</h4><p>Ego vs. superação pessoal</p></div>
    <div class="factor-card"><div class="icon">🏟️</div><h4>Ambiente</h4><p>Contexto de treino e residência</p></div>
  </div>

  <p class="section-label">Especialização vs. Multilateralidade</p>
  <div class="alert-box"><strong>Regra de ouro:</strong> Multilateralidade primeiro — especialização depois. A base alargada acelera a aprendizagem nas fases especializadas e maximiza a performance a longo prazo.</div>
  <div class="pyramid">
    <div class="pyr-row" style="background:#D85A30;color:#fff;width:55%;margin:0 auto .3rem">
      <h4>Alto Rendimento</h4><p>Maximização de todas as componentes</p>
    </div>
    <div class="pyr-row" style="background:#EF9F27;color:#fff;width:75%;margin:0 auto .3rem">
      <h4>Treino Especializado</h4><p>Adolescência — capacidades físicas e coordenativas (10–14 anos)</p>
    </div>
    <div class="pyr-row" style="background:#1D9E75;color:#fff;width:100%">
      <h4>Desenvolvimento Multilateral</h4><p>Infância — exploração variada de habilidades (5–9 anos)</p>
    </div>
  </div>
  <div class="two-col">
    <div class="col-card">
      <div class="badge badge-teal">Multilateral</div>
      <div class="col-item">Foco no desenvolvimento físico geral</div>
      <div class="col-item">Lança as bases fisiológicas e psicológicas</div>
      <div class="col-item">Ideal: 5–9 anos</div>
      <div class="col-item">Não é perda de tempo — acelera fases seguintes</div>
    </div>
    <div class="col-card">
      <div class="badge badge-coral">Especializado</div>
      <div class="col-item">Foco nas exigências específicas do desporto</div>
      <div class="col-item">Maximiza o rendimento competitivo</div>
      <div class="col-item">Ideal: 10–14 anos em diante</div>
      <div class="col-item">Mais eficaz com base multilateral sólida</div>
    </div>
  </div>

  <p class="section-label">Literacia Física</p>
  <div class="card" style="margin-bottom:.75rem">
    <div style="font-size:13px;line-height:1.6">Motivação, confiança, competência física, conhecimento e compreensão para valorizar e manter a prática de atividade física ao longo de toda a vida. Não é exclusiva da infância — aplica-se em todas as idades.</div>
  </div>
  <div class="pillar-grid">
    <div class="pillar"><div class="icon">🔥</div><div><h4>Motivação</h4><p>Vontade intrínseca de se mover e praticar</p></div></div>
    <div class="pillar"><div class="icon">🌟</div><div><h4>Confiança</h4><p>Crença nas próprias capacidades físicas</p></div></div>
    <div class="pillar"><div class="icon">🤸</div><div><h4>Competência física</h4><p>Habilidade para executar movimentos variados</p></div></div>
    <div class="pillar"><div class="icon">📖</div><div><h4>Conhecimento</h4><p>Compreensão dos benefícios da atividade física</p></div></div>
  </div>
  <div class="alert-box" style="border-left-color:#378ADD"><strong>Ligação ao LTAD:</strong> Uma criança fisicamente literada explora capacidades ao máximo, reconhece benefícios de um estilo de vida ativo e está melhor preparada para qualquer modalidade futura.</div>`,
  flashcards: [
    {
      "question": "Qual a sequência correta de progressão da carga segundo Navarro?",
      "answer": "1. Frequência (ex: 2x para 3x por semana) → 2. Volume (ex: 40 para 120 min por sessão) → 3. Densidade (intervalos mais curtos) → 4. Intensidade (última a aumentar, após base consolidada)."
    },
    {
      "question": "O que acontece se o novo estímulo for aplicado demasiado cedo ou demasiado tarde?",
      "answer": "Muito cedo: fadiga excessiva e risco de lesão. Muito tarde: reversibilidade e regressão das adaptações. O ideal é aplicar no pico da supercompensação."
    },
    {
      "question": "O que significa dizer que o período de adaptação é proporcional ao aumento da carga?",
      "answer": "Quanto maior o aumento repentino da carga, mais tempo o organismo precisa para se adaptar e maior o risco de lesão. A progressão deve ser gradual e controlada."
    },
    {
      "question": "O que são 'non-responders'?",
      "answer": "Atletas que mostram uma resposta nula ou muito reduzida a determinado estímulo de treino. Não significa incapacidade — pode indicar que o método não é o mais adequado para esse atleta."
    },
    {
      "question": "Quais os 6 fatores a considerar na individualização?",
      "answer": "Genética (tipo de fibras, propensão para lesão), Maturação, Nutrição, Repouso/sono, Motivação (ego vs. superação) e Ambiente (contexto de treino e residência)."
    },
    {
      "question": "Por que razão o princípio da individualização é difícil de aplicar em desportos coletivos?",
      "answer": "Porque a mesma carga é frequentemente aplicada a todos os atletas em simultâneo. O treinador deve ajustar na medida do possível, reconhecendo que a mesma carga produz respostas diferentes em cada atleta."
    },
    {
      "question": "Qual a diferença entre desenvolvimento multilateral e especializado?",
      "answer": "Multilateral: desenvolvimento físico geral, variado, sem foco num desporto específico (5–9 anos). Especializado: foco nas exigências da modalidade, maximização do rendimento (a partir dos 10–14 anos)."
    },
    {
      "question": "Por que o desenvolvimento multilateral não é 'perda de tempo'?",
      "answer": "Porque lança as bases fisiológicas e psicológicas necessárias para maximizar a performance nas fases especializadas. Um atleta com base multilateral sólida aprende mais rapidamente nas fases seguintes."
    },
    {
      "question": "Qual a pirâmide de desenvolvimento de um atleta?",
      "answer": "Base: Desenvolvimento multilateral (infância, 5–9 anos) → Meio: Treino especializado (adolescência, 10–14 anos) → Topo: Alto rendimento (pós-maturação, maximização de todas as componentes)."
    },
    {
      "question": "O que é a literacia física?",
      "answer": "Motivação, confiança, competência física, conhecimento e compreensão para valorizar e manter a prática de atividade física ao longo de toda a vida. Aplica-se em todas as idades, não só na infância."
    },
    {
      "question": "Quais os 4 pilares da literacia física?",
      "answer": "1. Motivação (vontade intrínseca de se mover), 2. Confiança (crença nas próprias capacidades), 3. Competência física (habilidade motora variada), 4. Conhecimento e compreensão (benefícios da atividade física)."
    },
    {
      "question": "Qual a relação entre literacia física e o LTAD?",
      "answer": "Uma criança fisicamente literada tem formação mais generalizada, explora capacidades ao máximo e reconhece os benefícios de um estilo de vida ativo — preparando melhor a base para qualquer especialização futura."
    }
  ],
  quiz: [
    {
      "question": "Qual é a ordem correta de progressão da carga segundo Navarro?",
      "options": [
        "Volume → Frequência → Densidade → Intensidade",
        "Intensidade → Volume → Frequência → Densidade",
        "Frequência → Volume → Densidade → Intensidade",
        "Densidade → Frequência → Intensidade → Volume"
      ],
      "correct": 2
    },
    {
      "question": "O que é o princípio da continuidade no contexto da progressão?",
      "options": [
        "O treino deve ter sempre a mesma intensidade",
        "Os exercícios devem ser aplicados regularmente sem quebras prolongadas",
        "O atleta deve treinar todos os dias sem descanso",
        "A carga deve manter-se igual ao longo da época"
      ],
      "correct": 1
    },
    {
      "question": "Um atleta não melhora apesar de treinar com a mesma carga que os colegas. Qual o conceito mais adequado para descrever esta situação?",
      "options": [
        "Overtraining",
        "Destreino",
        "Non-responder",
        "Reversibilidade"
      ],
      "correct": 2
    },
    {
      "question": "Quais dos seguintes NÃO é um fator de individualização?",
      "options": [
        "Genética",
        "Calendário competitivo",
        "Maturação",
        "Repouso e sono"
      ],
      "correct": 1
    },
    {
      "question": "Segundo a pirâmide de desenvolvimento (Bompa), qual é a base?",
      "options": [
        "Treino especializado",
        "Alto rendimento",
        "Desenvolvimento multilateral",
        "Literacia física"
      ],
      "correct": 2
    },
    {
      "question": "Qual a idade de referência para o início do treino mais específico?",
      "options": [
        "3–5 anos",
        "5–9 anos",
        "10–14 anos",
        "16–18 anos"
      ],
      "correct": 2
    },
    {
      "question": "Por que a especialização precoce pode ser prejudicial?",
      "options": [
        "Porque a criança fica desmotivada facilmente",
        "Porque não desenvolve a base fisiológica e psicológica multilateral necessária para fases avançadas",
        "Porque a intensidade é demasiado elevada",
        "Porque impede o desenvolvimento da força"
      ],
      "correct": 1
    },
    {
      "question": "Qual dos seguintes NÃO é um pilar da literacia física?",
      "options": [
        "Motivação",
        "Confiança",
        "Resistência aeróbia",
        "Competência física"
      ],
      "correct": 2
    },
    {
      "question": "O que une os conceitos de multilateralidade e literacia física?",
      "options": [
        "Ambos focam exclusivamente no desenvolvimento técnico",
        "Ambos promovem a prática desportiva variada e sustentável ao longo da vida",
        "Ambos são exclusivos da fase adulta",
        "Ambos substituem o princípio da especificidade"
      ],
      "correct": 1
    },
    {
      "question": "O que implica o princípio da progressão em relação a aumentos repentinos da carga?",
      "options": [
        "São sempre benéficos pois produzem adaptações mais rápidas",
        "Não têm impacto na recuperação",
        "Aumentam o risco de lesão e exigem mais tempo de adaptação",
        "Devem ser aplicados regularmente para manter a supercompensação"
      ],
      "correct": 2
    }
  ],
});
