#!/usr/bin/env node
/**
 * Constrói imports/exam-quiz.json a partir de:
 * - Perguntas de exame curadas (testes oficiais + conteúdo do curso)
 * - Perguntas extra dos HTML/quiz existentes (até MAX_AUTO por subunidade)
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const COURSE_FILE = path.join(ROOT, 'imports', 'course.json');
const EXAM_QUIZ_FILE = path.join(ROOT, 'imports', 'exam-quiz.json');
const MAX_AUTO_PER_SUB = 50;

// --- Perguntas curadas (testes + conteúdo pedagógico) ---

const CURATED = {
  'unit-tmt': {
    sub1: [
      {
        question: 'Qual é a duração típica de um planeamento de curto prazo?',
        options: ['1 semana a 1 mês.', '1 a 3 meses.', '3 meses a 1 ano.', '1 a 4 anos.'],
        correct: 0,
      },
      {
        question: 'A unidade mínima de planeamento e organização do treino é:',
        options: ['O microciclo.', 'A sessão de treino.', 'O mesociclo.', 'O macrociclo.'],
        correct: 1,
      },
      {
        question: 'Na fase «Aprender a Treinar» (Treinar para Treinar), o foco principal é:',
        options: [
          'Especialização tática e mental.',
          'Desenvolvimento de uma base sólida de capacidades físicas e técnicas.',
          'Competição de alto nível.',
          'Treino exclusivamente técnico-tático.',
        ],
        correct: 1,
      },
      {
        question: 'O ciclo de gestão do planeamento segue a sequência:',
        options: [
          'Planear → Executar → Controlar → Avaliar.',
          'Executar → Planear → Avaliar → Controlar.',
          'Controlar → Planear → Executar → Avaliar.',
          'Avaliar → Executar → Controlar → Planear.',
        ],
        correct: 0,
      },
      {
        question: 'O planeamento de médio prazo corresponde aproximadamente a:',
        options: ['8 a 10 anos.', '4 anos (ex.: ciclo olímpico).', '2 anos.', '1 época desportiva.'],
        correct: 1,
      },
      {
        question: 'As quatro componentes da unidade de treino são:',
        options: [
          'Objetivo, Conteúdo, Métodos e Meios.',
          'Volume, Intensidade, Densidade e Recuperação.',
          'Técnica, Tática, Física e Mental.',
          'Macrociclo, Mesociclo, Microciclo e Sessão.',
        ],
        correct: 0,
      },
      {
        question: 'Segundo o modelo de Newell, a aprendizagem motora resulta da interação de:',
        options: [
          'Praticante, Envolvimento e Tarefa.',
          'Carga, Volume e Intensidade.',
          'Técnica, Tática e Estratégia.',
          'Objetivo, Conteúdo e Método.',
        ],
        correct: 0,
      },
      {
        question: 'O Peak Height Velocity (PHV) ocorre aproximadamente aos:',
        options: [
          '12 anos nas meninas e 14 nos rapazes.',
          '14 anos nas meninas e 12 nos rapazes.',
          '10 anos em ambos os sexos.',
          '16 anos em ambos os sexos.',
        ],
        correct: 0,
      },
    ],
    sub2: [
      {
        question: 'O sistema ATP-PCr fornece energia durante aproximadamente:',
        options: ['10 segundos.', '30 segundos a 2 minutos.', '2 a 3 minutos.', 'Mais de 5 minutos.'],
        correct: 0,
      },
      {
        question: 'As fibras musculares do tipo I caracterizam-se por:',
        options: [
          'Alta velocidade de contração e baixa resistência à fadiga.',
          'Baixa velocidade de contração e alta resistência à fadiga.',
          'Utilização exclusiva do sistema ATP-PCr.',
          'Contração apenas anaeróbia láctica.',
        ],
        correct: 1,
      },
      {
        question: 'O sistema oxidativo utiliza preferencialmente como substratos:',
        options: [
          'Apenas creatina fosfato.',
          'Glicogénio e ácidos gordos.',
          'Apenas ATP armazenado.',
          'Apenas lactato.',
        ],
        correct: 1,
      },
      {
        question:
          'Qual corresponde às unidades motoras com motoneurónios de maiores dimensões e axónio de maior calibre?',
        options: ['Tipo S.', 'Tipo FF.', 'Tipo FR.', 'Tipo I.'],
        correct: 1,
      },
    ],
    sub3: [
      {
        question:
          'O princípio do treino baseado na capacidade do organismo responder positivamente às exigências do treino (adaptação) é:',
        options: [
          'O princípio da heterocronia.',
          'O princípio da reversibilidade.',
          'O princípio da individualização.',
          'O princípio da sobrecarga.',
        ],
        correct: 3,
      },
      {
        question: 'A dimensão neuromuscular da especificidade refere-se a:',
        options: [
          'O tipo de substrato energético utilizado.',
          'Os padrões de recrutamento e coordenação motora exigidos.',
          'A duração total da sessão.',
          'O número de repetições prescritas.',
        ],
        correct: 1,
      },
      {
        question: 'O momento ideal para aplicar um novo estímulo de sobrecarga é:',
        options: [
          'Durante a fase de fadiga aguda.',
          'No pico da supercompensação, após recuperação completa.',
          'Imediatamente após a sessão, sem descanso.',
          'Só após 4 semanas de destreino.',
        ],
        correct: 1,
      },
      {
        question: 'A transferência positiva do treino ocorre quando:',
        options: [
          'O treino de uma capacidade prejudica outra.',
          'O efeito do treino numa tarefa beneficia o desempenho noutra relacionada.',
          'Não existe relação entre exercícios.',
          'Só se treina um único músculo isolado.',
        ],
        correct: 1,
      },
    ],
    sub4: [
      {
        question: 'Segundo Navarro, a progressão da carga deve seguir a ordem:',
        options: [
          'Volume → Intensidade → Complexidade.',
          'Intensidade → Volume → Complexidade.',
          'Complexidade → Volume → Intensidade.',
          'Volume → Complexidade → Intensidade.',
        ],
        correct: 0,
      },
      {
        question: 'O desenvolvimento multilateral na infância e adolescência:',
        options: [
          'É perda de tempo para atletas de elite.',
          'Constrói base ampla de competências antes da especialização.',
          'Substitui completamente o treino técnico.',
          'Só se aplica após os 18 anos.',
        ],
        correct: 1,
      },
    ],
    sub5: [
      {
        question: 'A carga de treino:',
        options: [
          'É medida apenas de forma individual.',
          'Determina a grandeza e a intensidade dos processos de recuperação.',
          'Só é mensurável através de parâmetros fisiológicos.',
          'Compreende apenas uma grandeza externa.',
        ],
        correct: 1,
      },
      {
        question: 'A carga externa de treino corresponde a:',
        options: [
          'A resposta fisiológica interna do atleta.',
          'O trabalho prescrito/realizado (volume, intensidade, densidade, etc.).',
          'Apenas a frequência cardíaca.',
          'Só a percepção subjetiva de esforço.',
        ],
        correct: 1,
      },
      {
        question: 'As capacidades condicionais incluem:',
        options: [
          'Equilíbrio, orientação e reacção.',
          'Resistência, força, velocidade e flexibilidade.',
          'Apenas coordenação e ritmo.',
          'Só capacidades cognitivas.',
        ],
        correct: 1,
      },
    ],
    sub6: [
      {
        question: 'O VO₂máx representa:',
        options: [
          'A velocidade máxima de sprint.',
          'O consumo máximo de oxigénio.',
          'A força máxima de 1 repetição.',
          'A amplitude articular máxima.',
        ],
        correct: 1,
      },
      {
        question: 'O método intervalado é especialmente útil para desenvolver:',
        options: [
          'Flexibilidade estática.',
          'Capacidade aeróbia e anaeróbia de alta intensidade.',
          'Apenas força máxima.',
          'Coordenação geral em crianças.',
        ],
        correct: 1,
      },
    ],
    sub7: [
      {
        question: 'O treino de força resistida (força máxima) utiliza tipicamente:',
        options: [
          '45–55% 1RM com 15–20 repetições.',
          '90–100% 1RM com 1–5 repetições.',
          '30% 1RM com 30 repetições.',
          'Apenas peso corporal, sem carga externa.',
        ],
        correct: 1,
      },
      {
        question: 'O ciclo de alongamento-encurtamento (CAE) é importante para:',
        options: [
          'Aumentar a eficiência do trabalho elástico e a potência.',
          'Reduzir apenas a flexibilidade.',
          'Eliminar o recrutamento de fibras tipo II.',
          'Impedir a utilização do tendão.',
        ],
        correct: 0,
      },
      {
        question: 'Segundo a literatura citada no curso, o método de flexibilidade mais eficaz é:',
        options: [
          'Balístico.',
          'Estático passivo isolado.',
          'FNP (facilitação neuromuscular proprioceptiva).',
          'Apenas alongamento antes do treino sem aquecimento.',
        ],
        correct: 2,
      },
      {
        question: 'O método de treino mais eficaz para melhorar a flexibilidade corresponde:',
        options: [
          'Ao método estático.',
          'Ao método passivo.',
          'Ao método balístico.',
          'Ao método PNF.',
        ],
        correct: 3,
      },
      {
        question: 'O Órgão Tendinoso de Golgi está associado principalmente a:',
        options: [
          'Reflexo miotático.',
          'Inibição autogénica.',
          'Aumento da velocidade de sprint.',
          'Hipertrofia muscular direta.',
        ],
        correct: 1,
      },
      {
        question: 'O ciclo alongamento-encurtamento (CAE) pode aumentar a força da fase concêntrica seguinte em aproximadamente:',
        options: ['5–8%.', '15–20%.', '40–50%.', 'Não tem efeito mensurável.'],
        correct: 1,
      },
    ],
    sub8: [
      {
        question: 'A sessão de reconhecimento tem como objectivo principal:',
        options: [
          'Competição oficial.',
          'Familiarização com exercícios, material ou condições novas.',
          'Avaliação máxima de VO₂máx.',
          'Recuperação passiva total.',
        ],
        correct: 1,
      },
      {
        question: 'O mesociclo corresponde tipicamente a:',
        options: [
          '1 sessão de treino.',
          '1 semana de treino.',
          'Várias semanas (bloco de treino com objectivo definido).',
          '4 anos de planificação.',
        ],
        correct: 2,
      },
      {
        question: 'A recuperação recomendada para voltar a treinar o mesmo objectivo é de:',
        options: ['12 horas.', '24 horas.', '48–72 horas.', '1 semana obrigatoriamente.'],
        correct: 2,
      },
      {
        question: 'Na iniciação desportiva (7–11 anos), a prioridade deve ser:',
        options: [
          'Especialização precoce na modalidade.',
          'Multilateralidade, componente lúdica e gosto pela prática.',
          'Treino exclusivo de força máxima.',
          'Competição de alto rendimento.',
        ],
        correct: 1,
      },
      {
        question: 'A prioridade dos conteúdos numa sessão de treino deve seguir a ordem:',
        options: [
          'Resistência → Força → Técnica.',
          'Técnica → Capacidades motoras → Coordenação motora.',
          'Competição → Avaliação → Recuperação.',
          'Aquecimento → Competição → Técnica.',
        ],
        correct: 1,
      },
    ],
    sub9: [
      {
        question: 'O aquecimento visa mobilizar e preparar o atleta do ponto de vista:',
        options: [
          'Fisiológico e psicológico.',
          'Físico e técnico.',
          'Físico e tático.',
          'Cardiovascular e emocional.',
        ],
        correct: 0,
      },
      {
        question: 'A ordem correcta das fases do aquecimento é:',
        options: [
          'Específica → Cardiorrespiratória → Articular → Neuromuscular.',
          'Cardiorrespiratória → Articular → Neuromuscular → Específica.',
          'Articular → Específica → Cardiorrespiratória → Neuromuscular.',
          'Neuromuscular → Específica → Articular → Cardiorrespiratória.',
        ],
        correct: 1,
      },
      {
        question: 'Na parte principal, os conteúdos novos ou prioritários devem ser trabalhados:',
        options: [
          'No final, quando o atleta está mais fatigado.',
          'No início, quando a capacidade de aprendizagem é maior.',
          'Apenas durante o aquecimento.',
          'Só após a reunião final.',
        ],
        correct: 1,
      },
      {
        question: 'Se a técnica se deteriora por fadiga durante a parte principal, o treinador deve:',
        options: [
          'Manter a mesma carga até ao fim.',
          'Reduzir a carga ou o volume para preservar a qualidade técnica.',
          'Ignorar a técnica e focar só a intensidade.',
          'Terminar imediatamente a época desportiva.',
        ],
        correct: 1,
      },
      {
        question: 'A parte preparatória (aquecimento) deve representar aproximadamente:',
        options: ['5% do tempo total.', '15–20% do tempo total.', '40–50% do tempo total.', '70% do tempo total.'],
        correct: 1,
      },
      {
        question: 'A sessão de treino divide-se em quantas partes fundamentais?',
        options: ['Duas.', 'Três.', 'Quatro.', 'Cinco.'],
        correct: 2,
      },
      {
        question: 'Na parte principal, a sequência recomendada de conteúdos é:',
        options: [
          'Resistência → Força → Velocidade → Técnica.',
          'Técnica e aprendizagem → Velocidade e coordenação → Força → Resistência.',
          'Força → Técnica → Resistência → Velocidade.',
          'Competição → Jogos → Alongamento → Técnica.',
        ],
        correct: 1,
      },
      {
        question: 'A ficha de treino deve incluir, entre outros:',
        options: [
          'Apenas o resultado da última competição.',
          'Objectivos, exercícios, material, volume, intensidade, recuperação e organização dos grupos.',
          'Só a lista de atletas presentes.',
          'Apenas a temperatura ambiente.',
        ],
        correct: 1,
      },
    ],
  },
  'unit-pdd': {
    sub1: [
      {
        question: 'O Desporto ajuda a promover valores como:',
        options: [
          'Capacidade de análise tática.',
          'A cooperação entre pares.',
          'Espírito de sacrifício.',
          'A vitória a todo o custo.',
        ],
        correct: 1,
      },
      {
        question:
          'Em primeira instância, o desenvolvimento pessoal e desportivo do praticante nas fases precoces da formação desportiva irá depender:',
        options: [
          'Da forma como o treinador orienta e conduz o processo de treino.',
          'Da forma como os praticantes respondem aos exercícios de treino.',
          'Dos resultados alcançados em competição.',
          'Das instalações desportivas disponibilizadas pelos gestores desportivos.',
        ],
        correct: 0,
      },
      {
        question: 'Os valores são importantes para todas as áreas da nossa vida. Mas a prática desportiva também nos ensina:',
        options: [
          'Podermos prescindir do treinador.',
          'A dependermos só de nós.',
          'Seguir apenas as orientações da família.',
          'O respeito pelo meio ambiente.',
        ],
        correct: 3,
      },
      {
        question: 'Como deve ser entendida a competição na formação desportiva?',
        options: [
          'Como objetivo principal de vitória a qualquer custo.',
          'Como ferramenta educativa, participativa e convivencial.',
          'Como substituto do treino técnico.',
          'Como momento exclusivo de avaliação dos melhores atletas.',
        ],
        correct: 1,
      },
    ],
    sub2: [
      {
        question:
          'Quando falamos de igualdade de oportunidades no desporto, devemos abordar, entre outras, as seguintes temáticas:',
        options: [
          'As questões estratégicas.',
          'As questões raciais.',
          'As questões táticas.',
          'As questões técnicas.',
        ],
        correct: 1,
      },
      {
        question: 'Liberdade de oportunidades no desporto significa:',
        options: [
          'Adaptar as oportunidades tendo em conta as diferenças, procurando a justiça.',
          'Depender da capacidade dos clubes.',
          'Ter autonomia nas opções.',
          'Depender das escolhas dos pais.',
        ],
        correct: 2,
      },
      {
        question: 'Igualdade de oportunidades no desporto significa:',
        options: [
          'Dar as mesmas oportunidades independentemente das questões raciais, religiosas, morfológicas, sociais, entre outras.',
          'Depender da capacidade dos clubes.',
          'Ter autonomia nas opções.',
          'Adaptar as oportunidades tendo conta as diferenças, procurando a justiça.',
        ],
        correct: 0,
      },
      {
        question: 'Qual das seguintes afirmações descreve corretamente o conceito de equidade no desporto?',
        options: [
          'Dar exactamente o mesmo a todos os atletas, independentemente das suas necessidades.',
          'Ajustar o apoio às necessidades específicas de cada atleta.',
          'Privilegiar os atletas com mais talento.',
          'Excluir atletas com dificuldades para não atrasar o grupo.',
        ],
        correct: 1,
      },
      {
        question: 'O que significa ética pelo exemplo no papel do treinador?',
        options: [
          'Falar muito sobre ética durante o treino.',
          'Demonstrar ética com o comportamento em treino e competição.',
          'Punir imediatamente qualquer falta de fair-play.',
          'Delegar a ética aos pais e encarregados de educação.',
        ],
        correct: 1,
      },
    ],
    sub3: [
      {
        question: 'Selecione a opção que melhor reflete as competências básicas do treinador:',
        options: [
          'Realizar os registos apenas das sessões de treino.',
          'Realizar registos do treino e da competição dos praticantes com mais talento para que o acompanhamento seja mais eficaz.',
          'Realizar apenas os registos das competições para planear os treinos seguintes.',
          'Realizar o registo de toda a informação do treino e da competição pertinente para a monitorização da atividade desportiva do praticante.',
        ],
        correct: 3,
      },
      {
        question: 'O respeito pela diversidade em contexto desportivo:',
        options: [
          'Consiste em apoiar sobretudo os praticantes mais fracos.',
          'Consiste em focar-se nas vitórias e nos resultados desportivos.',
          'Consiste em aceitar as diferenças e respeitar as capacidades de todos os praticantes.',
          'Consiste em respeitar apenas os colegas de equipa.',
        ],
        correct: 2,
      },
      {
        question: 'No que diz respeito ao papel e responsabilidade do treinador:',
        options: [
          'Este desempenha um papel decisivo apenas no alto rendimento.',
          'Este influencia o praticante apenas ao nível do desporto infantojuvenil.',
          'Este tem uma visão centrada nas questões técnicas, táticas e estratégicas.',
          'Este desempenha um papel decisivo nos diferentes contextos desportivos onde intervém, desde as etapas mais elementares da prática desportiva até aos níveis mais avançados de rendimento.',
        ],
        correct: 3,
      },
      {
        question: 'Selecione a opção que melhor reflete as competências básicas do treinador:',
        options: [
          'Realizar registos do treino e da competição dos praticantes com mais talento para que o acompanhamento seja mais eficaz.',
          'Realizar o registo de toda a informação do treino e da competição pertinente para a monitorização da atividade desportiva do praticante.',
          'Realizar os registos apenas das sessões de treino.',
          'Realizar apenas os registos das competições para planear os treinos seguintes.',
        ],
        correct: 1,
      },
      {
        question: 'Algumas das competências básicas do treinador passam por:',
        options: [
          'Organizar os praticantes, o equipamento e as infraestruturas na sessão de treino, independentemente das condições de segurança.',
          'Colocar ênfase na instrução em detrimento de outras competências de comunicação.',
          'Avaliar o treino dos praticantes com foco nos resultados alcançados.',
          'Dirigir os praticantes na sessão de treino, assegurando o exercício das competências de ensino fundamentais (explicação, demonstração, observação e correção).',
        ],
        correct: 3,
      },
      {
        question: 'Qual lei reconheceu a profissão de treinador em Portugal?',
        options: [
          'Lei n.º 20/2010, de 15 de março.',
          'Lei n.º 40/2012, de 28 de agosto.',
          'Lei n.º 106/2015, de 6 de setembro.',
          'Lei n.º 75/2013, de 12 de setembro.',
        ],
        correct: 1,
      },
    ],
    sub4: [
      {
        question: 'O treinador de Grau I tem a responsabilidade de desenvolver nos praticantes:',
        options: [
          'O gosto pela aprendizagem e pelo aperfeiçoamento, fatores determinantes, a longo prazo, do progresso qualitativo.',
          'A adesão incondicional à modalidade desportiva.',
          'A lealdade incondicional ao clube.',
          'A vitória a qualquer custo.',
        ],
        correct: 0,
      },
      {
        question:
          'Selecione a opção que melhor define o papel do treinador em termos pedagógicos:',
        options: [
          'Ser treinador consiste unicamente na transmissão de conhecimentos técnicos, táticos e regulamentares.',
          'Ser treinador envolve também, obrigatoriamente, a transmissão de hábitos de trabalho e regras de comportamento e convivência que valorizem o jovem não só como praticante, mas, simultaneamente, como indivíduo e cidadão.',
          'Ser treinador consiste unicamente na transmissão de hábitos de trabalho e regras de comportamento.',
          'Ser treinador consiste em formar atletas vencedores a qualquer custo.',
        ],
        correct: 1,
      },
      {
        question:
          'No que diz respeito à influência da prática desportiva no desenvolvimento dos indivíduos/praticantes:',
        options: [
          'Sendo o treinador o primeiro responsável pela iniciação, deve tratar todos como futuras estrelas e evitar o abandono da modalidade.',
          'Os benefícios normalmente atribuídos à prática desportiva são garantidos, automaticamente, por simples participação.',
          'Os benefícios normalmente atribuídos à prática desportiva não são garantidos, automaticamente, por simples participação, podendo a prática contribuir para a formação, saúde e bem estar dos jovens como para desenvolver perturbações comportamentais e hábitos de fraude e violência.',
          'Os benefícios são garantidos automaticamente por simples participação.',
        ],
        correct: 2,
      },
      {
        question: 'O objetivo principal do treinador de Grau I em relação à adesão é:',
        options: [
          'Tornar os atletas profissionais na modalidade.',
          'Garantir vitórias nas competições.',
          'Desenvolver o gosto pela prática desportiva e reduzir o abandono.',
          'Especializar precocemente os jovens atletas.',
        ],
        correct: 2,
      },
    ],
    sub5: [
      {
        question: 'Um atleta que mudou de modalidade mas continua a praticar desporto regularmente representa, pedagogicamente:',
        options: [
          'Um fracasso do treinador — perdeu o atleta para a modalidade.',
          'Um sucesso parcial — devia ter ficado na modalidade original.',
          'Um sucesso — o objetivo era a adesão à prática desportiva, não à modalidade.',
          'Um fracasso — não desenvolveu gosto pela modalidade inicial.',
        ],
        correct: 2,
      },
      {
        question: 'Qual das seguintes atitudes NÃO favorece um ambiente adequado de prática?',
        options: [
          'Evitar pressões e metas irrealistas.',
          'Abrir linhas de comunicação com linguagem clara.',
          'Ridicularizar erros em público para acelerar a aprendizagem.',
          'Ter paciência e tolerância para com os erros.',
        ],
        correct: 2,
      },
    ],
    sub6: [
      {
        question: 'O modelo da aprendizagem cooperativa contribui particularmente para o desenvolvimento das competências pessoais e sociais pela valorização das componentes cognitivas e sociais, seja no contexto escolar ou desportivo. Esta afirmação é:',
        options: [
          'Incorreta, pois os modelos de aprendizagem cooperativa contribuem apenas em contexto desportivo.',
          'Correta.',
          'Incorreta, pois os modelos de aprendizagem cooperativa valorizam apenas as componentes cognitivas e não as sociais.',
          'Incorreta, pois os modelos de aprendizagem cooperativa contribuem apenas em contexto escolar.',
        ],
        correct: 1,
      },
      {
        question: 'Qual destes NÃO é um dos 6 fatores básicos do treinador facilitador?',
        options: [
          'Competência.',
          'Comportamento reflexivo.',
          'Seleção dos melhores atletas.',
          'Definição de objetivos.',
        ],
        correct: 2,
      },
    ],
    sub7: [
      {
        question: 'Quais os principais fatores que caracterizam a aprendizagem cooperativa:',
        options: [
          'Recompensas individuais.',
          'Os praticantes trabalham em equipa.',
          'Trabalho individual.',
          'Equipas semelhantes.',
        ],
        correct: 1,
      },
      {
        question:
          'Os principais fatores que concorrem para o incremento da qualidade da sessão de treino e que têm uma expressão operacional na didática de cada modalidade, assentam num reportório de fatores básicos, entre os quais:',
        options: [
          'Privilegiar as decisões organizativas dos praticantes.',
          'Marcação das presenças.',
          'Definição de objetivos.',
          'Ser crítico e agressivo.',
        ],
        correct: 2,
      },
      {
        question: 'Quais são os três fatores que o treinador deve gerir para melhorar a qualidade da sessão?',
        options: [
          'Alimentação, sono e motivação.',
          'Tempo de treino, situações de aprendizagem e tipo de comunicação.',
          'Material, instalações e número de atletas.',
          'Competições, resultados e prémios.',
        ],
        correct: 1,
      },
    ],
    sub8: [
      {
        question:
          'Para contribuir para a formação global dos praticantes em todas as suas vertentes, isto é, concretizar as virtualidades educativas e formativas do desporto, o treinador deverá procurar:',
        options: [
          'Levar os praticantes a irem além dos seus limites físicos.',
          'Desenvolver nos praticantes a obsessão pela vitória.',
          'Focar-se exclusivamente no rendimento técnico-tático.',
          'Desenvolver, nos praticantes, os hábitos de persistência, organização e autodisciplina.',
        ],
        correct: 3,
      },
      {
        question: 'A competição deve ser vista como:',
        options: [
          'Um momento de pressão excecional separado do treino.',
          'Uma continuação do treino.',
          'O único momento em que se avalia o atleta.',
          'Um obstáculo à formação multilateral.',
        ],
        correct: 1,
      },
      {
        question: 'Como se define sucesso num contexto de competição de formação desportiva?',
        options: [
          'Apenas pela vitória final.',
          'Também pelo progresso individual, participação e aplicação do conteúdo treinado.',
          'Pelo número de golos marcados.',
          'Pela classificação no campeonato.',
        ],
        correct: 1,
      },
    ],
    sub9: [
      {
        question: 'De uma forma geral, durante o desenrolar da competição, o treinador deve:',
        options: [
          'Focar-se nos aspetos negativos dos seus praticantes e corrigi-los.',
          'Ser um bom exemplo tentando manter um comportamento sereno e equilibrado, inclusive para com os juízes, mesmo que sinta que cometeram um erro.',
          'Manter-se em silêncio e deixar as intervenções para os treinos.',
          'Focar-se nos praticantes que têm mais sucesso. Aos restantes deve manter-se em silêncio.',
        ],
        correct: 1,
      },
      {
        question: 'Durante o desenrolar da competição, o treinador deve:',
        options: [
          'Evitar saturar os praticantes com recomendações demasiado longas e fastidiosas.',
          'Ser longo e exaustivo nas suas intervenções.',
          'Manter-se em silêncio e deixar as intervenções para os treinos.',
          'Focar-se apenas nos atletas com mais sucesso.',
        ],
        correct: 0,
      },
      {
        question: 'O foco das intervenções do treinador na competição deve estar:',
        options: [
          'No adversário e no resultado final.',
          'Na ligação treino-competição e no que foi trabalhado.',
          'Apenas nos erros dos árbitros.',
          'Exclusivamente na vitória.',
        ],
        correct: 1,
      },
    ],
    sub10: [
      {
        question:
          'Selecione a opção correta no que diz respeito à tarefa mais importante na gestão do tempo de treino, dos recursos humanos e logísticos:',
        options: [
          'Focar-se na gestão do tempo de treino.',
          'Fazer com que o treino dure o tempo que for preciso.',
          'Planear o treino.',
          'Apresentar as tarefas de forma exaustiva.',
        ],
        correct: 2,
      },
      {
        question:
          'Sabemos que os ganhos de aprendizagem estão intimamente dependentes do tempo passado na tarefa, bem como da quantidade máxima de tempo de atividade motora passada em atividades específicas. Esta afirmação está:',
        options: [
          'Correta.',
          'Incorreta, pois depende da forma como se gere as questões dos materiais.',
          'Incorreta, pois está dependente apenas no tempo passado na tarefa.',
          'Incorreta, pois está dependente apenas da quantidade máxima de tempo de atividade motora passada em atividades específicas.',
        ],
        correct: 0,
      },
      {
        question: 'Como podemos definir decisões interativas:',
        options: [
          'Decisões de ajuste ao planificado em função da avaliação contínua.',
          'Decisões de ajuste à intervenção e planificação futura.',
          'Decisões que são tomadas antes do treino e da competição.',
          'Decisões de estruturação do processo de ensino no treino desportivo.',
        ],
        correct: 0,
      },
      {
        question: 'O objetivo da gestão no treino desportivo é:',
        options: [
          'Maximizar o tempo disponível para a prática motora.',
          'Aumentar o número de discursos do treinador.',
          'Reduzir a participação dos atletas.',
          'Eliminar a competição da formação.',
        ],
        correct: 0,
      },
    ],
    sub11: [
      {
        question: 'Aprendemos maior percentagem de informação através de:',
        options: ['O ouvido.', 'A vista.', 'O tato.', 'O paladar.'],
        correct: 1,
      },
      {
        question: 'Qual das seguintes estratégias é fundamental para fomentar a compreensão dos conteúdos pelos praticantes?',
        options: ['Questionamento.', 'Demonstração.', 'Gestão.', 'Instrução.'],
        correct: 0,
      },
      {
        question: 'O feedback pedagógico distingue-se da instrução porque:',
        options: [
          'A instrução reage ao que o atleta fez; o feedback explica antecipadamente.',
          'A instrução explica; o feedback reage ao comportamento observado.',
          'São exactamente a mesma coisa.',
          'O feedback só se usa na competição.',
        ],
        correct: 1,
      },
    ],
    sub12: [
      {
        question:
          'O objetivo último do treinador, no plano do desenvolvimento pessoal do praticante, deverá ser desenvolver naqueles a capacidade de perceber, interpretar e controlar a informação de retorno e por extensão a sua execução. Esta afirmação é:',
        options: [
          'Incorreta, pois o praticante não tem capacidade para se autoavaliar.',
          'Incorreta, pois o treino depende unicamente do treinador.',
          'Incorreta, pois quem avalia a prestação do praticante é sempre o treinador.',
          'Correta.',
        ],
        correct: 3,
      },
      {
        question: 'O que é a Descoberta Guiada?',
        options: [
          'O treinador dá todas as respostas e o atleta repete.',
          'O treinador define objetivos e o atleta investiga e descobre soluções.',
          'O atleta treina sem qualquer orientação.',
          'Um método exclusivo de alto rendimento.',
        ],
        correct: 1,
      },
    ],
    sub13: [
      {
        question: 'Mas a orientação de praticantes também consiste em:',
        options: [
          'Afastar-se dos pais e encarregados de educação.',
          'Limitar-se ao início da prática desportiva.',
          'Acompanhar e aconselhar o praticante fora do contexto de treino e competição.',
          'Desvalorizar o percurso escolar do praticante.',
        ],
        correct: 2,
      },
      {
        question:
          'As Técnicas de Intervenção Pedagógica (TIP) aplicadas ao treino e à competição são os instrumentos fundamentais para fomentar a compreensão dos conteúdos pelos praticantes. Esta afirmação é:',
        options: [
          'Incorreta, pois apenas a instrução é relevante.',
          'Incorreta, pois a atitude do praticante é que é relevante.',
          'Correta.',
          'Incorreta, pois apenas o feedback é relevante.',
        ],
        correct: 2,
      },
      {
        question: 'Um ambiente positivo no treino é especialmente importante porque:',
        options: [
          'Garante vitórias imediatas.',
          'Cria condições seguras para aprender, sobretudo na iniciação.',
          'Elimina a necessidade de regras.',
          'Substitui a técnica desportiva.',
        ],
        correct: 1,
      },
    ],
    sub14: [
      {
        question:
          'Existe um conjunto de valores que o praticante tem de adquirir e que deve ser responsabilizado por isso. Selecione a opção que reflete este critério:',
        options: [
          'Ajudar os colegas.',
          'Discutir com os árbitros.',
          'Centrar-se na prestação desportiva.',
          'Ignorar as regras de convivência.',
        ],
        correct: 0,
      },
      {
        question: 'Ao definir um objetivo, o treinador deverá certificar-se que o mesmo é:',
        options: ['Mensurável.', 'Abrangente.', 'Formulado de forma neutra.', 'Irrealista.'],
        correct: 0,
      },
      {
        question: 'O tempo que o treinador passa com cada praticante deverá:',
        options: [
          'Ser igual para todos, garantindo igual atenção e feedback por parte do treinador.',
          'Depender da etapa de formação em que os praticantes se encontram.',
          'Estar alinhado com os interesses coletivos do clube, dedicando mais tempo aos atletas mais aptos.',
          'Ser variável, em função das virtudes e dificuldades de cada um.',
        ],
        correct: 3,
      },
      {
        question: 'Um bom objetivo deve ser:',
        options: [
          'Vago, para não limitar o atleta.',
          'Realista, preciso, mensurável, positivo, ecológico e reatualizável.',
          'Definido apenas pelo treinador sem envolver o atleta.',
          'Focado exclusivamente no resultado competitivo.',
        ],
        correct: 1,
      },
    ],
    sub15: [
      {
        question:
          'Durante o desenrolar da sessão o treinador deve utilizar as seguintes estratégias:',
        options: [
          'Observar e deixar os praticantes decidirem sem intervir.',
          'Observar com atenção as respostas dos praticantes às solicitações feitas para determinar o que é necessário corrigir, em função dos objetivos de cada um.',
          'Observar com atenção as respostas dos praticantes às solicitações feitas para determinar o que é necessário corrigir, em função dos objetivos principais de cada sessão de treino.',
          'Intervir sem observar.',
        ],
        correct: 2,
      },
      {
        question: 'O ciclo completo de feedback do treinador é:',
        options: [
          'Observar → intervir → verificar.',
          'Gritar → corrigir → punir.',
          'Planear → competir → avaliar resultados.',
          'Demonstrar → repetir → avaliar notas.',
        ],
        correct: 0,
      },
    ],
  },
  'unit-fch': {
    sub1: [
      {
        question: 'Em que estrutura dos ossos longos se encontram as cartilagens de crescimento?',
        options: [
          'Na transição entre a metáfise e a diáfise.',
          'No topo das epífises.',
          'No interior da diáfise.',
          'Ao nível das metáfises dos ossos longos.',
        ],
        correct: 3,
      },
      {
        question: 'Quantas peças ósseas tem o corpo humano adulto (aproximadamente)?',
        options: ['150', '206', '250', '320'],
        correct: 1,
      },
      {
        question: 'Qual célula óssea é responsável pela síntese/construção de osso?',
        options: ['Osteoclasto', 'Osteócito', 'Osteoblasto', 'Osteoprogenitora'],
        correct: 2,
      },
      {
        question: 'Uma unidade motora é composta por:',
        options: [
          'Vários axónios e uma fibra muscular.',
          'Um axónio e o conjunto de fibras musculares que inerva.',
          'Um tendão e um músculo.',
          'Duas fibras tipo I ligadas entre si.',
        ],
        correct: 1,
      },
      {
        question: 'Qual artéria transporta sangue venoso (não oxigenado)?',
        options: ['Aorta', 'Artéria pulmonar', 'Veia cava', 'Veia pulmonar'],
        correct: 1,
      },
      {
        question: 'Na fórmula de Fick, o que representa Q?',
        options: [
          'Quantidade de hemoglobina.',
          'Débito cardíaco (FC × volume sistólico).',
          'Volume de ar inspirado.',
          'Diferença arteriovenosa de CO₂.',
        ],
        correct: 1,
      },
      {
        question: 'Qual é o principal fator limitante do VO₂ máximo?',
        options: [
          'Capacidade pulmonar de ventilação.',
          'Débito cardíaco.',
          'Concentração de mioglobina.',
          'Flexibilidade articular.',
        ],
        correct: 1,
      },
      {
        question: 'Em exercício, a principal via de dissipação de calor é:',
        options: ['Radiação.', 'Condução.', 'Convecção.', 'Evaporação (sudorese).'],
        correct: 3,
      },
      {
        question: 'A retroação negativa no sistema hormonal significa que:',
        options: [
          'A hormona estimula a sua própria secreção.',
          'Níveis elevados de hormona inibem a secreção.',
          'Só actua na hipófise posterior.',
          'Elimina a necessidade de hormonas periféricas.',
        ],
        correct: 1,
      },
      {
        question: 'O débito cardíaco pode ser definido como:',
        options: [
          'Diminui sempre que a pressão arterial diastólica aumenta.',
          'Produto entre a frequência cardíaca e o volume sistólico.',
          'Quantifica-se em mmHg.',
          'Diminui sempre que o volume sistólico aumenta.',
        ],
        correct: 1,
      },
      {
        question: 'O sangue pode ser definido como:',
        options: [
          'Tecido conjuntivo composto exclusivamente por fase plasmática e glóbulos vermelhos.',
          'Tecido conjuntivo composto por eritrócitos, leucócitos, plaquetas e plasma.',
          'Cumpre a função de transporte de azoto aos tecidos metabolicamente ativos.',
          'Tecido conjuntivo composto exclusivamente por hemoglobina e plasma.',
        ],
        correct: 1,
      },
      {
        question:
          'A dissipação de calor a partir da distribuição de sangue à superfície da pele, enquadra-se no mecanismo de:',
        options: ['Condução.', 'Evaporação.', 'Convecção.', 'Radiação.'],
        correct: 2,
      },
      {
        question:
          'Tendo por referência as estruturas músculo-tendinosas do sistema músculo-esquelético, selecione a opção correta:',
        options: [
          'O perimísio corresponde a um folheto de tecido conjuntivo que envolve o ventre muscular.',
          'O tendão corresponde a um folheto de tecido conjuntivo que envolve o ventre muscular.',
          'O endomísio corresponde a um folheto de tecido conjuntivo que envolve o ventre muscular.',
          'O epimísio corresponde a um folheto de tecido conjuntivo que envolve o ventre muscular.',
        ],
        correct: 3,
      },
      {
        question: 'Que fenómeno fisiológico é explicado através da Fórmula de Fick:',
        options: [
          'Permite determinar o consumo de oxigénio à custa da relação entre frequência cardíaca e pressão arterial diastólica.',
          'Permite determinar o consumo de oxigénio à custa da relação entre débito cardíaco e pressão arterial diastólica.',
          'Permite determinar o consumo de oxigénio à custa da relação entre débito cardíaco e resistência vascular periférica.',
          'Permite determinar o consumo de oxigénio à custa da relação entre débito cardíaco e diferença artério-venosa em oxigénio.',
        ],
        correct: 3,
      },
    ],
    sub2: [
      {
        question: 'Qual é a hora ideal para treinar outdoors de modo a minimizar a exposição a poluentes?',
        options: [
          '12h — sol reduz poluentes.',
          'Antes das 6h da manhã.',
          'Entre as 18h e as 20h.',
          'Após as 22h.',
        ],
        correct: 1,
      },
      {
        question: 'Acima de que concentração o monóxido de carbono (CO) é considerado perigoso?',
        options: ['50 ppm', '100 ppm', '200 ppm', '10 ppm'],
        correct: 1,
      },
      {
        question: 'Qual o sinal diagnóstico mais característico da fascite plantar?',
        options: [
          'Dor à noite em repouso.',
          'Edema no tornozelo ao final do dia.',
          'Dor máxima ao primeiro apoio matinal.',
          'Dor constante que aumenta com o exercício.',
        ],
        correct: 2,
      },
      {
        question: 'Quanto tempo de paragem completa é necessário numa fratura de stress?',
        options: ['2 a 4 semanas', '4 a 6 semanas', '8 a 10 semanas', '12 a 16 semanas'],
        correct: 2,
      },
      {
        question: 'O que é uma recidiva no contexto de lesão desportiva?',
        options: [
          'Uma nova lesão numa zona diferente.',
          'O regresso à fase inflamatória por reapresentação precoce ao agente lesivo.',
          'A ausência de cicatrização após 4 semanas.',
          'Uma lesão com sinais flogísticos intensos.',
        ],
        correct: 1,
      },
      {
        question: 'Quais os quatro sinais flogísticos da fase inflamatória?',
        options: [
          'Dor, febre, náuseas e tonturas.',
          'Dor, calor, rubor e tumor (edema).',
          'Rigidez, cãibras, espasmos e formigueiro.',
          'Edema, hematoma, deformidade e incapacidade.',
        ],
        correct: 1,
      },
      {
        question: 'Porque é a velocidade mais lesiva que a massa numa colisão desportiva?',
        options: [
          'Porque a massa não afeta a lesão.',
          'Porque Ec = ½mv² — a velocidade é elevada ao quadrado.',
          'Porque a velocidade reduz o tempo de reação.',
          'Porque a massa anula o impacto.',
        ],
        correct: 1,
      },
      {
        question: 'Quem é obrigado a realizar o exame médico desportivo em Portugal?',
        options: [
          'Todos os praticantes de desporto escolar.',
          'Atletas federados, alto rendimento, juízes, árbitros e cronometristas.',
          'Apenas atletas profissionais.',
          'Apenas menores de 18 anos.',
        ],
        correct: 1,
      },
      {
        question: 'A exposição a agentes poluentes na atmosfera:',
        options: [
          'É superior por volta das 6 h da manhã e 22 h da noite, respetivamente.',
          'Está francamente aumentada nos períodos matinais (~ 6 h da manhã).',
          'É inferior no período do inverno e no verão, respetivamente.',
          'Aumenta na parte da tarde e durante as manhãs para o ozono, bem como durante a noite para o monóxido de carbono.',
        ],
        correct: 3,
      },
      {
        question:
          'Qual é a altura do ano em que os níveis de monóxido de carbono atmosféricos se encontram geralmente mais elevados, influenciando a prática de exercício físico?',
        options: [
          'Durante a Primavera.',
          'Durante o Inverno.',
          'Durante o Verão.',
          'Durante o Outono.',
        ],
        correct: 1,
      },
      {
        question: 'O exame médico desportivo realizado nos Centros de Medicina Desportiva:',
        options: [
          'Tem validade de 12 meses.',
          'Implica um custo financeiro a ser suportado pelo atleta ou federação na qual se encontra filiado.',
          'É obrigatório para atletas de alto rendimento e todos os filiados em federações desportivas.',
          'É recomendável, mas não obrigatório para os casos de sobreclassificação.',
        ],
        correct: 0,
      },
      {
        question: 'Fratura de stress na porção médio-tibial:',
        options: [
          'Implica 8 a 10 semanas de recuperação com interrupção total de qualquer atividade física.',
          'Tem sempre origem no recurso a calçado inapropriado para a prática desportiva.',
          'Poderão ser recomendadas atividades alternativas (com menor carga compressiva) durante a recuperação do atleta.',
          'A dor tende a desaparecer ao fim de ~ 45 min de corrida contínua.',
        ],
        correct: 2,
      },
    ],
    sub3: [
      {
        question: 'Qual é a sequência correta do algoritmo SBV?',
        options: [
          'Via aérea → Segurança → 112 → CTE → Ventilação.',
          'Segurança → Consciência → Via aérea → Ventilação → 112 → CTE → Insuflações.',
          '112 → Segurança → Consciência → CTE → Ventilação.',
          'Consciência → 112 → Segurança → CTE → Ventilação.',
        ],
        correct: 1,
      },
      {
        question: 'Qual destes ritmos TEM indicação para choque com DAE?',
        options: [
          'Assistolia.',
          'Bradicardia sinusal.',
          'Fibrilação ventricular.',
          'Bloqueio auriculoventricular completo.',
        ],
        correct: 2,
      },
      {
        question: 'A que ritmo devem ser realizadas as compressões torácicas externas?',
        options: [
          '60–80 por minuto.',
          '80–100 por minuto.',
          '100–120 por minuto.',
          '120–140 por minuto.',
        ],
        correct: 2,
      },
      {
        question: 'O SBV sozinho reverte a paragem cardiorrespiratória?',
        options: [
          'Sim, se iniciado nos primeiros 2 minutos.',
          'Não, apenas mantém perfusão mínima até chegada do SAV.',
          'Sim, desde que com insuflações corretas.',
          'Depende do tipo de ritmo cardíaco.',
        ],
        correct: 1,
      },
      {
        question: 'Quanto diminui a sobrevida por minuto numa PCR sem intervenção?',
        options: ['1–2%.', '7–10%.', '15–20%.', '25–30%.'],
        correct: 1,
      },
      {
        question: 'O protocolo RAISED aplica-se nas primeiras:',
        options: ['12 horas.', '24 horas.', '72 horas.', '1 semana.'],
        correct: 2,
      },
      {
        question: 'Uma lesão vertebromedular acima de C3 tem como consequência:',
        options: [
          'Paraplegia com função respiratória preservada.',
          'Tetraplegia com ventilação autónoma possível.',
          'Incompatibilidade com ventilação autónoma.',
          'Espasticidade nos membros inferiores.',
        ],
        correct: 2,
      },
      {
        question: 'Numa perfuração com objeto empalado, o procedimento correto é:',
        options: [
          'Remover o objeto cuidadosamente antes de imobilizar.',
          'Deixar o objeto no local, caseamento com gaze e penso oclusivo.',
          'Puxar metade do objeto e fixar com ligadura.',
          'Aguardar sem tocar na vítima.',
        ],
        correct: 1,
      },
      {
        question: 'Qual o grau de eficácia da rápida DAE nos casos de PCR?',
        options: [
          'Ronda os 65%.',
          'Ronda os 95%.',
          'Ronda os 25%.',
          'Ronda os 45%.',
        ],
        correct: 3,
      },
      {
        question: 'O programa RICE:',
        options: [
          'Recomenda-se a todos os casos de fratura aberta.',
          'Está indicado para um rutura de 3º grau do ventre muscular.',
          'Pretende controlar a inflamação tecidular e estabelecer um diagnóstico quanto à gravidade da lesão.',
          'Deve ser aplicado por um período extensível a não mais de 48 h.',
        ],
        correct: 2,
      },
      {
        question: 'Qual é o propósito das medidas universais de proteção individual?',
        options: [
          'Lenços de bolso são eficazes no que respeita a proteção do reanimador e da vítima.',
          'São perfeitamente dispensáveis nos casos em que se presta assistência a um familiar mais próximo.',
          'Pretendem interpor uma barreira entre o reanimador e os fluidos corporais ou aerossóis provenientes da vítima.',
          'Luvas e bata são dispensáveis.',
        ],
        correct: 2,
      },
    ],
    sub4: [
      {
        question:
          'Fora de competição, os critérios de seleção dos atletas para controlo antidoping são: sorteio e classificação na prova. Esta afirmação está:',
        options: [
          'Incorreta, porque fora de competição os critérios de seleção dos atletas são: sorteio e forma direcionada.',
          'Correta.',
          'Incorreta, porque fora de competição os critérios de seleção dos atletas são apenas o sorteio.',
          'Incorreta, porque fora de competição não existem controlos antidoping.',
        ],
        correct: 0,
      },
      {
        question: 'Na ADoP, que Comissão avalia as solicitações para autorização de utilização terapêutica?',
        options: [
          'Comissão Nacional Antidopagem.',
          'Comissão de Autorização de Utilização Terapêutica.',
          'Comissão Jurídica.',
          'Comissão Financeira.',
        ],
        correct: 1,
      },
      {
        question: 'Qual é o volume mínimo de urina exigido num controlo de dopagem?',
        options: ['50 ml', '90 ml', '120 ml', '75 ml'],
        correct: 1,
      },
      {
        question: 'Qual dos seguintes volumes é colocado no frasco B na divisão da amostra?',
        options: ['60 ml', '45 ml', '30 ml', '90 ml'],
        correct: 2,
      },
      {
        question: 'A AMA (Agência Mundial Antidopagem) foi criada em que ano?',
        options: ['1984', '1999', '2004', '2012'],
        correct: 1,
      },
      {
        question: 'Em que data entrou em vigor o primeiro Código Mundial Antidopagem?',
        options: ['1 jan. 2000', '1 jan. 2004', '1 jan. 2012', '1 jan. 2019'],
        correct: 1,
      },
      {
        question: 'Que temperatura é usada para armazenar a amostra B no laboratório?',
        options: ['0 °C', '−4 °C', '−20 °C', '−80 °C'],
        correct: 2,
      },
      {
        question: 'Qual é a sigla da estrutura da ADoP responsável pelo planeamento dos controlos?',
        options: ['CNAD', 'CAUT', 'LAD', 'ESPAD'],
        correct: 3,
      },
      {
        question: 'Durante o fornecimento da amostra de urina, quem pode estar presente?',
        options: [
          'Atleta, RCD e treinador.',
          'Apenas o atleta.',
          'Atleta e RCD.',
          'Atleta, RCD e médico da equipa.',
        ],
        correct: 2,
      },
      {
        question: 'Qual dos seguintes NÃO é um objetivo da luta contra a dopagem?',
        options: [
          'Preservação da saúde.',
          'Maximização dos lucros do desporto.',
          'Preservação do espírito desportivo.',
          'Preservação da verdade desportiva.',
        ],
        correct: 1,
      },
      {
        question: 'O primeiro Código Mundial Antidopagem entrou em a 1 de Janeiro de:',
        options: ['1999.', '2019.', '2004.', '2010.'],
        correct: 2,
      },
      {
        question: 'Qual é a sequência correta de etapas no processo do controlo de dopagem?',
        options: [
          'Seleção do atleta, notificação, fornecimento da amostra, apresentação na estação de controlo de dopagem.',
          'Notificação, seleção do atleta, fornecimento da amostra, apresentação na estação de controlo de dopagem.',
          'Notificação, apresentação na estação de controlo de dopagem, fornecimento da amostra, seleção do atleta.',
          'Seleção do atleta, notificação, apresentação na estação de controlo de dopagem, fornecimento da amostra.',
        ],
        correct: 3,
      },
      {
        question:
          'Qual das seguintes temáticas não é das mais abordadas nos programas informativos e educacionais da ADoP?',
        options: [
          'Lista de Substâncias e Métodos Proibidos.',
          'Sistema de Autorização de Utilização Terapêutica.',
          'Suplementos nutricionais.',
          'Gestão de Resultados.',
        ],
        correct: 3,
      },
      {
        question: 'Qual destes serviços não integra a organização da ADoP?',
        options: [
          'Instituto Português do Desporto e Juventude, I.P.',
          'Gabinete jurídico.',
          'Laboratório de análises de dopagem.',
          'Estrutura de Suporte ao Programa Antidopagem.',
        ],
        correct: 0,
      },
      {
        question: 'Quais os grandes objetivos da luta contra dopagem?',
        options: [
          'Preservação do espírito desportivo e da saúde do atleta.',
          'Preservação da verdade desportiva, da saúde do atleta e do espírito desportivo.',
          'Preservação da verdade desportiva e do espírito desportivo.',
          'Preservação da verdade desportiva e da saúde do atleta.',
        ],
        correct: 1,
      },
      {
        question:
          'Selecione a opção correspondente à sequência correta de procedimentos para controlo de dopagem:',
        options: [
          'Seleção, divisão da amostra, notificação, fecho e selagem dos frascos.',
          'Notificação, seleção, divisão da amostra, fecho e selagem dos frascos.',
          'Notificação, seleção, fecho e selagem dos frascos, divisão da amostra.',
          'Seleção, notificação, divisão da amostra, fecho e selagem dos frascos.',
        ],
        correct: 3,
      },
      {
        question:
          'Qual das seguintes temáticas é frequentemente abordada nos programas informativos e educacionais da ADoP?',
        options: [
          'Prescrição do treino de resistência.',
          'Técnicas de treino de potência.',
          'Fundamentos da química medicinal, fisiologia e toxicologia de várias substâncias.',
          'Lista de substâncias e métodos proibidos.',
        ],
        correct: 3,
      },
    ],
    sub5: [
      {
        question:
          'Qual das seguintes situações não complementa a seguinte frase: Atletas que precisam de suplementos nutricionais devem...',
        options: [
          'Adquirir produtos de empresas com boa reputação.',
          'Consultar um profissional competente.',
          'Obter informação adicional sobre os ingredientes.',
          'Dar prioridade a compras pela internet.',
        ],
        correct: 3,
      },
      {
        question: 'Qual foi o primeiro organismo responsável pela lista de substâncias proibidas no desporto?',
        options: [
          'Agência Mundial Antidopagem (AMA).',
          'Comissão Médica do COI.',
          'Autoridade Antidopagem de Portugal.',
          'OMS.',
        ],
        correct: 1,
      },
      {
        question: 'Quantos critérios têm de estar presentes para incluir uma substância na lista proibida?',
        options: [
          'Apenas 1.',
          'Pelo menos 2 dos 3.',
          'Obrigatoriamente os 3.',
          'Nenhum critério específico.',
        ],
        correct: 1,
      },
      {
        question: 'Qual destas é uma área da lista de substâncias proibidas?',
        options: [
          'Substâncias proibidas apenas em treino.',
          'Substâncias proibidas em desportos específicos.',
          'Substâncias proibidas para atletas seniores.',
          'Substâncias proibidas em provas internacionais.',
        ],
        correct: 1,
      },
      {
        question: 'O que são "substâncias específicas"?',
        options: [
          'Substâncias com fórmula química específica.',
          'Substâncias capazes de originar violações não intencionais.',
          'Substâncias proibidas apenas em certos países.',
          'Substâncias apenas detetáveis por análise específica.',
        ],
        correct: 1,
      },
      {
        question: 'De acordo com o princípio da responsabilidade objetiva, quem é responsável por uma substância proibida no organismo?',
        options: [
          'O treinador ou equipa técnica.',
          'O médico prescritor.',
          'O próprio atleta.',
          'O fabricante do suplemento.',
        ],
        correct: 2,
      },
      {
        question: 'Qual das seguintes condições NÃO é necessária para a concessão de uma AUT?',
        options: [
          'Não existirem alternativas médicas.',
          'A substância não aumentar o rendimento desportivo.',
          'O atleta ter mais de 18 anos.',
          'A necessidade não resultar de dopagem passada.',
        ],
        correct: 2,
      },
      {
        question: 'Qual o risco associado a suplementos com alegações de "queima de gordura"?',
        options: [
          'Podem conter estimulantes ou anabolisantes proibidos.',
          'Causam sempre resultados positivos em controlo.',
          'São ilegais de vender em Portugal.',
          'Têm excesso de proteínas.',
        ],
        correct: 0,
      },
      {
        question: 'Quando é que o laboratório arquiva o processo após um resultado positivo?',
        options: [
          'Quando o atleta pede desculpa.',
          'Quando existe AUT válida para a substância em causa.',
          'Quando o resultado é inferior ao limite legal.',
          'Quando o atleta não voltou a competir.',
        ],
        correct: 1,
      },
      {
        question: 'Em que ano entrou em vigor o Código Mundial Antidopagem?',
        options: ['1963.', '1999.', '1 de janeiro de 2004.', '2012.'],
        correct: 2,
      },
      {
        question:
          'Que Norma Internacional estabelece os critérios para aprovação de uma solicitação de autorização de utilização terapêutica?',
        options: [
          'Norma Internacional para Educação.',
          'Norma Internacional para Controlo.',
          'Norma Internacional para Laboratórios.',
          'Norma Internacional para Autorização de Utilização Terapêutica.',
        ],
        correct: 3,
      },
      {
        question:
          'Os atletas são responsáveis por qualquer substância encontrada no seu organismo. Que princípio se encontra aqui representado?',
        options: [
          'Princípio da responsabilidade objetiva.',
          'Princípio da intervenção mínima.',
          'Princípio da razoabilidade.',
          'Princípio da integridade de saúde.',
        ],
        correct: 0,
      },
      {
        question:
          'A utilização de suplementos nutricionais é uma das causas mais frequentes de casos positivos de Doping. Esta afirmação está:',
        options: [
          'Incorreta, pois não existe relação entre a utilização de suplementos nutricionais e casos positivos de doping.',
          'Incorreta, pois não existem dados estatísticos que suportem esta afirmação.',
          'Correta.',
          'Incorreta, pois existem poucos casos positivos de doping relacionados com a utilização de suplementos nutricionais.',
        ],
        correct: 2,
      },
    ],
  },
  'unit-da': {
    sub1: [
      {
        question: 'Selecione qual das afirmações corresponde a uma barreira:',
        options: [
          'O transporte para o treino custar 5 euros cada vez que é utilizado.',
          'O transporte demorar 1 hora até ao treino.',
          'O transporte circula por toda a cidade.',
          'O transporte consome tempo de socialização com os meus pares.',
        ],
        correct: 3,
      },
      {
        question: 'Qual o termo diferenciador entre integração e inclusão?',
        options: ['Significativo.', 'Estar no controlo.', 'Sensação de pertença.', 'Participação.'],
        correct: 3,
      },
      {
        question: 'Quais os fatores que devem ser classificados como barreiras ou facilitadores:',
        options: ['Ambiente.', 'Indivíduo.', 'Tarefa.', 'Pessoal.'],
        correct: 0,
      },
      {
        question:
          'Selecione a opção correta relativamente ao papel de suporte de pares e família no contexto do desporto adaptado:',
        options: [
          'Este é sempre considerado como facilitador.',
          'A família constitui um pilar de suporte, em qualquer circunstância.',
          'Este poderá nem ser considerado barreira ou facilitador.',
          'Este é sempre considerado como barreira.',
        ],
        correct: 2,
      },
      {
        question:
          'Para um indivíduo com cegueira total, um passeio rebaixado sem piso antiderrapante corresponde:',
        options: [
          'Um auxiliar arquitetónico presente no envolvimento.',
          'Apresenta-se como um objeto neutro, não influenciado a funcionalidade do indivíduo.',
          'A uma barreira à sua locomoção.',
          'Um facilitador da sua locomoção.',
        ],
        correct: 2,
      },
      {
        question: 'Por vezes, a maior barreira para a prática desportiva por parte das pessoas com deficiência:',
        options: [
          'É a falta de parceiros com quem praticar.',
          'É a falta de modalidades desportivas adaptadas que ainda não foram inventadas.',
          'É o acesso à informação de que existe prática adaptada.',
          'É a incapacidade geral para a prática desportiva.',
        ],
        correct: 2,
      },
      {
        question: 'O termo desporto para pessoas com deficiência:',
        options: [
          'É o termo preferido no desporto adaptado.',
          'Refere-se exclusivamente ao desporto convencional.',
          'É sinónimo de desporto adaptado.',
          'Não está adequado.',
        ],
        correct: 3,
      },
      {
        question: 'As crenças e atitudes da sociedade sobre as pessoas com deficiência:',
        options: [
          'São baseadas em factos científicos comprovados.',
          'Têm tendência para ter um impacto negativo no desporto adaptado.',
          'São baseadas na experiência direta da própria pessoa com deficiência.',
          'Têm tendência para ter um impacto positivo no desporto adaptado.',
        ],
        correct: 1,
      },
      {
        question: 'No contexto do desporto adaptado, os facilitadores correspondem:',
        options: [
          'A fatores que permitem a uma pessoa participar em todas as atividades desportivas.',
          'A fatores que diminuem o estigma social associado à deficiência.',
          'A fatores que melhoram a funcionalidade e reduzem a incapacidade de uma pessoa.',
          'A fatores que não limitam e provocam incapacidade.',
        ],
        correct: 2,
      },
      {
        question: 'O desenvolvimento motor rege-se por que princípios?',
        options: [
          'Ser linear e contínuo.',
          'Ser igual para todas as pessoas.',
          'Ser não linear, descontínuo e individualizado.',
          'Depender exclusivamente da idade cronológica.',
        ],
        correct: 2,
      },
      {
        question: 'Sabendo que cada atleta com deficiência é único, o treino deve ser:',
        options: [
          'O mesmo para todos para não desvirtuar a modalidade desportiva.',
          'Diversificado nos estímulos propostos.',
          'Massificado para reduzir custos operacionais.',
          'Exclusivamente individual, sem trabalho em grupo.',
        ],
        correct: 1,
      },
    ],
    sub2: [
      {
        question:
          'Alguns dos meios de otimizar a aprendizagem no contexto de treino com pessoas deficientes:',
        options: [
          'Modificar os materiais e introduzir novas regras.',
          'Reduzir o espaço e número de elementos de um determinado jogo/tarefa.',
          'Usar instrumentos e implementos de dimensões menores, aumentando a segurança.',
          'Adaptar o modo de instrução face às condições dos materiais.',
        ],
        correct: 3,
      },
      {
        question:
          'Caso um atleta não consiga realizar o seguimento (visual) de determinado objeto podemos:',
        options: [
          'Diminuir o tamanho do objeto.',
          'Aumentar o contraste do objeto com o espaço (cor).',
          'Aumentar a distância do alvo ao objeto.',
          'Diminuir o alvo.',
        ],
        correct: 1,
      },
      {
        question:
          'O treinador fica responsável por acompanhar todos os atletas menos aptos por determinado exercício adaptado não permitindo dedicar tempo à observação, feedback e acompanhamento da atividade:',
        options: [
          'Nesta situação dever-se-á ponderar abdicar desta adaptação.',
          'O treinador deverá continuar, está a fazer um ótimo trabalho.',
          'É um pequeno revés para grandes ganhos na aprendizagem e formação.',
          'Devem-se correr riscos e este é um que vale a pena.',
        ],
        correct: 0,
      },
      {
        question: 'Um equipamento de apoio tem como principal propósito:',
        options: [
          'É condição essencial para permitir a prática de desporto adaptado.',
          'Compensar, monitorizar, aliviar ou neutralizar as incapacidades ou limitações associadas à participação na atividade.',
          'Permitir que a atividade desportiva seja realizada em pleno.',
          'É essencial face às dificuldades técnicas dos praticantes com deficiência.',
        ],
        correct: 1,
      },
      {
        question: 'Se uma regra não é entendida pelo praticante, deve-se:',
        options: [
          'Eliminar completamente a regra.',
          'Simplificar a mesma.',
          'Manter a regra inalterada.',
          'Aumentar a complexidade da regra.',
        ],
        correct: 1,
      },
      {
        question: 'Os dispositivos de comunicação alternativa podem ser usados preferencialmente por:',
        options: [
          'Pessoas com paralisia cerebral.',
          'Pessoas com lesão medular baixa.',
          'Pessoas com amputação da mão.',
          'Pessoas com amputação de ambas as pernas.',
        ],
        correct: 0,
      },
      {
        question: 'Os dispositivos de comunicação alternativa são particularmente úteis para:',
        options: [
          'Pessoas com deficiência visual.',
          'Pessoas com paralisia cerebral.',
          'Pessoas com deficiência auditiva.',
          'Atletas de alto rendimento.',
        ],
        correct: 1,
      },
      {
        question: 'A adaptação desportiva deve proporcionar:',
        options: [
          'Vitórias em competição.',
          'Que o praticante participe mais.',
          'Igualdade de resultados entre todos.',
          'A eliminação de todas as barreiras.',
        ],
        correct: 1,
      },
      {
        question: 'Na estruturação e adaptação do treino, dois aspetos centrais são:',
        options: [
          'Planeamento e segurança.',
          'Volume e intensidade.',
          'Competição e resultados.',
          'Equipamento e instalações.',
        ],
        correct: 0,
      },
      {
        question:
          'Perante um atleta com deficiência motora que fatiga precocemente e tem maior dificuldade, a estratégia adequada é:',
        options: [
          'Aumentar os períodos de repouso entre exercício, diminuir o intervalo de duração de cada repetição e diminuir a complexidade da tarefa.',
          'Aumentar os períodos de repouso entre exercício, diminuir a complexidade da tarefa e aumentar a instrução.',
          'Diminuir os períodos de repouso e aumentar a complexidade da tarefa.',
          'Manter a mesma carga e complexidade para não desvirtuar o exercício.',
        ],
        correct: 0,
      },
      {
        question: 'No contexto do desporto adaptado, os produtos de apoio correspondem:',
        options: [
          'A equipamentos de segurança geral obrigatórios em todas as modalidades.',
          'A substitutos permanentes do treinador.',
          'A materiais desportivos convencionais sem qualquer modificação.',
          'A dispositivos para compensar incapacidades e permitir maior participação.',
        ],
        correct: 3,
      },
      {
        question: 'Selecione a opção que corresponde a um produto de apoio:',
        options: [
          'Colete refletor.',
          'Óculos de proteção.',
          'Bastão de equilíbrio.',
          'Prótese de fibra de carbono.',
        ],
        correct: 3,
      },
      {
        question: 'Qual destes é um exemplo de produto de apoio?',
        options: [
          'Colete de proteção.',
          'Óculos de sol.',
          'Prótese de fibra de carbono.',
          'Bastão de caminhada convencional.',
        ],
        correct: 2,
      },
    ],
  },
  'unit-ed': {
    sub1: [
      {
        question: 'A ética normativa ou do dever:',
        options: [
          'Defendida por Emanuel Kant (1724-1804), refere que caso a ação seja aceite por todos então esta está correta.',
          'Defendida por John Stuart Mill (1806-1873), afirma que se deve procurar o bem e diminuir o mal.',
          'Defendida por Aristóteles (385-323, AC) assenta mais na pessoa e menos na ação, sublinhado o seu carácter.',
          'Defendida por Kohlberg (1927-1987), observa as diferentes crenças das pessoas sobre a moralidade.',
        ],
        correct: 0,
      },
      {
        question:
          'Se o treinador incorrer num comportamento desonesto, terá que aceitar que outros indivíduos hajam também dessa maneira, podendo os prejuízos cair sobre si e, de igual forma, contribuir para um clima generalizado de desconfiança. A perspetiva ética que aqui se apresenta corresponde:',
        options: [
          'À ética universal, defendida por James Rachels.',
          'À ética deontológica, defendida por Emanuel Kant.',
          'À ética das virtudes, defendida por Aristóteles.',
          'À ética utilitarista, defendida por John Stuart Mill.',
        ],
        correct: 1,
      },
      {
        question: 'Qual é o objeto de estudo da Ética, enquanto área de conhecimento?',
        options: ['A sociedade.', 'O desporto.', 'O comportamento humano.', 'A felicidade.'],
        correct: 2,
      },
      {
        question: 'Qual o contexto dos valores cívicos?',
        options: [
          'O próprio indivíduo.',
          'A interação entre as pessoas.',
          'Os instrumentos de ação.',
          'O espaço e o meio envolvente.',
        ],
        correct: 3,
      },
      {
        question: 'Qual o contexto dos valores pessoais?',
        options: [
          'Os instrumentos de ação.',
          'A interação entre as pessoas.',
          'O próprio indivíduo.',
          'O espaço e o meio envolvente.',
        ],
        correct: 2,
      },
      {
        question:
          'Relativamente ao desenvolvimento da sustentabilidade através do desporto, uma das opções apresentadas é incorreta. Qual?',
        options: [
          'É uma temática completamente alheia ao mundo do desporto.',
          'Atualmente é promovida por diversas instituições através da relação com os objetivos para o Desenvolvimento Sustentável da ONU.',
          'É uma problemática cada vez mais considerada.',
          'Tem na Agenda 21 publicada pelo Comité Olímpico Internacional em 1992 o seu primeiro documento.',
        ],
        correct: 0,
      },
      {
        question: 'O que é um código de ética desportiva?',
        options: [
          'É um manual de regras desportivas obrigatórias para todos os agentes envolvidos, que são fiscalizadas e cujo incumprimento pode levar à punição.',
          'É o equivalente a um regulamento competitivo de uma qualquer modalidade desportiva.',
          'Consiste num manual de boas práticas que contém todos os comportamentos de ética necessários e possíveis no contexto desportivo.',
          'É uma estrutura axiológica indicativa do comportamento e conduta que todos os agentes desportivos (e demais envolvidos no fenómeno desportivo) devem adotar.',
        ],
        correct: 3,
      },
      {
        question: 'São atitudes demonstrativas de fair-play:',
        options: [
          'A defesa da excelência, amizade e respeito.',
          'Sair em defesa do colega de equipa depois de o árbitro lhe atribuir um cartão vermelho.',
          'A demonstração de dignidade, respeito e justiça.',
          'O judoca que perdeu o combate não cumprimentar o seu adversário.',
        ],
        correct: 2,
      },
      {
        question:
          'Relativamente à ocorrência de bullying no desporto, uma das opções apresentadas é incorreta. Qual?',
        options: [
          'É uma realidade entre atletas mas também entre treinador e atletas.',
          'Quando ocorre, é frequente que seja no balneário e longe de elementos externos.',
          'Faz referência ao uso sistemático de poder com o objetivo de humilhar, e rebaixar o outro, ferindo a sua dignidade e personalidade.',
          'Carateriza-se única e fundamentalmente pela agressão física por parte de um atleta sobre outro.',
        ],
        correct: 3,
      },
      {
        question: 'A Carta Internacional da Educação Física, Atividade Física e Desporto:',
        options: [
          'Foi publicada pela Comissão Europeia.',
          'Foi publicada pela Organização Mundial de Saúde.',
          'Foi publicada pela UNICEF.',
          'Foi publicada pela UNESCO.',
        ],
        correct: 3,
      },
      {
        question: 'Qual o objetivo do Olimpismo?',
        options: [
          'Promover uma relação de respeito entre as pessoas.',
          'Criar as condições para que se possam desenvolver amizades entre as pessoas.',
          'Colocar o desporto ao serviço do desenvolvimento harmonioso da pessoa humana em vista de promover uma sociedade pacífica preocupada com a preservação da dignidade Humana.',
          'Formar atletas capazes de desenvolver performances de excelência.',
        ],
        correct: 2,
      },
    ],
    sub2: [
      {
        question: 'Como podemos caracterizar a intervenção pelo desporto?',
        options: [
          'Tem como foco a via da participação.',
          'Tem como foco o desporto profissional.',
          'Tem como foco a atividade física sénior.',
          'Tem como foco a via da competição.',
        ],
        correct: 0,
      },
      {
        question: 'Como podemos caracterizar a intervenção para o desporto?',
        options: [
          'Tem como foco a via da participação.',
          'Tem como foco o desporto profissional.',
          'Tem como foco a atividade física sénior.',
          'Tem como foco a via da competição.',
        ],
        correct: 3,
      },
      {
        question:
          'Um dos seguintes recursos não foi publicado pelo Plano Nacional de Ética no Desporto. Qual não foi publicado, entre os seguintes?',
        options: [
          'Programa de educação Olímpica.',
          'Folheto ética no Desporto para pais.',
          'Cartão Branco/Fair-play.',
          'Caravana/centro de estágio dos valores.',
        ],
        correct: 0,
      },
      {
        question: 'No desporto, os treinadores devem sempre procurar formar:',
        options: ['Outros treinadores.', 'Atletas.', 'Campeões.', 'Cidadãos.'],
        correct: 3,
      },
      {
        question:
          'O treinador de judo que não inicia o treino sem que todos os praticantes tenham arrumado apropriadamente o seu material no cacifo correspondente demonstra uma atitude promotora:',
        options: [
          'De obediência ao comando do treinador.',
          'De valores pessoais.',
          'De caráter e desenvolvimento pessoal.',
          'De valores cívicos.',
        ],
        correct: 3,
      },
      {
        question: 'Quais os valores do Olimpismo?',
        options: [
          'Excelência, amizade e lealdade.',
          'Fair-play, respeito e amizade.',
          'Fair-play, dignidade e honra.',
          'Excelência, amizade e respeito.',
        ],
        correct: 3,
      },
      {
        question:
          'Selecione a opção incorreta relativamente à promoção de valores no treino desportivo:',
        options: [
          'Recorrer à imagem e à mensagem de grandes atletas.',
          'Utilizar rituais e manifestações demonstrativas de cordialidade e respeito pelo outro e pelo espaço de prática.',
          'Utilizar critérios de interação inconsistentes.',
          'Conceber diferentes responsabilidades na organização dos treinos.',
        ],
        correct: 2,
      },
      {
        question:
          'Selecione a opção incorreta relativamente à promoção de valores no treino desportivo:',
        options: [
          'Utilizar critérios de interação inconsistentes.',
          'Recorrer à imagem e à mensagem de grandes atletas.',
          'Conceber diferentes responsabilidades na organização dos treinos.',
          'Utilizar rituais e manifestações demonstrativas de cordialidade e respeito pelo outro e pelo espaço de prática.',
        ],
        correct: 0,
      },
      {
        question:
          'Tendo por referência os compromissos do treinador, uma das opções apresentadas é incorreta. Qual?',
        options: [
          'Promover e potenciar os benefícios a nível biológico, psicológico e social que a prática desportiva acarreta.',
          'Entender a competição como uma manifestação desportiva que é parte do processo e não o seu produto.',
          'Focar-se exclusivamente no desenvolvimento de atletas de alto-rendimento.',
          'Estabelecer uma relação exemplar com todos os outros agentes.',
        ],
        correct: 2,
      },
      {
        question: 'Para a promoção dos valores no desporto, é importante que o treinador:',
        options: [
          'Controle todas as ações dos atletas.',
          'Limite os comportamentos dos atletas',
          'Dê ou retire liberdade, de forma intencional e pedagógica, em função das necessidades da circunstância e dos atletas.',
          'Dê total liberdade em todos os momentos.',
        ],
        correct: 2,
      },
      {
        question:
          'Tendo por referência a promoção de valores no treino desportivo, uma das opções apresentadas é correta. Qual?',
        options: [
          'Deixar os atletas fazerem tudo o que querem.',
          'Ser muito diretivo.',
          'Gerir o diálogo e utilizar linguagem que transmita confiança e compreensão.',
          'Nunca dar confiança aos atletas.',
        ],
        correct: 2,
      },
      {
        question: 'Para a promoção dos valores no desporto, é importante que o treinador:',
        options: [
          'Acompanhe todas as vontades dos atletas.',
          'Seja íntegro, no equilíbrio entre situações.',
          'Sobretudo, seja diretivo e confiante.',
          'Sobretudo, seja não diretivo e flexível.',
        ],
        correct: 1,
      },
    ],
  },
};

function normalizeQuestionKey(q) {
  return q.question.trim().toLowerCase().replace(/\s+/g, ' ');
}

function mergeUniqueQuestions(existing, incoming) {
  const seen = new Set(existing.map(normalizeQuestionKey));
  const result = [...existing];
  for (const q of incoming) {
    const key = normalizeQuestionKey(q);
    if (!seen.has(key)) {
      seen.add(key);
      result.push(q);
    }
  }
  return result;
}

function loadCourse() {
  return JSON.parse(fs.readFileSync(COURSE_FILE, 'utf8'));
}

function extractQuizFromSubunit(subunit) {
  const { extractQuizFromHtml, toQuiz } = require('./import-unit');
  const htmlPath = path.isAbsolute(subunit.html)
    ? subunit.html
    : path.join(ROOT, subunit.html);
  if (!fs.existsSync(htmlPath)) return [];
  const html = fs.readFileSync(htmlPath, 'utf8');
  return toQuiz(extractQuizFromHtml(html));
}

function buildExamBank() {
  const course = loadCourse();
  const bank = {};

  for (const unit of course.units) {
    bank[unit.id] = {};
    const curated = CURATED[unit.id] || {};

    for (const sub of unit.subunits) {
      const base = curated[sub.id] || [];
      let questions = [...base];

      // Adicionar extraQuiz do course.json
      if (sub.extraQuiz?.length) {
        questions = mergeUniqueQuestions(questions, sub.extraQuiz);
      }

      // Complementar com perguntas do HTML (variabilidade no exame)
      const fromHtml = extractQuizFromSubunit(sub);
      const autoPick = [];
      for (const q of fromHtml) {
        if (autoPick.length >= MAX_AUTO_PER_SUB) break;
        const key = normalizeQuestionKey(q);
        if (!questions.some((x) => normalizeQuestionKey(x) === key)) {
          autoPick.push(q);
        }
      }
      questions = mergeUniqueQuestions(questions, autoPick);

      if (questions.length) {
        bank[unit.id][sub.id] = questions;
      }
    }
  }

  return bank;
}

function main() {
  const bank = buildExamBank();
  fs.writeFileSync(EXAM_QUIZ_FILE, JSON.stringify(bank, null, 2) + '\n', 'utf8');

  let total = 0;
  for (const [unitId, subs] of Object.entries(bank)) {
    const n = Object.values(subs).reduce((s, arr) => s + arr.length, 0);
    total += n;
    console.log(`${unitId}: ${Object.keys(subs).length} subunidades, ${n} perguntas de exame`);
  }
  console.log(`\nTotal: ${total} perguntas em ${EXAM_QUIZ_FILE}`);
}

main();
