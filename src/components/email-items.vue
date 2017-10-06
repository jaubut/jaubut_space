<template>
  <div id="email-items">
    <h3>Contact</h3>
    <p>Envoyez-moi un <a href="mailto:jeremie.aubut@gmail.com">courriel</a> ou commencer une conversation maintenant en appuyant sur le bouton en bas à droite. Ou encore, appelez-moi au <a href="tel:4507758112">450.775.8112</a></p>
    <div class="social-contact">
      <a href="https://twitter.com/je_aubut"><img src="../assets/twitter-black.svg" alt="twitter logo"></a>
      <a href="https://instagram.com/jeaubut"><img src="../assets/instagram-black.svg" alt="instagram logo"></a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'email-items'
}
</script>
<style lang="sass" scoped>
  @import '../style/_variables'
  #email-items
    display: flex
    flex-flow: column wrap
    a
      color: rgba($blue-space, 1)
      &:hover
        color: rgba($blue-space, 0.7)
    .social-contact
      display: flex
      flex-flow: row wrap
      align-self: flex-start
      justify-content: center
      a
        opacity: 0.7
        &:hover
          cursor: pointer
          opacity: 1
          transform: translateY(-1px)
      img
        height: 15px
        padding: 10px 10px
</style>
