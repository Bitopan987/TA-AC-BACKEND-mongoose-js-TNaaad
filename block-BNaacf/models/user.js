var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema(
  {
    name: String,
    age: Number,
    sports: [String],
    marks: [Number],
    family: {
      father: String,
      mother: String,
    },
  },
  { timestamps: true }
);

var articleSchema = new Schema({
  village: String,
  city: String,
  state: String,
  pin: Number,
  author: Schema.Types.ObjectId,
});
