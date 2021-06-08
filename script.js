// Variable to keep track of the score
let score = 0;

// This function makes the computer choose either Rock, Paper, or Scissors
function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    let computerSelection = choices[Math.floor(Math.random() * choices.length)];
    return computerSelection;
}

// Make a function that gets input from the user. This function should be able to only accept a valid input from the user i.e. 'rock' 'paper' or 'scissors'. 
function playerPlay() {
    let playerInput = prompt('Rock, Paper, or Scissors?').toLowerCase();
    // Make sure the input is either 'rock' 'paper' or 'scissors'. If not, ask the player for another input
    if (playerInput === 'rock' || playerInput === 'paper' || playerInput === 'scissors') {
        return playerInput;
    } else {
        playerPlay();
    }
}

// Make a function that checks the user's selection against the computer's selection and determine a winner. Return a string indicating who wins or if it is a tie.
function playRound(playerSelection, computerSelection) {
    playerSelection = playerPlay();
    computerSelection = computerPlay();
    if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            console.log('You win. Rock beats Scissors');
            return score++;
        } else if (computerSelection === 'paper') {
            console.log('You lose. Paper beats Rock');
            return score--;
        } else {
            console.log('It\'s a tie.');
            return score;
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            console.log('You win. Paper beats Rock');
            return score++;
        } else if (computerSelection === 'scissors') {
            console.log('You lose. Scissors beats Paper');
            return score--;
        } else {
            console.log('It\'s a tie.');
            return score;
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            console.log('You win. Scissors beats Paper');
            return score++;
        } else if (computerSelection === 'rock') {
            console.log('You lose. Rock beats Scissors');
            return score--;
        } else {
            console.log('It\'s a tie.');
            return score;
        }
    }
}

// // Make a function that plays 5 rounds and keeps score. At the end of 5 rounds, determine who the winner is.
function game() {
    // Make a loop that plays 5 rounds
    for (i = 0; i < 5; i++) {
        playRound();
    }
    // Determine the winner
    if (score > 0) {
        return 'You win!'
    } else if (score < 0) {
        return 'You lose!'
    } else {
        return 'Wow, you tied 5 rounds in a row.'
    }

}

console.log(game());
