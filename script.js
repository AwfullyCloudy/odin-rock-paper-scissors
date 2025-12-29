
function getComputerChoice() {
    let choice, choiceMath;
    choiceMath = Math.random();
    if (choiceMath <= 0.33) {
        choice = "Rock";
    }
    else if (choiceMath > 0.33 && choiceMath<= 0.66) {
        choice = "Paper";
    }
    else {
        choice = "Scissors";
    }
    return choice;
}

function getHumanChoice() {
    let choice = prompt("Rock, paper, or scissors?");
    return choice;
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => playRound("rock", getComputerChoice()));
paper.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissors.addEventListener("click", () => playRound("scissors", getComputerChoice()));



function playRound(humanChoice, computerChoice) {
    let roundWinner = '';
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("PC Chose Paper! You Chose Rock! You Lose!");
        roundWinner = 'C';
    }
    else if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("PC Chose Scissors! You Chose Rock! You Win!");
        roundWinner = 'H';
    }
    else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("PC Chose Scissors! You Chose Paper! You Lose!");
        roundWinner = 'C';

    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("PC Chose Rock! You Chose Paper! You Win!");
        roundWinner = 'H';

    }
    else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("PC Chose Rock! You Chose Scissors! You Lose!");
        roundWinner = 'C';
    }
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("PC Chose Paper! You Chose Scissors! You Win!");
        roundWinner = 'H';
    }
    else {
        console.log("Tie!");
        roundWinner = 'T';
    }
    return roundWinner;
}

/*
function playGame() {
    let humanScore = 0, computerScore = 0;
    let roundWinner;
    for (let i = 0; i < 5; i++) {
        roundWinner = playRound(getHumanChoice(), getComputerChoice());

        if (roundWinner == 'H') {
            humanScore += 1;
        }
        else if (roundWinner = 'C') {
            computerScore += 1;
        }
    }
    if (humanScore > computerScore) {
        console.log("Human wins!");
    }
    else if (computerScore > humanScore) {
        console.log("Machine wins!");
    }
    else {
        console.log("Its a tie!");
    }
}
    */