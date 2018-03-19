var controller = require('../controllers/controller.js');

module.exports = function(app) {
 
    app.get('/', controller.displayHome)

    app.get('/saved', controller.displaySaved)

    app.put('/article', controller.saveArticle)

    app.delete('/article', controller.deleteArticle)

    app.get('/scrape', controller.scrape)

    app.get('/articles', controller.displayArticles)

    

}