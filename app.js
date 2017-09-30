var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

var db = mongoose.connect('mongodb://younessassassi:echofabulous1@ds157624.mlab.com:57624/heroku_tljqf0tk');

var Book = require('./models/bookModel');

var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

bookRouter = require('./routes/bookRoutes')(Book);

app.use('/api/books', bookRouter);

app.get('/', function(req, res) {
    res.send('welcome to my new API');
});

app.listen(port, function() {
    console.log('My app is running on PORT: ' + port);
});

// MONGODB_URI