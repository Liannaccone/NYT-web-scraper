var mongoose = require('mongoose');

// save reference to the Schema constructor...
var Schema = mongoose.Schema

// ... and create a new ArticleSchema object
var ArticleSchema = new Schema ({
	headline: {
		type: String,
		required: true,
		unique: true
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
	},
	comment: {
		type: Schema.Types.ObjectId,
		ref: 'Note'
	}
});

// create model using the above schema...
var Article = mongoose.model('Article', ArticleSchema);

// ... and export it
module.exports = Article;