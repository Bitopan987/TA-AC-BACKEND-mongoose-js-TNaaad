var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var articleSchema = new Schema(
  {
    title: String,
    description: { types: String, minlength: 5, maxlength: 30 },
    tags: [String],
    likes: Number,
    author: Schema.Types.ObjectId,
    comments: [String],
  },
  { timestamps: true }
);

var Article = mongoose.model('Article', articleSchema);
module.exports = Article;
