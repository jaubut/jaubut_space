<template>
  <div id="footer-space">
    <footer>
      <div class="footer-logo">
        <router-link to="/">
          <img src="../assets/logo-white.svg" alt="jaubut space logo white">
        </router-link>
      </div>
      <div class="footer-social">
        <img src="../assets/twitter.svg" alt="twitter logo">
        <img src="../assets/instagram.svg" alt="instagram logo">
      </div>
      <div class="footer-text">
        <h3>Get in touch<br><a href="emailto:allo@jaubut.space">email me</a><br><a href="phoneto:4507758112">call me</a></h3>
      </div>
      <div class="footer-right">
        <div class="footer-line"></div>
        <p>© 2017 JAUBUT.SPACE <br>All rights reserved.</p>
        <p>Crafted</p>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: 'footer-space'
}
</script>
<style lang="sass" scoped>
@import '../style/_variables.sass'
footer
  display: grid
  grid-template: 20% 60% 20% / 4% 10% 72% 10% 4%
  padding: 30px
  height: 30vh
  background-image: url(../assets/back-pattern-2.svg)
  background-repeat: no-repeat
  background-size: 400% 400%
  background-position: center center
.footer-logo
  grid-area: 1/2/2/3
  img
    height: 20px
.footer-social
  display: flex
  flex-flow: row wrap
  align-self: flex-start
  justify-content: center
  grid-area: 1/4/2/5
  img
    height: 15px
    padding: 10px 10px
.footer-text
  grid-area: 2/3/3/4
  font-family: 'Roboto-Bold', sans-serif
  font-size: 1.1rem
  color: #000000
  letter-spacing: 0
  a
    color: white
    text-decoration: none
    &:hover
      cursor: pointer
      color: $dark-grey
.footer-right
  display: flex
  flex-flow: row wrap
  justify-content: space-between
  grid-area: 3/3/4/4
  margin-bottom: 15px
  p
    font-family: 'Roboto', sans-serif
    align-self: center
    font-size: 0.6rem
    color: white
.footer-line
  grid-area: 3/3/4/4
  width: 100%
  align-self: top
  margin-top: 15px
  border: 1px solid white
</style>
