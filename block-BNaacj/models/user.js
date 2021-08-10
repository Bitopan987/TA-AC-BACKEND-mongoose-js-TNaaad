var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: { type: String, required },
  email: { type: String, lowercase: true, trim: true, match: /@/ },
  password: { type: String, minlength: 5, maxlength: 15, default: Date.now() },
  createAt: { typoe: Date, default: Date.now() },
});
