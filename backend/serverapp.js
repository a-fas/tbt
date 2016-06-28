var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var routes     = require('./routes');
var mongoose   = require('mongoose');

function runApp() {
  mongoose.connect('mongodb://localhost/mydb');

  // express app will use body-parser to get data from POST
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  // Define a prefix for all routes
  app.use('/api/v1', routes);

  // Start server listening on port 8080
  var port = process.env.PORT || 8080;
  app.listen(port);
  console.log('RESTAPI listening on port: ' + port);
}

module.exports = runApp;
