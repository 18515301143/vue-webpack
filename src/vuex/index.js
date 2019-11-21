import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutation.js'
import getters from './getter.js'
import actions from './action.js'

Vue.use(Vuex)
// 首先声明一个需要全局维护的状态 state,比如 我这里举例的resturantName
const state = {
    resturantName: '飞歌餐馆', // 默认值
    todos: 'vuex-getter',
    count: 0
}

// 注册上面引入的各大模块
const store = new Vuex.Store({
    state,    // 共同维护的一个状态，state里面可以是很多个全局状态
    getters,  // 获取数据并渲染
    actions,  // 数据的异步操作
    mutations  // 处理数据的唯一途径，state的改变或赋值只能在这里
})
console.log(store)
export default store  // 导出store并在 main.js中引用注册
