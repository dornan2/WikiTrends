var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

var db = mongoose.connect('mongodb://localhost/test');

var Trend = require('./../models/trendModel');
var Daily100 = require('./../models/daily100Model');
var Monthly100 = require('./../models/monthly100Model');
var Yearly100 = require('./../models/yearly100Model');
var Trending100 = require('./../models/trending100Model');
var Article = require('./../models/ArticleModel');

var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//trendRouter = require('./Routes/trendRoutes')(Trend);
daily100Router = require('./../Routes/daily100Routes')(Daily100);
monthly100Router = require('./../Routes/monthly100Routes')(Monthly100);
yearly100Router = require('./../Routes/yearly100Routes')(Yearly100);
trending100Router = require('./../Routes/trending100Routes')(Trending100);
articleRouter = require('./../Routes/articleRoutes')(Article);

//app.use('/api', trendRouter);
app.use('/api', daily100Router);
app.use('/api', monthly100Router);
app.use('/api', yearly100Router);
app.use('/api', trending100Router);
app.use('/api', articleRouter);


app.get('/', function(req, res){
    res.send('Welcome to my API');
});

app.listen(port, function(){
    console.log('Running on ' + port);
});