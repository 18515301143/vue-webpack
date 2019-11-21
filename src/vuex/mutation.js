import types from './mutationTypes.js'
export default {
  [types.SET_COUNT]:(state, a)=>{
    console.log(a)
    state.count =state.count + a
  }
}
