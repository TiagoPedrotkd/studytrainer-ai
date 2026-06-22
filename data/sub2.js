/**
 * Gerado automaticamente por scripts/import-unit.js
 * Fonte: d:/Treinador_Curso/Resumos/SubUnidade1_V2.html
 *
 * Para actualizar: edita o HTML fonte e corre «npm run import»
 * Para flashcards/quiz extra: adiciona em imports/units.json → extraFlashcards / extraQuiz
 */

window.STUDY_SUBUNITS = window.STUDY_SUBUNITS || [];
window.STUDY_SUBUNITS = window.STUDY_SUBUNITS.filter((s) => s.id !== 'sub2');

window.STUDY_SUBUNITS.push({
  id: 'sub2',
  number: 2,
  title: "Sistemas Energéticos",
  description: "ATP-PCr, glicolítico, oxidativo, domínios de intensidade, limiares e unidades motoras.",
  contentHtml: `<p class="section-label">Sistemas Energéticos</p>

  <div class="card" style="margin-bottom:.75rem">
    <div class="card-title">Pré-requisito energético</div>
    <div class="card-sub">A energia é indispensável ao movimento no treino e competição. A quantidade de <strong>ATP armazenado no músculo é limitada</strong> — o corpo repõe ATP por <strong>3 sistemas</strong>, com contributo distinto consoante intensidade e duração (Gastin, 2001).</div>
  </div>

  <div style="position:relative">
    <div class="timeline">
      <div class="tl-item">
        <div class="tl-dot teal"></div>
        <div class="tl-time">0 → 10 segundos</div>
        <div class="tl-title">Sistema ATP-PCr <span class="badge badge-teal" style="margin-left:6px">Fosfagénio anaeróbio</span></div>
        <div class="tl-desc">Ressíntese de ATP: ADP + <strong>fosfocreatina (PCr)</strong>. Depleção da PCr em ~10 s de esforço máximo. Exemplos: sprints, arremessos, saltos. Recuperação ATP: 70% em 30 s / 100% em 3–5 min. Recuperação completa da PCr: ~8 min. Sem O₂, sem lactato.</div>
      </div>
      <div class="tl-item">
        <div class="tl-dot amber"></div>
        <div class="tl-time">20 segundos → 2 minutos</div>
        <div class="tl-title">Sistema Glicolítico <span class="badge badge-amber" style="margin-left:6px">Anaeróbio</span></div>
        <div class="tl-desc">Fontes: <strong>glicose sanguínea</strong> (2 ATP) e <strong>glicogénio</strong> muscular/hepático (3 ATP). Piruvato → mitocôndrias (oxidativo) ou lactato → fígado (glicose) / músculo cardíaco. Ressíntese glicogénio: 20–24 h — <strong>2 h pós-exercício = janela de oportunidade</strong> para acelerar ressíntese.</div>
      </div>
      <div class="tl-item">
        <div class="tl-dot blue"></div>
        <div class="tl-time">Acima de 2 minutos</div>
        <div class="tl-title">Sistema Oxidativo <span class="badge badge-blue" style="margin-left:6px">Aeróbio</span></div>
        <div class="tl-desc">Respiração mitocondrial: <strong>Ciclo de Krebs</strong> + <strong>cadeia de transporte de electrões</strong>. Oxida glícidos, lípidos e aminoácidos. Resultado: ATP + H₂O (O₂ = recetor final de hidrogénio). Rendimento: <strong>38 ATP (glicose)</strong> / <strong>39 ATP (glicogénio)</strong>. Maior capacidade, activação mais lenta.</div>
      </div>
    </div>
  </div>

  <p class="section-label">Transição repouso → exercício (Powers &amp; Howley, 2017)</p>
  <div class="card">
    <div class="card-sub">De repouso para exercício leve/moderado, o consumo de O₂ aumenta rapidamente e atinge estado estacionário em <strong>1–4 minutos</strong>. Como o O₂ não sobe instantaneamente, as <strong>vias anaeróbias contribuem no início</strong> do exercício. Atletas treinados atingem o estado estacionário mais depressa → <strong>menor utilização das vias anaeróbias</strong>.</div>
  </div>

  <p class="section-label">Domínios de intensidade (lactato)</p>
  <div class="card">
    <div class="detail-row"><span class="detail-key">Moderado</span><span class="detail-val">Abaixo do limiar láctico (LL)</span></div>
    <div class="detail-row"><span class="detail-key">Pesado</span><span class="detail-val">Abaixo do EEML e acima do LL</span></div>
    <div class="detail-row"><span class="detail-key">Severo</span><span class="detail-val">Acima do estado estacionário máximo de lactato (EEML)</span></div>
  </div>

  <p class="section-label">Comparação rápida</p>
  <div class="compare-grid">
    <div class="compare-card">
      <div class="badge badge-teal">ATP-PCr</div>
      <h3>Fosfagénio</h3>
      <div class="detail">
        <div class="detail-row"><span class="detail-key">Duração</span><span class="detail-val">≤ 10 s</span></div>
        <div class="detail-row"><span class="detail-key">O₂</span><span class="detail-val">Não</span></div>
        <div class="detail-row"><span class="detail-key">Lactato</span><span class="detail-val">Não</span></div>
        <div class="detail-row"><span class="detail-key">ATP</span><span class="detail-val">Poucos</span></div>
        <div class="detail-row"><span class="detail-key">Recuperação</span><span class="detail-val">3–5 min</span></div>
      </div>
    </div>
    <div class="compare-card">
      <div class="badge badge-amber">Glicolítico</div>
      <h3>Anaeróbio</h3>
      <div class="detail">
        <div class="detail-row"><span class="detail-key">Duração</span><span class="detail-val">20 s – 2 min</span></div>
        <div class="detail-row"><span class="detail-key">O₂</span><span class="detail-val">Não</span></div>
        <div class="detail-row"><span class="detail-key">Lactato</span><span class="detail-val">Sim</span></div>
        <div class="detail-row"><span class="detail-key">ATP</span><span class="detail-val">2–3 / molécula</span></div>
        <div class="detail-row"><span class="detail-key">Recuperação</span><span class="detail-val">20–24 h</span></div>
      </div>
    </div>
    <div class="compare-card">
      <div class="badge badge-blue">Oxidativo</div>
      <h3>Aeróbio</h3>
      <div class="detail">
        <div class="detail-row"><span class="detail-key">Duração</span><span class="detail-val">> 2 min</span></div>
        <div class="detail-row"><span class="detail-key">O₂</span><span class="detail-val">Sim</span></div>
        <div class="detail-row"><span class="detail-key">Lactato</span><span class="detail-val">Não</span></div>
        <div class="detail-row"><span class="detail-key">ATP</span><span class="detail-val">38–39</span></div>
        <div class="detail-row"><span class="detail-key">Recuperação</span><span class="detail-val">Horas</span></div>
      </div>
    </div>
  </div>

  <p class="section-label">Zonas de Treino e Limiares</p>
  <div class="card">
    <div class="card-title" style="margin-bottom:.875rem">Intensidade → Lactato → Zona</div>
    <div style="margin-bottom:.75rem">
      <div style="display:flex;justify-content:space-between;font-size:12px;color:var(--color-text-secondary);margin-bottom:4px">
        <span>Leve</span><span>≤ 65% FC máx &nbsp;·&nbsp; lactato estável</span>
      </div>
      <div class="zone-bar"><div class="zone-fill" style="width:40%;background:#9FE1CB"></div></div>
    </div>
    <div style="margin-bottom:.75rem">
      <div style="display:flex;justify-content:space-between;font-size:12px;color:var(--color-text-secondary);margin-bottom:4px">
        <span>Intermédia (VT1)</span><span>65–85% FC máx &nbsp;·&nbsp; ~2 mmol/L lactato</span>
      </div>
      <div class="zone-bar"><div class="zone-fill" style="width:65%;background:#EF9F27"></div></div>
    </div>
    <div>
      <div style="display:flex;justify-content:space-between;font-size:12px;color:var(--color-text-secondary);margin-bottom:4px">
        <span>Elevada (VT2)</span><span>> 85% FC máx &nbsp;·&nbsp; > 4 mmol/L lactato</span>
      </div>
      <div class="zone-bar"><div class="zone-fill" style="width:90%;background:#D85A30"></div></div>
    </div>
  </div>
  <div class="card">
    <div class="detail-row"><span class="detail-key">VT1 — Limiar aeróbio</span><span class="detail-val">≈ 2 mmol/L · Cap. aeróbia 1 (A1)</span></div>
    <div class="detail-row"><span class="detail-key">VT2 — Limiar anaeróbio</span><span class="detail-val">> 4 mmol/L · EEML · Cap. aeróbia 3 (A3)</span></div>
    <div class="detail-row"><span class="detail-key">Entre VT1 e VT2</span><span class="detail-val">Cap. aeróbia 2 (A2) · intensidade pesada</span></div>
    <div class="detail-row"><span class="detail-key">VO₂ máx</span><span class="detail-val">~4 min esforço progressivo · Zona anaeróbia máxima</span></div>
  </div>

  <p class="section-label">Unidade Motora</p>
  <div class="card" style="margin-bottom:.75rem">
    <div class="card-title">Definição e estrutura</div>
    <div class="card-sub">Motoneurónio alfa + todas as fibras que inerva = <strong>unidade motora (UM)</strong>. ~70% das fibras das raízes anteriores são axónios do motoneurónio alfa. A UM liga o SNC ao músculo — base funcional do movimento. <strong>Taxa de inervação</strong> = n.º de fibras por UM (dezenas a milhares). Conjunto de UM de um músculo = <strong>grupo motor</strong>. Sinapse neuromuscular via <strong>acetilcolina</strong> → despolarização → contração.</div>
  </div>
  <div class="alert-box">Todas as fibras de uma UM são do <strong>mesmo tipo</strong>, adaptadas ao tipo de actividade do motoneurónio respectivo.</div>
  <div class="fiber-grid">
    <div class="fiber-card">
      <div class="badge badge-teal">Tipo S</div>
      <h4>Lentas (Tipo I)</h4>
      <div class="fiber-detail">
        Motoneurónios pequenos<br>Axónios finos, condução lenta<br>Limiar baixo · Tipo I<br>Resistentes, baixa força<br>Recrutadas primeiro
      </div>
    </div>
    <div class="fiber-card">
      <div class="badge badge-amber">Tipo FR</div>
      <h4>Intermédias (Tipo IIa)</h4>
      <div class="fiber-detail">
        Motoneurónios grandes<br>Axónios grossos, condução rápida<br>Limiar intermédio · Tipo IIa<br>Contrações rápidas e potentes<br>Boa resistência à fadiga
      </div>
    </div>
    <div class="fiber-card">
      <div class="badge badge-coral">Tipo FF</div>
      <h4>Rápidas (Tipo IIb)</h4>
      <div class="fiber-detail">
        Maiores motoneurónios<br>Axónios mais grossos<br>Limiar alto · Tipo IIb<br>Máxima força e potência<br>Fadiga muito rápida
      </div>
    </div>
  </div>
  <div class="principle-box">
    <div style="font-size:14px;font-weight:500;margin-bottom:.5rem">Princípio de Henneman — Recrutamento progressivo</div>
    <div class="recruit-row">
      <div class="recruit-dot" style="background:#1D9E75"></div>
      <div class="recruit-label"><strong style="font-weight:500">1º</strong> Tipo S (lentas) — sempre ativadas</div>
    </div>
    <div class="recruit-row">
      <div class="recruit-dot" style="background:#EF9F27"></div>
      <div class="recruit-label"><strong style="font-weight:500">2º</strong> Tipo FR (intermédias) — esforços moderados</div>
    </div>
    <div class="recruit-row">
      <div class="recruit-dot" style="background:#D85A30"></div>
      <div class="recruit-label"><strong style="font-weight:500">3º</strong> Tipo FF (rápidas) — esforços máximos</div>
    </div>
    <div style="font-size:12px;color:var(--color-text-secondary);margin-top:.75rem">A força regula-se por: <strong>1)</strong> n.º de UM recrutadas e <strong>2)</strong> frequência de descarga. Henneman (princípio do tamanho): recrutamento do motoneurónio menor para o maior — forma <strong>económica</strong> de funcionamento; poupa fibras rápidas para esforços máximos.</div>
  </div>`,
  flashcards: [
    {
      "question": "Qual sistema energético predomina nos primeiros 10 segundos de esforço?",
      "answer": "Sistema ATP-PCr (Fosfagénio Anaeróbio). Usa fosfocreatina para regenerar ATP de forma muito rápida, sem produzir lactato."
    },
    {
      "question": "Quanto tempo demora a recuperação completa do sistema ATP-PCr?",
      "answer": "3 a 5 minutos para 100% da recuperação. Em apenas 30 segundos já se recupera 70%."
    },
    {
      "question": "Qual é o rendimento em ATP do sistema oxidativo por molécula de glicose vs glicogénio?",
      "answer": "38 ATP por molécula de glicose e 39 ATP por molécula de glicogénio."
    },
    {
      "question": "O que acontece ao piruvato no sistema glicolítico anaeróbio?",
      "answer": "O piruvato pode ser enviado para as mitocôndrias ou convertido em lactato. O lactato é depois convertido em glicose no fígado."
    },
    {
      "question": "O que é o VT1 e que concentração de lactato lhe corresponde?",
      "answer": "VT1 é o limiar ventilatório 1 (limiar aeróbio). Corresponde a ~2 mmol/L de lactato no sangue e a ~65% da FC máxima."
    },
    {
      "question": "O que é o VT2 e o que o caracteriza?",
      "answer": "VT2 é o limiar anaeróbio (ventilatório 2). O lactato ultrapassa os 4 mmol/L e começa acumulação exponencial. Representa o estado estacionário máximo de lactato."
    },
    {
      "question": "Define unidade motora.",
      "answer": "Motoneurónio alfa + todas as fibras musculares que inerva. É a base funcional de toda a contração muscular, com ligação via sinapse química (acetilcolina)."
    },
    {
      "question": "Qual a diferença entre fibras Tipo I e Tipo IIb?",
      "answer": "Tipo I (S/lentas): limiar baixo, resistentes à fadiga, baixa força. Tipo IIb (FF/rápidas): limiar alto, alta força e potência, fatigam rapidamente."
    },
    {
      "question": "Explica o Princípio de Henneman.",
      "answer": "O recrutamento de unidades motoras é progressivo: do menor motoneurónio (Tipo S) para o maior (Tipo FF). As fibras rápidas são poupadas para esforços máximos — estratégia económica do sistema nervoso."
    },
    {
      "question": "Quais os dois mecanismos de regulação da força muscular?",
      "answer": "1) Número de unidades motoras recrutadas. 2) Frequência de descarga do estímulo nervoso (taxa de disparo do motoneurónio)."
    },
    {
      "question": "Quanto tempo demora a recuperação completa da PCr?",
      "answer": "Cerca de 8 minutos (vs. 3–5 min para recuperação completa do ATP)."
    },
    {
      "question": "O que é a janela de oportunidade pós-exercício para o glicogénio?",
      "answer": "As 2 horas após exercício intenso — período em que se pode aumentar significativamente a taxa de ressíntese de glicogénio muscular."
    },
    {
      "question": "Porque as vias anaeróbias são importantes no início do exercício?",
      "answer": "O consumo de O₂ demora 1–4 min a atingir estado estacionário; até lá, as fontes anaeróbias compensam o défice energético."
    },
    {
      "question": "O que é taxa de inervação e grupo motor?",
      "answer": "Taxa de inervação = n.º de fibras musculares inervadas por uma UM (dezenas a milhares). Grupo motor = conjunto de UM de um músculo."
    },
    {
      "question": "Quais os 3 domínios de intensidade baseados no lactato?",
      "answer": "Moderado (abaixo LL), Pesado (abaixo EEML, acima LL), Severo (acima EEML/acumulação máxima de lactato)."
    },
    {
      "question": "Porque é económico o princípio de Henneman?",
      "answer": "Recruta primeiro motoneurónios pequenos (Tipo S) e só activa os maiores (Tipo FF) em esforços máximos — poupa fibras rápidas e resistentes à fadiga."
    }
  ],
  quiz: [
    {
      "question": "Qual sistema energético domina nos 400m planos (~45-50 s)?",
      "options": [
        "ATP-PCr",
        "Glicolítico Anaeróbio",
        "Oxidativo Aeróbio",
        "Todos em igual proporção"
      ],
      "correct": 1
    },
    {
      "question": "A ressíntese completa do glicogénio muscular demora:",
      "options": [
        "30 minutos",
        "3-5 horas",
        "20-24 horas",
        "48-72 horas"
      ],
      "correct": 2
    },
    {
      "question": "O ciclo de Krebs faz parte de qual sistema energético?",
      "options": [
        "ATP-PCr",
        "Glicolítico",
        "Oxidativo Aeróbio",
        "Fosfagénio"
      ],
      "correct": 2
    },
    {
      "question": "Um atleta treina a 70% da FC máxima. Em que zona está?",
      "options": [
        "Zona leve (<65%)",
        "Zona intermédia (65-85%)",
        "Zona elevada (>85%)",
        "Zona anaeróbica"
      ],
      "correct": 1
    },
    {
      "question": "Segundo Henneman, qual é a ordem de recrutamento das fibras musculares?",
      "options": [
        "FF → FR → S",
        "S → FR → FF",
        "FR → S → FF",
        "FF → S → FR"
      ],
      "correct": 1
    },
    {
      "question": "Qual concentração de lactato corresponde ao VT2?",
      "options": [
        "~1 mmol/L",
        "~2 mmol/L",
        "~4 mmol/L",
        "> 8 mmol/L"
      ],
      "correct": 2
    },
    {
      "question": "Que tipo de fibra muscular tem o limiar de recrutamento mais alto?",
      "options": [
        "Tipo I (S)",
        "Tipo IIa (FR)",
        "Tipo IIb (FF)",
        "Todas têm o mesmo limiar"
      ],
      "correct": 2
    },
    {
      "question": "Qual a principal diferença entre glicose sanguínea e glicogénio no sistema glicolítico?",
      "options": [
        "A glicose produz mais lactato",
        "O glicogénio produz 3 ATP e a glicose 2 ATP",
        "A glicose precisa de oxigénio",
        "O glicogénio é mais rápido"
      ],
      "correct": 1
    },
    {
      "question": "Qual neurotransmissor é libertado na sinapse neuromuscular?",
      "options": [
        "Dopamina",
        "Serotonina",
        "Acetilcolina",
        "Noradrenalina"
      ],
      "correct": 2
    },
    {
      "question": "Em que situação as fibras Tipo FF são recrutadas?",
      "options": [
        "Durante corrida leve",
        "Em esforços de baixa intensidade",
        "Apenas em esforços máximos",
        "Durante o sono"
      ],
      "correct": 2
    },
    {
      "question": "O consumo de O₂ atinge estado estacionário em exercício leve/moderado em:",
      "options": [
        "10 segundos",
        "30 segundos",
        "1–4 minutos",
        "20–24 horas"
      ],
      "correct": 2
    },
    {
      "question": "Atletas treinados, comparativamente com sedentários:",
      "options": [
        "Usam mais vias anaeróbias no início",
        "Atingem o estado estacionário de O₂ mais depressa",
        "Produzem menos ATP oxidativo",
        "Recrutam primeiro fibras FF"
      ],
      "correct": 1
    },
    {
      "question": "A recuperação completa da fosfocreatina (PCr) demora cerca de:",
      "options": [
        "30 segundos",
        "3–5 minutos",
        "8 minutos",
        "20–24 horas"
      ],
      "correct": 2
    },
    {
      "question": "O domínio de intensidade «severo» corresponde a:",
      "options": [
        "Abaixo do limiar láctico",
        "Entre VT1 e VT2",
        "Acima do EEML",
        "Apenas repouso"
      ],
      "correct": 2
    }
  ],
});
