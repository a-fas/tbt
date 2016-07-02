var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var routes     = require('./routes');
var mongoose   = require('mongoose');

function runApp() {
  var uristring =
    process.env.MONGODB_URI ||
    process.env.MONGOLAB_URI ||
    process.env.MONGOHQ_URL ||
    'mongodb://localhost/mydb';

  // mongoose.connect('mongodb://localhost/mydb');

  mongoose.connect(uristring, function (err, res) {
    if (err) {
      console.log ('ERROR connecting to: ' + uristring + '. ' + err);
    } else {
      console.log ('Succeeded connected to: ' + uristring);
    }
  });

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
  app.listen(port, (err, result) => {
    if (err) console.log(err);
    console.log('Node app is running');
  });
  console.log('TB listening on port: ' + port);
}

module.exports = runApp;