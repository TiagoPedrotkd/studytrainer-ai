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
  description: "ATP-PCr, glicolítico, oxidativo, zonas de treino, limiares e unidades motoras.",
  contentHtml: `<p class="section-label">Sistemas Energéticos</p>

  <div style="position:relative">
    <div class="timeline">
      <div class="tl-item">
        <div class="tl-dot teal"></div>
        <div class="tl-time">0 → 10 segundos</div>
        <div class="tl-title">Sistema ATP-PCr <span class="badge badge-teal" style="margin-left:6px">Fosfagénio anaeróbio</span></div>
        <div class="tl-desc">Usa <strong style="font-weight:500">fosfocreatina (PCr)</strong> para regenerar ADP em ATP. Sem oxigénio, sem lactato. Recuperação: 70% em 30 s / 100% em 3–5 min.</div>
      </div>
      <div class="tl-item">
        <div class="tl-dot amber"></div>
        <div class="tl-time">20 segundos → 2 minutos</div>
        <div class="tl-title">Sistema Glicolítico <span class="badge badge-amber" style="margin-left:6px">Anaeróbio</span></div>
        <div class="tl-desc">Duas fontes: <strong style="font-weight:500">glicose sanguínea</strong> (2 ATP) e <strong style="font-weight:500">glicogénio</strong> (3 ATP). Produz piruvato → lactato. Ressíntese do glicogénio: 20–24 h.</div>
      </div>
      <div class="tl-item">
        <div class="tl-dot blue"></div>
        <div class="tl-time">Acima de 2 minutos</div>
        <div class="tl-title">Sistema Oxidativo <span class="badge badge-blue" style="margin-left:6px">Aeróbio</span></div>
        <div class="tl-desc">Ciclo de Krebs + Cadeia de transporte de eletrões. Rendimento: <strong style="font-weight:500">38 ATP (glicose)</strong> / <strong style="font-weight:500">39 ATP (glicogénio)</strong>. Maior capacidade, mas ativação mais lenta.</div>
      </div>
    </div>
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
    <div class="detail-row"><span class="detail-key">VT1 — Limiar aeróbio</span><span class="detail-val">≈ 2 mmol/L lactato</span></div>
    <div class="detail-row"><span class="detail-key">VT2 — Limiar anaeróbio</span><span class="detail-val">> 4 mmol/L · acumulação exponencial</span></div>
    <div class="detail-row"><span class="detail-key">VO₂ máx</span><span class="detail-val">Atingido ~4 min de esforço progressivo</span></div>
  </div>

  <p class="section-label">Unidade Motora</p>
  <div class="card" style="margin-bottom:.75rem">
    <div class="card-title">Definição</div>
    <div class="card-sub">Motoneurónio alfa + todas as fibras musculares que inerva. É a base funcional de toda a ação muscular. A ligação neurónio-músculo ocorre por sinapse química via <strong style="font-weight:500">acetilcolina</strong>.</div>
  </div>
  <div class="fiber-grid">
    <div class="fiber-card">
      <div class="badge badge-teal">Tipo S</div>
      <h4>Lentas (Tipo I)</h4>
      <div class="fiber-detail">
        Motoneurónios pequenos<br>Limiar baixo<br>Alta resistência à fadiga<br>Baixa força/velocidade<br>Recrutadas primeiro
      </div>
    </div>
    <div class="fiber-card">
      <div class="badge badge-amber">Tipo FR</div>
      <h4>Intermédias (Tipo IIa)</h4>
      <div class="fiber-detail">
        Resistentes à fadiga<br>Componente de velocidade<br>Limiar intermédio<br>Fibras tipo 2a
      </div>
    </div>
    <div class="fiber-card">
      <div class="badge badge-coral">Tipo FF</div>
      <h4>Rápidas (Tipo IIb)</h4>
      <div class="fiber-detail">
        Maior força e potência<br>Fatigam rapidamente<br>Limiar alto<br>Reservadas para esforços máximos
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
    <div style="font-size:12px;color:var(--color-text-secondary);margin-top:.75rem">A força também se regula pela <strong style="font-weight:500">frequência de descarga</strong> do estímulo nervoso.</div>
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
      "question": "Que sistema energético domina num sprint de 100m?",
      "answer": "ATP-PCr (fosfagénio anaeróbio) nos primeiros segundos, com contribuição crescente do sistema glicolítico."
    },
    {
      "question": "Qual a diferença entre VT1 e VT2?",
      "answer": "VT1 (limiar aeróbio): ~2 mmol/L lactato, ~65% FC máx. VT2 (limiar anaeróbio): >4 mmol/L lactato, acumulação exponencial de lactato."
    },
    {
      "question": "O sistema ATP-PCr produz lactato?",
      "answer": "Não. Funciona sem oxigénio e sem produção de lactato — usa fosfocreatina para regenerar ATP rapidamente."
    },
    {
      "question": "Que tipo de fibra é recrutada primeiro em qualquer movimento?",
      "answer": "Tipo S (lentas / Tipo I) — menor limiar de recrutamento, sempre activadas primeiro (Princípio de Henneman)."
    },
    {
      "question": "Em que zona de treino se desenvolve principalmente a base aeróbia?",
      "answer": "Zona leve (<65% FC máx), com lactato estável — ideal para recuperação activa e volume aeróbio."
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
      "question": "O sistema ATP-PCr recupera 70% da capacidade em:",
      "options": [
        "10 segundos",
        "30 segundos",
        "2 minutos",
        "20–24 horas"
      ],
      "correct": 1
    },
    {
      "question": "Quantos ATP produz o glicogénio na via glicolítica?",
      "options": [
        "2 ATP",
        "3 ATP",
        "38 ATP",
        "39 ATP"
      ],
      "correct": 1
    },
    {
      "question": "A zona leve de treino corresponde a:",
      "options": [
        ">85% FC máx",
        "65–85% FC máx",
        "<65% FC máx",
        "100% FC máx"
      ],
      "correct": 2
    },
    {
      "question": "O que caracteriza as fibras Tipo FR (IIa)?",
      "options": [
        "Limiar alto, fadiga rápida",
        "Características intermédias, alguma resistência à fadiga",
        "Apenas usadas em repouso",
        "Não existem em humanos"
      ],
      "correct": 1
    },
    {
      "question": "Para além do recrutamento de UM, como se aumenta a força?",
      "options": [
        "Diminuindo a frequência de descarga",
        "Aumentando a frequência de descarga do motoneurónio",
        "Reduzindo a acetilcolina",
        "Apenas com estiramentos"
      ],
      "correct": 1
    }
  ],
});
