

var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var rgbDisplay = document.getElementById('rgbDisplay');
var messageBlock = document.getElementById('messageBlock');
var h1Title = document.getElementById('h1Title');
var resetButton = document.getElementById('resetButton');
var modeButtons = document.querySelectorAll('.mode');

rgbDisplay.textContent = pickedColor;

init();

function init() {
    setupButtons();
    setupSquares()
    reset();
}

function setupButtons() {
    // Add button event listeners
    for (var i=0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener('click', function() {
            modeButtons[0].classList.remove('selected');
            modeButtons[1].classList.remove('selected');
            this.classList.add('selected');
            this.textContent === 'Easy' ? numSquares = 3: numSquares = 6;
            reset()
        })
    }
}

function setupSquares() {
    // Add squares event listeners
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener('click',
            function() {
                var clickedColor = this.style.backgroundColor;
                if (clickedColor === pickedColor) {
                    messageBlock.textContent = 'Correct!!!';
                    changeColors(clickedColor);
                    h1Title.style.background = pickedColor;
                } else {
                    messageBlock.textContent = 'Try again';
                    this.style.background = '#232323';
                }
            }
        )
    }
}

function reset() {
    colors = randomizeColors(numSquares);
    pickedColor = pickColor();
    rgbDisplay.textContent = pickedColor;
    messageBlock.textContent = '';

    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = 'block';
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = 'none';
        }
    }

    h1Title.style.backgroundColor = 'steelblue';
}

resetButton.addEventListener('click', function() {
   reset();
});


function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var picked = Math.floor(Math.random() * colors.length);
    return colors[picked];
}

function randomizeColors(num) {
    colorsArr = [];

    for (var i = 0; i < num; i++) {
        colorsArr.push(randomColor());
    }

    return colorsArr;
}

function randomColor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return 'rgb(' + red + ', ' + green + ', ' + blue + ')';
}
