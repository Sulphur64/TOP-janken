const score = [{playerWon: 0, BotWon: 0, totalMatches: 0}];

function gameAlgorithm (dataRule,dataChoice){ //take the rule, apply the rule to players choices, return values of choices


    const ruleSet = [
        {rock:2, paper:3, scissors:1}, //if rock
        {rock:1, paper:2, scissors:3}, // if paper
        {rock:3, paper:1, scissors:2} // if scissors
    ];

    const rule = ruleSet[dataRule];
    const playerValue = rule[dataChoice]; //solve player
    const botValue = rule[computerChoice()]; //solve computer
    

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

    

    if (score[0].totalMatches <= 4){ //scorekept until 4, last match will deliver the outcome

        score[0].totalMatches += 1;
        botEyePupil.textContent = `${botValue}`; //refactor botvalue to get the string correlated to buttons ?

        if (playerValue > botValue){
            score[0].playerWon += 1;
            return `YOU WON. ${score[0].playerWon}-${score[0].BotWon}, ${5-score[0].totalMatches} LEFT.`;

        } else if (playerValue < botValue){
            score[0].BotWon += 1;
            return `YOU LOST. ${score[0].playerWon}-${score[0].BotWon}, ${5-score[0].totalMatches} LEFT.`;

        } else {
            return `EQUALITY. ${score[0].playerWon}-${score[0].BotWon}, ${5-score[0].totalMatches} LEFT.`;
        };

    } else { // handle the last match and the outcome.

        botEyePupil.textContent = `${botValue} END`;

        if (playerValue > botValue){
            score[0].playerWon += 1;

        } else if (playerValue < botValue){
            score[0].BotWon += 1;
            
        };

        outcome(); //problem here ! 
    };


    function outcome(){
        if (score[0].playerWon > score[0].BotWon){
            return `impressive, human. you can pass. Touch the arch.`;

        } else if (score[0].playerWon < score[0].BotWon){
            return `YOU FAILED, AS PREDICTED. TOUCH THE ARCH.`;

        } else {
            return `EQUALITY. TOUCH THE ARCH.`;

        };
    };

};