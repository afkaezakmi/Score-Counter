const buttons = document.querySelectorAll(".buttons");
const player1Score = document.getElementById("player1-score");
const player2Score = document.getElementById("player2-score");

var currentPoints = 0;
var currentPointsP2 = 0;

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
const resetButton = document.getElementById("reset-button");
const decideButton = document.getElementById("decide-button");

// history container
const historyContainer = document.getElementById("history-container");


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
            } else if(button.id === "deduct-button-player1"){
                currentPoints = Number(player1Score.textContent);
                player1Score.textContent = currentPoints - 1;
                if(currentPoints === 0){
                    alert("DEDUCTION IS NOT APPLICABLE");
                    player1Score.textContent = 0;
                }
            } else if(button.id === "deduct-button-player2"){
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
            } else if(button.id === "decide-button"){
   

                createHistory(player1Score, player2Score);
            
                disableButton();
                pauseButton.disabled = true;

            } else if (button.id === "reset-button"){
                player1Score.textContent = 0;
                player2Score.textContent = 0;
                enableButton();
                pauseButton.disabled = false;
                pauseButton.textContent = "PAUSE";
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

// history container
function createHistory(p1Score, p2Score){

    const history = document.createElement('div');
    history.classList.add('history');
    historyContainer.appendChild(history);

    // Player 1 History
    const player1History = document.createElement('div');
    player1History.classList.add('player1History');

    const player1NameHistory = document.createElement('div');
    player1NameHistory.classList.add("player1-name-history");
    player1History.appendChild(player1NameHistory);

    const h1Player1 = document.createElement('h1');
    h1Player1.textContent = "Player 1"
    player1NameHistory.appendChild(h1Player1);

    const player1ScoreFinal = document.createElement('h2');
    player1ScoreFinal.textContent = p1Score.textContent;
    player1History.appendChild(player1ScoreFinal);

    // Player 2 History
    const player2History = document.createElement('div');
    player2History.classList.add('player2History');

    const player2NameHistory = document.createElement('div');
    player2NameHistory.classList.add("player2-name-history");
    player2History.appendChild(player2NameHistory);

    const h1Player2 = document.createElement('h1');
    h1Player2.textContent = "Player 2"
    player2NameHistory.appendChild(h1Player2);

    const player2ScoreFinal = document.createElement('h2');
    player2ScoreFinal.textContent = p2Score.textContent;
    player2History.appendChild(player2ScoreFinal);

    history.appendChild(player1History);
    history.appendChild(player2History);
    
}

// live score settings

// const player1Name = document.getElementById('player1');

// const player1NameContainer = document.getElementById('player1-name-container');

// const player1NameLive = document.createElement('h1');
// player1NameLive.textContent = player1Name.textContent;

// player1NameContainer.appendChild(player1NameLive);

// const player1NameEl = document.querySelector("#player1 h1");
// const player2NameEl = document.querySelector("#player2 h1");

// function makeEditable(playerId, storageKey) {
//   const playerDiv = document.getElementById(playerId);
//   if (!playerDiv) return;

//   const nameEl = playerDiv.querySelector("h1");

//   // Load saved name
//   const savedName = localStorage.getItem(storageKey);
//   if (savedName) {
//     nameEl.textContent = savedName;
//   }

//   // Make editable on click
//   nameEl.addEventListener("click", () => {
//     nameEl.contentEditable = "true";
//     nameEl.focus();
//   });

//   // Save on blur or Enter
//   nameEl.addEventListener("blur", saveName);
//   nameEl.addEventListener("keydown", (e) => {
//     if (e.key === "Enter") {
//       e.preventDefault();
//       nameEl.blur();
//     }
//   });

//   function saveName() {
//     nameEl.contentEditable = "false";
//     const finalName = nameEl.textContent.trim() || "Player";
//     nameEl.textContent = finalName;
//     localStorage.setItem(storageKey, finalName);
//   }
// }

// // Apply to both players
// makeEditable("player1", "player1Name");
// makeEditable("player2", "player2Name");
