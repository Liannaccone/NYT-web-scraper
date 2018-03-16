var controller = require('../controllers/controller.js');

module.exports = function(app) {
 
    app.get('/', controller.displayHome)

    app.get('/scrape', controller.scrape)

    

}