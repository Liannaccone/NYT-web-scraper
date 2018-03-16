var exports = module.exports = {}
var request = require('request');
var cheerio = require('cheerio');
var mongoose = require('mongoose');
var axios = require("axios");

exports.displayHome = function (req, res) {
	res.render('home')
}

exports.scrape = function(req, res) {
   	request('http://www.nytimes.com', function(error, response, html) {
   		var $ = cheerio.load(html);

   		var results = [];

   		$('article.story').each(function(i, element) {

   			var url = $(element).children('h2').children('a').attr('href');
   			var headline = $(element).children('h2').children('a').text();
   			var summary = $(element).children('p.summary').text();
   			if(url && headline) {
	   			results.push({
	   				headline: headline,
	   				summary: summary,
	   				url: url
	   			});
	   		}
   		});
   		console.log(results)
   	})
}
// 'h2.story-heading'