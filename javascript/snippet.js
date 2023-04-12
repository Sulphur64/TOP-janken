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
        game();
        } 
    
}