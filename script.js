function computerPlay() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const computerSelection = choices[Math.floor(Math.random() * choices.length)];
    return computerSelection;
}


function userPlay() {
    const userChoice = prompt('Rock, Paper, or Scissors?').toLowerCase();
    return userChoice;
}



function playGame() {
    const computerSelection = computerPlay();
    const userSelection = userPlay();

    if (userSelection === 'rock') {
        if (computerSelection === 'Scissors') {
            console.log("You win!");
        } else if (computerSelection === 'Paper') {
            console.log("You lose!");
        } else {
            console.log("It's a tie.");
        }
    } else if (userSelection === 'paper') {
        if (computerSelection === 'Rock') {
            console.log("You win!");
        } else if (computerSelection === 'Scissors') {
            console.log("You lose!");
        } else {
            console.log("It's a tie.");
        }
    } else if (userSelection === 'scissors') {
        if (computerSelection === 'Paper') {
            console.log("You win!");
        } else if (computerSelection === 'Rock') {
            console.log("You lose!");
        } else {
            console.log("It's a tie.");
        }
    } else {
        console.log("Please enter a valid input");
        playGame();
    }
    console.log(`Computer chose: ${computerSelection}`);
    console.log(`You chose: ${(userSelection)}`);
}

playGame();