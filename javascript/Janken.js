let playerInput;//queryblabla
let playerChoice; 
let botChoice;

let paper;
let scissors;
let rock;

// functions needed : computerChoice, playerChoice, symbolForce and outcome



function symbolForce (symbolName){

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


function computerChoice () {
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

function playerSelect (playerInput) { //can i use query directly here ?
    if (playerInput=1) {
        playerChoice=paper;

    }else if (playerInput=2){
        playerChoice=scissors;

    }else { // input is 3
        playerChoice=rock;
    }
    // triggers the animation ROCK PAPER SCISSORS

}

function outcome (botChoice,playerChoice){
    if (playerChoice>botChoice){
        // message WIN then refresh the page
    }
    else {
        //bot win ! then refresh the page
    }
}
