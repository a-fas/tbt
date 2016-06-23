var path    = require('path');
var webpack = require('webpack');

var sHost = (process.env.C9_HOSTNAME)
            ?'https://' + process.env.C9_HOSTNAME
            :'http://localhost:3000';

module.exports = {
  devtool: 'eval',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?' + sHost,
    'webpack/hot/only-dev-server',
    // 'webpack/hot/dev-server',
    // 'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  // target: 'web',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    },
    { test: /\.less$/, loader: 'style!css!less' }]
  }
};
