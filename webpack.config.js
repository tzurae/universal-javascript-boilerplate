const { resolve } = require('path')

module.exports = env => {

  const config = {
    entry: './src/client.js',
    output: {
      filename: 'bundle.js',
      path: resolve('public')
    },
    module :{
      loaders: [
        {
          test:/\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        }
      ]
    }
  }
  return config
}