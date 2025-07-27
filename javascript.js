// Create a function for Computer player by leveraging the Math.random function

function getComputerChoice() {
    if (Math.random() <= 0.33) {
        let choiceComputer = "Rock";
        console.log("Computer chose: Rock");
    } else if ( 0.33 < Math.random() < 0.66) {
        let choiceComputer = "Paper";
        console.log("Computer chose: Paper");
    } else {
        let choiceComputer = "Scissors";
        console.log("Computer chose: Scissors");
    }
}

// Create a function for Human player by leveraging the prompt ability

function getHumanChoice() {
    let choiceHuman = prompt("Please choose Rock, Paper or Scissors");
    console.log("Human chose: " + choiceHuman);
    getComputerChoice();
    return choiceHuman;
}

getHumanChoice()

let humanScore = 0;
let computerScore = 0;