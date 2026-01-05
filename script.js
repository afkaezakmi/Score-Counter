const buttons = document.querySelectorAll(".buttons");
const player1Score = document.getElementById("player1-score");
const player2Score = document.getElementById("player2-score");

var currentPoints;
var currentPointsP2

// buttons ids
const p1add1Button = document.getElementById("add1");
const p1add2Button = document.getElementById("add2");
const p1add3Button = document.getElementById("add3");
const p2add1Button = document.getElementById("add1-player2");
const p2add2Button = document.getElementById("add2-player2");
const p2add3Button = document.getElementById("add3-player2");
const p1DeductButton = document.getElementById("deduct-button-player1");
const p2DeductButton = document.getElementById("deduct-button-player2");
const pauseButton = document.getElementById("pause-button");

buttons.forEach(button =>{
    button.addEventListener("click", () =>{
        if(button.id === "add1"){
            currentPoints = Number(player1Score.textContent);
            player1Score.textContent = currentPoints + 1; 
        } else if(button.id ==="add2"){
            currentPoints = Number(player1Score.textContent);
            player1Score.textContent = currentPoints + 2; 
        } else if(button.id ==="add3"){
            currentPoints = Number(player1Score.textContent);
            player1Score.textContent = currentPoints + 3; 
        } else if(button.id === "add1-player2"){
            currentPointsP2 = Number(player2Score.textContent);
            player2Score.textContent = currentPointsP2 + 1; 
        } else if(button.id === "add2-player2"){
            currentPointsP2 = Number(player2Score.textContent);
            player2Score.textContent = currentPointsP2 + 2; 
        } else if(button.id === "add3-player2"){
            currentPointsP2 = Number(player2Score.textContent);
            player2Score.textContent = currentPointsP2 + 3; 
        } else if(button.id === "decide-button-player1"){
            currentPoints = Number(player1Score.textContent);
            player1Score.textContent = currentPoints - 1;
            if(currentPoints === 0){
                alert("DEDUCTION IS NOT APPLICABLE");
                player1Score.textContent = 0;
            }
        } else if(button.id === "decide-button-player2"){
            currentPoints = Number(player2Score.textContent);
            player2Score.textContent = currentPoints - 1;
            if(currentPoints === 0){
                alert("DEDUCTION IS NOT APPLICABLE");
                player2Score.textContent = 0;
            }
        } else if (button.id === "pause-button") {

            if (pauseButton.textContent === "PAUSE") {
                disableButton();
                pauseButton.textContent = "RESUME";
            } else {
                enableButton();
                pauseButton.textContent = "PAUSE";
            }
        }
    })
}
)

function disableButton(){
    p1add1Button.disabled = true;
    p1add2Button.disabled = true;
    p1add3Button.disabled = true;
    p2add1Button.disabled = true;
    p2add2Button.disabled = true;
    p2add3Button.disabled = true;
    p1DeductButton.disabled = true;
    p2DeductButton.disabled = true;
}

function enableButton(){
    p1add1Button.disabled = false;
    p1add2Button.disabled = false;
    p1add3Button.disabled = false;
    p2add1Button.disabled = false;
    p2add2Button.disabled = false;
    p2add3Button.disabled = false;
    p1DeductButton.disabled = false;
    p2DeductButton.disabled = false;
}

// button.addEventListener("click", () =>{
//     var currentPoints = Number(player1Score.textContent);
//     player1Score.textContent = currentPoints + 1; 
// }
// ) 