const body = document.querySelector("body");

const gameWindow = document.createElement("div");

const botSpeak = document.createElement("div")

const lightPath = document.createElement("div");

const trialRoomFloor= document.createElement("div");

const challengeButton = document.createElement("button"); // will launch then pop


body.appendChild(gameWindow);


gameFlow();

function gameFlow () {

    introduction(); //intro anim

    gameWindow.addEventListener("transitionend", ()=>{ //entering the main room
        botTalk(0);

        gameWindow.addEventListener("click",()=>{ // in the room, placing the setup
            trialRoom();
            challengeBot(0);
            botTalk(1);
            botEyeState(0);

            challengeButton.addEventListener("click",()=>{ // launching janken


            });

        },{once:true})

    },{once:true});

};

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
    if (dialog==0){
        botSpeak.classList.add("bot-speak")
        body.insertBefore(botSpeak,gameWindow)
        botSpeak.textContent="ENTER, HUMAN"
    } else if (dialog==1){
        gameWindow.prepend(botSpeak)
        botSpeak.textContent="IT IS TIME."
    }
};

function botEyeState (state) {

    const botEye = document.createElement("div");
    const botEyePupil = document.createElement("div");
    botEyePupil.textContent="\u{2022}";
    botEye.classList.add("bot-eye");

    if (state==0){ //eye closed
        gameWindow.insertBefore(botEye,trialRoomFloor);
    
    }else if (state==1){ //wakes up {eye from black to red, pupil appear}
        botEye.classList.remove("bot-eye");
        botEye.classList.add("bot-eye-active");
        botEyePupil.classList.add("bot-eye-pupil");
        botEye.appendChild(botEyePupil);

    } else if (state==2){ //woke, pupil focusing on the player
        botEye.classList.remove("bot-eye");
        botEye.classList.add("bot-eye-active");
        botEyePupil.classList.add("bot-eye-pupil");
        botEye.appendChild(botEyePupil);
        botEye.setAttribute('style','align-items:"flex-end"')
    }
};

function getRandomText(length) {
    let result = '';
    const characters = '  ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
};

function trialRoom () { // main janken event, this will loop every game of 5

    const trialRoomExitDoor= document.createElement("div");
    const runeWall = document.createElement("div");
    const character= document.createElement("div")

    lightPath.remove();

    gameWindow.classList.add("gamewindow-while-game");

    
    
    trialRoomFloor.classList.add("trialroom-floor");
    gameWindow.appendChild(trialRoomFloor);

    trialRoomFloor.appendChild(character)
    character.classList.add("character")
    character.textContent="\u{A19C}";

    
    trialRoomExitDoor.classList.add("trialroom-exit-door")
    trialRoomFloor.prepend(trialRoomExitDoor)


    
    runeWall.classList.add('runewall')
    gameWindow.insertBefore(runeWall,trialRoomFloor)
    runeWall.textContent=getRandomText(25000)

};

function challengeBot(state){ //will contain the player interface and symbol
    
    const playerChoiceContainer = document.createElement("div");

        const buttonRock = document.createElement("button");
        const buttonPaper = document.createElement("button");
        const buttonScissors = document.createElement("button");

    trialRoomFloor.appendChild(playerChoiceContainer);
    playerChoiceContainer.classList.add("player-choice-container");

    challengeButton.classList.add("challenge-button");
    challengeButton.textContent= 'I defy you !';

    if (state==0){
    playerChoiceContainer.appendChild(challengeButton);

    } else if (state==1){ // button initiating the janken
        challengeButton.remove();
        buttonRock.classList.add("button-rock");
        buttonPaper.classList.add("button-paper");
        buttonScissors.classList.add("button-scissors");

    }




    


};