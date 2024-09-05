let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function playRound(humanChoice, computerChoice) {
    let roundResult;
    if (humanChoice === computerChoice) {
        roundResult = 'It\'s a tie!';
    } else if (humanChoice === 'rock' && computerChoice === 'scissors' ||
        humanChoice === 'paper' && computerChoice === 'rock' ||
        humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore++;
        roundResult = 'You win this round!';
    } else {
        computerScore++;
        roundResult = 'You lose this round!';
    }
    document.querySelector('#result').textContent = `You chose ${humanChoice}, computer chose ${computerChoice}. ${roundResult}`;
    updateScore();
    checkWinner();
}

function updateScore() {
    document.querySelector('#score').textContent = `Human: ${humanScore}, Computer: ${computerScore}`;
}

function checkWinner() {
    if (humanScore === 5) {
        document.querySelector('#result').textContent = 'Congratulations! You won the game!';
        disableButtons();
    } else if (computerScore === 5) {
        document.querySelector('#result').textContent = 'Sorry, you lost the game.';
        disableButtons();
    }
}

function disableButtons() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.disabled = true;
    });
}

const choices = document.querySelector('.choices');
choices.addEventListener('click', (e) => {
    switch (e.target.id) {
        case 'rock':
            playRound('rock', getComputerChoice());
            break;
        case 'paper':
            playRound('paper', getComputerChoice());
            break;
        case 'scissors':
            playRound('scissors', getComputerChoice());
            break;
    }
});