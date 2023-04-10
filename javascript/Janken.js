let playerInput = playerSelection(); //document.querySelector(".rock" || ".paper" || ".scissors").addEventListener("onclick", playerSelection);//queryblabla if button 1 or 2 or 3 is pressed = true
let playerChoice; 
let botChoice;

let paper;
let scissors;
let rock;

// functions needed : computerChoice, playerChoice, symbolForce and outcome
// process : when playerChoice is made, computer choice is generated and symbolForce defined then result happens








function playerSelection () { //can i use query directly here ? must initialise on press
    if (document.querySelector(".rock")) {
        playerInput.addEventListener("onclick",() => playerChoice = rock);
        document.querySelector(".playerText").textContent = "You chose ! get ready"

    }else if (document.querySelector(".paper")){
        playerInput.addEventListener("onclick",() => playerChoice = paper);

    }else if (document.querySelector(".scissors")){ 
        playerInput.addEventListener("onclick",() => playerChoice = scissors);
    }
    

}

console.log (`player pressed : ${playerChoice}`)



function computerChoice () { //botChoice must be generated when player chose
    let random = Math.floor(math.random()*3);

    if (random < 2){
        botChoice = paper;

    } else if ((random > 2) && (random < 3)){
        botChoice = scissors;

    } else {
        botChoice = rock;

    }
    //bot color turns bright red would be nice, check how to change color in the DOM
}

console.log(`botChoice : ${botChoice}`)



function symbolForce (symbolName){ // i must now make bot and player use symbolforce to convert their choice value

    let paperWeight = 2;          //to be incremented by symbolForce
    let scissorsWeight = 2;
    let rockWeight = 2;

    if  (symbolName === paper) {
        scissors = scissorsWeight+1;
        rock = rockWeight - 1;

    } else if (symbolName === scissors){
        rock = rockWeight + 1;
        paper = paperWeight - 1;

    } else {                //symbolName === rock
        paper = paperWeight + 1;
        scissors = scissorsWeight - 1;

    }

}

document.log(`rock: ${rock} paper: ${paper} scissors: ${scissors}`)



function outcome (botChoice,playerChoice){ // triggers the animation ROCK PAPER SCISSORS and launched when player press a button
    
    document.querySelector(".result").textContent ="ROCK";
    setTimeout (1000);
    document.querySelector(".result").textContent ="PAPER";
    setTimeout (1000);
    document.querySelector(".result").textContent ="SCISSORS";
    setTimeout (1000);

    if (playerChoice > botChoice){
        document.querySelector(".result").textContent =`You win ! Your ${playerChoice} beat BOT's ${botChoice}, please refresh the page to play again`;// message WIN then refresh the page
    }
    else {
        document.querySelector(".result").textContent =`BOT win ! Your ${playerChoice} is beaten by BOT's ${botChoice}, please refresh the page to play again`;
    }
}
