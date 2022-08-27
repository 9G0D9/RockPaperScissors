const CHOICES = ["ROCK", "PAPER", "SCISSORS"];



function getComputerChoice(CHOICES) {
    return CHOICES[Math.floor(Math.random() * 3)]
}

function getResultOfRound(playerSelection, computerSelection) {

    let win = (playerSelection.toUpperCase() === "ROCK" && computerSelection === "SCISSORS")
        || (playerSelection.toUpperCase() === "SCISSORS" && computerSelection === "PAPER")
        || (playerSelection.toUpperCase() === "PAPER" && computerSelection === "ROCK");

    let draw = playerSelection.toUpperCase() === computerSelection;

    let lose = !win && !draw;

    if (win) return "win";
    if (lose) return "lose";
    if (draw) return "draw";

}

function playRound(playerSelection, computerSelection) {

    let result = getResultOfRound(playerSelection, computerSelection);

    if (result === "win") {
        return `You win ! ${playerSelection.toUpperCase()} beats ${computerSelection} !!`
    }
    else if (result === "lose") {
        return `You lose ! ${computerSelection} beats ${playerSelection.toUpperCase()} !!`
    }
    else {
        return 'It\'s a DRAW';
    }

}

function isInArray(playerSelection, CHOICES) {
    return CHOICES.indexOf(playerSelection.toUpperCase()) > -1;
}

function game(CHOICES) {

    let computerScore = 0;
    let playerScroe = 0;
    for (let i = 0; i < 5; i++) {

        let playerSelection = prompt('select a weapon', '');
        while (!isInArray(playerSelection, CHOICES)) {
            playerSelection = prompt('bb', '');
        }

        let computerSelection = getComputerChoice(CHOICES);

        let result = getResultOfRound(playerSelection, computerSelection);

        if (result === "win") {
            playerScroe += 1;
        }
        if (result === "lose") {
            computerScore += 1;
        }
        if (result === "draw") {
            i -= 1;
        }

        console.log(playRound(playerSelection, computerSelection));

        console.log(`COMPUTER : ${computerScore}           PLAYER: ${playerScroe}`);

    }


}
game(CHOICES);





