// Constantes das opções
const ROCK = 0;
const PAPER = 1;
const SCISSOR = 2;

const DEFAULT_LABEL = 'Faça a sua escolha!';
const RESULTS = [
    'Você perdeu!',
    'Empate!',
    'Você ganhou!'
];

const LOSE = -1;
const DRAW = 0;
const WIN = 1;

// Variáveis
let onResult = false;

// Grupos de elementos DOM
const scorePoints   = document.querySelectorAll('.score-points');
const buttons       = document.querySelectorAll('[ppt-button]');
const actionLabel   = document.querySelector('.label-area > p');
const resultLabel   = document.querySelector('h1');

// Classes
class Player {
    score = 0;
    choice;

    play(action = null) {
        // Ação do jogador
        if (action !== null) {
            this.choice = action;
            return;
        }
        
        // Escolher uma ação aleatória
        this.choice = parseInt(Math.random() * 3);
    }
}
// Instâncias
const visitor = new Player();
const host = new Player();

// Funções
function actionName(action) {
    switch (action) {
        case ROCK:      return 'Pedra';
        case PAPER:     return 'Papel';
        case SCISSOR:   return 'Tesoura';
    }
}

function showChoice() {
    buttons.forEach(btn => {
        btn.classList.remove('visitor-choice');
        btn.classList.remove('host-choice');
    });
    buttons[visitor.choice].classList.add('visitor-choice');
    buttons[host.choice].classList.add('host-choice');
}

function compareChoices() {
    const result = applyRule(visitor.choice, host.choice);
    if (result === WIN)
        ++visitor.score;
    else if (result === LOSE)
        ++host.score;
    resultLabel.innerHTML = RESULTS[result + 1];
}

function applyRule(a, b) {
    let offset = a;
    if (++offset - a === 1 && offset % 3 === b) return LOSE;
    if (++offset - a === 2 && offset % 3 === b) return WIN;
    return DRAW;
}

function updateScores() {
    scorePoints[0].innerHTML = visitor.score;
    scorePoints[1].innerHTML = host.score;
}

const changeLabel = label => actionLabel.innerHTML = label;

// Ação dos botões
buttons.forEach((btn, action) => {
    btn.addEventListener('click', () => {
        visitor.play(action);
        host.play();
        showChoice();
        compareChoices();
        updateScores();
    });

    btn.addEventListener('mouseover', () => changeLabel(actionName(action)));
    btn.addEventListener('mouseout', () => changeLabel(DEFAULT_LABEL));
});