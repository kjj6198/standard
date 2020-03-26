const path = require('path')
const webpack = require('webpack')

module.exports = {
  context: __dirname,
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  entry: {
    main: './index.js',
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js(x)$/, // remove moment.js from chart.js
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.TARGET': '"development"',
    }),
  ],
}
