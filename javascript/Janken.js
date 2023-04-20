let playerScore = 0;
let botScore = 0;
let matchesPlayed = 0;

let playerChoice; //global because called by result in outcome ()
let botChoice;


const playerInput = document.querySelectorAll("button"); // for each creates a list of instructions for each element specified, NOT A LOOP
playerInput.forEach((button) => button.addEventListener("click", gameFlow));


function gameFlow (buttonPress){ // created this f() to dissociate it from button input, runs the whole process
    playerChoice = buttonPress.target.value;
    document.querySelector(".playerText").textContent = "BOT chose ! get ready";

    botChoice = computerChoice();

    symbolPotency(playerChoice); //creates the weight of the symbols from the first player

    playerValue = symbolForce (playerChoice); // give the symbols weight to the player
   
    botValue = symbolForce (botChoice);

    outcome(playerValue,botValue);
}



function computerChoice (){ //botChoice generate a number between 1 and 99, each tier is a choice

    let random = Math.floor(Math.random()*99);

    if (random <= 33){
        return "paper";

    } else if ((random <= 66) &&(random >= 33)){
        return "scissors";

    } else {
        return "rock";

    }
}

function symbol (choice){ // defines players symbol strenghs, receive a string a give out an array with pN and respective strenghts.

    const gameRules = [{Rule1:231},{Rule2:123},{Rule3:321},{setRule:playerChoice}];

    if (gameRules.setRule == "rock"){
        gameRules.splice()

    }else if (gameRules.setRule == "paper"){
        //use rule 2

    } else {
        //use rule 3
    }

}


function graphAnswer(choice){ // transcribe the choice to a symbol
    if (choice === "rock"){
        return "\u{270A}";

    } else if (choice === "paper"){
        return "\u{270B}";

    } else {
        return "\u{270C}";
        
    }
}

function graphBot (){ // draw BOT symbol in its button for clarity
    document.querySelector(".botSymbol").textContent =`${graphAnswer(botChoice)}`;
}

function outcome (num1, num2){ // register the biggest value between players, return the math outcome, increment the individual scores and launch scoreKeep

    setTimeout(() => {document.querySelector(".result").textContent ="ROCK !"},250);
    setTimeout(() => {document.querySelector(".result").textContent ="PAPER !"}, 1500);
    setTimeout(() => {document.querySelector(".result").textContent ="SCISSORS !!!"}, 3000);

    setTimeout(() => {

        if (num1 > num2){
        graphBot();
        document.querySelector(".result").textContent =`You win ! Your ${graphAnswer(playerChoice)} beat BOT's ${graphAnswer(botChoice)}!`;
        playerScore = playerScore + 1;
        document.querySelector(".playerScore").textContent = playerScore;

        } else if (num1 == num2) {
        graphBot();
        document.querySelector(".result").textContent =`EX AEQUO ! Your ${graphAnswer(playerChoice)} equals BOT's ${graphAnswer(botChoice)}!`;
        
        } else {
        graphBot();
        document.querySelector(".result").textContent =`BOT win ! Your ${graphAnswer(playerChoice)} is beaten by BOT's ${graphAnswer(botChoice)}! `;
        botScore = botScore +1;
        document.querySelector(".botScore").textContent = botScore;
        
        }

        scoreKeeper();
        document.querySelector(".playerText").textContent = "Press a Symbol to play again !";

    },4500);
}

function scoreKeeper () { // keep the number of matches played, compare the individual scores

    matchesPlayed += 1;

    if ((matchesPlayed >= 5) && (playerScore > botScore)) {
        document.querySelector(".result").textContent =`\u{058D} YOU WON THE GAME ! \u{058E}`; 
        resetButton();
    
    } else if ((matchesPlayed >= 5) && (botScore > playerScore)) {
        document.querySelector(".result").textContent =`\u{058D} BOT WON THE GAME ! \u{058E}`;
        resetButton();
    
    }
}

function resetButton () { //create a DOM button under the container, refresh the page if pressed
    
    let button = document.createElement("button");
    let body = document.querySelector("body");

    body.appendChild(button);
    button.innerHTML = "Reset ?";
    button.className =  "resetButton"
    button.addEventListener("click",() => location.reload())
}