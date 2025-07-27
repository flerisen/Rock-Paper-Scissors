console.log("hello external js");

// Create a function for Computer player by leveraging the Math.random function

function getComputerChoice() {
    if (Math.random() <= 0.33) {
        let choiceComputer = "Rock";
        console.log("Rock");
    } else if ( 0.33 < Math.random() < 0.66) {
        let choiceComputer = "Paper";
        console.log("Paper");
    } else {
        let choiceComputer = "Scissors";
        console.log("Scissors");
        
    }
}

getComputerChoice()

// Create a function for Human player by leveraging the prompt ability

function getHumanChoice() {
    let choiceHuman = prompt("Please choose Rock, Paper or Scissors");
    console.log(choiceHuman);
    return choiceHuman;
}

getHumanChoice()