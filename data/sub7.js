/**
 * Gerado automaticamente por scripts/import-unit.js
 * Fonte: d:/Treinador_Curso/Resumos/SubUnidade3_V3.html
 *
 * Para actualizar: edita o HTML fonte e corre «npm run import»
 * Para flashcards/quiz extra: adiciona em imports/units.json → extraFlashcards / extraQuiz
 */

window.STUDY_SUBUNITS = window.STUDY_SUBUNITS || [];
window.STUDY_SUBUNITS = window.STUDY_SUBUNITS.filter((s) => s.id !== 'sub7');

window.STUDY_SUBUNITS.push({
  id: 'sub7',
  number: 7,
  title: "Força, Flexibilidade e CAE",
  description: "Produção de força, prescrição e avaliação, flexibilidade, fuso/OTG e ciclo alongamento-encurtamento.",
  contentSections: [
    {
      "id": "sec-forca",
      "label": "Força"
    },
    {
      "id": "sec-prescricao",
      "label": "Prescrição"
    },
    {
      "id": "sec-avaliacao",
      "label": "Avaliação"
    },
    {
      "id": "sec-flexibilidade",
      "label": "Flexibilidade"
    },
    {
      "id": "sec-cae",
      "label": "CAE"
    }
  ],
  contentHtml: `<div id="sec-forca" class="content-section"><p class="section-label">Força</p>
<p class="section-label">O que é a Força?</p>
  <div class="card">
    <div style="font-size:13px;line-height:1.6;margin-bottom:.5rem">Toda a causa suscetível de alterar, ou tender a alterar, o <strong>estado de repouso ou movimento da matéria</strong>. É a medida de ação de um corpo contra outro e a sua magnitude depende das características e movimentos de ambos os corpos (Zatsiorsky, 2020).</div>
    <div class="detail-row"><span class="detail-key">Relação com a saúde</span><span class="detail-val">Inversamente relacionada com a morte prematura</span></div>
    <div class="detail-row"><span class="detail-key">Aptidão física</span><span class="detail-val">Componente essencial da performance atlética</span></div>
  </div>

  <p class="section-label">10 Fatores que Influenciam a Produção de Força</p>
  <div class="param-grid">
    <div class="param-card"><div class="icon">🧠</div><h4>1. Nº de UM recrutadas</h4><p>Maior recrutamento de unidades motoras = maior força produzida</p></div>
    <div class="param-card"><div class="icon">⚡</div><h4>2. Frequência de disparo</h4><p>Disparos mais frequentes das UM aumentam a força gerada</p></div>
    <div class="param-card"><div class="icon">🔄</div><h4>3. Sincronização das UM</h4><p>Disparo simultâneo de várias UM amplifica a força total</p></div>
    <div class="param-card"><div class="icon">🌀</div><h4>4. Ciclo A-E (CAE)</h4><p>Fase excêntrica potencia a concêntrica em 15–20%</p></div>
    <div class="param-card"><div class="icon">🔒</div><h4>5. Inibição neuromuscular</h4><p>Fuso neuromuscular e órgão tendinoso de Golgi (OTG)</p></div>
    <div class="param-card"><div class="icon">🧬</div><h4>6. Tipo de fibras</h4><p>Fibras tipo II (rápidas) produzem mais força; tipo I são mais resistentes</p></div>
    <div class="param-card"><div class="icon">💪</div><h4>7. Hipertrofia muscular</h4><p>Maior secção transversal do músculo = maior produção de força</p></div>
    <div class="param-card"><div class="icon">🎂</div><h4>8. Idade</h4><p>Pico de força por volta dos 25–35 anos; declínio gradual a seguir</p></div>
    <div class="param-card"><div class="icon">🥗</div><h4>9. Nutrição</h4><p>Substratos energéticos e proteínas essenciais para manutenção muscular</p></div>
    <div class="param-card"><div class="icon">🔬</div><h4>10. Estado hormonal</h4><p>Testosterona, GH e IGF (anabólicos) — pico na puberdade</p></div>
  </div>

  <p class="section-label">Tipos de Força</p>
  <div class="cap-grid">
    <div class="cap-card">
      <div class="badge badge-coral">Força máxima</div>
      <div class="cap-item">Carga máxima que o músculo consegue suportar</div>
      <div class="cap-item">Cargas máximas → esforços máximos</div>
      <div class="cap-item">Inclui força geral e força específica da modalidade</div>
    </div>
    <div class="cap-card">
      <div class="badge badge-purple">Potência</div>
      <div class="cap-item">Equilíbrio ótimo entre carga e velocidade</div>
      <div class="cap-item">Cargas submáximas a velocidades máximas</div>
      <div class="cap-item">Ponto ótimo da curva força-velocidade</div>
    </div>
    <div class="cap-card">
      <div class="badge badge-teal">Resistência muscular</div>
      <div class="cap-item">Carga baixa mantida durante um período prolongado</div>
      <div class="cap-item">Cargas submáximas até à fadiga</div>
      <div class="cap-item">Esforços repetidos ao longo do tempo</div>
    </div>
    <div class="cap-card">
      <div class="badge badge-blue">Absoluta vs. Relativa</div>
      <div class="cap-item">Absoluta: valor total de força independentemente do peso</div>
      <div class="cap-item">Relativa: força absoluta ÷ peso corporal</div>
      <div class="cap-item">Relativa útil para comparação entre atletas de pesos diferentes</div>
    </div>
  </div>

  <p class="section-label">Ações Musculares</p>
  <div class="ex-grid">
    <div class="ex-card" style="background:#E1F5EE;border-color:#1D9E75">
      <div class="badge badge-teal">Concêntrica</div>
      <h4>Resistência &lt; Força produzida</h4>
      <p>Há encurtamento muscular e aproximação das inserções. Menos lesiva, menos eficiente, menos trabalho produzido. Ex: subir uma caixa.</p>
    </div>
    <div class="ex-card" style="background:#E6F1FB;border-color:#378ADD">
      <div class="badge badge-blue">Isométrica</div>
      <h4>Resistência = Força produzida</h4>
      <p>Não há alteração do comprimento muscular nem movimento articular. Não há aproximação nem afastamento das inserções. Ex: segurar um peso parado.</p>
    </div>
    <div class="ex-card" style="background:#FAECE7;border-color:#D85A30">
      <div class="badge badge-coral">Excêntrica</div>
      <h4>Resistência &gt; Força produzida</h4>
      <p>Há alongamento e afastamento das inserções. Mais lesiva, mais eficiente, mais trabalho produzido por fibra. Ex: descer uma escada a travar.</p>
    </div>
  </div>
  <div class="alert-box" style="border-left-color:#D85A30"><strong>Regra mnemónica:</strong> excêntrica = mais (+) eficiente, mais (+) trabalho, mais (+) lesiva. Concêntrica = menos (−) eficiente, menos (−) trabalho, menos (−) lesiva.</div></div>

<div id="sec-prescricao" class="content-section"><p class="section-label">Prescrição</p>
<p class="section-label">Tabela de Prescrição por Objetivo</p>
  <div class="card">
    <div style="font-size:13px;line-height:1.6;margin-bottom:.75rem;color:var(--color-text-secondary)">Os diferentes estímulos geram diferentes adaptações. A escolha da carga, repetições e recuperação determina o objetivo do treino.</div>
    <div class="detail-row"><span class="detail-key">Variável</span><span class="detail-val" style="display:grid;grid-template-columns:repeat(4,1fr);gap:4px;text-align:center;min-width:60%"><span style="color:#D85A30">Força Máx.</span><span style="color:#7F77DD">Potência</span><span style="color:#EF9F27">Hipertrofia</span><span style="color:#378ADD">Resistência</span></span></div>
    <div class="detail-row"><span class="detail-key">% da carga máxima</span><span class="detail-val" style="display:grid;grid-template-columns:repeat(4,1fr);gap:4px;text-align:center;min-width:60%"><span>80–90%</span><span>45–55%</span><span>60–80%</span><span>40–60%</span></span></div>
    <div class="detail-row"><span class="detail-key">Repetições</span><span class="detail-val" style="display:grid;grid-template-columns:repeat(4,1fr);gap:4px;text-align:center;min-width:60%"><span>1–5</span><span>1–5</span><span>6–12</span><span>15–60</span></span></div>
    <div class="detail-row"><span class="detail-key">Séries</span><span class="detail-val" style="display:grid;grid-template-columns:repeat(4,1fr);gap:4px;text-align:center;min-width:60%"><span>4–7</span><span>3–5</span><span>4–8</span><span>2–4</span></span></div>
    <div class="detail-row"><span class="detail-key">Pausa entre séries</span><span class="detail-val" style="display:grid;grid-template-columns:repeat(4,1fr);gap:4px;text-align:center;min-width:60%"><span>2–6 min</span><span>2–6 min</span><span>2–5 min</span><span>1–2 min</span></span></div>
    <div class="detail-row"><span class="detail-key">Vel. repetição (% máx.)</span><span class="detail-val" style="display:grid;grid-template-columns:repeat(4,1fr);gap:4px;text-align:center;min-width:60%"><span>60–100%</span><span>90–100%</span><span>60–90%</span><span>60–80%</span></span></div>
    <div class="detail-row"><span class="detail-key">Treinos por semana</span><span class="detail-val" style="display:grid;grid-template-columns:repeat(4,1fr);gap:4px;text-align:center;min-width:60%"><span>3–6</span><span>3–6</span><span>5–7</span><span>8–14</span></span></div>
  </div>

  <p class="section-label">Resumo de Cada Objetivo</p>
  <div class="carga-wrap">
    <div class="carga-card" style="border-color:#D85A30">
      <div class="badge badge-coral">Força Máxima</div>
      <h4>80–90% carga · 1–5 reps · 4–7 séries</h4>
      <p>Foco no recrutamento máximo de unidades motoras. Pausas longas (2–6 min) para recuperação completa do sistema nervoso.</p>
      <div class="ex">Objetivo: aumentar a capacidade de produção de força bruta</div>
    </div>
    <div class="carga-card" style="border-color:#7F77DD">
      <div class="badge badge-purple">Potência</div>
      <h4>45–55% carga · 1–5 reps · 3–5 séries</h4>
      <p>Cargas submáximas a velocidade máxima (90–100%). Ponto ótimo da curva força-velocidade.</p>
      <div class="ex">Objetivo: maximizar a taxa de produção de força (RFD)</div>
    </div>
  </div>
  <div class="carga-wrap">
    <div class="carga-card" style="border-color:#EF9F27">
      <div class="badge badge-amber">Hipertrofia</div>
      <h4>60–80% carga · 6–12 reps · 4–8 séries</h4>
      <p>Zona metabólica que maximiza o stress mecânico e a síntese proteica. Frequência alta (5–7 dias/sem).</p>
      <div class="ex">Objetivo: aumentar a secção transversal do músculo</div>
    </div>
    <div class="carga-card" style="border-color:#378ADD">
      <div class="badge badge-blue">Resistência Muscular</div>
      <h4>40–60% carga · 15–60 reps · 2–4 séries</h4>
      <p>Cargas baixas com muitas repetições. Pausas curtas (1–2 min). Alta frequência semanal (8–14 sessões).</p>
      <div class="ex">Objetivo: prolongar a capacidade de sustentar esforço muscular</div>
    </div>
  </div>
  <div class="alert-box"><strong>Princípio-chave:</strong> carga elevada + poucas reps = força/potência. Carga média + reps intermédias = hipertrofia. Carga baixa + muitas reps = resistência muscular. Os diferentes estímulos geram diferentes adaptações.</div></div>

<div id="sec-avaliacao" class="content-section"><p class="section-label">Avaliação</p>
<p class="section-label">Testes de Avaliação da Força</p>
  <div class="cap-grid">
    <div class="cap-card" style="border-color:#378ADD">
      <div class="badge badge-blue">1 — Testes Isométricos</div>
      <div class="cap-item" style="font-weight:500">Dinamómetro · 3–4 repetições · regista-se o melhor</div>
      <div class="cap-item">✅ Vantagem: simples, seguro e reprodutível</div>
      <div class="cap-item">❌ Desvantagem: custo elevado; necessita teste em vários ângulos articulares</div>
    </div>
    <div class="cap-card" style="border-color:#1D9E75">
      <div class="badge badge-teal">2 — Isoinerciais (Pesos Livres)</div>
      <div class="cap-item" style="font-weight:500">1RM direto ou estimado (3–10 reps)</div>
      <div class="cap-item">✅ Vantagem: baixo custo; força aplicada de forma dinâmica e específica</div>
      <div class="cap-item">❌ Desvantagem: risco de lesão; exige técnica consolidada</div>
    </div>
    <div class="cap-card" style="border-color:#7F77DD">
      <div class="badge badge-purple">3 — Testes Isocinéticos</div>
      <div class="cap-item" style="font-weight:500">Velocidade constante · resistência variável</div>
      <div class="cap-item">✅ Vantagem: curva de força completa; deteta assimetrias membro a membro e agonista-antagonista</div>
      <div class="cap-item">❌ Desvantagem: equipamento volumoso e muito dispendioso</div>
    </div>
    <div class="cap-card" style="border-color:#EF9F27">
      <div class="badge badge-amber">4 — Resistência Variável (Máquinas)</div>
      <div class="cap-item" style="font-weight:500">Polia com resistência ajustada ao ângulo articular</div>
      <div class="cap-item">✅ Vantagem: simula padrões de movimento desportivo; menos tempo</div>
      <div class="cap-item">❌ Desvantagem: alto custo; normalmente necessárias várias máquinas</div>
    </div>
  </div>

  <p class="section-label">Avaliação da Força Rápida / Reativa</p>
  <div class="card">
    <div style="font-size:13px;line-height:1.6;margin-bottom:.5rem">Pretende avaliar a capacidade de aplicar força rapidamente num movimento dinâmico (tapete de força). Os dois testes principais distinguem-se pela presença ou ausência do ciclo alongamento-encurtamento.</div>
  </div>
  <div class="carga-wrap">
    <div class="carga-card" style="border-color:#1D9E75">
      <div class="badge badge-teal">Squat Jump (SJ)</div>
      <h4>Ação concêntrica pura</h4>
      <p>Partida de posição estática em agachamento. Sem contramovimento. Avalia apenas a ação concêntrica dos extensores.</p>
      <div class="ex">O que mede: potência concêntrica pura sem contribuição elástica</div>
    </div>
    <div class="carga-card" style="border-color:#7F77DD">
      <div class="badge badge-purple">Countermovement Jump (CMJ)</div>
      <h4>Ciclo alongamento-encurtamento</h4>
      <p>Inclui um contramovimento (descida rápida antes de saltar). Avalia a capacidade de reutilizar energia elástica.</p>
      <div class="ex">CMJ &gt; SJ = boa utilização do CAE · diferença típica: 10–20%</div>
    </div>
  </div>
  <div class="alert-box" style="border-left-color:#7F77DD"><strong>Nota clínica (isocinéticos):</strong> permitem analisar assimetrias entre membros (ex: direito 51% vs. esquerdo 48%) e desequilíbrios agonista-antagonista (ex: ratio extensores/flexores) que podem indicar risco de lesão.</div>

  <p class="section-label">Avaliação da Flexibilidade</p>
  <div class="two-col">
    <div class="col-card" style="border-color:#1D9E75">
      <div class="badge badge-teal">Métodos Indiretos</div>
      <div class="col-item">Medição linear da ROM (régua ou caixa)</div>
      <div class="col-item">Senta-e-alcança: posteriores da coxa, glúteos, lombar</div>
      <div class="col-item">Teste dos ombros: diferença entre os dedos médios atrás das costas</div>
      <div class="col-item">Simples de aplicar em contexto de terreno/campo</div>
    </div>
    <div class="col-card" style="border-color:#378ADD">
      <div class="badge badge-blue">Métodos Diretos</div>
      <div class="col-item">Goniómetro: mede o ângulo articular real</div>
      <div class="col-item">Aplicável a qualquer articulação do corpo</div>
      <div class="col-item">Maior precisão e especificidade articular</div>
      <div class="col-item">⚠️ Flexibilidade é articulação-específica: boa ROM num segmento não implica boa ROM noutro</div>
    </div>
  </div></div>

<div id="sec-flexibilidade" class="content-section"><p class="section-label">Flexibilidade</p>
<p class="section-label">Flexibilidade — Conceito</p>
  <div class="card">
    <div style="font-size:13px;line-height:1.6;margin-bottom:.5rem">Capacidade de realizar movimentos de grande <strong>amplitude articular (ROM)</strong> em torno de uma articulação, por ação de contração muscular voluntária ou de forças externas. A flexibilidade é <strong>articulação-específica</strong> — boa amplitude num segmento não implica boa amplitude noutro.</div>
    <div class="detail-row"><span class="detail-key">Mulheres vs. homens</span><span class="detail-val">Mulheres têm maior ROM (menor testosterona → menor tónus)</span></div>
    <div class="detail-row"><span class="detail-key">Momento ideal de treino</span><span class="detail-val">Antes do pico de velocidade de crescimento (maior lascidez articular)</span></div>
  </div>

  <p class="section-label">Fatores Determinantes</p>
  <div class="param-grid">
    <div class="param-card"><div class="icon">🦴</div><h4>Estrutura articular</h4><p>Forma dos ossos e geometria da articulação limitam a ROM máxima possível</p></div>
    <div class="param-card"><div class="icon">💪</div><h4>Elasticidade muscular</h4><p>Dimensão e elasticidade do músculo e tecido conjuntivo (fáscia)</p></div>
    <div class="param-card"><div class="icon">🌡️</div><h4>Temperatura</h4><p>Maior temperatura corporal → maior elasticidade → maior ROM</p></div>
    <div class="param-card"><div class="icon">🔋</div><h4>Fadiga</h4><p>Fadiga reduz a capacidade de controlo muscular e pode alterar o ROM</p></div>
    <div class="param-card"><div class="icon">🎂</div><h4>Idade e maturação</h4><p>Flexibilidade tende a diminuir com o envelhecimento (se não for treinada)</p></div>
    <div class="param-card"><div class="icon">⚖️</div><h4>Composição corporal</h4><p>Excesso de massa adiposa ou muscular pode limitar a amplitude articular</p></div>
  </div>

  <p class="section-label">Benefícios do Treino de Flexibilidade</p>
  <div class="two-col">
    <div class="col-card" style="border-color:#1D9E75">
      <h4>Benefícios bem estabelecidos</h4>
      <div class="col-item">Preservação da funcionalidade e mobilidade articular</div>
      <div class="col-item">Redução do desconforto muscular pós-exercício</div>
      <div class="col-item">Alívio da dor e redução da espasticidade muscular</div>
      <div class="col-item">Relaxamento e melhoria da circulação sanguínea</div>
      <div class="col-item">Melhoria da postura e equilíbrio</div>
    </div>
    <div class="col-card" style="border-color:#EF9F27">
      <h4>Benefícios para a performance</h4>
      <div class="col-item">Maior amplitude de passada e economia de movimento</div>
      <div class="col-item">Potenciação do CAE (maior ROM → mais tempo de aplicação de força)</div>
      <div class="col-item">Prevenção de lesão: ⚠️ evidência ainda limitada</div>
      <div class="col-item">Excesso de lascidez sem força pode aumentar o risco de lesão</div>
    </div>
  </div>

  <p class="section-label">Estruturas de Controlo Neuromuscular</p>
  <div class="carga-wrap">
    <div class="carga-card" style="border-color:#1D9E75">
      <div class="badge badge-teal">Fuso Neuromuscular</div>
      <h4>Sensível ao comprimento (alongamento)</h4>
      <p>Localizado dentro do músculo (intrafusal). Deteta alterações no comprimento muscular. Ativa o músculo agonista e inibe o antagonista.</p>
      <div class="ex">→ Reflexo miotático (de estiramento / arco reflexo). Ex: reflexo patelar no joelho.</div>
    </div>
    <div class="carga-card" style="border-color:#D85A30">
      <div class="badge badge-coral">Órgão Tendinoso de Golgi (OTG)</div>
      <h4>Sensível à tensão (força)</h4>
      <p>Localizado na junção músculo-tendão (extrafusal). Deteta tensão excessiva. Inibe o agonista e ativa o antagonista.</p>
      <div class="ex">→ Inibição autogénica. Sistema de segurança contra rotura muscular. Base do método PNF.</div>
    </div>
  </div>

  <p class="section-label">Métodos de Treino da Flexibilidade</p>
  <div class="struct-grid">
    <div class="struct-item">
      <div class="icon">🤝</div>
      <h4>Passivo</h4>
      <p>Força externa (parceiro ou aparelho) para aumentar a amplitude articular</p>
    </div>
    <div class="struct-item">
      <div class="icon">🧘</div>
      <h4>Estático</h4>
      <p>Manter posição na amplitude máxima durante 15–30 segundos</p>
    </div>
    <div class="struct-item">
      <div class="icon">🏃</div>
      <h4>Balístico</h4>
      <p>Movimentos rápidos de impulsos e balanços. Importante para ações cíclicas. Maior risco de lesão.</p>
    </div>
    <div class="struct-item" style="border-color:#1D9E75;background:#E1F5EE">
      <div class="icon">⭐</div>
      <h4>FNP / PNF</h4>
      <p>Método mais eficaz segundo a literatura. Usa o OTG e inibição autogénica.</p>
    </div>
  </div>

  <p class="section-label">Protocolo FNP passo a passo</p>
  <div class="card" style="border-color:#1D9E75">
    <div class="detail-row"><span class="detail-key">Passo 1</span><span class="detail-val">Extensão/alongamento até sentir tensão (~10s com ajuda externa)</span></div>
    <div class="detail-row"><span class="detail-key">Passo 2</span><span class="detail-val">Contração isométrica contrária assistida (3–10s) → ativa o OTG</span></div>
    <div class="detail-row"><span class="detail-key">Passo 3</span><span class="detail-val">Aproveitar o relaxamento do OTG e alongar mais (20–30s)</span></div>
    <div class="detail-row"><span class="detail-key">Passo 4</span><span class="detail-val">Recuperação de 30s e repetir 3–5 vezes</span></div>
  </div>
  <div class="alert-box"><strong>Porquê o FNP funciona:</strong> a contração isométrica ativa o OTG → inibição autogénica do agonista → músculo relaxa → é possível alongar além do limite anterior. O ciclo repete-se até atingir o limite de tolerância de alongamento.</div></div>

<div id="sec-cae" class="content-section"><p class="section-label">CAE</p>
<p class="section-label">Ciclo Alongamento-Encurtamento (CAE)</p>
  <div class="card">
    <div style="font-size:13px;line-height:1.6;margin-bottom:.5rem">Importante fenómeno biomecânico do sistema neuromuscular. Quando o músculo é alongado antes de encurtar (fase excêntrica antes de concêntrica), a ação concêntrica subsequente é <strong>potenciada em 15–20%</strong> graças ao armazenamento e reutilização de energia elástica.</div>
    <div class="detail-row"><span class="detail-key">Base física</span><span class="detail-val">Lei de Hooke: deformação proporcional à força aplicada</span></div>
    <div class="detail-row"><span class="detail-key">Estrutura-chave</span><span class="detail-val">Rigidez do tendão → armazenamento e reutilização de energia elástica</span></div>
    <div class="detail-row"><span class="detail-key">Reflexo associado</span><span class="detail-val">Reflexo de estiramento (fuso) aumenta a rigidez muscular durante o CAE</span></div>
    <div class="detail-row"><span class="detail-key">Desenvolvimento</span><span class="detail-val">Exercícios pliométricos (ex: Drop Jump, CMJ, saltos em profundidade)</span></div>
  </div>

  <p class="section-label">As 3 Fases do CAE</p>
  <div class="ex-grid">
    <div class="ex-card" style="background:#E6F1FB;border-color:#378ADD">
      <div class="badge badge-blue">Fase 1 — Pré-ativação</div>
      <h4>Preparação neural</h4>
      <p>O sistema nervoso ativa o músculo antes do contacto com o solo. Aumenta a rigidez muscular para suportar o impacto e armazenar energia elástica.</p>
    </div>
    <div class="ex-card" style="background:#FAECE7;border-color:#D85A30">
      <div class="badge badge-coral">Fase 2 — Alongamento ativo</div>
      <h4>Armazenamento de energia</h4>
      <p>Fase excêntrica: o músculo e tendão são deformados. A energia elástica é armazenada como numa mola comprimida (Lei de Hooke). O fuso ativa o reflexo de estiramento.</p>
    </div>
    <div class="ex-card" style="background:#E1F5EE;border-color:#1D9E75">
      <div class="badge badge-teal">Fase 3 — Encurtamento</div>
      <h4>Reutilização da energia</h4>
      <p>Fase concêntrica imediatamente a seguir. A energia elástica é libertada amplificando a força concêntrica em 15–20%. Quanto mais rápida a transição, mais energia é aproveitada.</p>
    </div>
  </div>

  <p class="section-label">Relação Força-Flexibilidade</p>
  <div class="carga-wrap">
    <div class="carga-card" style="border-color:#1D9E75">
      <div class="badge badge-teal">Força estabiliza</div>
      <h4>Controlo muscular da ROM</h4>
      <p>Aumentar o ROM é inútil se esse alcance não estiver sob controlo do SNC e se os músculos não forem fortes o suficiente para controlar a posição (Cardinale et al., 2011).</p>
      <div class="ex">Um músculo forte deve "disparar" no momento certo e na quantidade certa</div>
    </div>
    <div class="carga-card" style="border-color:#7F77DD">
      <div class="badge badge-purple">Flexibilidade potencia</div>
      <h4>ROM maior = mais tempo de força</h4>
      <p>Uma ROM maior permite prolongar o tempo de aplicação de força, aumentando o impulso. Importante para o trabalho de potência e para maximizar o CAE.</p>
      <div class="ex">A unidade músculo-tendão é sensível ao tipo de tarefa e à intensidade do CAE</div>
    </div>
  </div>
  <div class="alert-box" style="border-left-color:#7F77DD"><strong>Conclusão integradora:</strong> Força sem flexibilidade = perda de amplitude e potência. Flexibilidade sem força = instabilidade e risco de lesão. O equilíbrio entre as duas é gerido pelo sistema nervoso central e é fundamental para a performance e prevenção de lesão.</div></div>`,
  flashcards: [
    {
      "question": "Qual a diferença entre força absoluta e força relativa?",
      "answer": "Força absoluta: valor total de força produzida independentemente do peso corporal.\nForça relativa: força absoluta dividida pelo peso corporal. Útil para comparar atletas de diferentes categorias de peso."
    },
    {
      "question": "Quais os 10 fatores que influenciam a produção de força?",
      "answer": "1) Nº de UM recrutadas\n2) Frequência de disparo das UM\n3) Sincronização das UM\n4) Uso do CAE (energia elástica)\n5) Inibição neuromuscular (fuso + OTG)\n6) Tipo de fibras (I vs. II)\n7) Hipertrofia muscular\n8) Idade\n9) Nutrição\n10) Estado hormonal (testosterona, GH, IGF)"
    },
    {
      "question": "Compara as 3 ações musculares (concêntrica, isométrica, excêntrica) em termos de lesividade, eficiência e trabalho.",
      "answer": "Concêntrica: resistência < força · aproximação das inserções · menos lesiva · menos eficiente · menos trabalho.\nIsométrica: resistência = força · sem movimento · sem lesão típica.\nExcêntrica: resistência > força · afastamento das inserções · mais lesiva · mais eficiente · mais trabalho por fibra."
    },
    {
      "question": "Quais os parâmetros de treino para hipertrofia?",
      "answer": "60–80% da carga máxima · 6–12 repetições · 4–8 séries · pausa 2–5 min · velocidade 60–90% da máxima · 5–7 treinos por semana."
    },
    {
      "question": "Quais os parâmetros de treino para potência?",
      "answer": "45–55% da carga máxima · 1–5 repetições · 3–5 séries · pausa 2–6 min · velocidade máxima (90–100%) · 3–6 treinos por semana."
    },
    {
      "question": "Qual a principal vantagem e desvantagem dos testes isocinéticos?",
      "answer": "Vantagem: resistência variável conforme o ângulo articular; fornece a curva de força completa; deteta assimetrias membro a membro e desequilíbrios agonista-antagonista.\nDesvantagem: equipamento muito dispendioso e não portátil."
    },
    {
      "question": "Qual a diferença entre o Squat Jump e o Countermovement Jump?",
      "answer": "Squat Jump (SJ): partida de posição estática em agachamento, sem contramovimento — avalia ação concêntrica pura.\nCountermovement Jump (CMJ): inclui descida rápida antes de saltar — avalia o ciclo alongamento-encurtamento (CAE).\nSe CMJ > SJ, o atleta utiliza bem o CAE."
    },
    {
      "question": "O que é o fuso neuromuscular e que reflexo desencadeia?",
      "answer": "Órgão sensorial intrafusal (dentro do músculo), sensível ao comprimento (alongamento). Quando o músculo é alongado, ativa reflexamente o agonista e inibe o antagonista.\nDesencadeia o reflexo miotático (de estiramento / arco reflexo). Ex: reflexo patelar."
    },
    {
      "question": "O que é o Órgão Tendinoso de Golgi (OTG) e que processo desencadeia?",
      "answer": "Órgão sensorial extrafusal (nos tendões, na junção músculo-tendão), sensível à tensão gerada. Quando a tensão é excessiva, inibe o músculo agonista e ativa o antagonista.\nDesencadeia a inibição autogénica — sistema de proteção contra rotura muscular."
    },
    {
      "question": "Explica o protocolo FNP (PNF) passo a passo.",
      "answer": "1) Alongar com ajuda externa até sentir tensão (~10s)\n2) Contração isométrica contrária assistida (3–10s) → ativa o OTG\n3) Aproveitar o relaxamento e alongar mais (20–30s) → supera o limite anterior\n4) Recuperação 30s e repetir 3–5 vezes.\nBase: a contração ativa o OTG → inibição autogénica → músculo relaxa → mais ROM."
    },
    {
      "question": "Porquê é que o método FNP é o mais eficaz para a flexibilidade?",
      "answer": "Porque utiliza a inibição autogénica do OTG: a contração isométrica contrária ativa o OTG, que inibe o agonista (relaxa o músculo a ser alongado), permitindo ultrapassar a barreira reflexa do fuso e atingir uma amplitude maior do que com os outros métodos."
    },
    {
      "question": "O que é o Ciclo Alongamento-Encurtamento (CAE)?",
      "answer": "Fenómeno biomecânico em que uma fase excêntrica (alongamento ativo) potencia em 15–20% a ação concêntrica seguinte, graças ao armazenamento e reutilização de energia elástica nos tendões e músculos. Baseia-se na Lei de Hooke."
    },
    {
      "question": "Quais as 3 fases do CAE e o que acontece em cada uma?",
      "answer": "1) Pré-ativação: ativação neural antes do impacto para aumentar a rigidez muscular\n2) Alongamento ativo (excêntrico): músculo e tendão deformam-se e armazenam energia elástica (como uma mola); o fuso desencadeia reflexo de estiramento\n3) Encurtamento (concêntrico): energia elástica é libertada, amplificando a força em 15–20%"
    },
    {
      "question": "Qual a relação entre força e flexibilidade?",
      "answer": "Força estabiliza a articulação e controla a ROM. Flexibilidade potencia a produção de força (maior ROM = mais tempo de aplicação de força = maior impulso).\nAumentar o ROM sem controlo muscular (força) aumenta o risco de lesão. O equilíbrio é gerido pelo SNC (Cardinale et al., 2011)."
    },
    {
      "question": "Quais os fatores determinantes da flexibilidade?",
      "answer": "Estrutura articular · Dimensão e elasticidade muscular · Temperatura corporal · Força e tónus muscular · Fadiga · Idade, crescimento e maturação · Sexo (mulheres têm maior ROM) · Composição corporal."
    },
    {
      "question": "Quais os 4 métodos de treino da flexibilidade por ordem de eficácia?",
      "answer": "1) FNP/PNF — mais eficaz (usa inibição autogénica do OTG)\n2) Estático — manter 15–30s na amplitude máxima\n3) Passivo — força externa (parceiro ou aparelho)\n4) Balístico — impulsos e balanços rápidos (maior risco de lesão; útil para ações cíclicas)"
    },
    {
      "question": "O que distingue a avaliação indireta da direta para a flexibilidade?",
      "answer": "Indireta: mede linearmente a ROM com régua/caixa (senta-e-alcança, teste dos ombros). Simples, aplicável no terreno, mas apenas informa sobre segmentos específicos.\nDireta: goniómetro mede o ângulo articular real. Maior precisão, aplicável a qualquer articulação."
    },
    {
      "question": "Porquê que um atleta balístico ou muito flexível pode ter maior risco de lesão?",
      "answer": "Excesso de lascidez articular sem controlo muscular (força) suficiente pode aumentar o risco de lesão. A ROM alargada precisa de estar sob controlo do SNC e os músculos que controlam o movimento têm de ser suficientemente fortes para controlar a posição nos novos ângulos articulares."
    }
  ],
  quiz: [
    {
      "question": "Qual das seguintes ações musculares é a MAIS eficiente e a MAIS lesiva?",
      "options": [
        "Concêntrica",
        "Isométrica",
        "Excêntrica",
        "Pliométrica"
      ],
      "correct": 2
    },
    {
      "question": "Para treinar potência, qual a percentagem da carga máxima recomendada?",
      "options": [
        "80–90%",
        "60–80%",
        "45–55%",
        "20–30%"
      ],
      "correct": 2
    },
    {
      "question": "O Squat Jump difere do Countermovement Jump porque:",
      "options": [
        "Usa uma carga externa",
        "Não tem fase excêntrica — avalia ação concêntrica pura",
        "É realizado em água",
        "Mede apenas resistência muscular"
      ],
      "correct": 1
    },
    {
      "question": "O fuso neuromuscular é ativado por:",
      "options": [
        "Tensão excessiva no tendão",
        "Alterações no comprimento muscular (alongamento)",
        "Temperatura elevada do músculo",
        "Fadiga metabólica"
      ],
      "correct": 1
    },
    {
      "question": "O método de flexibilidade mais eficaz segundo a literatura é:",
      "options": [
        "Estático",
        "Passivo",
        "Balístico",
        "FNP / PNF"
      ],
      "correct": 3
    },
    {
      "question": "No protocolo FNP, o que acontece na segunda fase (contração isométrica contrária)?",
      "options": [
        "Ativa o fuso neuromuscular e provoca contração do agonista",
        "Ativa o OTG e causa inibição autogénica do agonista, permitindo mais ROM",
        "Aumenta a temperatura do músculo para facilitar o alongamento",
        "Desativa o sistema nervoso simpático"
      ],
      "correct": 1
    },
    {
      "question": "O Ciclo Alongamento-Encurtamento (CAE) potencia a ação concêntrica em que percentagem?",
      "options": [
        "5–10%",
        "15–20%",
        "30–40%",
        "50%"
      ],
      "correct": 1
    },
    {
      "question": "A Lei de Hooke, base do CAE, indica que:",
      "options": [
        "A força muscular é independente do comprimento muscular",
        "A deformação de um objeto é diretamente proporcional à força aplicada sobre ele",
        "O OTG inibe o agonista quando há tensão excessiva",
        "A frequência de disparo das UM determina a força produzida"
      ],
      "correct": 1
    },
    {
      "question": "Qual a principal vantagem dos testes isocinéticos face aos testes com pesos livres?",
      "options": [
        "Menor custo e mais portáteis",
        "Permitem analisar assimetrias e desequilíbrios musculares em toda a amplitude articular",
        "São mais fáceis de realizar sem técnica consolidada",
        "Podem ser feitos em qualquer ginásio"
      ],
      "correct": 1
    },
    {
      "question": "Qual a diferença entre força absoluta e força relativa?",
      "options": [
        "Absoluta usa kg; relativa usa Newton",
        "Absoluta é a força total produzida; relativa é a força dividida pelo peso corporal",
        "Absoluta é medida com dinamómetro; relativa com isocinético",
        "São sinónimos com unidades diferentes"
      ],
      "correct": 1
    },
    {
      "question": "Qual das seguintes afirmações sobre flexibilidade está INCORRETA?",
      "options": [
        "A flexibilidade é articulação-específica",
        "Uma boa ROM num segmento implica boa ROM em todos os outros",
        "Mulheres tendem a ter maior ROM do que homens",
        "O excesso de lascidez sem força pode aumentar o risco de lesão"
      ],
      "correct": 1
    },
    {
      "question": "A inibição autogénica é desencadeada por:",
      "options": [
        "O fuso neuromuscular quando o músculo é alongado",
        "O OTG quando há tensão excessiva na junção músculo-tendão",
        "O hipocampo em resposta a dor muscular",
        "A fadiga metabólica após esforço prolongado"
      ],
      "correct": 1
    }
  ],
});
