// Música de fundo
const bgMusic = document.getElementById('bg-music');
bgMusic.volume = 0.5;

// Controle de volume
document.addEventListener('DOMContentLoaded', () => {
  const volumeControl = document.getElementById('volume-control');
  volumeControl.addEventListener('input', () => {
    bgMusic.volume = volumeControl.value;
  });
});

function hideAllScreens() {
  document.getElementById('menu').classList.add('hidden');
  document.getElementById('settings').classList.add('hidden');
  document.getElementById('category-selection').classList.add('hidden');
  document.getElementById('quiz').classList.add('hidden');
  document.getElementById('result').classList.add('hidden');
  document.getElementById('credits').classList.add('hidden');
}

function tryPlayMusic() {
  if (bgMusic.paused) {
    bgMusic.play().catch(() => {});
  }
  document.removeEventListener('click', tryPlayMusic);
  document.removeEventListener('keydown', tryPlayMusic);
}
document.addEventListener('click', tryPlayMusic);
document.addEventListener('keydown', tryPlayMusic);

// Mostrar tela de configurações

// Perguntas do quiz por categoria
const questionsByCategory = {
  esportes: [
    {
      question: "QUAL É O MAIOR ARTILHEIRO DA HISTÓRIA DA COPA DO MUNDO?",
      options: ["RONALDO FENÔMENO", "MIROSLAV KLOSE", "PELÉ", "GARRINCHA"],
      answer: "MIROSLAV KLOSE"
    },
    {
      question: "QUANTAS VEZES O BRASIL FOI CAMPEÃO MUNDIAL DE FUTEBOL?",
      options: ["4", "5", "6", "7"],
      answer: "5"
    },
    {
      question: "QUAL ESPORTE É CONHECIDO COMO 'ESPORTE BRETÃO'?",
      options: ["RUGBY", "TÊNIS", "FUTEBOL", "CRÍQUETE"],
      answer: "FUTEBOL"
    },
    {
      question: "QUANTOS JOGADORES FORMAM UM TIME DE VÔLEI?",
      options: ["5", "6", "7", "8"],
      answer: "6"
    },
    {
      question: "QUAL É O PAÍS COM MAIS TÍTULOS DE COPAS DO MUNDO DE FUTEBOL?",
      options: ["ALEMANHA", "ITÁLIA", "BRASIL", "ARGENTINA"],
      answer: "BRASIL"
    },
    {
      question: "QUAL PAÍS VENCEU A PRIMEIRA COPA DO MUNDO DE FUTEBOL EM 1930?",
      options: ["BRASIL", "URUGUAI", "ARGENTINA", "ITÁLIA"],
      answer: "URUGUAI"
    },
    {
      question: "QUEM É CONHECIDO COMO O 'REI DO FUTEBOL'?",
      options: ["PELÉ", "MARADONA", "MESSI", "CRISTIANO RONALDO"],
      answer: "PELÉ"
    },
    {
      question: "QUAL ATLETA GANHOU MAIS MEDALHAS DE OURO OLÍMPICAS NA HISTÓRIA?",
      options: ["USAIN BOLT", "NEYMAR", "MICHAEL PHELPS", "SIMONE BILES"],
      answer: "MICHAEL PHELPS"
    },
    {
      question: "QUAL CIDADE SEDIOU OS JOGOS OLÍMPICOS DE 2021?",
      options: ["PEQUIM", "NOVA IORQUE", "TÓQUIO", "RIO DE JANEIRO"],
      answer: "TÓQUIO"
    },
    {
      question: "QUEM É CONSIDERADA A MAIOR GINASTA FEMININA DE TODOS OS TEMPOS?",
      options: ["NADIA COMANECI", "SVETLANA KHORKINA", "GABBY DOUGLAS", "SIMONE BILES"],
      answer: "SIMONE BILES"
    },
    {
      question: "QUEM É A JOGADORA MAIS FAMOSA DO FUTEBOL FEMININO BRASILEIRO, TRICAMPEÃ DO PRÊMIO FIFA THE BEST?",
      options: ["CRISTIANE", "MARTA", "FORMIGA", "ANDRESSA ALVES"],
      answer: "MARTA"
    },
    {
      question: "QUANTOS PONTOS VALE UMA CESTA DE FORA DA LINHA DOS 3 PONTOS NO BASQUETE?",
      options: ["1", "2", "3", "4"],
      answer: "3"
    },
    {
      question: "QUAL JOGADOR É CONHECIDO COMO 'CR7'?",
      options: ["CRISTIANO RONALDO", "NEYMAR JR.", "MBAPPÉ", "BENZEMA"],
      answer: "CRISTIANO RONALDO"
    },
    {
      question: "QUAL DESTES ESPORTES USA RAQUETE E PETECA?",
      options: ["FRESCOBOL", "BADMINTON", "TÊNIS", "VÔLEI"],
      answer: "BADMINTON"
    },
    {
      question: "QUAL DESTES ESPORTES USA RAQUETE?",
      options: ["TÊNIS", "BASQUETE", "FUTEBOL", "ATLETISMO"],
      answer: "TÊNIS"
    },
    {
      question: "QUANTOS SETS NORMALMENTE TÊM UMA PARTIDA DE VÔLEI?",
      options: ["3", "5", "7", "4"],
      answer: "5"
    },
    {
      question: "QUAL CLUBE TEM MAIS TÍTULOS DA UEFA CHAMPIONS LEAGUE?",
      options: ["AC MILAN", "BARCELONA", "REAL MADRID", "BAYERN DE MUNIQUE"],
      answer: "REAL MADRID"
    },
    {
      question: "QUEM É O TENISTA BRASILEIRO MAIS FAMOSO DA HISTÓRIA?",
      options: ["GUGA", "THOMAZ BELLUCCI", "MARCELO MELO", "BRUNO SOARES"],
      answer: "GUGA"
    },
    {
      question: "QUAL É O NOME DA POSIÇÃO QUE NORMALMENTE ORGANIZA O ATAQUE NO BASQUETE?",
      options: ["ALA", "ARMADOR", "PIVÔ", "TÉCNICO"],
      answer: "ARMADOR"
    },
    {
      question: "QUAIS PAÍSES FIZERAM PARTE DA GOLEADA DE 7X1 NA COPA DO MUNDO DE 2014?",
      options: ["ALEMANHA E BRASIL", "ARGENTINA E BRASIL", "BÉLGICA E ITÁLIA", "FRANÇA E BRASIL"],
      answer: "ALEMANHA E BRASIL"
    },
    {
      question: "QUAL É O MAIOR VENCEDOR DA NBA NA HISTÓRIA?",
      options: ["LOS ANGELES LAKERS", "BOSTON CELTICS", "CHICAGO BULLS", "GOLDEN STATE WARRIORS"],
      answer: "BOSTON CELTICS"
    },
    {
      question: "QUAL É A FUNÇÃO DO GUIDÃO NA BICICLETA?",
      options: ["PEDALAR", "MANOBRAR", "FREAR", "TROCAR MARCHA"],
      answer: "MANOBRAR"
    },
    {
      question: "QUEM É CONHECIDO COMO 'NEY' NO FUTEBOL?",
      options: ["NEYMAR JR.", "NEÍLTON", "NENÊ", "NEYMAR PAI"],
      answer: "NEYMAR JR."
    },
    {
      question: "QUAL PAÍS TEM MAIS TÍTULOS DA COPA DO MUNDO FEMININA DE FUTEBOL?",
      options: ["ALEMANHA", "ESTADOS UNIDOS", "JAPÃO", "BRASIL"],
      answer: "ESTADOS UNIDOS"
    },
    {
      question: "QUAL CLUBE TEM MAIS TÍTULOS DA LIBERTADORES?",
      options: ["BOCA JUNIORS", "RIVER PLATE", "INDEPENDIENTE", "PEÑAROL"],
      answer: "BOCA JUNIORS"
    },
    {
      question: "QUAL É O TIME BRASILEIRO CONHECIDO COMO 'TIMÃO'?",
      options: ["CORINTHIANS", "FLAMENGO", "PALMEIRAS", "SÃO PAULO"],
      answer: "CORINTHIANS"
    },
    {
      question: "QUEM É CONSIDERADO O MAIOR SURFISTA BRASILEIRO DA HISTÓRIA?",
      options: ["ÍTALO FERREIRA", "ADRIANO DE SOUZA", "GABRIEL MEDINA", "FILIPE TOLEDO"],
      answer: "GABRIEL MEDINA"
    },
    {
      question: "QUEM É CONSIDERADO O MAIOR VELOCISTA DA HISTÓRIA?",
      options: ["USAIN BOLT", "CARL LEWIS", "MICHAEL JOHNSON", "JESSE OWENS"],
      answer: "USAIN BOLT"
    },
    {
      question: "QUAL PILOTO DE FÓRMULA 1 MORREU EM UM ACIDENTE NO GP DE SAN MARINO EM 1994?",
      options: ["ALAIN PROST", "AYRTON SENNA", "NIKI LAUDA", "NELSON PIQUET"],
      answer: "AYRTON SENNA"
    },
    {
      question: "QUAL É O MAIOR CAMPEÃO CARIOCA DE FUTEBOL?",
      options: ["VASCO", "FLAMENGO", "PALMEIRAS", "FLUMINENSE"],
      answer: "FLAMENGO"
    },
    {
      question: "QUEM GANHOU A ÚLTIMA BOLA DE OURO DE FUTEBOL?",
      options: ["LIONEL MESSI", "RODRI", "VINI JR", "GABIGOL"],
      answer: "RODRI"
    },
    {
      question: "QUAL DESSES ESPORTISTAS NÃO É UM JOGADOR DE BASQUETE?",
      options: ["LEBRON JAMES", "MICHAEL JORDAN", "MEMPHIS DEPAY", "STEPHEN CURRY"],
      answer: "MEMPHIS DEPAY"
    },
    {
      question: "QUEM É CONSIDERADO O MAIOR JOGADOR DE BASQUETE DE TODOS OS TEMPOS?",
      options: ["KOBE BRYANT", "MICHAEL JORDAN", "LEBRON JAMES", "SHAQUILLE O'NEAL"],
      answer: "MICHAEL JORDAN"
    },
    {
      question: "QUAL PAÍS VENCEU MAIS COPAS DO MUNDO DE FUTEBOL?",
      options: ["ALEMANHA", "ITÁLIA", "BRASIL", "FRANÇA"],
      answer: "BRASIL"
    },
    {
      question: "QUAL PAÍS SEDIOU A COPA DO MUNDO DE FUTEBOL DE 2018?",
      options: ["FRANÇA", "RÚSSIA", "ALEMANHA", "BRASIL"],
      answer: "RÚSSIA"
    },
    
  ],
  sports: [
    {
      question: "QUAL TIME VENCEU O PRIMEIRO CAMPEONATO MUNDIAL DE LEAGUE OF LEGENDS?",
      options: ["FNATIC", "SK TELECOM T1", "TEAM SOLOMID", "CLOUD9"],
      answer: "FNATIC"
    },
    {
      question: "QUAL JOGO É CONHECIDO COMO 'O JOGO DE LUTA DOS DEUSES'?",
      options: ["STREET FIGHTER", "TEKKEN", "SUPER SMASH BROS.", "GUILTY GEAR"],
      answer: "SUPER SMASH BROS."
    },
    {
      question: "QUAL É O NOME DO TROFÉU MAIS IMPORTANTE DO DOTA 2?",
      options: ["O IMPULSOR", "AEGIS OF CHAMPIONS", "A TAÇA DAS NAÇÕES", "O CÁLICE SAGRADO"],
      answer: "AEGIS OF CHAMPIONS"
    },
    {
      question: "QUANTOS JOGADORES FORMAM UMA EQUIPE EM UM JOGO PROFISSIONAL DE COUNTER-STRIKE?",
      options: ["4", "5", "6", "7"],
      answer: "5"
    },
    {
      question: "QUAL DESTES JOGOS NÃO É UM BATTLE ROYALE?",
      options: ["FORTNITE", "APEX LEGENDS", "VALORANT", "PUBG"],
      answer: "VALORANT"
    },
    {
      question: "QUAL TERMO SE USA PARA JOGADOR PROFISSIONAL DE ESPORTS?",
      options: ["PRO PLAYER", "CASUAL", "STREAMER", "JOGADOR OFFLINE"],
      answer: "PRO PLAYER"
    },
    {
      question: "É POSSÍVEL ASSISTIR ESPORTS EM TRANSMISSÕES AO VIVO?",
      options: ["SIM", "NÃO", "SÓ EM TORNEIOS PRESENCIAIS", "APENAS NO CONSOLE"],
      answer: "SIM"
    },
    {
      question: "EM JOGOS COMPETITIVOS, O MODO 'SOLO' SIGNIFICA:",
      options: ["JOGAR SOZINHO", "JOGAR EM DUPLA", "JOGAR EM TIME DE 5", "JOGAR OFFLINE"],
      answer: "JOGAR SOZINHO"
    },
    {
      question: "O QUE SIGNIFICA 'SQUAD' EM JOGOS ONLINE?",
      options: ["UM GRUPO DE JOGADORES QUE JOGAM JUNTOS", "UM JOGADOR SOLO", "UM INIMIGO DO JOGO", "UM TIPO DE MISSÃO"],
      answer: "UM GRUPO DE JOGADORES QUE JOGAM JUNTOS"
    },
    {
      question: "O QUE SIGNIFICA 'XP' NOS JOGOS?",
      options: ["EXPERIÊNCIA DO JOGADOR", "EXTRA POWER", "EXTRA POINTS", "XTREME PLAY"],
      answer: "EXPERIÊNCIA DO JOGADOR"
    },
    {
      question: "QUAL É O OBJETIVO PRINCIPAL DE THE SIMS?",
      options: ["CONSTRUIR E GERENCIAR A VIDA DE PERSONAGENS", "LUTAR CONTRA MONSTROS", "RESOLVER PUZZLES", "CORRER EM PISTAS"],
      answer: "CONSTRUIR E GERENCIAR A VIDA DE PERSONAGENS"
    },
    {
      question: "QUAL É O JOGO MAIS VENDIDO NO MUNDO?",
      options: ["FORTNITE", "GTA", "MINECRAFT", "CSGO"],
      answer: "MINECRAFT"
    },
    {
      question: "QUAL PERIFÉRICO É USADO PARA OUVIR SONS DO JOGO E COMUNICAR COM O TIME?",
      options: ["TECLADO", "MOUSE", "HEADSET", "MONITOR"],
      answer: "HEADSET"
    },
    {
      question: "QUEM PERSEGUE O PAC-MAN DURANTE O JOGO?",
      options: ["FANTASMAS", "ZUMBIS", "ALIENS", "MONSTROS DA FLORESTA"],
      answer: "FANTASMAS"
    },
    {
      question: "QUAL É O PERSONAGEM MAIS FAMOSO DE STREET FIGHTER?",
      options: ["RYU", "JESSY", "SONIC", "LINK"],
      answer: "RYU"
    },
    {
      question: "QUAL É O NOME DO PERSONAGEM PRINCIPAL DE MINECRAFT?",
      options: ["STEVE", "ALEX", "HEROBRINE", "ENDERMAN"],
      answer: "STEVE"
    },
    {
      question: "QUAL É O NOME DO PERSONAGEM AMARELO NO UNIVERSO SONIC?",
      options: ["TAILS", "SONIC", "SHADOW", "AMY"],
      answer: "TAILS"
    },
    {
      question: "QUEM É O CRIADOR DO FORTNITE?",
      options: ["ROCKSTAR GAMES", "MOJANG", "EPIC GAMES", "VALVE"],
      answer: "EPIC GAMES"
    },
    {
      question: "EM FORTNITE, COMO É CHAMADO O MODO EM QUE 100 JOGADORES LUTAM ATÉ RESTAR APENAS 1?",
      options: ["MODO CRIATIVO", "BATTLE ROYALE", "SALVE O MUNDO", "MODO ESPECTADOR"],
      answer: "BATTLE ROYALE"
    },
    {
      question: "NO ROCKET LEAGUE, OS CARROS SÃO USADOS PARA PRATICAR UM ESPORTE, QUAL É?",
      options: ["FUTEBOL", "CORRIDA", "LUTA", "BASQUETE"],
      answer: "FUTEBOL"
    },
    {
      question: "QUAL DESSES JOGOS É CONSIDERADO COMO UMA SIMULAÇÃO DE FUTEBOL?",
      options: ["FIFA", "COUNTER-STRIKE", "FREE FIRE", "NBA"],
      answer: "FIFA"
    },
    {
      question: "QUAL É O JOGADOR DE FREE FIRE BRASILEIRO MAIS FAMOSO NO MUNDO?",
      options: ["CEROL", "NOBRU", "BAK", "PLAYHARD"],
      answer: "NOBRU"
    },
    {
      question: "QUEM VENCEU A PRIMEIRA COPA DO MUNDO DE FORTNITE?",
      options: ["NINJA", "BUGHA", "TFUE", "MONGRAAL"],
      answer: "BUGHA"
    },
    {
      question: "QUAL DESSES PERSONAGENS É UM DOS PROTAGONISTAS DE GTA V?",
      options: ["TREVOR", "CARL JOHNSON", "TOMMY VERCETTI", "NIKO BELLIC"],
      answer: "TREVOR"
    },
    {
      question: "QUAL É A MOEDA VIRTUAL USADA NO ROBLOX?",
      options: ["COINS", "CREDITS", "GEMS", "ROBUX"],
      answer: "ROBUX"
    },
    {
      question: "QUAL É O CONSOLE MAIS RECENTE DA SONY?",
      options: ["XBOX SERIES X", "XBOX FUTURE", "PS5", "PS6"],
      answer: "PS5"
    },
    {
      question: "QUAL É O OBJETIVO PRINCIPAL DO MARIO NOS JOGOS CLÁSSICOS?",
      options: ["GANHAR CORRIDAS", "COLETAR MOEDAS", "SALVAR A PRINCESA PEACH", "CONQUISTAR CASTELOS"],
      answer: "SALVAR A PRINCESA PEACH"
    },
    {
      question: "É POSSÍVEL JOGAR AMONG US NO CELULAR?",
      options: ["SIM", "NÃO", "APENAS NO PC", "APENAS NO CONSOLE"],
      answer: "SIM"
    },
    {
      question: "QUEM PERSEGUE OS JOGADORES NO SUBWAY SURFERS?",
      options: ["ZUMBI", "POLICIAL", "MONSTRO", "FANTASMA"],
      answer: "POLICIAL"
    },
    {
      question: "QUAL DESTES JOGOS É SOBRE CARROS?",
      options: ["NEED FOR SPEED", "LEAGUE OF LEGENDS", "VALORANT", "ROBLOX"],
      answer: "NEED FOR SPEED"
    },
    {
      question: "O QUE SIGNIFICA 'ESPORTS'?",
      options: ["ESPORTES ELETRÔNICOS", "ESPORTES RADICAIS", "JOGOS DE TABULEIRO", "CORRIDA DE CARROS"],
      answer: "ESPORTES ELETRÔNICOS"
    },
    {
      question: "QUAL JOGO DE TIRO DA RIOT GAMES É POPULAR EM ESPORTS?",
      options: ["VALORANT", "FORTNITE", "PUBG", "APEX LEGENDS"],
      answer: "VALORANT"
    },
    {
      question: "QUAL É A PLATAFORMA MAIS USADA PARA TRANSMISSÕES DE ESPORTS?",
      options: ["TWITCH", "YOUTUBE", "TIKTOK", "FACEBOOK"],
      answer: "TWITCH"
    },
    {
      question: "QUAL DESENVOLVEDORA PRODUZ OS JOGOS OFICIAIS DE UFC?",
      options: ["EA SPORTS", "RIOT", "MICROSOFT", "ROCKSTAR GAMES"],
      answer: "EA SPORTS"
    },
    {
      question: "QUAL DESSES JOGADORES É CAPA DO NBA 2K24?",
      options: ["LEBRON JAMES", "MICHAEL JORDAN", "KOBE BRYANT", "STEPHEN CURRY"],
      answer: "LEBRON JAMES"
    }
  ]
};

