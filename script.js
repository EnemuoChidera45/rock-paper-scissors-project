// console.log("Hello World");

// function getComputerChoice() {
//   let randomNumber = Math.random();

//   if (randomNumber < 0.33) {
//     return "Rock";
//   } else if (randomNumber < 0.66) {
//     return "Paper";
//   } else {
//     return "Scissors";
//   }
// }

// console.log(getComputerChoice());

// function getHumanChoice() {
//   let choice = prompt("Rock, Paper or Scissors!");
//   return choice;
// }

// console.log(getHumanChoice());

// function Playgame() {
//   let humanScore = 0;
//   let ComputerScore = 0;

//   function playRound(humanChoice, computerChoice) {
//     humanChoice = humanChoice.toLowerCase();
//     computerChoice = computerChoice.toLowerCase();

//     if (humanChoice === computerChoice) {
//       console.log("Its a tie");
//     } else if (
//       (humanChoice === "Rock" && computerChoice === "Paper") ||
//       (humanChoice === "Paper" && computerChoice === "Scissors") ||
//       (humanChoice === "Scissors" && computerChoice === "Rock")
//     ) {
//       humanScore++;
//       console.log("You won😒");
//     } else {
//       ComputerScore++;
//       console.log("You lost🤣");
//     }
//   }

//   for (let i = 1; i <= 5; i++) {
//     console.log("Round" + i);
//     const humanSelection = getHumanChoice();
//     const computerSelection = getComputerChoice();
//     playRound(humanSelection, computerSelection);
//     console.log("Score:" + "You:" + humanScore + "Computer:" + ComputerScore);
//   }

//   console.log("Final Score");
//   if (humanScore > ComputerScore) {
//     console.log("You won the game😒");
//   } else if (ComputerScore > humanScore) {
//     console.log("LOSER!!!😂🤣");
//   } else {
//     console.log("Draw");
//   }
// }

// console.log(Playgame());
let humanScore = 0;
let computerScore = 0;

const roundResult = document.querySelector("#round-result");
const playerScoreDisplay = document.querySelector("#player-score");
const cpuScoreDisplay = document.querySelector("#cpu-score");
const finalWinner = document.querySelector("#final-winner");

function getComputerChoice() {
  const randomNumber = Math.random();
  if (randomNumber < 0.33) return "rock";
  if (randomNumber < 0.66) return "paper";
  return "scissors";
}

function playRound(humanChoice) {
  if (humanScore === 5 || computerScore === 5) return;

  const computerChoice = getComputerChoice();

  if (humanChoice === computerChoice) {
    roundResult.textContent = `It's a tie😐`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    roundResult.textContent = `You win😒`;
  } else {
    computerScore++;
    roundResult.textContent = `You lose this round🤣😂`;
  }

  playerScoreDisplay.textContent = humanScore;
  cpuScoreDisplay.textContent = computerScore;

  if (humanScore === 5) {
    finalWinner.textContent = "Hurray, you won😒";
  } else if (computerScore === 5) {
    finalWinner.textContent = "Sore loser!!!🤣🤣🫵🏾";
  }
}

document
  .querySelector("#rock")
  .addEventListener("click", () => playRound("rock"));
document
  .querySelector("#paper")
  .addEventListener("click", () => playRound("paper"));
document
  .querySelector("#scissors")
  .addEventListener("click", () => playRound("scissors"));
