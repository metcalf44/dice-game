
let player1Score = 0
let player2Score = 0
let player1Turn = true
let evenNumber = 5
let oddNumber = -5

const playersTurn = document.getElementById("message")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")

// functions

function displayResetBtn() {
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
    gambleBtn.style.display = "none"
}

function winner() {
    if (player1Score >= 30) {
        playersTurn.textContent = "Player 1 is the winner";
        displayResetBtn();
    } else if (player2Score >= 30) {
        playersTurn.textContent = "Player 2 is the winner";
        displayResetBtn();
    }
}
function reset() {
    if (player1Score >= 30) {
        playersTurn.textContent = "player 2 starts"
        player1Dice.textContent = "-"
        player1Scoreboard.textContent = 0
        player1Score = 0
        player1Turn = false
        player1Dice.classList.remove("active")
        player2Dice.textContent = "-"
        player2Scoreboard.textContent = 0
        player2Score = 0
        player2Dice.classList.add("active")
        btnReset()
    } else {
        playersTurn.textContent = "Player 1 starts"
        player1Dice.textContent = "-"
        player1Scoreboard.textContent = 0
        player1Score = 0
        player1Turn = true
        player1Dice.classList.add("active")
        player2Dice.textContent = "-"
        player2Scoreboard.textContent = 0
        player2Score = 0
        player2Dice.classList.remove("active")
        btnReset()
    }
}

function btnReset () {
    resetBtn.style.display = "none"
    rollBtn.style.display = "block"
    gambleBtn.style.display = "block"
}

// Dice game

rollBtn.addEventListener("click", function(){
    const randomNumber = Math.floor(Math.random() * 6) + 1

        if (player1Turn) {
            player1Score += randomNumber
            player1Scoreboard.textContent = player1Score
            player1Dice.textContent = randomNumber
            player1Dice.classList.remove("active")
            player2Dice.classList.add("active")
            playersTurn.textContent = "Player 2"
        } else {
            player2Score += randomNumber
            player2Scoreboard.textContent = player2Score
            player2Dice.textContent = randomNumber;
            player2Dice.classList.remove("active")
            player1Dice.classList.add("active")
            playersTurn.textContent = "Player 1"
        }

    player1Turn = !player1Turn

        winner()
})

gambleBtn.addEventListener("click", function(){
    let gambleNumber = Math.floor(Math.random()*10) + 1

        if (gambleNumber % 2 == 0){
            gambleNumber = evenNumber
        } else {
            gambleNumber = oddNumber
        }
        if (player1Turn) {
            player1Score += gambleNumber
            player1Scoreboard.textContent = player1Score
            player1Dice.textContent = gambleNumber
            player1Dice.classList.remove("active")
            player2Dice.classList.add("active")
            playersTurn.textContent = "Player 2"
        } else {
            player2Score += gambleNumber
            player2Scoreboard.textContent = player2Score
            player2Dice.textContent = gambleNumber;
            player2Dice.classList.remove("active")
            player1Dice.classList.add("active")
            playersTurn.textContent = "Player 1"
        }

    player1Turn = !player1Turn

        winner()
})

resetBtn.addEventListener("click", function(){
    reset()
})

