var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

var db = mongoose.connect('mongodb://localhost/test');

var Trend = require('./models/trendModel');

var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extened:true}));
app.use(bodyParser.json());

trendRouter = require('./Routes/trendRoutes')(Trend);

app.use('/api', trendRouter);

app.get('/', function(req, res){
    res.send('Welcome to my API');
});

app.listen(port, function(){
    console.log('Running on ' + port);
});