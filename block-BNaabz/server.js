var express = require('express');
var app = express();
var mongoose = require('mongoose');

mongoose.connect(
  'mongodb://localhost/sample',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    console.log(err ? err : 'connected to database!');
  }
);
app.get('/', (req, res) => {
  res.send('Welcome');
});

app.listen(3000, () => {
  console.log('Listening to port 3k');
});
