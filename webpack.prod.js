const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
 module.exports = merge(common, {
   mode:"production",
   devtool: 'source-map',
   resolve: {
     alias: {
       'vue$': 'vue/dist/vue.runtime.esm.js' //内部为正则表达式  vue结尾的
     }
   },
   plugins: [
     new CleanWebpackPlugin(),
     new HtmlWebpackPlugin({
       template: 'index.html'
     }),
     new webpack.HotModuleReplacementPlugin(),
     new UglifyJSPlugin({//该插件使用缓存 （uglify-es）来缩小JavaScript
       sourceMap: true
     }),
     new webpack.DefinePlugin({
       'process.env.NODE_ENV': JSON.stringify('production') //许多 library 将通过与 process.env.NODE_ENV 环境变量关联，以决定 library 中应该引用哪些内容
     })
   ]
 });
