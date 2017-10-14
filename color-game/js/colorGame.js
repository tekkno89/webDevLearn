

var numSquares = 6;
var colors = randomizeColors(numSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var rgbDisplay = document.getElementById('rgbDisplay');
var messageBlock = document.getElementById('messageBlock');
var h1Title = document.getElementById('h1Title');
var resetButton = document.getElementById('resetButton');
var easyButton = document.querySelector('#easyBtn');
var hardButton = document.querySelector('#hardBtn');

rgbDisplay.textContent = pickedColor;

resetButton.addEventListener('click', function() {
   colors = randomizeColors(numSquares);
   pickedColor = pickColor();
   rgbDisplay.textContent = pickedColor;

   for (var i = 0; i < squares.length; i++) {
       squares[i].style.backgroundColor = colors[i];
   }
   h1Title.style.backgroundColor = 'steelblue';
});

easyButton.addEventListener('click', function() {
    easyButton.classList.add('selected');
    hardButton.classList.remove('selected');
    numSquares = 3;
    colors = randomizeColors(numSquares);
    pickedColor = pickColor();
    rgbDisplay.textContent = pickedColor;
    console.log(colors);

    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = 'none';
        }
    }
});

hardButton.addEventListener('click', function() {
    hardButton.classList.add('selected');
    easyButton.classList.remove('selected');
    numSquares = 6;
    colors = randomizeColors(numSquares);
    pickedColor = pickColor();
    rgbDisplay.textContent = pickedColor;
    console.log(colors);

    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = 'block';
    }
});

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
    );
}

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
