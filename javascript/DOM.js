const body = document.querySelector("body");

const gameWindow = document.createElement("div");

const botSpeak = document.createElement("div")

const lightPath = document.createElement("div");

body.appendChild(gameWindow);

gameFlow()

function gameFlow () {

    introduction();

    gameWindow.addEventListener("transitionend", ()=>{    
     botTalk(1);
     gameWindow.addEventListener("click", trialRoom,{once:true})
    },{once:true});

    

}

function introduction() { // create the start button and initialize the game UI

    const startButton = document.createElement("button");
    

    startButton.classList.add("start-button");
    startButton.textContent = "Begin the trial";

    gameWindow.appendChild(startButton);
    

    startButton.addEventListener("click",()=>{
        startButton.classList.add("start-button-to-window");
        

    }, {once: true});

    startButton.addEventListener("transitionend",(event)=>{
        startButton.remove();
        gameWindow.classList.add ("gamewindow-while-door");
        console.log(event)
        
        body.appendChild(lightPath);
        lightPath.classList.add("light-path");
        
    
    }, {once:true});
};



function botTalk (dialog){ //BOT speaking, handle the scores and matches too
    if (dialog==1){
        botSpeak.classList.add("bot-speak")
        body.insertBefore(botSpeak,gameWindow)
        botSpeak.textContent="ENTER, HUMAN"
    } else if (dialog==2){
        gameWindow.appendChild(botSpeak)
    }
};

function trialRoom () { // main janken event, this will loop every game of 5
    lightPath.remove();
    gameWindow.classList.add("gamewindow-while-game");
    const trialRoomFloor= document.createElement("div");
    botTalk(2)


    
}