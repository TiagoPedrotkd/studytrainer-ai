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
const MAX_AUTO_PER_SUB = 3;

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
    ],
    sub3: [
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
