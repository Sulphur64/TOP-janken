const body = document.querySelector("body");

const gameWindow = document.createElement("div");

const botSpeak = document.createElement("div")

const lightPath = document.createElement("div");

const trialRoomFloor= document.createElement("div");



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
        botSpeak.textContent="IT IS TIME."
    }
};

function botEyeState (state) {

    const botEye = document.createElement("div");
    const botEyePupil = document.createElement("div");
    botEyePupil.textContent="\u{2022}";
    botEye.classList.add("bot-eye");
    gameWindow.insertBefore(botEye,trialRoomFloor)
    

    if (state==1){ //wakes up {eye from black to red, pupil appear}
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
}

function trialRoom () { // main janken event, this will loop every game of 5
    lightPath.remove();

    gameWindow.classList.add("gamewindow-while-game");

    botTalk(2);
    
    trialRoomFloor.classList.add("trialroom-floor");
    gameWindow.appendChild(trialRoomFloor);
    trialRoomFloor.textContent="\u{A19C}";

    const trialRoomExitDoor= document.createElement("div")
    trialRoomExitDoor.classList.add("trialroom-exit-door")
    trialRoomFloor.prepend(trialRoomExitDoor)

    botEyeState();

    const runeWall = document.createElement("div")
    runeWall.classList.add('runewall')
    gameWindow.insertBefore(runeWall,trialRoomFloor)
    runeWall.textContent=getRandomText(25000)

}