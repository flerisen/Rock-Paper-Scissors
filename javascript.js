let roundCount = parseInt(prompt("Please enter the number of rounds you want to play:"));

let humanScore = 0;
let computerScore = 0;

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

// Create a function with logic to play one round

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

// Create a function playGame, which is used to to play as many rounds as the user chooses

function playGame() {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection)
}

// Create a loop to to call the function as many times as the users chosen value is

for (let i = 1; i <= roundCount; i++) {
    playGame(i)
}

// prints the final scores to the browser

console.log("Computer final score: " + computerScore);
console.log("Human final score: " + humanScore);