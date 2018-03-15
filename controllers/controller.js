var exports = module.exports = {}
var request = require('request');
var cheerio = require('cheerio');

exports.displayHome = function (req, res) {
	res.render('home')
}

exports.scrape = function(req, res) {
   	request('http://www.nytimes.com', function(error, response, html) {
   		var $ = cheerio.load(html);

   		var results = [];

   		$('article.story').each(function(i, element) {

   			var link = $(element).children('h2').children('a').attr('href');
   			var headline = $(element).children('h2').children('a').text();
   			var summary = $(element).children('p.summary').text();
   			if(link && headline) {
	   			results.push({
	   				headline: headline,
	   				summary: summary,
	   				link: link
	   			});
	   		}
   		});
   		console.log(results)
   	})
}
// 'h2.story-heading'