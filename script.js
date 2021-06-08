const playerSelection = playerPlay();
const computerSelection = computerPlay();
// This function makes the computer choose either Rock, Paper, or Scissors
function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const computerSelection = choices[Math.floor(Math.random() * choices.length)];
    return computerSelection;
}

// Make a function that gets input from the user. This function should be able to only accept a valid input from the user i.e. 'rock' 'paper' or 'scissors'. 
function playerPlay(playerInput) {
    playerInput = prompt('Rock, Paper, or Scissors?').toLowerCase();
    // Make sure the input is either 'rock' 'paper' or 'scissors'. If not, ask the player for another input
    if (playerInput === 'rock' || playerInput === 'paper' || playerInput === 'scissors') {
        return playerInput;
    } else {
        playerPlay(playerInput);
    }
}

// Make a function that checks the user's selection against the computer's selection and determine a winner. Return a string indicating who wins or if it is a tie.
function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            return 'You win. Rock beats Scissors';
        } else if (computerSelection === 'paper') {
            return 'You lose. Paper beats Rock';
        } else {
            return 'It\'s a tie.';
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            return 'You win. Paper beats Rock';
        } else if (computerSelection === 'scissors') {
            return 'You lose. Scissors beats Paper';
        } else {
            return 'It\'s a tie.';
        }
    } else {
        if (computerSelection === 'paper') {
            return 'You win. Scissors beats Paper';
        } else if (computerSelection === 'rock') {
            return 'You lose. Rock beats Scissors';
        } else {
            return 'It\'s a tie.';
        }
    }
}

// // Make a function that plays 5 rounds and keeps score. At the end of 5 rounds, determine who the winner is.
function game(playRound) {
    // const playerScore = 0;
    // Make a loop that plays 5 rounds
    playRound(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);

}




// console.log(playRound(playerSelection, computerSelection));
console.log(game(playRound));
