'use strict';

var webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  path = require('path'),
  srcPath = path.join(__dirname, 'src');

module.exports = {
  target: 'web',
  cache: true,
  context: __dirname + '/src',
  entry: {
    thepeoplesgrain: path.join(srcPath, 'main.jsx'),
    common: ['react', 'react-dom']
  },
  resolve: {
    root: srcPath,
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules', 'src']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '',
    filename: '[name].min.js',
    pathInfo: true
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader?cacheDirectory',
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test   : /\.(ttf|eot|svg|woff|gif|otf)$/,
        loader : 'file-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('common', 'common.js'),
    new HtmlWebpackPlugin({
      inject: true,
      template: 'src/index.html'
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ],
  debug: true,
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    contentBase: './dist',
    historyApiFallback: true
  }
};
