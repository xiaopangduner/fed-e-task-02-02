const webpack = require('webpack')
const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    hot: true,
    open: true,
    contentBase: path.join(__dirname, 'public')
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})