<template>
  <div id='locked'>
    <button @click="handleLogin">Log in with netlify</button>
    <h2>Locked page</h2>
    <p>Login as {{ user }}</p>
  </div>
</template>
<script>
import netlifyIdentity from 'netlify-identity-widget'

netlifyIdentity.init()

export default {
  name: 'locked',
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
