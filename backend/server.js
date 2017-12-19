var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Board = require('./models/board');
var app = express();
var port = process.env.PORT || 3001;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/workaholic', {
  useMongoClient: true
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var boardRoutes = require('./routes/board');
var boardsRoutes = require('./routes/boards');
boardRoutes(app);
boardsRoutes(app);

app.listen(port);

console.log('RESTFUL API Server listening on : ', port);
