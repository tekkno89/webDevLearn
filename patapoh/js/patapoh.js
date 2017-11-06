
var circles = [];

function onKeyDown(event) {
    var maxPoint = new Point(view.size.width, view.size.height);
    var randomPoint = Point.random();
    var point = maxPoint * randomPoint;
    var newCircle = Path.Circle(point, 200);
    if (event.key === 'a') {
        sound1.play();
        newCircle.fillColor = 'blue';
    } else if (event.key === 'l') {
        sound2.play();
        newCircle.fillColor = 'orange';
    } else {
        newCircle.fillColor = 'red';
    }
    circles.push(newCircle);
	console.log(point);
}

function onFrame(event) {
    for (var i=0; i < circles.length; i++) {
        circles[i].fillColor.hue += 1;
        circles[i].scale(.92);
    }
}


var sound1 = new Howl({
        src: ['assets/sounds/bubbles.mp3']
});

var sound2 = new Howl({
        src: ['assets/sounds/clay.mp3']
});
