<template>
<div class="">
  {{msg}}
  <br>
  {{msg_computed}}
  <br>
  {{testone}}
  <div class="">
    {{doneTodos}}
  </div>
  <p>{{doneCount}}</p>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapState } from 'vuex'
import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'
export default {
  mounted() {
    this.increment(10)
    this.addcount(2)
    console.log(this.$store.getters.doneTodos)
  },
  props: {
    msg: {
      type: String
    }
  },
  computed: {
    msg_computed() { // 在组件中修改 prop 传递过来的数据 Vue 会发出警告,prop 传入之后需要进行转换，这种情况使用 computed 来定义
      return this.msg + " Computed"
    },
    ...mapState({
      testone: ['resturantName']
    }),
    ...mapGetters([
      'doneTodos',
      'doneCount'
    ])
  },
  methods:{
    ...mapMutations({
      increment:'SET_COUNT'
    }),
    ...mapActions({
     addcount: 'incrementAsync'
   })
  }
}
</script>

<style lang="css">
</style>
