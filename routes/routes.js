var controller = require('../controllers/controller.js');
var request = require('request');
var cheerio = require('cheerio');
module.exports = function(app) {
 
    app.get('/', controller.displayHome)

    app.get('/scrape', controller.scrape)

}