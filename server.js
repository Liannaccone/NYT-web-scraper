// =============================
// 		DEPENDENCIES
// =============================

var express = require('express');
var mongojs = require('mongojs');
var request = require('request');
var cheerio = require('cheerio');
var exphbs = require('express-handlebars')

// Initialiaze express...
var app = express();

var PORT = 3000

// set up handlebars..
app.engine('hbs', exphbs({
    extname: '.hbs',
    defaultLayout: 'main'
}));
app.set('view engine', '.hbs');

// static directory...
// app.use(express.static("./public"));

// db config...
var databaseUrl = 'nyt-app';
var collections = ['articles'];

// hooking mongojs config to the db variable
var db = mongojs(databaseUrl, collections);
db.on('error', function(error) {
	console.log('Database Error:', error);
});

// load ROUTES
require('./routes/routes.js')(app,passport);







app.listen(PORT, function() {
	console.log('App running on port', PORT)
});
// MONGODB_URI: mongodb://heroku_gq2q3swn:o20vpnhpto1g8p2qdfaaevorhr@ds215019.mlab.com:15019/heroku_gq2q3swn