var p1button = document.getElementById('p1');
var p2button = document.querySelector('#p2');
var p1display = document.getElementById('p1display');
var p2display = document.querySelector('#p2display');
var resetbutton = document.querySelector('#reset');
var winningScoreBox = document.querySelector('input');
var winningScoreText = document.querySelector('#winScoreText');
var p1score = 0;
var p2score = 0;
var winningScore = 5;
var gameOver = false;


function p1ButtonClicked() {
    if (!gameOver) {
        p1score++;
        if (p1score === winningScore) {
            p1display.classList.add('winner');
            gameOver = true;
        }
        p1display.textContent = p1score;
    }
}

function p2ButtonClicked() {
    if (!gameOver) {
        p2score++;
        if (p2score === winningScore) {
            p2display.classList.add('winner');
            gameOver = true;
        }
        p2display.textContent = p2score;
    }
}

function resetGame() {
    p1score = 0;
    p2score = 0;
    p1display.textContent = 0;
    p2display.textContent = 0;
    p1display.classList.remove('winner');
    p2display.classList.remove('winner');
    gameOver = false;
}

function changeWinScore() {
    var winningScoreValue = document.querySelector('input').value;
    winningScoreText.textContent = Number(winningScoreValue);
    winningScore = Number(winningScoreValue);
}

p1button.addEventListener('click', p1ButtonClicked);
p2button.addEventListener('click', p2ButtonClicked);
resetbutton.addEventListener('click', resetGame);
winningScoreBox.addEventListener('change', changeWinScore)

