const title = document.querySelector("#title");
const btnRestart = document.querySelector("#btn-restart");
const boxes = document.querySelectorAll(".box");
const board = document.querySelector("#board")

const xPlayer = "X";
const oPlayer = "O";
let currentPlayer = xPlayer;
let spaces = Array(9).fill(null);

const startGame = () => {
    boxes.forEach(box => box.addEventListener("click", boxClicked))
}

function boxClicked(e) {
    const id = e.target.id

    if(!spaces[id]) {
        spaces[id] = currentPlayer;
        e.target.innerText = currentPlayer;
        
        if(playerHasWon()){
            title.innerHTML = `${currentPlayer} has won!`
            board.style.display = "none"
        } else {
            currentPlayer = currentPlayer == xPlayer ? oPlayer : xPlayer
            title.innerText = `${currentPlayer}' Turn !`
        }
    }
   
}

const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function playerHasWon() {
    for (const condition of winningCombos) {
        let [a, b, c] = condition

        if(spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c])) {
            return 1
        }
    }
    return false
}

btnRestart.addEventListener("click", restart)

function restart() {
    spaces.fill(null);
    boxes.forEach(box => box.innerText = "");
    title.innerText = "X O X"
    currentPlayer = xPlayer;
    board.style.display = "flex"
}

startGame()


