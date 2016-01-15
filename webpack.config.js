const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    main: "./app/assets/index.js"
    // test: "./app/assets/index.js"
  },
  output: {
    path: __dirname,
    filename: "./public/assets/javascript/[name]-bundle-[chunkhash].min.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader") },
      { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") }
    ]
  },
  plugins: [
        new ExtractTextPlugin("./public/assets/stylesheets/[name]-bundle-[chunkhash].css")
  ],
  resolve: {
    extensions: ['', '.js', '.json', '.scss', 'css']
  }
};
