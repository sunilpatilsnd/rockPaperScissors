let playerWins = 0;
let compWins = 0;
let draws = 0;

function getComputerChoice() {
  const computerChoice = "";
  let randNum;
  randNum = Math.floor(Math.random() * 3);

  if (randNum == 0) {
    return `rock`;
  } else if (randNum == 1) {
    return `paper`;
  } else {
    return `scissors`;
  }
}

function getPlayerChoice() {
  let playerChoice = prompt("Enter your choice rock or paper or scisssors");
  if (playerChoice == null) {
    alert(
      `This is a Rock, Paper or Scissors game you need to enter correct input`
    );
    return getPlayerChoice();
  }
  playerChoice = playerChoice.toLowerCase().trim();
  if (
    playerChoice == "rock" ||
    playerChoice == "paper" ||
    playerChoice == "scissors"
  ) {
    //console.log(playerChoice);
    return playerChoice;
  } else {
    alert(`Enter correct choice Rock, Paper or Scissors`);
    return getPlayerChoice();
  }
}

function getWinner(playerSelection, computerSelection) {
  // console.log(playerSelection , computerSelection +'inside playround')
  if (playerSelection == computerSelection) {
    return "No One";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    return "computer";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    return "player";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    return "computer";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return "player";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    return "computer";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    return "player";
  }
}

function playRound(playerChoice) {
  let compChoice = getComputerChoice();
  let result = getWinner(playerChoice, compChoice);

  let resultTxt = `You chose ${playerChoice} and computer chose ${compChoice}...${result} won!`;

  switch (result) {
    case "player":
      playerWins++;
      break;
    case "computer":
      compWins++;
      break;
    default:
      draws++;
  }

  if (playerWins == 5) {
    showFinalResult("You");
  } else if (compWins == 5) {
    showFinalResult("Computer");
  }

  updateResults(playerWins, compWins, draws, resultTxt);
}

function game() {
  let rounds = 0;
  let result = "";
  let playerWins = 0;
  let compWins = 0;
  while (rounds < 5) {
    result = playRound();
    if (result == "player") {
      playerWins++;
    } else if (result == "computer") {
      compWins++;
    } else {
      rounds--;
      // console.log(rounds+'when no one won');
    }
    rounds++;
    // console.log(rounds);
  }
  if (playerWins > compWins) {
    return `Player Won this game by ${playerWins - compWins} ${
      playerWins - compWins > 1 ? "rounds" : "round"
    }
                Playerscore: ${playerWins}
                ComputerScore: ${compWins}`;
  } else if (playerWins < compWins) {
    return `Computer Won this game by  ${compWins - playerWins}  ${
      compWins - playerWins > 1 ? "rounds" : "round"
    }
        Playerscore: ${playerWins}
        ComputerScore: ${compWins}`;
  }
}

function startGame() {
  const playerChoices = document.querySelectorAll(".btn");
  const reset = document.querySelector("#reset");

  playerChoices.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      playRound(event.target.id);
    });
  });

  reset.addEventListener("click", () => {
    resetGame();
  });
}
// alert(game());

function updateResults(playersScore, compScore, drawScore, resultTxt) {
  const container = document.querySelector("#gameResult");
  const content = document.querySelector("#roundResult");

  const pScore = document.querySelector("#playerscore");
  const cScore = document.querySelector("#computerscore");
  const draws = document.querySelector("#draws");

  const roundResult = document.querySelector("#roundResult");

  pScore.textContent = playersScore;
  cScore.textContent = compScore;
  draws.textContent = drawScore;

  roundResult.textContent = resultTxt;

  container.replaceChild(content, content);
}

function resetGame() {
  playerWins = 0;
  compWins = 0;
  draws = 0;

  const pScore = document.querySelector("#playerscore");
  const cScore = document.querySelector("#computerscore");
  const draw = document.querySelector("#draws");
  const resultTxt = document.querySelector("#roundResult");

  resultTxt.textContent = "";

  const game = document.querySelector("#game");

  const finalResult = document.querySelector("#finalResult");

  pScore.textContent = 0;
  cScore.textContent = 0;
  draw.textContent = 0;
  //  debugger
  finalResult.classList.toggle("hide");
  game.classList.toggle("disable");
}

function showFinalResult(winnner) {
  const container = document.querySelector("#gameResult");
  const finResult = document.querySelector("#finalResult");

  const content = document.querySelector("#finResultText");
  const reset = document.querySelector("#reset");

  const game = document.querySelector("#game");

  reset.textContent = "Reset";
  reset.id = "reset";
  content.id = "finResultText";

  reset.textContent = "↺";
  content.textContent = `${winnner} won the game!`;

  finalResult.classList.toggle("hide"); //show results
  game.classList.toggle("disable"); //disable playing game before reset;

  // finResult.appendChild(content);
  // finResult.appendChild(reset);

  // container.replaceChild(finResult, finResult);
}

startGame();
