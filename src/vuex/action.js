import types from './mutationTypes.js'
export default {
  incrementAsync:({ commit},a)=>{
    setTimeout(() => {
      commit(types.SET_COUNT,a)
    }, 1000)
  }
}
