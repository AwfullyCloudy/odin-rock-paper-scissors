humanScore = 0, computerScore = 0;
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => playRound("rock", getComputerChoice()));
paper.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissors.addEventListener("click", () => playRound("scissors", getComputerChoice()));

const state = document.querySelector("game");
const gscore = document.querySelector("score");
const result = document.querySelector("gres");

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
        humanScore += 1;
    }
    else if (humanChoice == "paper" && computerChoice == "scissors") {
        game.textContent = "PC Chose Scissors! You Chose Paper! You Lose!";
        console.log("PC Chose Scissors! You Chose Paper! You Lose!");
        computerScore += 1;

    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
        game.textContent = "PC Chose Rock! You Chose Paper! You Win!";
        console.log("PC Chose Rock! You Chose Paper! You Win!");
        humanScore += 1;

    }
    else if (humanChoice == "scissors" && computerChoice == "rock") {
        game.textContent = "PC Chose Rock! You Chose Scissors! You Lose!";
        console.log("PC Chose Rock! You Chose Scissors! You Lose!");
        computerScore += 1;
    }
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        game.textContent = "PC Chose Paper! You Chose Scissors! You Win!";
        console.log("PC Chose Paper! You Chose Scissors! You Win!");
        humanScore += 1;
    }
    else {
        game.textContent = "Tie!";
        console.log("Tie!");
    }
    score.textContent = "PC score: " + computerScore + " Human score: " + humanScore;

    if (computerScore >= 5) {
        gres.textContent = "Computer Wins!";
        humanScore = 0;
        computerScore = 0;
    }
    else if (humanScore >= 5) {
        gres.textContent = "Human Wins!";
        humanScore = 0;
        computerScore = 0;
    }
    else {
        gres.textContent = "";
    }
}