var board = document.querySelector('.game-container');
var button = document.querySelector('.button');
var windownMessage = document.querySelector('.winner');
var turn = "X";
function listenBoard() {
    board.addEventListener('click', runGame);
}
function main() {
    createBoard();
    listenBoard();
}
function runGame(e) {
    var boxId = e.target.id;
    console.log(boxId);
    if (boxId === null)
        return;
    var box = document.querySelector("#".concat(boxId));
    if (box === null || box.textContent !== "")
        return;
    box.textContent = turn;
    var winner = checkWWinner();
    if (!winner)
        switchPlayer();
    else {
        endGame();
    }
}
function endGame() {
    board.removeEventListener('click', runGame);
    button.addEventListener('click', resetGame);
    if (windownMessage === null)
        return;
    windownMessage.textContent = "Winner is ".concat(turn);
    windownMessage.setAttribute('display', 'block');
    button.style.visibility = 'visible';
}
function resetGame() {
    turn = "X";
    resetBoxes();
    button.style.visibility = 'hidden';
    windownMessage.textContent = "";
    board.addEventListener('click', runGame);
}
function resetBoxes() {
    for (var i = 0; i < 9; i++) {
        var box = document.querySelector("#box-".concat(i));
        box.textContent = "";
        // resetting animation
    }
}
function checkWWinner() {
    var boxes = getBoxed();
    return ((boxes[0] === boxes[1] && boxes[1] === boxes[2] && boxes[0] !== "") ||
        (boxes[3] === boxes[4] && boxes[4] === boxes[5] && boxes[3] !== "") ||
        (boxes[6] === boxes[7] && boxes[7] === boxes[8] && boxes[6] !== "") ||
        (boxes[0] === boxes[4] && boxes[4] === boxes[8] && boxes[0] !== "") ||
        (boxes[2] === boxes[4] && boxes[4] === boxes[6] && boxes[2] !== "") ||
        (boxes[1] === boxes[4] && boxes[4] === boxes[7] && boxes[1] !== "") ||
        (boxes[0] === boxes[3] && boxes[3] === boxes[6] && boxes[0] !== "") ||
        (boxes[2] === boxes[5] && boxes[5] === boxes[8] && boxes[2] !== ""));
}
function getBoxed() {
    var boxesContent = [];
    for (var i = 0; i < 9; i++) {
        var box = document.querySelector("#box-".concat(i));
        var boxeContent = box.textContent;
        if (boxeContent === null)
            boxesContent.push("");
        else {
            boxesContent.push(boxeContent);
        }
    }
    return boxesContent;
}
function switchPlayer() {
    if (turn === "X")
        turn = "O";
    else
        turn = "X";
}
function createBoard() {
    for (var i = 0; i < 9; i++)
        makeBox(i);
}
function makeBox(i) {
    var box = document.createElement('div');
    box.className = 'box';
    box.id = "box-".concat(i);
    box.textContent = '';
    board.appendChild(box);
}
main();
