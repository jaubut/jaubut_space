<template>
  <div id='Login'>
    <button @click="handleLogin">Login</button>
    <h2>Login page</h2>
    <p>Login as {{ user }}</p>
  </div>
</template>
<script>
import netlifyIdentity from 'netlify-identity-widget'

netlifyIdentity.init()

export default {
  name: 'Login',
  data () {
    return {
      user: ''
    }
  },
  methods: {
    handleLogin () {
      netlifyIdentity.open()
    },
    handleUser () {
      this.user = netlifyIdentity.currentUser()
    }
  }
}
</script>
<style lang='sass' scoped>
</style>
