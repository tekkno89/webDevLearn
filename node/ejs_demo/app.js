
var express = require('express');
var app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.send('Welcome!');
});

app.get('/buy/:buyThing', function(req, res) {
    buyThing = req.params.buyThing;
    res.render('buy', {buyThingVar:buyThing});
});


app.listen(8080);