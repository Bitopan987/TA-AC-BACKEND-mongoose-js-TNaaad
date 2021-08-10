var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    name: { type: String, required },
    email: { type: String, lowercase: true, trim: true, match: /@/ },
    age: { type: Number, default: 0 },
    favourites: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
