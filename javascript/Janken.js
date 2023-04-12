let playerScore = 0;
let botScore = 0;

//let UserName= prompt("enter a name :", "Abaddon, Destroyer, The")
gameloop(playerScore,botScore);

function gameloop (playerScore,botScore) {
    
    if (playerScore >= 5) {
        document.querySelector(".result").textContent =`xX YOU WON THE GAME ! Xx`; // username added when the scorekeep works
        let button = document.createElement("button");
        button.innerHTML = "Reset ?";
        let body = document.getElementsByName("body")[0];
        body.appendChild(button);
        button.addEventListener("click", location.reload)
    
    } else if (botScore >= 5) {
        document.querySelector(".result").textContent =`xX BOT WON THE GAME ! Xx`;
        let button = document.createElement("button");
        button.innerHTML = "Reset ?";
        let body = document.getElementsByName("body")[0];
        body.appendChild(button);
        button.addEventListener("click", location.reload)
    
    } else {
        for (;;){ 
            game(); // cleaner than putting the whole thing here

        break;
        } 
    }
}



function game () { // launch the whole script

let playerChoice= " "; 
let botChoice= " ";

let playerValue = 0;
let botValue = 0;

let paper = 0;
let scissors = 0;
let rock = 0;

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

    setTimeout(() => {document.querySelector(".result").textContent ="ROCK !"},250);
    setTimeout(() => {document.querySelector(".result").textContent ="PAPER !"}, 1500);
    setTimeout(() => {document.querySelector(".result").textContent ="SCISSORS !!!"}, 3000);

    setTimeout(() => { if (num1 > num2){
        document.querySelector(".result").textContent =`You win ! Your ${playerChoice} beat BOT's ${botChoice}!`;
        playerScore = playerScore + 1;
        document.querySelector(".playerScore").textContent = playerScore;
        }
        else if (num1 == num2) {
        document.querySelector(".result").textContent =`EX AEQUO ! Your ${playerChoice} equals BOT's ${botChoice}!`;

        } else {
        document.querySelector(".result").textContent =`BOT win ! Your ${playerChoice} is beaten by BOT's ${botChoice}! `;
        botScore = botScore +1;
        document.querySelector(".botScore").textContent = botScore;
        }

        document.querySelector(".playerText").textContent = "Press a Symbol to play again !";
    },4500);
}

// ajout de la fonction match en 5, while <5 loop + cas 
return;
}
