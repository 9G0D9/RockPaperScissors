;

function getComputerChoice() {
    const CHOICES = ["Rock", "Paper", "Scissors"];
    return CHOICES[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
    let win = (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "SCISSORS")
        || (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "PAPER")
        || (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "ROCK") ;
    let draw = playerSelection.toUpperCase() === computerSelection.toUpperCase() ;

    let lose = !win && !draw ;

    if (win){
        return `You win ! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()} !!`
    }
    else if (lose) {
        return `You lose ! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()} !!`
    }
    else{
        return 'It\'s a DRAW' ;
    }

}
