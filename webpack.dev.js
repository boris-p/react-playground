const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

const BUILD_DIR = path.resolve(__dirname, 'dist')

module.exports = merge(common, {
  // watch: true,
  devtool: 'eval-source-map',
  devServer: {
    contentBase: BUILD_DIR,
    //   port: 9001,
    compress: true,
    hot: true,
    open: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'env', 'react-hmre'],
          plugins: ['transform-object-rest-spread', 'transform-class-properties']
        }
      }
    ]
  }
})
