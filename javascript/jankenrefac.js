const score = [{playerWon: 0, BotWon: 0, totalMatches: 0}];

function gameAlgorithm (dataRule,dataChoice){ //take the rule, apply the rule to players choices, return values of choices

    botEyePupil.textContent = "";

    const ruleSet = [
        {rock:2, paper:3, scissors:1}, //if rock
        {rock:1, paper:2, scissors:3}, // if paper
        {rock:3, paper:1, scissors:2} // if scissors
    ];

    const rule = ruleSet[dataRule];
    const playerValue = rule[dataChoice]; //solve player

    
    const botValue = [computerChoice()]

    while (botValue.length !== 1) botValue.pop(); //reset button value before initializing anything !
     
    botValue.push(rule[botValue[0]]); // get string for pupil, then correlates rule to get weight. no other way known to clone  computer choice.


    function computerChoice (){
    
        let random = Math.floor(Math.random()*99);
    
        if (random <= 33){
            return "rock";
    
        } else if ((random <= 66) &&(random >= 33)){
            return "paper";
    
        } else {
            return "scissors";
    
        }
    };


    score[0].totalMatches += 1;
    
    if (score[0].totalMatches <= 4){ //scorekept until 4, last match will deliver the outcome
        
        botEyePupil.textContent = document.querySelector(`.button-${botValue[0]}`).textContent; //botvalue string correlated to buttons class to get textcontent

        if (playerValue > botValue[1]){
            score[0].playerWon += 1;
            return `YOU WON.  [${score[0].playerWon}-${score[0].BotWon}], [${5-score[0].totalMatches} LEFT].`;

        } else if (playerValue < botValue[1]){
            score[0].BotWon += 1;
            return `YOU LOST. [${score[0].playerWon}-${score[0].BotWon}], [${5-score[0].totalMatches} LEFT].`;

        } else {
            return `EQUALITY. [${score[0].playerWon}-${score[0].BotWon}], [${5-score[0].totalMatches} LEFT].`;
        };

    } else { // handle the last match and the outcome.

        botEyePupil.textContent = document.querySelector(`.button-${botValue[0]}`).textContent;

        if (playerValue > botValue[1]){
            score[0].playerWon += 1;
            endGame();
            return outcome();

        } else if (playerValue < botValue[1]){
            score[0].BotWon += 1;
            endGame();
            return outcome();

        } else {
            endGame();
            return outcome ();

        };          
    };



    function outcome(){

        if (score[0].playerWon > score[0].BotWon){
            runeWall.style.color= "aquamarine";
            return `impressive, Human. Touch the Arch.`;

        } else if (score[0].playerWon < score[0].BotWon){
            runeWall.style.color= "aqua";
            return `YOU FAILED. TOUCH THE ARCH.`;

        } else {
            return `EQUALITY. TOUCH THE ARCH.`;

        };

        // check if EVERYTHING reset, could generate errors
    };

function endGame(){ //reset the room
        botEye(3);
        challengeBot(2);

        trialRoomExitDoor.addEventListener ("click", ()=>{ // arch activates and become clickable, loop to DOM:l 44
            trialRoom();
            challengeBot(0);
            botTalk(1);
            botEye(0);

        });
    };

};