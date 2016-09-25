const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    path.join(__dirname, '../client/src/index.js')
  ],
  output: {
    path: path.join(__dirname, '../client/dist'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  devtools: ['source-map', 'eval'],
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, '../client/src'),
        loaders: ['babel-loader']
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
