# vue-webpack
## 配置vue 环境

+ 先npm下载 vue vue-loader
+ webpack里配置 vue-loader
```
rules: [{
    test: /\.vue$/,
    use: ['vue-loader']
  }

```
 因为在vue-loader v15版本以上之后需要在webpack插件里添加VueLoaderPlugin，才能正常使用vue-loader
 ```
 const VueLoaderPlugin = require('vue-loader/lib/plugin');

 plugins: [
   new VueLoaderPlugin() //Vue Loader v15 现在需要配合一个 webpack 插件才能正确使用：
 ]

 ```

+ 还需要用npm下载一个vue-template 需要和vue的版本一致
+ 最后需要引入vue/dist/vue.esm.js
```
resolve: {
  alias: {
    'vue$': 'vue/dist/vue.esm.js' 
  }
},
```
