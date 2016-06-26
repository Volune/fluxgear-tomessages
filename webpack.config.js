const path = require('path');
const webpack = require('webpack');

module.exports = {
  target: 'web',
  devtool: 'source-map',
  plugins: [
    new webpack.NoErrorsPlugin(),
  ],
  entry: {
    index: [
      path.resolve(__dirname, 'src', 'index.js'),
    ],
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: '[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [
          'babel',
        ],
        include: path.resolve(__dirname, 'src'),
      },
    ],
  },
  resolve: {
    extensions: ['', '.js'],
  },
};
