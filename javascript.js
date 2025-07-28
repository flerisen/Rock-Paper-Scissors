// Create a function for Computer player by leveraging the Math.random function

function getComputerChoice() {
    let choiceComputer;
    const randomValue = Math.random();

    if (randomValue <= 0.33) {
        choiceComputer = "Rock";
        console.log("Computer chose: Rock");
    } else if (randomValue <= 0.66) {
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

function playRound(choiceHuman, choiceComputer) {

    if (choiceHuman === choiceComputer) {
        console.log("Tie. Play again!");
    } else if (choiceHuman === "Rock" && choiceComputer === "Scissors") {
        console.log("You win! Rock beats Scissors.");
        humanScore++;
    } else if (choiceHuman === "Paper" && choiceComputer === "Rock") {
        console.log("You win! Paper beats Rock.")
        humanScore++;
    } else if (choiceHuman === "Scissors" && choiceComputer === "Paper") {
        console.log("You win! Scissors beats Paper.")
        humanScore++;
    } else {
        console.log("You lose! Computer wins.")
        computerScore++;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection)

console.log("Computer final score: " + computerScore);
console.log("Human final score: " + humanScore);