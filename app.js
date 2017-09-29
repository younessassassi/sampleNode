var express = require('express');

var app = express();

var port = process.env.PORT || 3000;

app.get('/', function(req, res) {
    res.send('welcome to my API');
});

app.listen(port, function() {
    console.log('My app is running on PORT: ' + port);
});