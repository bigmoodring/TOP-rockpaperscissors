function computerPlay() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const computerSelection = choices[Math.floor(Math.random() * choices.length)];
    return computerSelection;
}

console.log(computerPlay());

function userPlay() {
    const userChoice = prompt('Rock, Paper, or Scissors?').toLowerCase();
    return userChoice;
}

console.log(userPlay());

