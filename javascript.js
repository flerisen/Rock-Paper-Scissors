// Create a function for Computer player by leveraging the Math.random function

function getComputerChoice() {
    let choiceComputer;

    if (Math.random() <= 0.33) {
        choiceComputer = "Rock";
        console.log("Computer chose: Rock");
    } else if (Math.random() <= 0.66) {
        choiceComputer = "Paper";
        console.log("Computer chose: Paper");
    } else {
        choiceComputer = "Scissors";
        console.log("Computer chose: Scissors");
    }
    return choiceComputer;
}

// Create a function for Human player by leveraging the prompt ability

function getHumanChoice() {
    let choiceHuman = prompt("Please choose Rock, Paper or Scissors");
    choiceHuman = choiceHuman.toUpperCase().charAt(0) + choiceHuman.slice(1).toLowerCase();
    console.log("Human chose: " + choiceHuman);
    return choiceHuman;
}

let humanScore = 0;
let computerScore = 0;

function playRound(choiceComputer, choiceHuman) {

    if (choiceHuman === choiceComputer) {
        console.log("Tie. Play again!");
    }   
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection)
