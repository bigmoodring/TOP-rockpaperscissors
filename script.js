function computerPlay() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const random = choices[Math.floor(Math.random() * choices.length)];
    return random;
}

console.log(computerPlay());