// =============================
// 		DEPENDENCIES
// =============================

var axios = require("axios");
var logger = require("morgan");
var express = require('express');
var mongojs = require('mongojs');
var request = require('request');
var cheerio = require('cheerio');
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var exphbs = require('express-handlebars')

// Initialiaze express...
var app = express();

// Require all models
var db = require("./models");

var PORT = 3000

// set up handlebars..
app.engine('hbs', exphbs({
    extname: '.hbs',
    defaultLayout: 'main'
}));
app.set('view engine', '.hbs');


// ===============================
// Configure middleware and DB connection
// ===============================

// using body parser for handling submissions...
app.use(bodyParser.urlencoded({ extended: true }));

// static directory...
app.use(express.static("./public"));

// use morgan logger to log requests
app.use(logger("dev"));

// connecting to mongodb and setting it up to use promises
var MONGODB_URI = process.env.MONGOBD_URI || "mongodb://localhost/nyt-scraper"
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

// var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/nyt-scraper";
// mongoose.Promise = Promise;
// mongoose.connect(MONGODB_URI, {
//   useMongoClient: true
// });

// load ROUTES
require('./routes/routes.js')(app);



app.listen(PORT, function() {
	console.log('App running on port', PORT)
});


// MONGODB_URI: mongodb://heroku_gq2q3swn:o20vpnhpto1g8p2qdfaaevorhr@ds215019.mlab.com:15019/heroku_gq2q3swn