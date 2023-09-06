let items = ["Rock", "Paper", "Scissors"];
const playerChoice = () => {
  const icons = document.querySelectorAll("i");
  icons.forEach((icon, index) => {
    icon.addEventListener("click", (e) => {
      console.log(index)
    });
  });
};

const getComputerChoice = () => {
  return items[Math.floor(Math.random() * items.length)];
};

function playRound(playerSelection, computerSelection) {
  let message;
  if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    message = "Draw";
  }
  if (computerSelection.toLowerCase() === "rock") {
    if (playerSelection.toLowerCase() === "scissors") {
      message = "You lose! Rock beats scissors";
    } else if (playerSelection.toLowerCase() === "paper") {
      message = "You Won! Paper beats Rock";
    }
  } else if (computerSelection.toLowerCase() === "scissors") {
    if (playerSelection.toLowerCase() === "rock") {
      message = "You Won! Rock beats scissors";
    } else if (playerSelection.toLowerCase() === "paper") {
      message = "You lose! Scissors beats Paper";
    }
  } else if (computerSelection.toLowerCase() === "paper") {
    if (playerSelection.toLowerCase() === "rock") {
      message = "You lose! Paper beats Rock";
    } else if (playerSelection.toLowerCase() === "scissors") {
      message = "You Won! Scissors beats Papper";
    }
  }
  return message;
}

const computerSelection = getComputerChoice();
console.log(`Computer's choice: ${computerSelection}`);
const playerSelection = "Scissors";
console.log(`Player's choice: ${playerSelection}`);
console.log(playRound(playerSelection, computerSelection));
