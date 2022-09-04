const CHOICES = ["ROCK", "PAPER", "SCISSORS"];

function getComputerChoice() {
  return CHOICES[Math.floor(Math.random() * 3)];
}

function getPlayerChoice() {
  let playerSelection = prompt("Select a weapon", "");

  if (playerSelection == null) return;
  while (!isInArray(playerSelection, CHOICES)) {
    playerSelection = prompt("Weapon not available \nSelect a weapon", "");
    if (playerSelection == null) return;
  }
  return playerSelection;
}

function getResultOfRound(playerSelection, computerSelection) {
  let win =
    (playerSelection.toUpperCase() === "ROCK" &&
      computerSelection === "SCISSORS") ||
    (playerSelection.toUpperCase() === "SCISSORS" &&
      computerSelection === "PAPER") ||
    (playerSelection.toUpperCase() === "PAPER" && computerSelection === "ROCK");

  let draw = playerSelection.toUpperCase() === computerSelection;

  let lose = !win && !draw;

  if (win) return "win";
  if (lose) return "lose";
  if (draw) return "draw";
}

function playRound(playerSelection, computerSelection) {
  let result = getResultOfRound(playerSelection, computerSelection);

  if (result === "win") {
    return `You win ! ${playerSelection.toUpperCase()} beats ${computerSelection} !!`;
  } else if (result === "lose") {
    return `You lose ! ${computerSelection} beats ${playerSelection.toUpperCase()} !!`;
  } else {
    return "It's a DRAW";
  }
}

function isInArray(playerSelection, CHOICES) {
  return CHOICES.indexOf(playerSelection.toUpperCase()) > -1;
}

const buttons = document.querySelectorAll(".button");
const div = document.querySelector(".box");

let computerScore = 0;
let playerScore = 0;
let nb = 0;

let round = document.createElement("p");
let score = document.createElement("div");
let playScore = document.createElement("p");
let compScore = document.createElement("p");
let finalResult = document.createElement("p");

score.style.cssText = "display : flex  ; justify-content : space-evenly ";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (nb == 0) {
      while (div.lastChild) {
        div.removeChild(div.lastChild);
      }
    }
    nb += 1;
    finalResult.textContent = "";

    playerSelection = button.alt;
    computerSelection = getComputerChoice();

    let result = getResultOfRound(playerSelection, computerSelection);

    if (result === "win") {
      playerScore += 1;
    }
    if (result === "lose") {
      computerScore += 1;
    }

    round.textContent = playRound(playerSelection, computerSelection);
    playScore.textContent = ` PLAYER : ${playerScore}           `;
    compScore.textContent = ` COMPUTER : ${computerScore}`;

    round.style.cssText = "font-size:50px ;  align-self:center;";
    playScore.style.cssText = "font-size:30px ";
    compScore.style.cssText = "font-size:30px ";

    div.classList.add("result");

    div.appendChild(round);

    score.appendChild(playScore);
    score.appendChild(compScore);
    div.appendChild(score);

    div.scrollIntoView();

    if (computerScore === 3) {
      finalResult.textContent = "BOOHOOO ! You lose !";
      finalResult.style.cssText = "font-size:50px ; align-self:center;";
      div.appendChild(finalResult);
      playerScore = 0;
      computerScore = 0;
      nb= 0;
    }
    if (playerScore === 3) {
      finalResult.textContent = "CONGRATS ! You win !!!";
      finalResult.style.cssText = "font-size:50px ; align-self:center;";
      div.appendChild(finalResult);
      playerScore = 0;
      computerScore = 0;
      nb=0 ;
    }
  });
});
