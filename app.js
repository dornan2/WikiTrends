/**
 * Module dependencies
 */

var express  = require('express'),
    mongoose = require('mongoose'),                     // mongoose for mongodb
    morgan = require('morgan'),                         // log requests to the console (express4)
    bodyParser = require('body-parser'),                // pull information from HTML POST (express4)
    methodOverride = require('method-override');        // simulate DELETE and PUT (express4)

var app      = express();

/**
 * Configuration
 */

var db = mongoose.connect('mongodb://localhost/test');

app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());

var port = process.env.PORT || 3000;

/**
 * Define models
 */

var Trending100 = require('./models/trending100Model');
var Article = require('./models/ArticleModel');
var Daily100 = require('./models/daily100Model');
var Monthly100 = require('./models/monthly100Model');
var Yearly100 = require('./models/yearly100Model');

/**
 * Define Routes
 */

trending100Router = require('./routes/trending100Routes')(Trending100);
articleRouter = require('./routes/articleRoutes')(Article);
daily100Router = require('./routes/daily100Routes')(Daily100);
monthly100Router = require('./routes/monthly100Routes')(Monthly100);
yearly100Router = require('./routes/yearly100Routes')(Yearly100);

app.use('/api', trending100Router);
app.use('/api', articleRouter);
app.use('/api', daily100Router);
app.use('/api', monthly100Router);
app.use('/api', yearly100Router);

/**
 * Application
 */

//app.get('*', function(req, res) {
//    res.sendfile('./public/index.html');
//});

app.get('*', function(req, res) {
    res.sendFile('./public/index.html'); // load our public/index.html file
});


/**
 * Listen
 */
app.listen(port, function(){
    console.log('Running on ' + port);
});