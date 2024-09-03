function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function getHumanChoice() {
    let humanChoice = prompt("Enter your choice: rock, paper, or scissors").toLowerCase();
    if (humanChoice === 'rock' || humanChoice === 'paper' || humanChoice === 'scissors') {
        return humanChoice;
    } else {
        console.log('Invalid choice. Please enter rock, paper, or scissors.');
        return getHumanChoice();
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return 'It\'s a tie!';
    } else if (humanChoice === 'rock' && computerChoice === 'scissors' ||
        humanChoice === 'paper' && computerChoice === 'rock' ||
        humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore++;
        return 'You win!';
    } else {
        computerScore++;
        return 'You lose!';
    }
}

function playGame() {
    humanScore = 0;
    computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        console.log(`You chose ${humanChoice}. Computer chose ${computerChoice}.`);
        console.log(playRound(humanChoice, computerChoice));
        console.log(`Human: ${humanScore} Computer: ${computerScore}`);
    }
    if (humanScore > computerScore) {
        console.log('You win the game!');
    } else if (humanScore < computerScore) {
        console.log('You lose the game!');
    } else {
        console.log('It\'s a tie game!');
    }
}

playGame();