/**
 * Gerado automaticamente por scripts/import-unit.js
 * Fonte: d:/Treinador_Curso/Resumos/SubUnidade3_V1.html
 *
 * Para actualizar: edita o HTML fonte e corre «npm run import»
 * Para flashcards/quiz extra: adiciona em imports/units.json → extraFlashcards / extraQuiz
 */

window.STUDY_SUBUNITS = window.STUDY_SUBUNITS || [];
window.STUDY_SUBUNITS = window.STUDY_SUBUNITS.filter((s) => s.id !== 'sub5');

window.STUDY_SUBUNITS.push({
  id: 'sub5',
  number: 5,
  title: "Carga de Treino e Capacidades",
  description: "Carga externa/interna, capacidades motoras, estrutura e tipos de exercícios.",
  contentHtml: `<p class="section-label">Carga de Treino — Conceito</p>
  <div class="card">
    <div style="font-size:13px;line-height:1.6;margin-bottom:.5rem">Estímulo aplicado ao atleta através do confronto entre o atleta e o exercício (Matveev: "atividade funcional adicional ao organismo"). A carga determina a grandeza e intensidade dos processos de recuperação.</div>
    <div class="detail-row"><span class="detail-key">Sem incremento de carga</span><span class="detail-val">Estagnação da performance</span></div>
    <div class="detail-row"><span class="detail-key">Adaptação aguda/rápida</span><span class="detail-val">Resposta imediata ao estímulo</span></div>
    <div class="detail-row"><span class="detail-key">Adaptação crónica</span><span class="detail-val">Mudanças a longo prazo com cargas progressivas</span></div>
  </div>
  <div class="carga-wrap">
    <div class="carga-card" style="border-color:#1D9E75">
      <div class="badge badge-teal">Carga Externa</div>
      <h4>O que o treinador prescreve</h4>
      <p>Igual para todos os atletas num mesmo treino.</p>
      <div class="ex">Ex: 30 min de corrida a 4:30 min/km — é a mesma para todos</div>
    </div>
    <div class="carga-card" style="border-color:#EF9F27">
      <div class="badge badge-amber">Carga Interna</div>
      <h4>Resposta de cada atleta</h4>
      <p>Varia com idade, nível, experiência, sexo, fadiga acumulada, estado de espírito.</p>
      <div class="ex">Ex: FC, temperatura corporal, perceção subjetiva de esforço</div>
    </div>
  </div>
  <div class="alert-box"><strong>Efeito específico</strong> = resultado da interação entre carga externa e carga interna. Dois atletas com a mesma carga externa podem ter respostas internas muito diferentes.</div>

  <p class="section-label">Parâmetros da Carga Externa</p>
  <div class="param-grid">
    <div class="param-card"><div class="icon">⚡</div><h4>Intensidade</h4><p>Kg levantados, velocidade de execução (m/s)</p></div>
    <div class="param-card"><div class="icon">⏱️</div><h4>Densidade</h4><p>Equilíbrio entre exercício e recuperação</p></div>
    <div class="param-card"><div class="icon">📦</div><h4>Volume</h4><p>Duração, metros, repetições totais por sessão</p></div>
    <div class="param-card"><div class="icon">📅</div><h4>Frequência</h4><p>N.º de sessões por dia ou por semana</p></div>
    <div class="param-card"><div class="icon">🧩</div><h4>Complexidade</h4><p>Grau de dificuldade coordenativa da tarefa</p></div>
    <div class="param-card"><div class="icon">💪</div><h4>Massa muscular</h4><p>Local (&lt;1/3), Regional (1/3–2/3), Global (&gt;2/3)</p></div>
  </div>

  <p class="section-label">Capacidades Motoras</p>
  <div class="alert-box" style="border-left-color:#378ADD">Base de todas as habilidades desportivas. O desenvolvimento depende sobretudo de <strong>fatores genéticos</strong> e deve ser explorado nas janelas de oportunidade da infância.</div>
  <div class="cap-grid">
    <div class="cap-card">
      <div class="badge badge-blue">Condicionais — caráter quantitativo</div>
      <div style="font-size:12px;color:var(--color-text-secondary);margin-bottom:.5rem">Determinadas pelos processos energéticos e metabólicos</div>
      <div class="cap-item">🏃 Resistência</div>
      <div class="cap-item">🏋️ Força</div>
      <div class="cap-item">⚡ Velocidade</div>
      <div class="cap-item">🤸 Flexibilidade</div>
    </div>
    <div class="cap-card">
      <div class="badge badge-purple">Coordenativas — caráter qualitativo</div>
      <div style="font-size:12px;color:var(--color-text-secondary);margin-bottom:.5rem">Relação SNC ↔ sistema muscular</div>
      <div class="cap-item">🎯 Diferenciação cinestésica</div>
      <div class="cap-item">🗺️ Orientação espacial e temporal</div>
      <div class="cap-item">⚖️ Equilíbrio</div>
      <div class="cap-item">🥁 Ritmo</div>
      <div class="cap-item">⚡ Velocidade de reação</div>
    </div>
  </div>
  <div class="card">
    <div style="font-size:13px;font-weight:500;margin-bottom:.5rem">Desenvolvimento coordenativo</div>
    <div class="detail-row"><span class="detail-key">Janela principal</span><span class="detail-val">9–11 anos</span></div>
    <div class="detail-row"><span class="detail-key">Puberdade</span><span class="detail-val">Distúrbios temporários — crescimento exige recalibração do SNC</span></div>
    <div class="detail-row"><span class="detail-key">Recomendação de treino</span><span class="detail-val">Muitos exercícios variados, alta frequência, baixo volume</span></div>
    <div class="detail-row"><span class="detail-key">Diferença entre sexos</span><span class="detail-val">Tendência de desenvolvimento semelhante</span></div>
  </div>

  <p class="section-label">Exercício de Treino</p>
  <div class="card" style="margin-bottom:.75rem">
    <div style="font-size:13px;line-height:1.6;color:var(--color-text-secondary);font-style:italic;margin-bottom:.5rem">"Ato motor sistematicamente repetido, organizado numa estrutura segundo determinado objetivo a atingir." — Castelo, 1996</div>
  </div>
  <div class="struct-grid">
    <div class="struct-item"><div class="icon">🎯</div><h4>Objetivo</h4><p>Capacidade a desenvolver</p></div>
    <div class="struct-item"><div class="icon">📋</div><h4>Conteúdo</h4><p>Forma de implementação: técnico, tático ou físico</p></div>
    <div class="struct-item"><div class="icon">🎨</div><h4>Forma</h4><p>Organização dos elementos — mesmos elementos, formas diferentes = adaptações diferentes</p></div>
    <div class="struct-item"><div class="icon">📊</div><h4>Nível de desempenho</h4><p>Compara executado vs. desejado — avalia eficácia</p></div>
  </div>

  <p class="section-label">Tipos de Exercícios por Especificidade</p>
  <div class="ex-grid">
    <div class="ex-card" style="background:#E1F5EE;border-color:#1D9E75">
      <div class="badge badge-teal">Gerais</div>
      <h4>Multilaterais</h4>
      <p>Desenvolvimento global e harmonioso. Objetivos múltiplos. Típicos em jovens ou iniciantes. Baixa especificidade competitiva.</p>
    </div>
    <div class="ex-card" style="background:#FAEEDA;border-color:#EF9F27">
      <div class="badge badge-amber">Específicos</div>
      <h4>De aproximação</h4>
      <p>Aspetos comuns com a competição. Técnica, tática e físico especializado. Correspondem aos recursos energéticos da modalidade.</p>
    </div>
    <div class="ex-card" style="background:#FAECE7;border-color:#D85A30">
      <div class="badge badge-coral">Competição</div>
      <h4>Máxima especificidade</h4>
      <p>Em tudo semelhantes à natureza da competição. Adaptação mais complexa. Atletas de elite necessitam maior variedade destes.</p>
    </div>
  </div>
  <div class="alert-box" style="border-left-color:#533AB7"><strong>Regra prática:</strong> Atletas iniciantes → exercícios mais gerais, menor variedade. Atletas de elite → exercícios mais específicos, maior variedade de conteúdos.</div>`,
  flashcards: [
    {
      "question": "Qual a diferença entre carga externa e carga interna?",
      "answer": "Carga externa é o que o treinador prescreve e é igual para todos os atletas (ex: 30 min a 4:30 min/km). Carga interna é a resposta fisiológica de cada atleta (FC, temperatura, perceção de esforço) — varia com idade, nível, fadiga, etc."
    },
    {
      "question": "O que determina o efeito específico de uma carga de treino?",
      "answer": "O efeito resulta da interação entre carga externa e carga interna. A mesma carga externa pode produzir respostas internas muito diferentes em atletas distintos."
    },
    {
      "question": "Quais os 6 parâmetros de gestão da carga externa?",
      "answer": "Intensidade (kg/velocidade), Densidade (equilíbrio trabalho/recuperação), Volume (duração/repetições totais), Frequência (sessões/semana), Complexidade (dificuldade coordenativa) e Massa muscular solicitada (local, regional ou global)."
    },
    {
      "question": "Qual a diferença entre capacidades condicionais e coordenativas?",
      "answer": "Condicionais: caráter quantitativo, base nos processos energéticos e metabólicos (resistência, força, velocidade, flexibilidade). Coordenativas: caráter qualitativo, relação SNC-músculo (diferenciação cinestésica, orientação, equilíbrio, ritmo, velocidade de reação)."
    },
    {
      "question": "Quais as 5 capacidades coordenativas?",
      "answer": "Diferenciação cinestésica, Orientação espacial e temporal, Equilíbrio, Ritmo e Velocidade de reação."
    },
    {
      "question": "Qual a janela de oportunidade principal para o desenvolvimento coordenativo?",
      "answer": "Entre os 9 e os 11 anos. A puberdade causa distúrbios temporários de coordenação por crescimento acelerado dos membros que exige recalibração do SNC."
    },
    {
      "question": "Como se deve treinar as capacidades coordenativas?",
      "answer": "Grande número e variedade de exercícios, com maior frequência e volumes menores — para não causar fadiga do SNC. Ambos os sexos têm tendência de desenvolvimento semelhante."
    },
    {
      "question": "Qual a definição de exercício de treino segundo Castelo (1996)?",
      "answer": "'Ato motor sistematicamente repetido, organizado numa estrutura segundo determinado objetivo a atingir.' A seleção e adequação dos exercícios ao objetivo é um dos aspetos mais importantes do treino."
    },
    {
      "question": "Quais os 4 elementos da estrutura do exercício de treino?",
      "answer": "Objetivo (capacidade a desenvolver), Conteúdo (forma de implementação: técnico/tático/físico), Forma (organização dos elementos — mesmos elementos em formas diferentes produzem adaptações distintas) e Nível de desempenho a atingir."
    },
    {
      "question": "Quais os 3 tipos de exercícios segundo a especificidade (identidade)?",
      "answer": "Gerais (multilaterais, desenvolvimento global, atletas jovens/iniciantes), Específicos (aproximação à competição, técnica/tática/físico especializado) e de Competição (máxima semelhança com a competição real, maior complexidade)."
    },
    {
      "question": "Para que tipo de atletas são mais adequados os exercícios gerais vs. de competição?",
      "answer": "Exercícios gerais: atletas jovens ou iniciantes (menor variedade, objetivos múltiplos). Exercícios de competição: atletas de elite (maior variedade de conteúdos específicos, máxima complexidade)."
    },
    {
      "question": "O que é a 'massa muscular solicitada' como parâmetro de carga?",
      "answer": "Refere-se à proporção de musculatura envolvida no exercício: Local (menos de 1/3 da massa muscular), Regional (1/3 a 2/3) ou Global (mais de 2/3 — como um agachamento ou corrida)."
    }
  ],
  quiz: [
    {
      "question": "Um treino de 30 minutos de corrida a 4:30 min/km prescrito para toda a equipa é um exemplo de:",
      "options": [
        "Carga interna",
        "Carga externa",
        "Adaptação crónica",
        "Efeito específico"
      ],
      "correct": 1
    },
    {
      "question": "A frequência cardíaca durante o treino é um indicador de:",
      "options": [
        "Carga externa",
        "Volume de treino",
        "Carga interna",
        "Complexidade do exercício"
      ],
      "correct": 2
    },
    {
      "question": "A 'densidade' como parâmetro de carga refere-se a:",
      "options": [
        "O número de repetições por sessão",
        "A velocidade de execução",
        "O equilíbrio entre fases de trabalho e recuperação",
        "O número de sessões semanais"
      ],
      "correct": 2
    },
    {
      "question": "As capacidades condicionais caracterizam-se por:",
      "options": [
        "Caráter qualitativo e dependência do SNC",
        "Caráter quantitativo e base nos processos energéticos",
        "Serem exclusivamente genéticas",
        "Dependerem apenas da coordenação neuromuscular"
      ],
      "correct": 1
    },
    {
      "question": "Qual destas NÃO é uma capacidade coordenativa?",
      "options": [
        "Equilíbrio",
        "Ritmo",
        "Força",
        "Velocidade de reação"
      ],
      "correct": 2
    },
    {
      "question": "Qual a principal janela de oportunidade para o desenvolvimento coordenativo?",
      "options": [
        "6–8 anos",
        "9–11 anos",
        "12–14 anos",
        "15–17 anos"
      ],
      "correct": 1
    },
    {
      "question": "Para treinar capacidades coordenativas, recomenda-se:",
      "options": [
        "Poucos exercícios com alto volume e baixa frequência",
        "Muitos exercícios variados, alta frequência e baixo volume",
        "Exercícios de alta intensidade para estimular o SNC",
        "Apenas exercícios específicos da modalidade"
      ],
      "correct": 1
    },
    {
      "question": "Segundo Castelo (1996), o exercício de treino é um 'ato motor...':",
      "options": [
        "...espontâneo e criativo para explorar o movimento",
        "...sistematicamente repetido, organizado numa estrutura segundo determinado objetivo",
        "...competitivo que simula a realidade da prova",
        "...geral que desenvolve todas as capacidades em simultâneo"
      ],
      "correct": 1
    },
    {
      "question": "Dois exercícios com o mesmo conteúdo mas formas diferentes podem:",
      "options": [
        "Produzir sempre os mesmos efeitos",
        "Produzir adaptações completamente distintas",
        "Ser sempre equivalentes em termos de carga",
        "Ser apenas diferentes na intensidade"
      ],
      "correct": 1
    },
    {
      "question": "Qual o tipo de exercício mais adequado para atletas de elite?",
      "options": [
        "Gerais com objetivos múltiplos",
        "Específicos e de competição com maior variedade de conteúdos",
        "Apenas exercícios gerais para manter a base",
        "Exercícios técnicos isolados de baixa complexidade"
      ],
      "correct": 1
    }
  ],
});
