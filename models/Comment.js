var mongoose = require('mongoose');

// save reference to the Schema constructor...
var Schema = mongoose.Schema

// ... and create a new CommentSchema object
var CommentSchema = new Schema ({
	body: {
		type: String,
		required: 'Cannot save a note with no content!',
	},
	userCreated: {
		type: Date,
		default: Date.now
	}
});

// create model using the above schema...
var Comment = mongoose.Model('Comment', CommentSchema);

// ... and export it
module.exports = Comment;