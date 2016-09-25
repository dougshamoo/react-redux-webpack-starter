const path = require('path')

module.exports = {
  entry: [
    path.join(__dirname, '../client/src/index.js')
  ],
  output: {
    path: path.join(__dirname, '../client/dist'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      }
    ]
  }
}
