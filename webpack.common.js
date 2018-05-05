const webpack = require('webpack')
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const BUILD_DIR = path.resolve(__dirname, 'dist')
const SRC_DIR = path.resolve(__dirname, 'src')

var env
var devBuild

switch (process.env.TRAVIS_BRANCH) {
  case 'staging':
    env = 'staging'
    devBuild = false
    break
  case 'production':
  case 'master':
    env = 'production'
    devBuild = false
    break
  default:
    // all others are dev
    env = 'development'
    devBuild = true
    break
}

const extractCSS = new ExtractTextPlugin('[name].fonts.css')
const extractSCSS = new ExtractTextPlugin('[name].[hash].styles.css')

module.exports = {
  entry: {
    index: SRC_DIR + '/index.js'
  },
  output: {
    publicPath: '/',
    path: BUILD_DIR,
    filename: '[name].bundle.[hash].js'
  },
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src/'),
      scss: path.resolve(__dirname, 'scss/'),
      public: path.resolve(__dirname, 'public/'),
      Img: path.resolve(__dirname, 'public/img/'),
      Components: path.resolve(__dirname, 'src/components/'),
      Actions: path.resolve(__dirname, 'src/actions/'),
      Utils: path.resolve(__dirname, 'src/utils/utils')
    }
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(scss)$/,
        use: ['css-hot-loader'].concat(
          extractSCSS.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader?sourceMap',
                options: {
                  alias: {
                    '../img': 'public/img',
                    '../fonts': 'public/fonts'
                  }
                }
              },
              {
                loader: 'sass-loader?sourceMap'
              }
            ]
          })
        )
      },
      {
        test: /\.css$/,
        use: extractCSS.extract({
          fallback: 'style-loader',
          use: 'css-loader?sourceMap'
        })
      },
      {
        test: /\.(png|jpg|jpeg|gif|ico)$/,
        use: [
          {
            // loader: 'url-loader'
            loader: 'file-loader',
            options: {
              name: './img/[name].[hash].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {
          name: './fonts/[name].[hash].[ext]'
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin([BUILD_DIR]),
    new webpack.NamedModulesPlugin(),
    new webpack.ProvidePlugin({
      Promise: 'imports-loader?this=>global!exports-loader?global.Promise!es6-promise',
      fetch: 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch'
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html'
    }),
    new CopyWebpackPlugin([{ from: './public/img', to: 'img' }], {
      copyUnmodified: false
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(env),
        DEV_BUILD: devBuild
      }
    }),
    extractCSS,
    extractSCSS
  ]
}
