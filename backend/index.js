//Import modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const yaml = require('yamljs');
const swaggerUi = require('swagger-ui-express');

//load swagger file 
const swaggerdoc = yaml.load('./api/swagger/swagger.yaml');

//Load Models
const Messages = require('./api/models/messageModel');

//Import Routes
const messageRoutes = require('./api/routes/messageRoutes');

//Set Globals
const app = express();
const port = process.env.PORT || 3000;

//Database
mongoose.Promise = Promise;
mongoose.connect('mongodb://toto:toto@ds042687.mlab.com:42687/dragonfly', {
    useMongoClient: true,
    promiseLibrary: global.Promise
});

//use body-parser middleware
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

//load routes
messageRoutes(app);

//load swagger's route
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerdoc));

//error 
app.use(function(err, req, res, next){
    console.log(err);
    res.status(422).send({error : err.message});
  });

app.listen(port, function(){
    console.log("App now running on port", port);
  });
    