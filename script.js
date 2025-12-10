console.log(getComputerChoice())


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