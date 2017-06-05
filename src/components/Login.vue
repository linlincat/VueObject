<template>
  <div id="Login">
    <m-head head-title="登录" go-back='true'></m-head>
    {{ msg }}
    {{ test.useName }}
  </div>
</template>

<script>
import test from "../../config/state.js"
import Data from "../server/getData.js"
import mHead from '../components/header/head'
export default {
  name: 'Login',
  data () {
    return {
      msg: 'login',
      test
    }
  },
  // async mounted () {
  //   this.msg = await Data.getUserName()
  // },
  components: {
    mHead
  }

}
</script>

<style scoped>
</style>
