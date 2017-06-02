<template>
  <div id="Login">
    {{ msg }}
    {{ count }}
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: 'login'
    }
  },
  computed: {
    count () {
	    alert(123)
    }
  }
}
</script>

<style scoped>

</style>
