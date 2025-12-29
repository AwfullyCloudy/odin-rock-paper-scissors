const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => playRound("rock", getComputerChoice()));
paper.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissors.addEventListener("click", () => playRound("scissors", getComputerChoice()));

const state = document.querySelector("game");
game.textContent = "";

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

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice == "rock" && computerChoice == "paper") {

        game.textContent = "PC Chose Paper! You Chose Rock! You Lose!";
        console.log("PC Chose Paper! You Chose Rock! You Lose!")
        computerScore += 1;
    }
    else if (humanChoice == "rock" && computerChoice == "scissors") {
        game.textContent = "PC Chose Scissors! You Chose Rock! You Win!";
        console.log("PC Chose Scissors! You Chose Rock! You Win!");
        computerScore += 1;
    }
    else if (humanChoice == "paper" && computerChoice == "scissors") {
        game.textContent = "PC Chose Scissors! You Chose Paper! You Lose!";
        console.log("PC Chose Scissors! You Chose Paper! You Lose!");
        computerScore += 1;

    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
        game.textContent = "PC Chose Rock! You Chose Paper! You Win!";
        console.log("PC Chose Rock! You Chose Paper! You Win!");
        computerScore += 1;

    }
    else if (humanChoice == "scissors" && computerChoice == "rock") {
        game.textContent = "PC Chose Rock! You Chose Scissors! You Lose!";
        console.log("PC Chose Rock! You Chose Scissors! You Lose!");
        computerScore += 1;
    }
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        game.textContent = "PC Chose Paper! You Chose Scissors! You Win!";
        console.log("PC Chose Paper! You Chose Scissors! You Win!");
        computerScore += 1;
    }
    else {
        game.textContent = "Tie!";
        console.log("Tie!");
    }
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