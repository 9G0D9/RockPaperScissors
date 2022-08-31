const CHOICES = ["ROCK", "PAPER", "SCISSORS"];



function getComputerChoice(CHOICES) {
    return CHOICES[Math.floor(Math.random() * 3)]
}

function getPlayerChoice() {
    let playerSelection = prompt('Select a weapon', '');

    if (playerSelection == null) return;
    while (!isInArray(playerSelection, CHOICES)) {
        playerSelection = prompt('Weapon not available \nSelect a weapon', '');
        if (playerSelection == null) return;
    }
    return playerSelection;
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

// function game(CHOICES) {

//     let computerScore = 0;
//     let playerScroe = 0;

//     for (let i = 0; i < 5; i++) {


//         let computerSelection = getComputerChoice(CHOICES);
//         let playerSelection = getPlayerChoice();

//         if (playerSelection==null) return ;


//         let result = getResultOfRound(playerSelection, computerSelection);

//         if (result === "win") {
//             playerScroe += 1;
//         }
//         if (result === "lose") {
//             computerScore += 1;
//         }
//         if (result === "draw") {
//             i -= 1;
//         }

//         console.log(playRound(playerSelection, computerSelection));

//         console.log(`COMPUTER : ${computerScore}           PLAYER: ${playerScroe}`);

//         if (computerScore===3){
//             console.log('You lose !')
//             return ;
//         }
//         if (playerScroe ===3){
//             console.log('CONGRATS ! You win !!!')
//             return ;
//         }

//     }


//}
const rockSelction = document.querySelector('.ROCK');
const paperSelction = document.querySelector('.PAPER');
const scissorsSelction = document.querySelector('.SCISSORS');

rockSelction.addEventListener("click", ()=> console.log(playRound('ROCK', getComputerChoice(CHOICES))));
paperSelction.addEventListener('click', ()=>console.log(playRound('PAPER', getComputerChoice(CHOICES))))
scissorsSelction.addEventListener('click', ()=>console.log(playRound('SCISSORS', getComputerChoice(CHOICES))))








