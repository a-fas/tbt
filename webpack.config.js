var path = require('path');
var webpack = require('webpack');

var sHost = (process.env.C9_HOSTNAME)
            ?'https://' + process.env.C9_HOSTNAME
            :'http://localhost:3000';

module.exports = {
  devtool: 'eval',
  entry: [
    'react-hot-loader/patch',
    // 'webpack-dev-server/client?http://localhost:3000',
    'webpack-dev-server/client?' + sHost,
    'webpack/hot/only-dev-server',
    './src/index'
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
      include: path.join(__dirname, 'src')
    }]
  }
};
