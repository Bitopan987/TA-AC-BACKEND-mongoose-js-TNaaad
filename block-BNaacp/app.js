var express = require('express');
var app = express();
var mongoose = require('mongoose');
var user = require('./models/user');
mongoose.connect(
  'mongodb://localhost/sample',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    console.log(err ? err : 'connected to database');
  }
);

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome');
});

app.post('/users', (req, res) => {
  user.create(req.body, (err, user) => {
    console.log(err);
    res.json(user);
  });
});

app.get('/users', (req, res) => {
  user.find({}, (err, user) => {
    console.log(err);
    console.log(user);
  });
});

app.get('/users/:id', (req, res) => {
  var id = req.params.id;
  user.findById(id, (err, user) => {
    console.log(err);
    console.log(user);
  });
});

app.put('/users/:id', (req, res) => {
  var id = req.params.id;
  user.findByIdAndUpdate(id, req.body, { new: true }, (err, updateUser) => {
    console.log(err);
    res.json(updateUser);
  });
});

app.delete('/users/:id', (req, res) => {
  var id = req.params.id;
  user.findByIdAndDelete(req.params.id, (err, deleteUser) => {
    console.log(err);
    var result = deleteUser;
    res.send(`${result.name} was deleted`);
  });
});

app.listen(5000, () => {
  console.log('Listening to port 5k');
});
