/**
 * Gerado automaticamente por scripts/import-unit.js
 * Fonte: d:/Treinador_Curso/Resumos/SubUnidade3_V2.html
 *
 * Para actualizar: edita o HTML fonte e corre «npm run import»
 * Para flashcards/quiz extra: adiciona em imports/units.json → extraFlashcards / extraQuiz
 */

window.STUDY_SUBUNITS = window.STUDY_SUBUNITS || [];
window.STUDY_SUBUNITS = window.STUDY_SUBUNITS.filter((s) => s.id !== 'sub6');

window.STUDY_SUBUNITS.push({
  id: 'sub6',
  number: 6,
  title: "Resistência e Velocidade",
  description: "Classificação da resistência, métodos de treino, avaliação aeróbia/anaeróbia e velocidade.",
  contentSections: [
    {
      "id": "sec-resistencia",
      "label": "Resistência"
    },
    {
      "id": "sec-metodos",
      "label": "Métodos"
    },
    {
      "id": "sec-avaliacao",
      "label": "Avaliação"
    },
    {
      "id": "sec-velocidade",
      "label": "Velocidade"
    }
  ],
  contentHtml: `<div id="sec-resistencia" class="content-section"><p class="section-label">Resistência — Conceito</p>
  <div class="card">
    <div style="font-size:13px;line-height:1.6;margin-bottom:.5rem">Capacidade de <strong>retardar a fadiga</strong> e manter alto nível de atividade muscular durante treinos e competições. O atleta consegue realizar esforços prolongados, repetir ações intensas, manter potência com precisão e recuperar rapidamente.</div>
    <div class="detail-row"><span class="detail-key">Potencial energético</span><span class="detail-val">Sistemas bioenergéticos do atleta</span></div>
    <div class="detail-row"><span class="detail-key">Relação intensidade/volume</span><span class="detail-val">Carga de treino e competição</span></div>
    <div class="detail-row"><span class="detail-key">Eficácia técnica e tática</span><span class="detail-val">Mais repetição → gesto mais económico</span></div>
    <div class="detail-row"><span class="detail-key">Recursos psíquicos</span><span class="detail-val">Resiliência e motivação</span></div>
  </div>

  <p class="section-label">Classificação da Resistência</p>
  <div class="cap-grid">
    <div class="cap-card">
      <div class="badge badge-teal">Participação muscular</div>
      <div class="cap-item">🏃 Geral — mais de 1/6 a 1/7 da musculatura total</div>
      <div class="cap-item">💪 Local — menos de 1/6 a 1/7 da musculatura total</div>
    </div>
    <div class="cap-card">
      <div class="badge badge-blue">Regime de contração</div>
      <div class="cap-item">🔒 Estática (isométrica) — sem movimento articular</div>
      <div class="cap-item">🔄 Dinâmica (isotónica) — com movimento articular</div>
    </div>
    <div class="cap-card">
      <div class="badge badge-coral">Solicitação metabólica</div>
      <div class="cap-item">🌬️ Aeróbia — predomina abaixo do limiar anaeróbio</div>
      <div class="cap-item">🔥 Anaeróbia — predomina acima do limiar anaeróbio</div>
    </div>
    <div class="cap-card">
      <div class="badge badge-purple">Especificidade</div>
      <div class="cap-item">🎯 De base — capacidade geral de resistência</div>
      <div class="cap-item">🏆 Específica de competição — exigências da modalidade</div>
    </div>
  </div>

  <p class="section-label">Limiares e Zonas de Intensidade</p>
  <div class="card">
    <div style="font-size:13px;line-height:1.6;margin-bottom:.5rem">Dois limiares separam três zonas de intensidade que orientam todo o treino da resistência.</div>
    <div class="detail-row"><span class="detail-key">Intensidade moderada</span><span class="detail-val">Abaixo do limiar láctico (~2 mmol/L)</span></div>
    <div class="detail-row"><span class="detail-key">Intensidade pesada</span><span class="detail-val">Entre o limiar láctico e o EEML</span></div>
    <div class="detail-row"><span class="detail-key">Intensidade severa</span><span class="detail-val">Acima do EEML — lactato acumula exponencialmente</span></div>
  </div>
  <div class="carga-wrap">
    <div class="carga-card" style="border-color:#1D9E75">
      <div class="badge badge-teal">Limiar láctico (aeróbio)</div>
      <h4>Fronteira moderada → pesada</h4>
      <p>Primeiro aumento notável do lactato no sangue. Abaixo deste ponto o metabolismo é predominantemente aeróbio e o lactato estabiliza.</p>
    </div>
    <div class="carga-card" style="border-color:#EF9F27">
      <div class="badge badge-amber">EEML — Limiar anaeróbio</div>
      <h4>Fronteira pesada → severa</h4>
      <p>Estado estacionário máximo de lactato. Intensidade máxima sem acumulação progressiva. Acima deste ponto a fadiga instala-se rapidamente.</p>
    </div>
  </div>
  <div class="alert-box"><strong>Potência vs. Capacidade:</strong> Potência aeróbia = VO₂máx (intensidade máxima de produção de energia aeróbia). Capacidade aeróbia = quanto tempo se mantém perto do VO₂máx. O mesmo racional aplica-se à via anaeróbia (potência = pico láctico; capacidade = tolerância ao lactato).</div></div>

<div id="sec-metodos" class="content-section"><p class="section-label">Visão Geral dos Métodos</p>
  <div class="card">
    <div style="font-size:13px;line-height:1.6;margin-bottom:.5rem">Os métodos organizam-se em <strong>Contínuos</strong> (sem interrupção — exercícios de longa duração com ajustes bioquímicos/fisiológicos constantes; preferencialmente modalidades cíclicas) e <strong>Por Intervalos</strong> (períodos curtos, regulares e repetidos; cíclicas e acíclicas). O método de Competição/Controlo exige uma única carga com rendimento máximo.</div>
    <div class="detail-row"><span class="detail-key">Contínuo uniforme</span><span class="detail-val">Extensivo e Intensivo</span></div>
    <div class="detail-row"><span class="detail-key">Contínuo variado</span><span class="detail-val">Velocidade oscila ao longo do esforço</span></div>
    <div class="detail-row"><span class="detail-key">Por intervalos</span><span class="detail-val">Intervalado e Repetições</span></div>
    <div class="detail-row"><span class="detail-key">Competição / controlo</span><span class="detail-val">Replicação fiel da prova</span></div>
  </div>

  <p class="section-label">Método Contínuo Uniforme</p>
  <div class="carga-wrap">
    <div class="carga-card" style="border-color:#1D9E75">
      <div class="badge badge-teal">Extensivo</div>
      <h4>Volume preponderante</h4>
      <p>60–80% da velocidade de competição · ≤ limiar láctico · 45–65% VO₂máx · FC 125–170 bpm · 30 min a 2h+</p>
      <div class="ex">Objetivos: economia cardiovascular, metabolismo lipídico, regeneração de glicogénio, estabilização do rendimento</div>
    </div>
    <div class="carga-card" style="border-color:#7F77DD">
      <div class="badge badge-purple">Intensivo</div>
      <h4>Intensidade preponderante</h4>
      <p>90–95% da velocidade de competição · entre os dois limiares · 80–90% VO₂máx · FC 170–190 bpm · 20–30 min</p>
      <div class="ex">Objetivos: aumentar VO₂máx, aumentar EEML, compensar lactatemia, manter exercício de alta intensidade</div>
    </div>
  </div>

  <p class="section-label">Método Contínuo Variado</p>
  <div class="card">
    <div style="font-size:13px;line-height:1.6">A velocidade/intensidade <strong>oscila ao longo do esforço</strong> (ex.: fartlek, corrida com acelerações). Mantém o carácter contínuo mas varia o estímulo — útil para simular mudanças de ritmo competitivas e evitar monotonia do método uniforme.</div>
  </div>

  <p class="section-label">Adaptações e Limitações do Método Contínuo</p>
  <div class="two-col">
    <div class="col-card" style="border-color:#1D9E75">
      <h4>Principais adaptações</h4>
      <div class="col-item">Economia motora</div>
      <div class="col-item">Automatização do gesto técnico</div>
      <div class="col-item">Adaptação cardiovascular (transporte de O₂)</div>
      <div class="col-item">Tolerância ao trabalho monótono</div>
    </div>
    <div class="col-card" style="border-color:#E24B4A">
      <h4>Limitações</h4>
      <div class="col-item">Reservas de glicogénio (esp. regime intensivo)</div>
      <div class="col-item">Taxa de degradação de HC e ácidos gordos</div>
      <div class="col-item">Capacidade cardiovascular e volume de sangue</div>
    </div>
  </div>

  <p class="section-label">Métodos por Intervalos</p>
  <div class="ex-grid">
    <div class="ex-card" style="background:#EEEDFE;border-color:#7F77DD">
      <div class="badge badge-purple">Intervalado</div>
      <h4>Pausas incompletas</h4>
      <p>Intensidade elevada, volume reduzido. Foco no limiar anaeróbio, potência aeróbia, tolerância e potência láticas. Pode ser aplicado em modalidades cíclicas e acíclicas.</p>
    </div>
    <div class="ex-card" style="background:#E6F1FB;border-color:#378ADD">
      <div class="badge badge-blue">Repetições</div>
      <h4>Pausas completas (20s–3min)</h4>
      <p>Intensidades submáximas/máximas. Alta especificidade — aproxima-se das situações de competição. Ideal para desenvolvimento de zonas láticas.</p>
    </div>
    <div class="ex-card" style="background:#FAEEDA;border-color:#EF9F27">
      <div class="badge badge-amber">Competição / Controlo</div>
      <h4>Máxima especificidade</h4>
      <p>Uma única carga que exige rendimento máximo. Replicação fiel das condições de prova. Serve para controlo da forma desportiva.</p>
    </div>
  </div></div>

<div id="sec-avaliacao" class="content-section"><p class="section-label">Testes de Resistência Aeróbia</p>
  <div class="two-col">
    <div class="col-card" style="border-color:#378ADD">
      <div class="badge badge-blue">Testes submáximos</div>
      <div class="col-item">Estimam VO₂máx pela resposta da FC</div>
      <div class="col-item">Mais seguros, menos esforço, menos tempo</div>
      <div class="col-item">Desvantagem: apenas uma estimativa</div>
      <div class="col-item">Não detetam respostas anormais (ex: angina)</div>
    </div>
    <div class="col-card" style="border-color:#D85A30">
      <div class="badge badge-coral">Testes máximos</div>
      <div class="col-item">Intensidade crescente até exaustão</div>
      <div class="col-item">Medem VO₂máx real e curva do lactato</div>
      <div class="col-item">Determinam potência/velocidade aeróbia máxima</div>
      <div class="col-item">Podem ser feitos em laboratório com análise de gases</div>
    </div>
  </div>

  <p class="section-label">VO₂máx — Consumo Máximo de Oxigénio</p>
  <div class="card">
    <div style="font-size:13px;line-height:1.6;margin-bottom:.5rem">Plateau no consumo de O₂ atingido durante exercício à máxima intensidade, cujo valor não aumenta face a mais intensidade. É a medida de referência da potência aeróbia.</div>
    <div class="detail-row"><span class="detail-key">Critérios de plateau</span><span class="detail-val">[La⁻] ≥ 8 mmol/L · FC ≥ 90% máx · Exaustão</span></div>
    <div class="detail-row"><span class="detail-key">Fatores que influenciam</span><span class="detail-val">Sexo · Idade · Dimensões corporais · Massa magra · Altitude</span></div>
    <div class="detail-row"><span class="detail-key">Fatores que NÃO influenciam</span><span class="detail-val">Refeição leve (≤750 kcal) · Calor até 32°C · Aquecimento prévio</span></div>
  </div>

  <p class="section-label">Protocolos por Modalidade (Sousa, 2018)</p>
  <div class="param-grid">
    <div class="param-card"><div class="icon">🏊</div><h4>Natação (25m)</h4><p>7×200m · incremento 0.05 m/s · 30s de intervalo</p></div>
    <div class="param-card"><div class="icon">🏃</div><h4>Atletismo (400m)</h4><p>Incremento de 1 km/h por cada 800m · 30s intervalo · controlo de velocidade a cada 100m</p></div>
    <div class="param-card"><div class="icon">🚴</div><h4>Ciclismo</h4><p>Patamares de 2 min · incremento 40W · cadência 70–90 rpm</p></div>
    <div class="param-card"><div class="icon">🚣</div><h4>Remo</h4><p>Patamares de 2 min · incremento 40W · 30s intervalo · cadência 30–40 rpm</p></div>
    <div class="param-card"><div class="icon">⚽</div><h4>Modalidades coletivas</h4><p>Teste Yo-Yo (20m) em 3 versões: contínuo, 5s ou 10s de recuperação ativa</p></div>
    <div class="param-card"><div class="icon">📈</div><h4>Objetivo Yo-Yo</h4><p>Incremental até exaustão · vai-e-vem 20m · condições reais de prática</p></div>
  </div>

  <p class="section-label">Testes Anaeróbios</p>
  <div class="carga-wrap">
    <div class="carga-card" style="border-color:#7F77DD">
      <div class="badge badge-purple">Wingate</div>
      <h4>Teste de referência da potência anaeróbia</h4>
      <p>30s all-out em cicloergómetro. Carga: 7.5% do peso corporal (4.5% para membros superiores). Precedido de aquecimento de baixa intensidade.</p>
    </div>
    <div class="carga-card" style="border-color:#D85A30">
      <div class="badge badge-coral">RAST</div>
      <h4>Running Anaerobic Sprint Test</h4>
      <p>6 sprints de 35m com 10s de recuperação entre cada. Precedido de aquecimento de baixa intensidade. Aplicável em campo.</p>
    </div>
  </div>
  <div class="alert-box">Ambos os testes medem: <strong>potência máxima, potência mínima, potência média</strong> e <strong>índice de fadiga</strong>.</div></div>

<div id="sec-velocidade" class="content-section"><p class="section-label">Velocidade — Conceito</p>
  <div class="card">
    <div style="font-size:13px;line-height:1.6;margin-bottom:.5rem">Capacidade de percorrer uma distância no <strong>menor tempo possível</strong>. Exercício de intensidade máxima (supra-máxima face ao VO₂máx) com duração típica até 10 segundos. Velocidade cíclica = frequência gestual × distância de ciclo.</div>
    <div class="detail-row"><span class="detail-key">Sistema energético dominante</span><span class="detail-val">ATP-PCr (fosfagénio)</span></div>
    <div class="detail-row"><span class="detail-key">Correlação entre fases</span><span class="detail-val">Fraca — bom numa fase não implica bom nas outras</span></div>
    <div class="detail-row"><span class="detail-key">Aplicação</span><span class="detail-val">Segmento corporal (ex: braços no boxe) ou corpo inteiro (corrida, ciclismo)</span></div>
  </div>

  <p class="section-label">As 3 Fases da Velocidade</p>
  <div class="ex-grid">
    <div class="ex-card" style="background:#E1F5EE;border-color:#1D9E75">
      <div class="badge badge-teal">Fase 1 — Aceleração</div>
      <h4>0 → velocidade máxima</h4>
      <p>Depende de fatores neurais (velocidade de reação) e potência muscular. Distâncias de treino: 10–40m. Métodos: partidas específicas, força/potência, sprint com carga.</p>
    </div>
    <div class="ex-card" style="background:#EEEDFE;border-color:#7F77DD">
      <div class="badge badge-purple">Fase 2 — Vel. Máxima</div>
      <h4>Pico de velocidade</h4>
      <p>Influenciada por fibras rápidas (tipo II), amplitude e frequência de passada, características antropométricas. Distâncias: 50–60m. Métodos: pliometria, sprint assistido, técnica de corrida.</p>
    </div>
    <div class="ex-card" style="background:#FAECE7;border-color:#D85A30">
      <div class="badge badge-coral">Fase 3 — Manutenção</div>
      <h4>Evitar desaceleração</h4>
      <p>Dependente do sistema ATP-PCr e reservas de fosfagénio. Pausas insuficientes → depleção de PCr + acumulação de H⁺ → quebra na mecânica de corrida. Distâncias: acima de 60m.</p>
    </div>
  </div>
  <div class="alert-box" style="border-left-color:#D85A30"><strong>Princípio-chave:</strong> A velocidade máxima deve ser treinada com <strong>poucas repetições e descanso completo</strong>. Quando a PCr diminui, o sistema láctico assume e os iões H⁺ acumulados reduzem a produção de força e destroem a eficiência mecânica.</div>

  <p class="section-label">Fatores que Condicionam a Velocidade</p>
  <div class="param-grid">
    <div class="param-card"><div class="icon">🧬</div><h4>Fibras musculares</h4><p>% de fibras tipo II (rápidas) — fator predominantemente genético</p></div>
    <div class="param-card"><div class="icon">⚖️</div><h4>Composição corporal</h4><p>Relação massa muscular / massa gorda — influencia a relação força-peso</p></div>
    <div class="param-card"><div class="icon">🧠</div><h4>Idade e maturação</h4><p>Mielinização das fibras nervosas → maior velocidade de condução do impulso</p></div>
    <div class="param-card"><div class="icon">🔬</div><h4>Sexo</h4><p>Testosterona → maior massa muscular → maior produção de força → maior velocidade</p></div>
    <div class="param-card"><div class="icon">⚡</div><h4>Performance metabólica</h4><p>Eficiência do sistema ATP-PCr e da via glicolítica anaeróbia</p></div>
    <div class="param-card"><div class="icon">🎯</div><h4>Técnica e biomecânica</h4><p>Eficiência do gesto motor e ciclo de alongamento-encurtamento (CAE)</p></div>
  </div>

  <p class="section-label">Avaliação e Métodos por Fase</p>
  <div class="struct-grid">
    <div class="struct-item"><div class="icon">🚀</div><h4>Aceleração</h4><p>Avaliação até 20m · diferentes formas de partida · treino 10–40m</p></div>
    <div class="struct-item"><div class="icon">⚡</div><h4>Vel. máxima</h4><p>Avaliação 30–60m · +15m desaceleração para segurança · treino 50–60m</p></div>
    <div class="struct-item"><div class="icon">🏁</div><h4>Vel. resistente</h4><p>Avaliação acima de 60m · treino 60–400m consoante sistema-alvo</p></div>
    <div class="struct-item"><div class="icon">📏</div><h4>Instrumentos</h4><p>Células fotoelétricas · cronómetro · câmaras alta velocidade · GPS</p></div>
  </div>
  <div class="alert-box" style="border-left-color:#378ADD"><strong>Condições para avaliação:</strong> controlar temperatura, humidade e vento · superfície e calçado adequados · aquecimento prévio obrigatório · poucas repetições (teste máximo — sem acumulação de fadiga).</div></div>`,
  flashcards: [
    {
      "question": "Qual o objetivo central da resistência no treino desportivo?",
      "answer": "Retardar a fadiga e manter um alto nível de atividade muscular durante treinos e competições. O atleta consegue realizar esforços prolongados, repetir ações intensas, manter potência com precisão e recuperar rapidamente."
    },
    {
      "question": "Quais os 4 condicionantes da resistência?",
      "answer": "1) Potencial energético do organismo do atleta\n2) Relação intensidade/volume do esforço\n3) Eficácia técnica e tática (mais repetição = gesto mais económico)\n4) Recursos psíquicos (resiliência, motivação)"
    },
    {
      "question": "Qual a diferença entre intensidade moderada, pesada e severa?",
      "answer": "Moderada: abaixo do limiar láctico\nPesada: entre o limiar láctico e o EEML\nSevera: acima do EEML — o lactato acumula-se exponencialmente e a fadiga instala-se progressivamente."
    },
    {
      "question": "O que é o VO₂máx e quais os critérios para confirmar que foi atingido?",
      "answer": "Consumo máximo de oxigénio (plateau) atingido durante exercício à máxima intensidade, cujo valor não aumenta com mais intensidade.\nCritérios: [La⁻] ≥ 8 mmol/L · FC ≥ 90% da máxima · Exaustão."
    },
    {
      "question": "O VO₂máx é influenciado pelo aquecimento prévio ou por uma refeição leve?",
      "answer": "Não. O VO₂máx NÃO é influenciado por: aquecimento prévio, refeição leve (até ~750 kcal), exposição ao calor até 32°C, velocidade ou número de repetições do exercício."
    },
    {
      "question": "Descreve o método contínuo uniforme extensivo.",
      "answer": "60–80% da velocidade de competição · igual ou abaixo do limiar láctico · 45–65% VO₂máx · FC 125–170 bpm · duração de 30 min a 2h ou mais.\nObjetivos: economia cardiovascular, metabolismo lipídico, regeneração de glicogénio."
    },
    {
      "question": "Descreve o método contínuo uniforme intensivo.",
      "answer": "90–95% da velocidade de competição · entre limiar láctico e EEML · 80–90% VO₂máx · FC 170–190 bpm · duração de 20–30 min.\nObjetivos: aumentar VO₂máx, aumentar EEML, compensar lactatemia, manter alta intensidade."
    },
    {
      "question": "Qual a diferença entre treino intervalado e método de repetições?",
      "answer": "Intervalado: pausas incompletas, foco no limiar anaeróbio, potência aeróbia e tolerância/potência láticas.\nRepetições: pausas completas (20s a 3 min), intensidades submáximas/máximas, alta especificidade — aproxima-se das situações de competição."
    },
    {
      "question": "Quais as principais adaptações do método contínuo?",
      "answer": "Economia motora · automatização do gesto técnico · adaptação funcional dos sistemas de transporte de O₂ · tolerância ao trabalho monótono."
    },
    {
      "question": "Como se realiza o teste Wingate e o que mede?",
      "answer": "30s all-out em cicloergómetro com carga de 7.5% do peso corporal (4.5% para membros superiores). Precedido de aquecimento leve.\nMede: potência máxima, mínima, média e índice de fadiga."
    },
    {
      "question": "Como se realiza o teste RAST e o que mede?",
      "answer": "6 sprints de 35m com 10s de recuperação entre cada sprint. Precedido de aquecimento leve.\nMede: potência máxima, mínima, média e índice de fadiga (Running Anaerobic Sprint Test)."
    },
    {
      "question": "Quais as 3 fases da velocidade e o que determina cada uma?",
      "answer": "1) Aceleração: fatores neurais e potência muscular (de 0 até à velocidade máxima)\n2) Velocidade máxima: fibras rápidas, amplitude e frequência de passada, antropometria\n3) Manutenção: sistema ATP-PCr — evitar depleção de PCr e acumulação de H⁺"
    },
    {
      "question": "Por que é essencial descansar completamente entre sprints máximos?",
      "answer": "Pausas insuficientes esgotam a PCr → maior dependência do sistema láctico → acumulação de iões H⁺ → redução da capacidade de produzir força e quebra da mecânica de corrida. A velocidade máxima requer poucas repetições e descanso completo."
    },
    {
      "question": "Que distâncias se usam para avaliar cada fase da velocidade?",
      "answer": "Aceleração: até 20m (diferentes formas de partida).\nVelocidade máxima: 30–60m + pelo menos 15m após a linha de chegada para desaceleração segura.\nVelocidade resistente: acima de 60m."
    },
    {
      "question": "Quais os 6 fatores que condicionam a velocidade?",
      "answer": "1) Fibras musculares (% tipo II — predominantemente genético)\n2) Composição corporal (relação massa muscular/gorda)\n3) Idade/maturação (mielinização nervosa)\n4) Sexo (testosterona → força → velocidade)\n5) Performance metabólica (ATP-PCr)\n6) Técnica e biomecânica (CAE)"
    },
    {
      "question": "Que 3 versões do teste Yo-Yo existem e como diferem?",
      "answer": "1) Yo-Yo Endurance Test: contínuo, sem pausa\n2) Yo-Yo Intermittent Endurance Test: 5s de recuperação ativa\n3) Yo-Yo Intermittent Recovery Test: 10s de recuperação ativa\nTodos em vai-e-vem de 20m até exaustão."
    },
    {
      "question": "O que caracteriza o método contínuo variado?",
      "answer": "A velocidade ou intensidade oscila ao longo do esforço contínuo (ex.: fartlek). Simula mudanças de ritmo na competição e reduz a monotonia do método uniforme."
    },
    {
      "question": "Qual a diferença entre potência e capacidade aeróbia/anaeróbia?",
      "answer": "Potência aeróbia = VO₂máx (intensidade máxima). Capacidade aeróbia = tempo que se mantém perto do VO₂máx. Na via anaeróbia: potência = pico láctico; capacidade = tolerância ao lactato."
    }
  ],
  quiz: [
    {
      "question": "Qual o domínio de intensidade de um exercício realizado acima do EEML?",
      "options": [
        "Moderada",
        "Pesada",
        "Severa",
        "Máxima"
      ],
      "correct": 2
    },
    {
      "question": "O VO₂máx é influenciado por qual dos seguintes fatores?",
      "options": [
        "Aquecimento prévio",
        "Refeição leve de 600 kcal",
        "Altitude",
        "Temperatura ambiente até 32°C"
      ],
      "correct": 2
    },
    {
      "question": "No método contínuo uniforme extensivo, qual a percentagem do VO₂máx trabalhada?",
      "options": [
        "20–40%",
        "45–65%",
        "80–90%",
        "95–100%"
      ],
      "correct": 1
    },
    {
      "question": "Qual a principal diferença entre o treino intervalado e o método de repetições?",
      "options": [
        "O intervalado usa pausas completas; as repetições usam pausas incompletas",
        "As repetições usam pausas completas; o intervalado usa pausas incompletas",
        "Ambos usam pausas completas mas com intensidades diferentes",
        "São métodos equivalentes com diferentes nomes"
      ],
      "correct": 1
    },
    {
      "question": "O teste de Wingate avalia:",
      "options": [
        "VO₂máx por análise de gases",
        "Potência aeróbia em tapete rolante",
        "Potência anaeróbia em cicloergómetro com 30s all-out",
        "Limiar láctico em protocolo progressivo"
      ],
      "correct": 2
    },
    {
      "question": "Para avaliar a velocidade máxima, qual a distância recomendada?",
      "options": [
        "Até 20m",
        "30–60m",
        "Acima de 60m",
        "100–200m"
      ],
      "correct": 1
    },
    {
      "question": "O que acontece quando a PCr se depleta durante sprints máximos com pausas insuficientes?",
      "options": [
        "O VO₂máx aumenta para compensar",
        "Há maior dependência do sistema láctico e acumulação de H⁺",
        "A frequência cardíaca diminui",
        "A velocidade mantém-se mas a técnica melhora"
      ],
      "correct": 1
    },
    {
      "question": "Velocidade cíclica é o produto de:",
      "options": [
        "Força × Potência",
        "Intensidade × Volume",
        "Frequência gestual × Distância de ciclo",
        "Massa × Aceleração"
      ],
      "correct": 2
    },
    {
      "question": "Qual das seguintes NÃO é uma adaptação do método contínuo?",
      "options": [
        "Economia motora",
        "Tolerância ao trabalho monótono",
        "Aumento da potência láctica",
        "Automatização do gesto técnico"
      ],
      "correct": 2
    },
    {
      "question": "Nos testes Yo-Yo para modalidades coletivas, qual a distância de vai-e-vem utilizada?",
      "options": [
        "10m",
        "20m",
        "30m",
        "40m"
      ],
      "correct": 1
    },
    {
      "question": "Qual o fator energético dominante na fase de manutenção da velocidade?",
      "options": [
        "Metabolismo oxidativo e VO₂máx",
        "Sistema glicolítico e tolerância ao lactato",
        "Sistema ATP-PCr e reservas de fosfagénio",
        "Fibras lentas tipo I"
      ],
      "correct": 2
    },
    {
      "question": "As correlações entre as 3 fases da velocidade (aceleração, máxima, manutenção) são:",
      "options": [
        "Muito fortes — quem é rápido numa é rápido em todas",
        "Fracas — um atleta pode ser bom numa fase e não nas outras",
        "Moderadas e dependem apenas da genética",
        "Inexistentes — as fases são totalmente independentes"
      ],
      "correct": 1
    },
    {
      "question": "O método contínuo variado distingue-se do uniforme porque:",
      "options": [
        "Usa pausas completas entre séries",
        "A velocidade oscila ao longo do esforço contínuo",
        "Trabalha sempre acima do EEML",
        "É exclusivo de modalidades acíclicas"
      ],
      "correct": 1
    }
  ],
});
