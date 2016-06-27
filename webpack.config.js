var path    = require('path');
var webpack = require('webpack');

var sHost = (process.env.C9_HOSTNAME)
            ?'https://' + process.env.C9_HOSTNAME
            :'http://localhost:3000';

module.exports = {
  devtool: 'eval',
  target: 'web',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?' + sHost,
    'webpack/hot/only-dev-server',
    // 'webpack/hot/dev-server',
    // 'webpack-hot-middleware/client',
    './frontend/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
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
      include: path.join(__dirname, 'frontend')
    }, {
      test: /\.less$/,
      loader: 'style!css!less'
    }, {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loader: 'url?limit=25000'
    }]
  }
};
