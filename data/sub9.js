/**
 * Gerado automaticamente por scripts/import-unit.js
 * Fonte: d:/Treinador_Curso/Resumos/SubUnidade4_V2.html
 *
 * Para actualizar: edita o HTML fonte e corre «npm run import»
 * Para flashcards/quiz extra: adiciona em imports/units.json → extraFlashcards / extraQuiz
 */

window.STUDY_SUBUNITS = window.STUDY_SUBUNITS || [];
window.STUDY_SUBUNITS = window.STUDY_SUBUNITS.filter((s) => s.id !== 'sub9');

window.STUDY_SUBUNITS.push({
  id: 'sub9',
  number: 9,
  title: "Estrutura da Sessão de Treino",
  description: "Partes inicial, preparatória, principal e final, fases do aquecimento, ficha, microciclos e supercompensação.",
  contentSections: [
    {
      "id": "sec-visao",
      "label": "Visão Geral"
    },
    {
      "id": "sec-t1",
      "label": "Parte Inicial"
    },
    {
      "id": "sec-t2",
      "label": "Aquecimento"
    },
    {
      "id": "sec-t3",
      "label": "Parte Principal"
    },
    {
      "id": "sec-t4",
      "label": "Parte Final"
    },
    {
      "id": "sec-t5",
      "label": "Ficha & Planeamento"
    },
    {
      "id": "sec-t6",
      "label": "Microciclos"
    },
    {
      "id": "sec-vf",
      "label": "Verdadeiro / Falso"
    }
  ],
  contentHtml: `<div id="sec-visao" class="content-section"><p class="section-label">Visão Geral</p>
<p style="font-size:14px;color:var(--text-muted);margin-bottom:0.75rem">Clica em cada parte para ir diretamente à secção.</p>
    <div class="session-flow">
      <a href="#t1" style="text-decoration:none;flex:1"><div class="sf-part sf-1">
        <div class="sf-label">Parte 1</div>
        <div class="sf-name">Inicial</div>
        <div class="sf-time">3–5 min</div>
      </div></a>
      <a href="#t2" style="text-decoration:none;flex:2"><div class="sf-part sf-2">
        <div class="sf-label">Parte 2</div>
        <div class="sf-name">Aquecimento</div>
        <div class="sf-time">15–20% do tempo</div>
      </div></a>
      <a href="#t3" style="text-decoration:none;flex:3"><div class="sf-part sf-3">
        <div class="sf-label">Parte 3</div>
        <div class="sf-name">Principal</div>
        <div class="sf-time">Núcleo da sessão</div>
      </div></a>
      <a href="#t4" style="text-decoration:none;flex:1.5"><div class="sf-part sf-4">
        <div class="sf-label">Parte 4</div>
        <div class="sf-name">Final</div>
        <div class="sf-time">5–10 min</div>
      </div></a>
    </div>
    <div class="alert-box" style="border-left-color:#1D9E75">A sessão é o <strong>elo de ligação</strong> entre o planeamento e a execução real do treino. Hierarquia: Macrociclo → Mesociclo → Microciclo → Sessão → Tarefa.</div></div>

<div id="sec-t1" class="content-section"><p class="section-label">Parte Inicial</p>
<p>Momento em que os atletas se reúnem e o treinador cria as condições para uma sessão produtiva. Uma saudação calorosa cria bem-estar e sentimento de pertença.</p>

    <p class="section-label">O que acontece nesta parte</p>
    <ul class="bullets">
      <li><strong>Saudar todos os atletas</strong> à chegada — pelo nome, criando sentido de boas-vindas</li>
      <li>Apresentar os <strong>objetivos da sessão</strong> e o programa previsto</li>
      <li>Organizar os <strong>grupos de trabalho</strong> antecipadamente (evita perda de tempo)</li>
      <li>Motivar e desenvolver o <strong>gosto pela prática</strong></li>
      <li>Usar <strong>audiovisuais ou demonstrações</strong> se houver técnica nova</li>
    </ul>

    <div class="alert-box" style="border-left-color:#EF9F27">Pontualidade é responsabilidade do atleta, não dos pais. <em>"Sou treinador do João, não sou treinador do pai do João."</em> O treino começa à hora marcada.</div>

    <p class="section-label">Para principiantes</p>
    <p>A duração pode ser ligeiramente maior para permitir o recurso a equipamentos audiovisuais e demonstrar gestos técnicos novos antes de qualquer esforço físico.</p></div>

<div id="sec-t2" class="content-section"><p class="section-label">Aquecimento</p>
<p>Objetivo: preparar o organismo para suportar, <strong>sem risco de lesão</strong>, as cargas da parte fundamental. Os exercícios devem ser simples, conhecidos e progressivos.</p>

    <p class="section-label">As 4 fases do aquecimento</p>
    <div class="fase-grid">
      <div class="fase-card fase-1">
        <div class="fase-num">1ª</div>
        <div class="fase-title">Ativação cardiorrespiratória</div>
        <div class="fase-desc">Corrida leve, exercícios cíclicos. Ativa progressivamente o sistema cardíaco, vascular e respiratório.</div>
      </div>
      <div class="fase-card fase-2">
        <div class="fase-num">2ª</div>
        <div class="fase-title">Mobilização articular</div>
        <div class="fase-desc">De cima para baixo. Estimula as articulações com exercícios globais e progressivos.</div>
      </div>
      <div class="fase-card fase-3">
        <div class="fase-num">3ª</div>
        <div class="fase-title">Ativação neuromuscular</div>
        <div class="fase-desc">Aumenta temperatura muscular, diminui viscosidade. Do simples para o complexo, do conhecido para o desconhecido.</div>
      </div>
      <div class="fase-card fase-4">
        <div class="fase-num">4ª</div>
        <div class="fase-title">Ativação específica</div>
        <div class="fase-desc">Exercícios semelhantes à parte principal. Liga o aquecimento à parte fundamental.</div>
      </div>
    </div>

    <p class="section-label">Efeitos de um aquecimento bem organizado</p>
    <div class="efeitos-grid">
      <div class="efeito-card">
        <div class="efeito-icon">❤️</div>
        <div class="efeito-title">Cardiovascular</div>
        <div class="efeito-items">↑ frequência cardíaca<br>↑ pressão sanguínea<br>↑ volume sistólico</div>
      </div>
      <div class="efeito-card">
        <div class="efeito-icon">🫁</div>
        <div class="efeito-title">Respiratório</div>
        <div class="efeito-items">↑ frequência respiratória<br>↑ difusão pulmonar</div>
      </div>
      <div class="efeito-card">
        <div class="efeito-icon">💪</div>
        <div class="efeito-title">Muscular</div>
        <div class="efeito-items">↓ viscosidade muscular<br>↑ oxigénio às células<br>↑ processos neuromusc.</div>
      </div>
      <div class="efeito-card">
        <div class="efeito-icon">🧠</div>
        <div class="efeito-title">Psicológico</div>
        <div class="efeito-items">↑ concentração<br>↑ empenhamento nas tarefas</div>
      </div>
    </div>

    <p class="section-label">Regras a respeitar</p>
    <ul class="bullets">
      <li>Não sobrecarregar o organismo</li>
      <li>Não selecionar exercícios complexos em grandes quantidades</li>
      <li>Não negligenciar nenhum grupo muscular (especialmente os pequenos)</li>
      <li>Não introduzir <strong>demasiados exercícios novos</strong></li>
      <li>Sem pausas longas entre exercícios</li>
      <li><strong>Atletas devem chegar frescos à parte principal</strong></li>
    </ul>

    <div class="alert-box" style="border-left-color:#EF9F27">Sistema nervoso fatigado não assimila aprendizagens novas. Os atletas devem chegar à parte principal sem fadiga acumulada.</div>

    <p class="section-label">Considerações adicionais</p>
    <ul class="bullets">
      <li>Aquecimento de manhã deve ser <strong>mais longo e cuidadoso</strong></li>
      <li>Ao longo da época deve ser adaptado à condição física atual do atleta</li>
      <li>Considerar a <strong>temperatura do ambiente</strong></li>
    </ul></div>

<div id="sec-t3" class="content-section"><p class="section-label">Parte Principal</p>
<div class="card"><p style="font-size:13px;line-height:1.6;margin:0">Coração da sessão. As cargas alcançam os <strong>valores mais elevados</strong>, a dificuldade dos exercícios é maior e a exigência de concentração é permanente.</p>

    <p class="section-label">Sequência obrigatória dentro da parte principal</p>
    <div class="prio-chain">
      <div class="prio-step p1">1.º<div class="prio-label">Técnica / Aprendizagem</div></div>
      <div class="prio-step p2">2.º<div class="prio-label">Velocidade / Coordenação</div></div>
      <div class="prio-step p3">3.º<div class="prio-label">Força</div></div>
      <div class="prio-step p4">4.º<div class="prio-label">Resistência</div></div>
    </div>

    <div class="alert-box" style="border-left-color:#1D9E75">Regra fundamental: o <strong>difícil e o novo</strong> vêm sempre no início — quando o sistema nervoso está em repouso. A resistência pode ser desenvolvida em estado de fadiga relativa.</div>

    <div class="quote">"Quanto mais difíceis forem os treinos, mais fácil vai ser a competição."</div>

    <p class="section-label">Trabalho de força com jovens</p></div>
<table class="data-table">
      <tr><th>Idade</th><th>Como trabalhar a força</th></tr>
      <tr><td>Até 11 anos</td><td>Jogos, exercícios ginásticos, dinâmicas a pares — nunca pesos</td></tr>
      <tr><td>12–13 anos</td><td>Possível introduzir pesos com muita disciplina e segurança</td></tr>
    </table>

    <p class="section-label">Quando parar o exercício</p>
    <ul class="bullets">
      <li>Se a <strong>técnica se deteriora</strong> → primeiro aumentar tempo de recuperação</li>
      <li>Se persistir → <strong>simplificar a tarefa</strong></li>
      <li>Se continuar → <strong>terminar o treino</strong></li>
    </ul>

    <div class="alert-box" style="border-left-color:#EF9F27">"No pain no gain" é FALSO. A fadiga deve ser gerida, nunca ignorada. Técnica deteriorada = lesão ou aprendizagem errada.</div>

    <p class="section-label">A "parte invisível do treino"</p>
    <p>O treinador deve perceber o que se passa fora do treino: sono, alimentação, escola, vida pessoal. Uma relação de confiança com o atleta facilita esta leitura essencial.</p></div>

<div id="sec-t4" class="content-section"><p class="section-label">Parte Final</p>
<div class="card"><p style="font-size:13px;line-height:1.6;margin:0">Objetivo: reduzir progressivamente a tensão muscular e nervosa, garantindo uma transição segura da atividade intensa para o repouso.</p></div>
<div class="alert-box" style="border-left-color:#EF9F27">Uma passagem abrupta de exercício intenso para repouso pode provocar descida acentuada da pressão arterial e desencadear uma síncope (desmaio).</div>

    <p class="section-label">Como organizar o retorno à calma</p>
    <ul class="bullets">
      <li>Exercícios cíclicos em <strong>ritmo moderado</strong> durante 5 a 10 minutos</li>
      <li>Diminuição progressiva da frequência cardíaca</li>
      <li>Exercícios de <strong>alongamento</strong></li>
      <li>Nos escalões jovens: <strong>pequeno jogo animado</strong> como retorno à calma (menor pressão, mantém motivação)</li>
    </ul>

    <div class="alert-box" style="border-left-color:#1D9E75">As crianças e jovens devem sair da sessão com uma <strong>forte motivação de regressar</strong> ao próximo treino. O jogo no final contribui para isso.</div>

    <p class="section-label">Reunião final — obrigatória</p>
    <ul class="bullets">
      <li>Nenhum atleta deve sair sem se <strong>despedir</strong> de toda a equipa técnica</li>
      <li><strong>Elogiar em grupo</strong>, corrigir individualmente e ao ouvido</li>
      <li>Balanço da sessão: o que correu bem, o que pode melhorar</li>
      <li>Palavras de incentivo individuais — reforça a relação treinador-atleta</li>
    </ul>

    <div class="alert-box" style="border-left-color:#533AB7">Regra pedagógica: elogia em público, corrige em privado (ao ouvido). Esta distinção é fundamental para preservar a autoestima do atleta.</div></div>

<div id="sec-t5" class="content-section"><p class="section-label">Ficha & Planeamento</p>
<p class="section-label">Operações na elaboração da sessão</p>
    <ul class="bullets">
      <li>Estabelecer <strong>temas e objetivos</strong> condicionados pelo momento da época</li>
      <li>Avaliar a sessão anterior e os resultados da competição</li>
      <li>Definir o <strong>tipo de sessão</strong> (aprendizagem, repetição, mista, etc.)</li>
      <li>Estabelecer os exercícios: sucessão, duração, intensidade, densidade, frequência</li>
      <li>Definir o conteúdo da <strong>parte introdutória</strong> geral e específica</li>
      <li>Planear o <strong>material necessário</strong> (bolas, cones, pistas, material auxiliar)</li>
      <li>Verificar a <strong>ordem dos exercícios</strong> em conformidade com os princípios metodológicos</li>
    </ul>

    <div class="alert-box" style="border-left-color:#1D9E75">Informar os pais atempadamente sobre o calendário competitivo e deslocações. A falta de informação é a principal causa de conflitos entre treinadores e pais.</div>

    <p class="section-label">3 passos para construir o microciclo semanal</p>
    <table class="data-table">
      <tr><th>Passo</th><th>O que fazer</th></tr>
      <tr><td>1.º passo</td><td>Assinalar os <strong>objetivos prioritários</strong> do microciclo com a frequência semanal mais idónea</td></tr>
      <tr><td>2.º passo</td><td>Distribuir as tarefas de treino em função dos <strong>objetivos secundários</strong> sem afetar os prioritários</td></tr>
      <tr><td>3.º passo</td><td>Completar com as restantes tarefas programadas (treino complementar, correção de gesto técnico, etc.)</td></tr>
    </table></div>

<div id="sec-t6" class="content-section"><p class="section-label">Microciclos</p>
<p class="section-label">Microciclo de base geral — período preparatório</p>
    <table class="micro-table">
      <tr><th></th><th>Seg</th><th>Ter</th><th>Qua</th><th>Qui</th><th>Sex</th><th>Sab</th><th>Dom</th></tr>
      <tr>
        <td class="row-label">Obj.</td>
        <td class="cell-tecn">Tecn + Cap. Motora</td>
        <td class="cell-tecn">Tecn Espec + Cap. Motora</td>
        <td class="cell-rec">Treino Compl. + Rec. Ativa</td>
        <td class="cell-cap">Cap. Motora + Treino Espec.</td>
        <td class="cell-tecn">Tecn + Cap. Motora</td>
        <td class="cell-resist">Resistência geral</td>
        <td class="cell-rec">Descanso</td>
      </tr>
    </table>

    <div class="subsec-title" style="margin-top:1.2rem">Microciclo de competição — período preparatório</div>
    <table class="micro-table">
      <tr><th></th><th>Seg</th><th>Ter</th><th>Qua</th><th>Qui</th><th>Sex</th><th>Sab</th><th>Dom</th></tr>
      <tr>
        <td class="row-label">Obj.</td>
        <td class="cell-rec">Recup. Ativa</td>
        <td class="cell-forca">Tecn + Prep. Física Alta Int.</td>
        <td class="cell-cap">Prep. Física + Tecn Alta Int. (Supercompensação)</td>
        <td class="cell-rec">Reforço treino 5ª</td>
        <td class="cell-empty">—</td>
        <td class="cell-comp">Competição</td>
        <td class="cell-comp">Competição</td>
      </tr>
    </table>

    <div class="alert-box" style="border-left-color:#378ADD">Em período competitivo: dois dias de recuperação antes da prova (Qui e Sex), com <strong>pico na Quarta</strong> para provocar supercompensação no fim de semana.</div>

    <div class="subsec-title" style="margin-top:1.2rem">Legenda</div>
    <div style="display:flex;flex-wrap:wrap;gap:0.5rem;margin-top:0.4rem">
      <span style="background:#E1F5EE;color:#085041;padding:3px 10px;border-radius:20px;font-size:12px;font-weight:600">Tecn = Técnica</span>
      <span style="background:#FAEEDA;color:#7a5000;padding:3px 10px;border-radius:20px;font-size:12px;font-weight:600">Prep. Física</span>
      <span style="background:#E6F1FB;color:#185FA5;padding:3px 10px;border-radius:20px;font-size:12px;font-weight:600">Resistência</span>
      <span style="background:#EAF3DE;color:#27AE60;padding:3px 10px;border-radius:20px;font-size:12px;font-weight:600">Recuperação</span>
      <span style="background:#FCEBEB;color:#C0392B;padding:3px 10px;border-radius:20px;font-size:12px;font-weight:600">Competição</span>
      <span style="background:#EEEDFE;color:#534AB7;padding:3px 10px;border-radius:20px;font-size:12px;font-weight:600">Capacidades Motoras</span>
    </div></div>

<div id="sec-vf" class="content-section"><p class="section-label">Verdadeiro / Falso</p>
<table class="vf-table">
      <tr><th style="width:57%">Afirmação</th><th style="width:9%;text-align:center">V/F</th><th>Nota</th></tr>
      <tr><td>A parte preparatória representa 15–20% do tempo total de treino.</td><td style="text-align:center"><span class="vf-badge vf-true">V</span></td><td>Entre 20 a 30 minutos numa sessão de 90–120 min.</td></tr>
      <tr><td>O aquecimento deve incluir exercícios novos e complexos para estimular os atletas.</td><td style="text-align:center"><span class="vf-badge vf-false">F</span></td><td>Exercícios devem ser simples e conhecidos para garantir boa densidade.</td></tr>
      <tr><td>A mobilização articular faz-se de cima para baixo.</td><td style="text-align:center"><span class="vf-badge vf-true">V</span></td><td>Segue sempre a direção crânio-caudal.</td></tr>
      <tr><td>A resistência deve ser trabalhada antes da técnica na parte principal.</td><td style="text-align:center"><span class="vf-badge vf-false">F</span></td><td>Técnica é sempre primeiro; resistência pode ser feita com fadiga relativa.</td></tr>
      <tr><td>Uma paragem abrupta após esforço intenso pode provocar síncope.</td><td style="text-align:center"><span class="vf-badge vf-true">V</span></td><td>Queda acentuada da pressão arterial por ausência de retorno à calma.</td></tr>
      <tr><td>Crianças até 11 anos devem treinar força com pesos ligeiros.</td><td style="text-align:center"><span class="vf-badge vf-false">F</span></td><td>Força apenas com jogos, exercícios ginásticos e com parceiros.</td></tr>
      <tr><td>O treinador deve elogiar em grupo e corrigir individualmente ao ouvido.</td><td style="text-align:center"><span class="vf-badge vf-true">V</span></td><td>Preserva a autoestima do atleta e reforça a relação treinador-atleta.</td></tr>
      <tr><td>Quando a técnica se deteriora por fadiga, o treinador deve aumentar a intensidade.</td><td style="text-align:center"><span class="vf-badge vf-false">F</span></td><td>Deve primeiro aumentar o descanso, depois simplificar, depois parar.</td></tr>
      <tr><td>Em período competitivo, o pico de treino deve ocorrer 2 dias antes da prova.</td><td style="text-align:center"><span class="vf-badge vf-true">V</span></td><td>Para provocar supercompensação no dia da prova.</td></tr>
      <tr><td>"No pain no gain" é um princípio válido do treino desportivo.</td><td style="text-align:center"><span class="vf-badge vf-false">F</span></td><td>A fadiga deve ser gerida e equilibrada com a recuperação — nunca ignorada.</td></tr>
    </table></div>`,
  flashcards: [
    {
      "question": "Parte inicial",
      "answer": "3–5 minutos; saudação, apresentação de objetivos, organização de grupos e motivação."
    },
    {
      "question": "Parte preparatória",
      "answer": "15–20% do tempo; aquecimento para preparar o organismo sem risco de lesão."
    },
    {
      "question": "Ativação cardiorrespiratória",
      "answer": "1.ª fase do aquecimento; corrida leve e exercícios cíclicos para ativar progressivamente o coração e a respiração."
    },
    {
      "question": "Mobilização articular",
      "answer": "2.ª fase; exercícios globais de cima para baixo para estimular as articulações."
    },
    {
      "question": "Ativação neuromuscular",
      "answer": "3.ª fase; aumenta temperatura muscular e diminui viscosidade. Do simples para o complexo."
    },
    {
      "question": "Ativação específica",
      "answer": "4.ª fase; exercícios semelhantes à parte principal; liga o aquecimento ao trabalho fundamental."
    },
    {
      "question": "Parte principal",
      "answer": "Coração da sessão; sequência: técnica → velocidade/coord. → força → resistência."
    },
    {
      "question": "Parte final",
      "answer": "Retorno à calma; 5–10 min de exercícios suaves, alongamentos e reunião de balanço."
    },
    {
      "question": "Supercompensação",
      "answer": "Adaptação fisiológica após estímulo intenso seguido de recuperação; base do pico de desempenho em competição."
    },
    {
      "question": "Microciclo",
      "answer": "Semana de treino; conjunto de sessões com objetivos coerentes entre si."
    },
    {
      "question": "Parte invisível do treino",
      "answer": "Fatores externos ao treino (sono, alimentação, escola, vida pessoal) que o treinador deve conhecer e considerar."
    },
    {
      "question": "Síncope",
      "answer": "Desmaio por queda abrupta da pressão arterial; pode ocorrer se o esforço intenso parar de repente sem retorno à calma."
    }
  ],
  quiz: [
    {
      "question": "Em quantas partes se divide a sessão de treino?",
      "options": [
        "2",
        "3",
        "4",
        "5"
      ],
      "correct": 2
    },
    {
      "question": "Que percentagem do tempo total representa a parte preparatória?",
      "options": [
        "5–10%",
        "10–15%",
        "15–20%",
        "25–30%"
      ],
      "correct": 2
    },
    {
      "question": "Qual é a ordem correta das fases do aquecimento?",
      "options": [
        "Articular → Cardio → Neuromuscular → Específico",
        "Cardio → Articular → Neuromuscular → Específico",
        "Neuromuscular → Cardio → Articular → Específico",
        "Específico → Cardio → Articular → Neuromuscular"
      ],
      "correct": 1
    },
    {
      "question": "Na parte principal, o que deve vir em PRIMEIRO lugar?",
      "options": [
        "Resistência",
        "Força",
        "Velocidade",
        "Técnica / Aprendizagem"
      ],
      "correct": 3
    },
    {
      "question": "Quando a técnica de um atleta se deteriora por fadiga, o treinador deve:",
      "options": [
        "Aumentar a intensidade do exercício",
        "Ignorar e continuar — é normal",
        "Primeiro aumentar o descanso; se persistir, simplificar; se continuar, parar",
        "Mudar imediatamente de exercício sem qualquer adaptação"
      ],
      "correct": 2
    },
    {
      "question": "Uma paragem abrupta após esforço intenso pode causar:",
      "options": [
        "Hipertensão arterial",
        "Síncope por queda da pressão arterial",
        "Aumento da frequência cardíaca",
        "Hipoglicemia"
      ],
      "correct": 1
    },
    {
      "question": "No aquecimento, a mobilização articular faz-se:",
      "options": [
        "De baixo para cima",
        "De dentro para fora",
        "De cima para baixo",
        "Aleatoriamente"
      ],
      "correct": 2
    },
    {
      "question": "Em período competitivo, quando deve ocorrer o pico de treino da semana?",
      "options": [
        "No próprio dia da prova",
        "Um dia antes da prova",
        "Dois dias antes da prova",
        "Três dias antes da prova"
      ],
      "correct": 2
    },
    {
      "question": "Qual a regra pedagógica fundamental na reunião final?",
      "options": [
        "Corrigir todos publicamente para que todos aprendam",
        "Elogiar em grupo, corrigir individualmente ao ouvido",
        "Não fazer comentários negativos para não desmotivar",
        "Deixar os atletas sair sem reunião para poupar tempo"
      ],
      "correct": 1
    },
    {
      "question": "A 'parte invisível do treino' refere-se a:",
      "options": [
        "Exercícios feitos sem o treinador ver",
        "Treino mental e visualização",
        "Fatores externos: sono, alimentação, escola, vida pessoal",
        "Sessões de recuperação passiva"
      ],
      "correct": 2
    }
  ],
});
