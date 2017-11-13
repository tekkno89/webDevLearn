
var express = require('express');
var app = express();


app.get('/', function(req, res) {
    res.send('Welcome!');
});

app.get('/buy/:buyThing', function(req, res) {
    buyThing = req.params.buyThing;
    res.render('buy.ejs', {buyThingVar:buyThing});
});


app.listen(8080);