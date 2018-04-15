const webpack = require('webpack')
const merge = require('webpack-merge')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const common = require('./webpack.common.js')

module.exports = merge(common, {
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          query: {
            presets: ['react', 'env']
          }
        }
      }
    ]
  },
  plugins: [
    new UglifyJsPlugin({
      sourceMap: true,
      parallel: true
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new CompressionPlugin({
      algorithm: 'gzip'
    })
    /* new BundleAnalyzerPlugin() */
  ]
})
