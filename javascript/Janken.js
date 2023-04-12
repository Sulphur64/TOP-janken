let playerScore = 0;
let botScore = 0;
let matchesPlayed = 0;

//let UserName= prompt("enter a name :", "Abaddon, Destroyer, The")

// 1- Je recupere mes boutons
let playerInput = document.querySelectorAll("button"); // doit return true et lancer la sélection

// 2- J'attache une fonction qui s'execute quand je clique sur un bouton
playerInput.forEach((button) => {
  button.addEventListener("click", (event) => runGame(event));
});

function runGame(event) {
  const playerChoice = event.target.value;
  document.querySelector(".playerText").textContent = "You chose ! get ready";

  const botChoice = getComputerChoice();

  const symbols = getSymbolPotency(playerChoice); //crée la force des symboles

  const playerValue = getSymbolForce(playerChoice, symbols); // corrèle le string aux valeurs num
  const botValue = getSymbolForce(botChoice, symbols);

  outcome(playerValue, botValue);
  // check matchesPlayed and scores and displya final results
  // 3- Je verifie mon score et matchesPlayed
  // a- si matchesPlayed >=5
  // a1- Si player >= bot, je gagne
  // a2- Si bot >= player, je perd
  // b- Sinon je continue
}

function getComputerChoice() {
  //botChoice generate a number between 1 and 99, each tier is a choice
  let random = Math.floor(Math.random() * 99);

  if (random <= 33) {
    return "paper";
  } else if (random <= 66 && random >= 33) {
    return "scissors";
  } else {
    return "rock";
  }
  //bot color turns bright red would be nice, check how to change color in the DOM
}

function getSymbolPotency(symbolName) {
  // define the value of each symbol when player enter his

  let paper,
    rock,
    scissors = 2;

  if (symbolName === "paper") {
    scissors += 1;
    rock -= 1;
  } else if (symbolName === "scissors") {
    rock += 1;
    paper -= 1;
  } else if (symbolName === "rock") {
    paper += 1;
    scissors -= 1;
  }
  return { rock, paper, scissors };
}

function getSymbolForce(choice, symbols) {
  //compare the string to the number
  if (choice === "rock") {
    return symbols.rock;
  } else if (choice === "paper") {
    return symbols.paper;
  } else {
    return symbols.scissors;
  }
}

function outcome(num1, num2) {
  setTimeout(() => {
    document.querySelector(".result").textContent = "ROCK !";
  }, 250);
  setTimeout(() => {
    document.querySelector(".result").textContent = "PAPER !";
  }, 1500);
  setTimeout(() => {
    document.querySelector(".result").textContent = "SCISSORS !!!";
  }, 3000);

  setTimeout(() => {
    if (num1 > num2) {
      document.querySelector(
        ".result"
      ).textContent = `You win ! Your ${playerChoice} beat BOT's ${botChoice}!`;
      playerScore = playerScore + 1;
      document.querySelector(".playerScore").textContent = playerScore;
    } else if (num1 == num2) {
      document.querySelector(
        ".result"
      ).textContent = `EX AEQUO ! Your ${playerChoice} equals BOT's ${botChoice}!`;
    } else {
      document.querySelector(
        ".result"
      ).textContent = `BOT win ! Your ${playerChoice} is beaten by BOT's ${botChoice}! `;
      botScore = botScore + 1;
      document.querySelector(".botScore").textContent = botScore;
    }

    document.querySelector(".playerText").textContent =
      "Press a Symbol to play again !";
  }, 4500);
}

function displayPlayerWins() {
  document.querySelector(".result").textContent = `xX YOU WON THE GAME ! Xx`; // username added when the scorekeep works
  let button = document.createElement("button");
  button.innerHTML = "Reset ?";
  let body = document.getElementsByName("body")[0];
  body.appendChild(button);
  button.addEventListener("click", location.reload);
}

function displayPlayerLoses() {
  document.querySelector(".result").textContent = `xX BOT WON THE GAME ! Xx`;
  let button = document.createElement("button");
  button.innerHTML = "Reset ?";
  let body = document.getElementsByName("body")[0];
  body.appendChild(button);
  button.addEventListener("click", location.reload);
}
