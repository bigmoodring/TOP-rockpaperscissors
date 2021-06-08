# TOP-rockpaperscissors
Console based JS rock paper scissors game

UNDERSTAND:

I have to build a single player rock paper scissors game in JS from scratch. Some things I will need to understand:

    - How to make a computer choose from the three options randomly
    - How to get input from a player
        - How to make sure the script understands the input regardless of case
        - How to make sure the input is valid
    - How to check player input against a computer generated selection
        - How to test who is the winner
            - Should the choices be represented by a number? Or letters? 
            - Rock > Scissors and Rock < Paper
    - How to determine win conditions
        - Best two out of three? 
    
PLAN: 

Here is how I think the program should work:

    The program should choose a value: Rock, Paper, or Scissors

    Display a message to the player asking them to choose: Rock, Paper, or Scissors
        If the player chooses rock
            check what the computer picked
            If the computer chose Scissors
                then the player wins
            Else if the computer chose Paper
                then the computer wins
            Else 
                the game is a tie
        Else If the player chooses paper
            check what the computer picked
            If the computer chose rock
                then the player wins
            Else If the computer chose Scissors
                then the computer wins
            Else
                the game is a tie
        Else If the player chooses Scissors
            check what the computer picked
            If the computer chose Paper
                then the player wins
            Else if the computer chose Rock
                then the computer wins
            Else
                the game is a tie
        Else 
            ask the player for a valid input

    //Is there an easier way to check them at the same time?

Divide

Some small steps to get started:

    - Write function to make computer choose a value // DONE!
    - Write function to get input from the user
    - Write function to check player value against computer value

    

