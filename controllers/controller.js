var exports = module.exports = {}
var request = require('request');
var cheerio = require('cheerio');
var mongoose = require('mongoose');
var axios = require("axios");
var db = require('../models')

exports.displayHome = function (req, res) {
	res.render('home')
}

exports.scrape = function(req, res) {
   	axios.get('http://www.nytimes.com').then(function(response) {
   		var $ = cheerio.load(response.data);

   		$('article.story').each(function(i, element) {
            var result = {};
   			result.url = $(this).children('h2').children('a').attr('href');
   			result.headline = $(this).children('h2').children('a').text();
   			result.summary = $(this).find('p.summary').text();
   			
            if(result.url && result.headline) {
               db.Article.create(result)
                  .then(function(dbArticle) {
                     console.log(dbArticle);
                  }).catch(function(err) {
                     return res.json(err)
                  });
	   		};
   		});
   	})
}
