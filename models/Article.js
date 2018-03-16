var mongoose = require('mongoose');

// save reference to the Schema constructor...
var Schema = mongoose.Schema

// ... and create a new ArticleSchema object
var ArticleSchema = new Schema ({
	headline: {
		type: String,
		required: true
	},
	summary: {
		type: String,
		required: true
	},
	url: {
		type: String,
		required: true
		// add match with regex expression
		// match: [(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&], 'Not a valid URL']
	}
})

// create model using the above schema...
var Article = mongoose.Model('Article', ArticleSchema);

// ... and export it
module.exports = Article;