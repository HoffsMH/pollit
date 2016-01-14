const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    main: "./app/assets/javascript/index.js",
    test: "./app/assets/javascript/index.js"
  },
  output: {
    path: __dirname,
    filename: "./public/assets/javascript/bundle.min.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css$/, loader: "style!css" },
      { test: /\.scss$/, loaders: ["style", "css", "sass"]}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.scss', 'css']
  }
};
