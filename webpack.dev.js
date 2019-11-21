const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');
module.exports = merge(common, {
  mode: "development",
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
    hotOnly: true
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js' //内部为正则表达式  vue结尾的
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
})
