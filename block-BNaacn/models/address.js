var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var addressSchema = new Schema(
  {
    village: String,
    state: { type: String, minlength: 3, required },
    city: { type: String, minlength: 3, required },
    pin: Number,
    user: Schema.Types.ObjectId,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Address', addressSchema);
