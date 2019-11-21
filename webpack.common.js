const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin'); //Vue Loader v15 现在需要配合一个 webpack 插件才能正确使用：
module.exports = {
  entry: {
    app: ['@babel/polyfill', './src/index.js'] // babel/polyfill    由于 Babel 只转换语法(如箭头函数)， babel-polyfill则支持新的全局变量，例如 Promise 、新的原生方法如 String.padStart (left-pad) 等
  },
  output: {
    filename: '[name].[hash].bundle.js',
    chunkFilename: '[name].[hash].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
        test: /\.vue$/,
        use: ['vue-loader']
      },
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({ //将css代码与bundle打包文件分离
          fallback: "style-loader",
          use: "css-loader",
          publicPath: "/dist"
        })
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  optimization: { // 拆分包  缓存
    splitChunks: {
      cacheGroups: {
        commons: {
          name: "commons",
          chunks: "all",
          minChunks: 2,
          priority: 0
        },
        vendor: {
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          priority: 10
        }
      }
    }
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "bundle.css",
      disable: false,
      allChunks: true
    }),
    new VueLoaderPlugin() //Vue Loader v15 现在需要配合一个 webpack 插件才能正确使用：
  ]
};