// Função para selecionar aleatoriamente itens de um array
function getRandomItems(array, count) {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

let currentQuestions = [];
let currentQuestion = 0;
let score = 0;
let currentCategory = '';

// Funções de navegação
function showSettings() {
  hideAllScreens();
  document.getElementById('settings').classList.remove('hidden');
}
function showMenu() {
  hideAllScreens();
  document.getElementById('menu').classList.remove('hidden');
}

function showCredits() {
  console.log('showCredits chamado');
  hideAllScreens();
  const creditsDiv = document.getElementById('credits');
  if (creditsDiv) {
    creditsDiv.classList.remove('hidden');
    creditsDiv.style.display = 'block';
    console.log('Elemento #credits encontrado e exibido');
  } else {
    console.log('Elemento #credits NÃO encontrado');
  }
  
}

function showCategorySelection() {
  hideAllScreens();
  document.getElementById('category-selection').classList.remove('hidden');
}

function confirmExit() {
  // Mostra o popup de confirmação
  document.getElementById('confirm-popup').classList.remove('hidden');
}

function closeConfirmPopup() {
  // Fecha o popup
  document.getElementById('confirm-popup').classList.add('hidden');
}

function exitQuiz() {
  // Fecha o popup
  document.getElementById('confirm-popup').classList.add('hidden');
  // Volta para a seleção de categorias
  showCategorySelection();
}

function selectCategory(category) {
  currentCategory = category;
  
  if (category === 'misto') {
    // Para a categoria 'misto', pega perguntas de ambas as categorias
    const esportesQuestions = [...questionsByCategory.esportes];
    const sportsQuestions = [...questionsByCategory.sports];
    
    // Embaralha as perguntas de cada categoria
    const shuffledEsportes = esportesQuestions.sort(() => Math.random() - 0.5);
    const shuffledSports = sportsQuestions.sort(() => Math.random() - 0.5);
    
    // Pega aproximadamente metade de cada categoria
    const half = Math.ceil(15 / 2);
    const selectedEsportes = shuffledEsportes.slice(0, half);
    const selectedSports = shuffledSports.slice(0, 15 - selectedEsportes.length);
    
    // Combina e embaralha novamente
    currentQuestions = [...selectedEsportes, ...selectedSports].sort(() => Math.random() - 0.5);
  } else {
    // Para as outras categorias, pega 15 perguntas aleatórias
    const questions = [...questionsByCategory[category]];
    currentQuestions = questions
      .sort(() => Math.random() - 0.5)
      .slice(0, 15);
  }
  
  currentQuestion = 0;
  score = 0;
  
  // Atualiza o contador total de perguntas
  document.getElementById('total-questions').textContent = currentQuestions.length;
  
  // Mostra a primeira pergunta
  document.getElementById('category-selection').classList.add('hidden');
  document.getElementById('quiz').classList.remove('hidden');
  showQuestion();
}

function showQuestion() {
  if (currentQuestion >= currentQuestions.length) {
    endGame();
    return;
  }
  
  const question = currentQuestions[currentQuestion];
  document.getElementById('question').textContent = question.question;
  
  const optionsDiv = document.getElementById('options');
  optionsDiv.innerHTML = '';
  
  // Embaralha as opções
  const shuffledOptions = [...question.options].sort(() => Math.random() - 0.5);
  
  shuffledOptions.forEach(option => {
    const button = document.createElement('button');
    button.className = 'option';
    button.textContent = option;
    button.onclick = () => checkAnswer(option === question.answer, option, question.answer);
    optionsDiv.appendChild(button);
  });
  
  updateProgress();
}

function checkAnswer(isCorrect, selectedOption, correctAnswer) {
  const options = document.querySelectorAll('#options button');
  options.forEach(option => {
    option.disabled = true;
    if (option.textContent === correctAnswer) {
      option.classList.add('correct');
    } else if (!isCorrect && option.textContent === selectedOption) {
      option.classList.add('wrong');
    }
  });
  
  if (isCorrect) {
    score += 10;
  } else {
  }
  
  currentQuestion++;
  
  if (currentQuestion < currentQuestions.length) {
    setTimeout(showQuestion, 1500);
  } else {
    setTimeout(endGame, 1500);
  }
}

function updateProgress() {
  document.getElementById('current-question').textContent = currentQuestion + 1;
  document.getElementById('progress').style.width = `${((currentQuestion) / currentQuestions.length) * 100}%`;
}

function endGame() {
  hideAllScreens();
  const resultDiv = document.getElementById('result');
  const scoreText = document.getElementById('score');
  const percentage = Math.round((score / (currentQuestions.length * 10)) * 100);

  let message = `Categoria: ${currentCategory.toUpperCase()}\n`;
  message += `Acertos: ${score / 10} de ${currentQuestions.length}\n`;
  message += `Pontuação: ${score} pontos!\n\n`;

  if (percentage >= 80) {
    message += ' EXCELENTE! VOCÊ É UM MESTRE DOS ESPORTES! ';
  } else if (percentage >= 60) {
    message += ' MUITO BOM! CONTINUE PRATICANDO!';
  } else if (percentage >= 40) {
    message += ' BOM TRABALHO! VOCÊ PODE MELHORAR AINDA MAIS!';
  } else {
    message += ' NÃO DESISTA! TENTE NOVAMENTE PARA MELHORAR!';
  }

  scoreText.textContent = message;
  resultDiv.classList.remove('hidden');
  
}

function restartGame() {
  document.getElementById('result').classList.add('hidden');
  // Reinicia com a mesma categoria
  selectCategory(currentCategory);
}