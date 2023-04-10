let playerChoice; 
let botChoice;
let playerValue;
let botValue;

let paper;
let scissors;
let rock;

let symbolValue;


let playerInput = document.querySelectorAll("button"); // doit return true et lancer la sélection
playerInput.forEach((i) => {
    i.addEventListener("click", (e) => {
        playerChoice = e.target.value;
        document.querySelector(".playerText").textContent = "You chose ! get ready";

        computerChoice();

        symbolPotency(playerChoice); //crée la force des symboles
        symbolForce (playerChoice); // corrèle le string aux valeurs num
        playerValue = symbolValue; // donne la force du symbole au joueur
        

        symbolForce (botChoice);
        botValue = symbolValue;

        outcome(playerValue,botValue);
    })
})

function computerChoice () { //botChoice generate a number between 1 and 99, each tier is a choice
    let random = Math.floor(Math.random()*99);

    if (random <= 33){
        botChoice = "paper";

    } else if ((random <= 66) &&(random >= 33)){
        botChoice = "scissors";

    } else {
        botChoice = "rock";

    }
    //bot color turns bright red would be nice, check how to change color in the DOM
}

console.log(`botChoice : ${botChoice}`)



function symbolPotency (symbolName){ // define the value of each symbol when player enter his

    let paperWeight = 2;          //to be incremented by symbolForce
    let scissorsWeight = 2;
    let rockWeight = 2;

    if  (symbolName === "paper") {
        paper = paperWeight;
        scissors = scissorsWeight + 1;
        rock = rockWeight - 1;

    } else if (symbolName === "scissors"){
        scissors = scissorsWeight;
        rock = rockWeight + 1;
        paper = paperWeight - 1;

    } else if (symbolName === "rock"){
        rock = rockWeight;
        paper = paperWeight + 1;
        scissors = scissorsWeight - 1;

    }

}

console.log(`rock: ${rock} paper: ${paper} scissors: ${scissors}`)

function symbolForce (choice) { //compare the string to the number

    symbolValue=0;

    if (choice === "rock"){
        symbolValue = rock;
    } else if (choice === "paper"){
        symbolValue = paper;
    } else if (choice === "scissors"){
        symbolValue = scissors;
    }
}



function outcome (num1, num2){ 

    document.querySelector(".result").textContent ="ROCK";
    setTimeout (3000);
    document.querySelector(".result").textContent ="PAPER";
    setTimeout (3000);
    document.querySelector(".result").textContent ="SCISSORS";
    setTimeout (3000);

    if (num1 > num2){
        document.querySelector(".result").textContent =`You win ! Your ${playerChoice} beat BOT's ${botChoice}!`;
    }
    else if (num1 = num2) {
        document.querySelector(".result").textContent =`EX AEQUO ! Your ${playerChoice} equals BOT's ${botChoice}!`;
    } else {
        document.querySelector(".result").textContent =`BOT win ! Your ${playerChoice} is beaten by BOT's ${botChoice}! `;
    }
}
