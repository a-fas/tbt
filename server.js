var webpack          = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config           = require('./webpack.config');

var express              = require('express');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');


var app = express();

var compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {  
  publicPath: config.output.publicPath,  
  stats: {colors: true}  
}));

app.use(webpackHotMiddleware(compiler, {  
  log: console.log 
}));

app.listen(process.env.PORT || 3000, process.env.IP || 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }
  
  var addr = this.address();
  console.log('Listening at:' + addr.address + ':' + addr.port);
});

// console.log('env.IP = ' + process.env.IP, ', env.PORT = ' + process.env.PORT);

/*
new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(process.env.PORT || 3000, process.env.IP || 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }
  
  var addr = this.address();
  console.log('Listening at:' + addr.address + ':' + addr.port);
});
*/

