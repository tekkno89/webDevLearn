
var express = require('express');
var app = express();

var animals = {'cow':'moo', 'pig':'oink', 'turtle':'cowabunga'};

app.get('/', function(req, res) {
    res.send('welcome to my simple express app');
});

app.get('/speak/:speakX', function(req, res) {
    var getAnimal = req.params.speakX;
    if (getAnimal in animals) {
        var sound = animals[getAnimal];
        var sendSound = 'the ' + getAnimal + ' says ' + sound;
        res.send(sendSound);
    } else {
        res.send('animal not found');
    }
});

app.get('/repeat/:repeatWord/:repeatCount', function(req, res) {
    var repeatWord = req.params.repeatWord;
    var repeatCount = Number(req.params.repeatCount);
    var repeatArray = '';

    if (repeatCount > 0) {
        for (i = 0; i < repeatCount; i++) {
            repeatArray += repeatWord + ' ';
        }
    } else {
        repeatArray = 'you must specify val > 0';
    }

    res.send(repeatArray);
});

app.get('*', function(req, res) {
    res.send("sorry, could't find that page");
});

app.listen(8080);