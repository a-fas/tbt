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

  // Main API route
  app.use('/api/v1', routes);

  app.get('/', function(request, response) {
    response.send('Hello wrold from tbt');
  });

  // Start server listening
  var port = process.env.PORT || 8080;
  app.listen(port, process.env.IP || 'localhost');
  console.log('TB listening on port: ' + port);
}

module.exports = runApp;
