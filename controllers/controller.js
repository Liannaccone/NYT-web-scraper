var exports = module.exports = {}
var request = require('request');
var cheerio = require('cheerio');
var mongoose = require('mongoose');
var axios = require("axios");
var db = require('../models')

exports.displayHome = function (req, res) {
   db.Article.find({})
    .then(function(data) {
      var hbsObject = {};
      hbsObject.articles = data
      console.log(hbsObject)
      res.render('home', hbsObject)
    })
    .catch(function(err) {
      res.json(err)
    });
}

exports.displaySaved = function(req, res) {
  res.render('saved')
}

exports.scrape = function(req, res) {
   	axios.get('http://www.nytimes.com').then(function(response) {
   		var $ = cheerio.load(response.data);

   		$('article.story').each(function(i, element) {
            var result = {};
   			result.url = $(this).children('h2').children('a').attr('href');
   			result.headline = $(this).children('h2').children('a').text();
   			result.summary = $(this).find('p.summary').text();
   			
            if(result.url && result.headline && result.summary) {
               db.Article.create(result)
                  .then(function(dbArticle) {
                     return
                  }).catch(function(err) {
                     return res.json(err)
                  });
	   		};
   		});
   	})
}


exports.displayArticles = function(req, res) {
   db.Article.find({})
    .then(function(data) {
      res.json(data)
    })
    .catch(function(err) {
      res.json(err)
    });
};
