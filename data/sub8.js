/**
 * Gerado automaticamente por scripts/import-unit.js
 * Fonte: d:/Treinador_Curso/Resumos/SubUnidade4_V1.html
 *
 * Para actualizar: edita o HTML fonte e corre «npm run import»
 * Para flashcards/quiz extra: adiciona em imports/units.json → extraFlashcards / extraQuiz
 */

window.STUDY_SUBUNITS = window.STUDY_SUBUNITS || [];
window.STUDY_SUBUNITS = window.STUDY_SUBUNITS.filter((s) => s.id !== 'sub8');

window.STUDY_SUBUNITS.push({
  id: 'sub8',
  number: 8,
  title: "A Sessão de Treino",
  description: "Planeamento da sessão, tipos e objetivos, iniciação 7–11 anos, maturação, ficha de treino e avaliação.",
  contentSections: [
    {
      "id": "sec-t1",
      "label": "Elemento Central"
    },
    {
      "id": "sec-t2",
      "label": "Interdependência"
    },
    {
      "id": "sec-t3",
      "label": "Tipos de Sessões"
    },
    {
      "id": "sec-t4",
      "label": "Objetivos"
    },
    {
      "id": "sec-t5",
      "label": "Iniciação 7–11 anos"
    },
    {
      "id": "sec-t6",
      "label": "Maturação"
    },
    {
      "id": "sec-t7",
      "label": "Ficha & Avaliação"
    },
    {
      "id": "sec-vf",
      "label": "Verdadeiro / Falso"
    }
  ],
  contentHtml: `<div id="sec-t1" class="content-section"><p class="section-label">Elemento Central</p>
<div class="card"><p style="font-size:13px;line-height:1.6;margin:0">A <strong>sessão de treino</strong> é o elo de ligação de todo o sistema de preparação desportiva. É onde a preparação dos atletas <em>realmente acontece</em> — o plano anual é apenas um constructo teórico.</p></div>
<div class="alert-box" style="border-left-color:#1D9E75">Regra de ouro: a preparação dos atletas só é alcançada ao nível da sessão de treino.</div>

    <p class="section-label">Hierarquia vertical do planeamento</p>
    <div class="hier-list">
      <div class="hier-item"><div class="hier-dot hier-normal"></div><span>Plano Olímpico / Longo Prazo</span><span class="badge badge-gold" style="margin-left:auto">4 anos</span></div>
      <div class="hier-item"><div class="hier-dot hier-normal"></div><span>Plano Anual</span><span class="badge badge-teal" style="margin-left:auto">Esquema teórico</span></div>
      <div class="hier-item"><div class="hier-dot hier-normal"></div><span>Macrociclo</span></div>
      <div class="hier-item"><div class="hier-dot hier-normal"></div><span>Mesociclo</span></div>
      <div class="hier-item"><div class="hier-dot hier-normal"></div><span>Microciclo (semana)</span></div>
      <div class="hier-item" style="background:#E1F5EE;border-radius:8px"><div class="hier-dot hier-star"></div><strong>Sessão de Treino ★</strong><span class="badge badge-teal" style="margin-left:auto">Onde tudo acontece</span></div>
      <div class="hier-item"><div class="hier-dot hier-normal"></div><span>Tarefa (exercício)</span></div>
    </div>

    <p class="section-label">Qualidade do processo depende de</p>
    <ul class="bullets">
      <li><strong>Conhecimento científico</strong> do treinador</li>
      <li><strong>Experiência profissional</strong> e orientação em competição</li>
      <li><strong>Potencial do atleta</strong></li>
      <li><strong>Condições e meios disponíveis</strong></li>
    </ul></div>

<div id="sec-t2" class="content-section"><p class="section-label">Interdependência</p>
<div class="card"><p style="font-size:13px;line-height:1.6;margin:0">Nenhuma sessão pode ser planeada de forma <strong>isolada</strong>. A organização de cada sessão deve considerar a sessão anterior, a seguinte e as do microciclo seguinte.</p></div>
<table class="data-table">
      <tr><th>Efeito</th><th>Causa</th><th>Consequência</th></tr>
      <tr><td>Positivo ✔</td><td>Carga bem organizada</td><td>Novas adaptações funcionais e neuromusculares</td></tr>
      <tr><td>Negativo ✘</td><td>Carga excessiva</td><td>Fadiga crónica ou sobretreino</td></tr>
    </table>

    <div class="alert-box" style="border-left-color:#EF9F27">Recuperação mínima entre sessões com o MESMO objetivo: <strong>48 a 72 horas</strong>. Treinar força 3 dias seguidos esgota o músculo sem adaptação.</div>
    <div class="alert-box" style="border-left-color:#1D9E75">É durante a recuperação que o organismo se adapta — a fadiga faz parte do processo, mas deve ser equilibrada.</div>

    <p class="section-label">Questões que o treinador deve responder ao planear</p>
    <ul class="bullets">
      <li>Qual o <strong>objetivo</strong> da sessão e o melhor sistema de organização?</li>
      <li>Qual o <strong>estado de preparação</strong> desportiva do atleta?</li>
      <li>Qual a posição da sessão relativamente à <strong>competição principal</strong>?</li>
      <li>Qual a experiência de treino? A inter-relação do microciclo é <strong>coerente</strong>?</li>
      <li>Qual o tempo de <strong>recuperação</strong> necessário entre sessões com o mesmo objetivo?</li>
    </ul></div>

<div id="sec-t3" class="content-section"><p class="section-label">Tipos de Sessões</p>
<table class="data-table">
      <tr><th>Tipo</th><th>Objetivo principal</th><th>Intensidade</th></tr>
      <tr><td>Reconhecimento</td><td>Conhecer estado físico, técnico e tático dos atletas</td><td>—</td></tr>
      <tr><td>Aprendizagem</td><td>Assimilar novos gestos técnicos</td><td>Reduzida</td></tr>
      <tr><td>Repetição</td><td>Consolidar gestos; aproximar condições de competição</td><td>Moderada/Alta</td></tr>
      <tr><td>Controlo / Avaliação</td><td>Verificar progresso ao longo da época</td><td>Variável</td></tr>
      <tr><td>Mistas ★</td><td>Combinam vários objetivos pedagógicos</td><td>Variável</td></tr>
    </table>
    <div class="alert-box" style="border-left-color:#378ADD">As <strong>sessões mistas</strong> são as mais utilizadas, especialmente nos escalões jovens, porque combinam aprendizagem, repetição e condição física.</div>

    <p class="section-label">Organização possível</p>
    <ul class="bullets">
      <li>Por <strong>magnitude da carga</strong> — desenvolvimento / manutenção / recuperação</li>
      <li>Por <strong>orientação do conteúdo</strong> — técnica, condição física, ou misto</li>
      <li>Por <strong>forma de organização</strong> — grupos, individual ou misto</li>
    </ul></div>

<div id="sec-t4" class="content-section"><p class="section-label">Objetivos</p>
<div class="card"><p style="font-size:13px;line-height:1.6;margin:0">Os objetivos de cada sessão são <strong>subordinados à hierarquia</strong> do plano anual. Uma sessão no microciclo de choque não pode ter objetivos contraditórios com o macrociclo.</p>

    <p class="section-label">Prioridade dos conteúdos</p>
    <div class="priority-chain">
      <div class="prio-step prio-1">1.º<div class="prio-label">Técnica</div></div>
      <div class="prio-step prio-2">2.º<div class="prio-label">Capacidades motoras</div></div>
      <div class="prio-step prio-3">3.º<div class="prio-label">Coordenação motora</div></div>
    </div>

    <div class="alert-box" style="border-left-color:#EF9F27">Conteúdos de maior exigência do sistema nervoso devem estar no <strong>PRIMEIRO TERÇO</strong> da sessão, antes de qualquer fadiga acumulada.</div>

    <p class="section-label">Organização dentro da sessão</p></div>
<table class="data-table">
      <tr><th>Momento</th><th>Conteúdo recomendado</th></tr>
      <tr><td>Início (sem fadiga)</td><td>Técnica nova, exercícios técnicos, conteúdos de maior exigência nervosa</td></tr>
      <tr><td>Meio</td><td>Capacidades motoras (força, velocidade, resistência)</td></tr>
      <tr><td>Final (com fadiga)</td><td>Pontualmente, para simular condições de competição</td></tr>
    </table></div>

<div id="sec-t5" class="content-section"><p class="section-label">Iniciação 7–11 anos</p>
<div class="alert-box" style="border-left-color:#378ADD"><strong>Princípio fundamental:</strong> maior resistência → maior capacidade de recuperação → maior tolerância à intensidade futura.</div>

    <p class="section-label">Linhas orientadoras</p>
    <ul class="bullets">
      <li><strong>Multilateralidade</strong> — várias modalidades; nunca especialização precoce</li>
      <li>Forte componente <strong>recreativa e lúdica</strong>; exercícios devem provocar alegria</li>
      <li>Técnica ensinada <strong>sem excesso de detalhe</strong> (ex. natação: «mão à frente do ombro»)</li>
      <li><strong>Força</strong> através de jogos e exercícios com parceiros — nunca pesos</li>
      <li><strong>Velocidade:</strong> primeiro passada longa, depois frequência</li>
      <li><strong>Flexibilidade</strong> desde cedo, pois diminui com a idade</li>
    </ul>

    <div class="alert-box" style="border-left-color:#1D9E75">Velocidade = distância da passada × frequência da passada. Ensina-se primeiro a <strong>passada longa</strong>, só depois a frequência.</div>

    <p class="section-label">Capacidades motoras — como trabalhar</p>
    <table class="data-table">
      <tr><th>Capacidade</th><th>Como trabalhar nesta fase</th></tr>
      <tr><td>Coordenação</td><td>Jogos recreativos e desportivos variados</td></tr>
      <tr><td>Velocidade</td><td>Jogos e estafetas variadas</td></tr>
      <tr><td>Força</td><td>Exercícios gímnicos, peso corporal, parceiro (curta duração)</td></tr>
      <tr><td>Flexibilidade</td><td>Ativa e passiva, nas modalidades cíclicas</td></tr>
      <tr><td>Resistência</td><td>Jogos de longa duração; base para tolerância futura</td></tr>
    </table></div>

<div id="sec-t6" class="content-section"><p class="section-label">Maturação</p>
<p>Atletas com a mesma idade cronológica podem ter <strong>2 a 3 anos</strong> de diferença na maturação biológica. Atletas nascidos no 1.º trimestre rendem mais consistentemente que os do 2.º semestre.</p>

    <div class="summary-grid">
      <div class="sum-card"><div class="sum-num">2–3</div><div class="sum-label">anos de diferença maturacional possível entre atletas da mesma idade</div></div>
      <div class="sum-card"><div class="sum-num">48–72h</div><div class="sum-label">recuperação mínima entre sessões com o mesmo objetivo</div></div>
    </div>

    <table class="data-table">
      <tr><th>Tipo de maturação</th><th>Impacto</th></tr>
      <tr><td>Maturação avançada</td><td>Vantagem a <strong>curto prazo</strong></td></tr>
      <tr><td>Maturação tardia</td><td>Favorece a <strong>longevidade desportiva</strong></td></tr>
    </table>

    <div class="alert-box" style="border-left-color:#EF9F27">Ignorar diferenças maturacionais pode levar o atleta a abandonar o desporto. Um velocista de 14 anos NÃO deve fazer treino aeróbio longo com fundistas.</div></div>

<div id="sec-t7" class="content-section"><p class="section-label">Ficha & Avaliação</p>
<p class="section-label">A ficha de treino inclui</p>
    <ul class="bullets">
      <li>Objetivos da sessão</li>
      <li>Exercícios (descrição ou figura)</li>
      <li>Volume e número de repetições</li>
      <li>Duração de cada exercício</li>
      <li>Organização do grupo</li>
      <li>Observações e notas</li>
    </ul>

    <p class="section-label">Ciclo de avaliação após cada sessão</p>
    <div class="priority-chain">
      <div class="prio-step prio-1">Planear</div>
      <div class="prio-step prio-2">Orientar</div>
      <div class="prio-step prio-2">Avaliar</div>
      <div class="prio-step prio-3">Melhorar</div>
    </div>

    <p class="section-label">Perguntas-chave na avaliação</p>
    <ul class="bullets">
      <li>O que correu <strong>bem</strong> e porquê?</li>
      <li>O que correu <strong>mal</strong> e porquê?</li>
      <li>O que é que se <strong>alcançou</strong>?</li>
      <li>O que é necessário para <strong>progredir mais</strong>?</li>
      <li>O que é que os atletas <strong>gostaram / não gostaram</strong>?</li>
      <li>Quais as melhorias a introduzir <strong>como treinador</strong>?</li>
    </ul>

    <div class="alert-box" style="border-left-color:#1D9E75">Planeamento a <strong>médio prazo (3 semanas)</strong> com revisão diária após cada sessão. Especialmente importante para treinadores menos experientes.</div></div>

<div id="sec-vf" class="content-section"><p class="section-label">Verdadeiro / Falso</p>
<table class="vf-table">
      <tr><th style="width:58%">Afirmação</th><th style="width:8%;text-align:center">V/F</th><th>Nota</th></tr>
      <tr>
        <td>Uma sessão pode ser planeada sem considerar as sessões adjacentes.</td>
        <td><span class="vf-badge vf-false">F</span></td>
        <td>Deve considerar sempre a anterior, a seguinte e o microciclo.</td>
      </tr>
      <tr>
        <td>A adaptação ocorre durante o esforço, não na recuperação.</td>
        <td><span class="vf-badge vf-false">F</span></td>
        <td>É durante a recuperação que o organismo se adapta.</td>
      </tr>
      <tr>
        <td>Na iniciação, a técnica deve ser ensinada com muitos detalhes.</td>
        <td><span class="vf-badge vf-false">F</span></td>
        <td>Técnica sem excesso de detalhe; foco no gesto global.</td>
      </tr>
      <tr>
        <td>O plano anual é onde a preparação dos atletas realmente acontece.</td>
        <td><span class="vf-badge vf-false">F</span></td>
        <td>É ao nível da sessão que a preparação ocorre.</td>
      </tr>
      <tr>
        <td>Ignorar diferenças maturacionais pode levar ao abandono desportivo.</td>
        <td><span class="vf-badge vf-true">V</span></td>
        <td>Treino inadequado ao estádio de maturação desmotiva o atleta.</td>
      </tr>
      <tr>
        <td>A sessão mista combina vários objetivos pedagógicos.</td>
        <td><span class="vf-badge vf-true">V</span></td>
        <td>É o tipo de sessão mais utilizado nos escalões jovens.</td>
      </tr>
      <tr>
        <td>O treinador deve avaliar a sessão com um ciclo de retroavaliação.</td>
        <td><span class="vf-badge vf-true">V</span></td>
        <td>Planear → Orientar → Avaliar → Melhorar.</td>
      </tr>
      <tr>
        <td>Crianças de 7–11 anos devem treinar força com pesos livres.</td>
        <td><span class="vf-badge vf-false">F</span></td>
        <td>Força através de jogos, exercícios gímnicos e com parceiros.</td>
      </tr>
    </table></div>`,
  flashcards: [
    {
      "question": "Sessão de treino",
      "answer": "Elo de ligação de todo o sistema de preparação do atleta; onde a adaptação realmente acontece."
    },
    {
      "question": "Microciclo",
      "answer": "Semana de treino; conjunto de sessões com objetivos coerentes entre si."
    },
    {
      "question": "Mesociclo",
      "answer": "Bloco de 3–6 semanas com orientação de carga definida."
    },
    {
      "question": "Macrociclo",
      "answer": "Período preparatório + competitivo dentro do plano anual."
    },
    {
      "question": "Multilateralidade",
      "answer": "Prática de várias modalidades; oposto à especialização precoce."
    },
    {
      "question": "Sobretreino",
      "answer": "Estado de fadiga crónica por excesso de carga sem recuperação adequada."
    },
    {
      "question": "Sessão de reconhecimento",
      "answer": "Conhecer estado físico, técnico e tático de cada praticante."
    },
    {
      "question": "Sessão de aprendizagem",
      "answer": "Assimilar novos gestos técnicos; baixa intensidade e densidade."
    },
    {
      "question": "Sessão de repetição",
      "answer": "Consolidar gestos aprendidos; aproximar condições de competição."
    },
    {
      "question": "Sessão de controlo",
      "answer": "Avaliar o progresso do rendimento dos praticantes."
    },
    {
      "question": "Sessão mista",
      "answer": "Combina vários objetivos pedagógicos e processos de treino."
    },
    {
      "question": "Maturação biológica",
      "answer": "Ritmo de desenvolvimento fisiológico; pode variar 2–3 anos entre atletas da mesma idade."
    }
  ],
  quiz: [
    {
      "question": "A sessão de treino é considerada:",
      "options": [
        "O mesmo que o microciclo semanal",
        "O elo de ligação de todo o sistema de preparação do atleta",
        "Um plano teórico de longo prazo",
        "Um exercício individual dentro do plano"
      ],
      "correct": 1
    },
    {
      "question": "Qual o tempo mínimo de recuperação entre sessões com o mesmo objetivo?",
      "options": [
        "12 a 24 horas",
        "24 a 36 horas",
        "48 a 72 horas",
        "96 a 120 horas"
      ],
      "correct": 2
    },
    {
      "question": "Qual é o PRIMEIRO conteúdo a trabalhar na sessão de treino?",
      "options": [
        "Resistência aeróbia",
        "Força máxima",
        "Técnica",
        "Velocidade de reação"
      ],
      "correct": 2
    },
    {
      "question": "Na iniciação desportiva (7–11 anos), qual é o princípio fundamental?",
      "options": [
        "Especialização precoce na modalidade",
        "Multilateralidade e forte componente lúdica",
        "Trabalho de força com pesos livres",
        "Treino de resistência de longa duração"
      ],
      "correct": 1
    },
    {
      "question": "A sessão de controlo tem como objetivo principal:",
      "options": [
        "Introduzir novos gestos técnicos",
        "Recuperar atletas de lesão",
        "Verificar o progresso do rendimento dos praticantes",
        "Combinar vários processos de treino"
      ],
      "correct": 2
    },
    {
      "question": "Velocidade = ? × frequência da passada",
      "options": [
        "Peso corporal",
        "Distância da passada",
        "Duração do apoio",
        "Ângulo de impulsão"
      ],
      "correct": 1
    },
    {
      "question": "Atletas com maturação biológica avançada têm:",
      "options": [
        "Melhor longevidade desportiva",
        "Vantagem apenas a curto prazo",
        "Menor capacidade de recuperação",
        "Maior risco de especialização tardia"
      ],
      "correct": 1
    },
    {
      "question": "Qual a ordem correta dos conteúdos dentro da sessão?",
      "options": [
        "Força → Técnica → Coordenação",
        "Resistência → Velocidade → Técnica",
        "Técnica → Capacidades motoras → Coordenação",
        "Coordenação → Força → Técnica"
      ],
      "correct": 2
    }
  ],
});
