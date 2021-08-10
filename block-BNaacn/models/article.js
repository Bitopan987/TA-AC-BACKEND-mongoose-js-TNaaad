var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema(
  {
    title: String,
    description: String,
    tags: [String],
    creatAt: { type: Date, default: new Date() },
    likes: { type: Number, default: 0 },
    password: { type: String, minlength: 5 },
  },
  { timestamps: true }
);

var Article = mongoose.model('Article', articleSchema);

module.exports = Article;
