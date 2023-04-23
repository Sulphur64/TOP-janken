const body = document.querySelector("body");

const gameWindow = document.createElement("div");

    const botSpeak = document.createElement("div");

    const runeWall = document.createElement("div");

    const botEyeSocket = document.createElement("div");
        const botEyePupil = document.createElement("div");  


    const trialRoomFloor= document.createElement("div");
        const trialRoomExitDoor= document.createElement("div");
        const character= document.createElement("div");


            const playerChoiceContainer = document.createElement("div"); //placed outside, will be used by Algo
                const challengeButton = document.createElement("button");

                const buttonRock = document.createElement("button");
                const buttonPaper = document.createElement("button");
                const buttonScissors = document.createElement("button");


const lightPath = document.createElement("div");




body.appendChild(gameWindow);


gameFlow();

function gameFlow () { //each stage will get cut into a function later

    introduction(); //intro anim

    gameWindow.addEventListener("transitionend", ()=>{ //entering the main room
        botTalk(0);

        gameWindow.addEventListener("click",()=>{ // in the room, placing the setup
            trialRoom();
            challengeBot(0);
            botTalk(1);
            botEye(0);

            challengeButton.addEventListener("click",()=>{ // launching janken
                botEye(1);
                botTalk(2);
                challengeBot(1);

            },{once:true});

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

    } else if (dialog==2){ //after challengeclick, choose your symbol
        botSpeak.textContent="PREPARE YOURSELF"

    } //else if : player made his choice, track score, tell result
};

function botEye (state) {

    botEyePupil.textContent="\u{2022}";
    

    if (state==0){ //eye closed
        botEyeSocket.classList.add("bot-eye");
        gameWindow.insertBefore(botEyeSocket,trialRoomFloor);
    
    }else if (state==1){ //wakes up {eye from black to red, pupil appear}
        botEyeSocket.classList.replace('bot-eye',"bot-eye-active")
        botEyePupil.classList.add("bot-eye-pupil");
        botEyeSocket.appendChild(botEyePupil);

    } else if (state==2){ //[after player selection] woke, pupil focusing on the player
        
        botEyeSocket.setAttribute('style','justify-content: "flex-end"')
        //change background color of playerchoice to simulate lightfocus, 
        //create a cone of light with a div and change textcontent of pupil with robotsymbol
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

    trialRoomFloor.appendChild(playerChoiceContainer);

    playerChoiceContainer.classList.add("player-choice-container");

    if (state==0){       
        playerChoiceContainer.appendChild(challengeButton);
        challengeButton.classList.add("challenge-button");
        challengeButton.textContent= 'I defy you !';

    } else if (state==1){ // button initiating the janken /changebackground of container
        challengeButton.remove();

        buttonRock.classList.add("button-rock");
        buttonPaper.classList.add("button-paper");
        buttonScissors.classList.add("button-scissors");

        buttonRock.textContent= "\u{270A}";
        buttonPaper.textContent= "\u{270B}";
        buttonScissors.textContent= "\u{270C}";

        playerChoiceContainer.appendChild(buttonRock);
        playerChoiceContainer.appendChild(buttonPaper);
        playerChoiceContainer.appendChild(buttonScissors);

    } else if (state==2){// the player made his choice
        // non selected buttons disappear
    }
};