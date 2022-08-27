const CHOICES = ["ROCK", "PAPER", "SCISSORS"];

let playerSelection = '';
let computerSelection = '';



function getComputerChoice(CHOICES) {
    return CHOICES[Math.floor(Math.random() * 3)]
}

function getResultOfRound(playerSelection, computerSelection){

    let win = (playerSelection.toUpperCase() === "ROCK" && computerSelection === "SCISSORS")
        || (playerSelection.toUpperCase() === "SCISSORS" && computerSelection === "PAPER")
        || (playerSelection.toUpperCase() === "PAPER" && computerSelection === "ROCK");

    let draw = playerSelection.toUpperCase() === computerSelection;

    let lose = !win && !draw;

    if (win) return "win" ;
    if (lose) return "lose" ;
    if (draw) return "draw" ;

}

function playRound(playerSelection, computerSelection) {

    let result=getResultOfRound(playerSelection,computerSelection);

    if (result==="win") {
        return `You win ! ${playerSelection.toUpperCase()} beats ${computerSelection} !!`
    }
    else if (result==="lose") {
        return `You lose ! ${computerSelection} beats ${playerSelection.toUpperCase()} !!`
    }
    else {
        return 'It\'s a DRAW';
    }

}

function game(CHOICES) {
    playerSelection = prompt('select a weapon', '');
    computerSelection = getComputerChoice(CHOICES);
    console.log(computerSelection)

    console.log(playRound(playerSelection, computerSelection))

}
game(CHOICES);





