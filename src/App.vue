<template lang="html">
  <div class="">
    {{msg}}
    <test :msg="msg"></test>
  </div>
</template>

<script>
import test from './test.vue'
export default {
  data(){
    return{
      msg: 'this vue'
    }
  },
  components: {
    'test': test
  }
}
</script>

<style lang="css" scoped>
</style>
