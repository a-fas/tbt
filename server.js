var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

console.log('env.IP = ' + process.env.IP, ', env.PORT = ' + process.env.PORT);

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