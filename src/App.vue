<template>
  <div id="app">
    <header>
      <router-link to="/" class="nav-link nav-logo">
        <img class="nav-logo" src="./assets/logo-black.svg" alt="jaubut space logo">
      </router-link>
      <div class="nav-box">
        <a class="nav-item" ref="menuLink" @mouseover="openDropdown('menu')" @mouseleave="closeDropdown">menu</a>
        <a class="nav-item" ref="emailLink" @mouseover="openDropdown('contact')" @mouseleave="closeDropdown">contact</a>
      </div>
      <div v-show="nav.open" ref="dropdown" class="dropdown">
        <div class="background" :style="{ transform: positionTransform}" @mouseover="keepDropdownOpen" @mouseleave="closeDropdown">
          <div class="link-group" v-show="nav.active === 'menu'">
            <menuItems></menuItems>
          </div>
          <div class="link-group" v-show="nav.active === 'contact'">
            <emailItems></emailItems>
          </div>
        </div>
      </div>
      <img class="nav-face" src="./assets/header-face.png" alt="Jeremie Aubut">
      <a class="burger-menu" href="#"><img class="burger-menu" src="./assets/burger-menu.svg" alt="burger-menu" ref="mobileLink" @click="openDropdownMobile"></a>
      <div class="dropdown-mobile" v-if="nav.openMobile" @click="openDropdownMobile">
        <div class="background-mobile">
          <menuItems></menuItems>
          <emailItems></emailItems>
        </div>
      </div>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <section id="example-content">
    </section>
    <FooterSpace></FooterSpace>
  </div>
</template>

<script>
import FooterSpace from './components/footer-space.vue'
import menuItems from './components/menu-items.vue'
import emailItems from './components/email-items.vue'

export default {
  name: 'app',
  data () {
    return {
      scrolled: null,
      scrollPosition: 0,
      opacity: null,
      nav: {
        openMobile: false,
        open: false,
        active: 'menu',
        links: {
          mobile: {
            left: 0
          },
          menu: {
            left: 0,
            width: 368
          }
        }
      }
    }
  },
  computed: {
    positionTransform () {
      let left = this.nav.links.menu.left - this.nav.links.menu.width
      return `translateX(${left}px)`
    }
  },
  mounted () {
    this.nav.links.menu.left = this.$refs.menuLink.getBoundingClientRect().left + (this.$refs.menuLink.offsetWidth / 2)
  },
  components: {
    FooterSpace,
    menuItems,
    emailItems
  },
  methods: {
    handleScroll () {
      var currentScroll = window.scrollY
      if (currentScroll > this.scrollPosition) {
        this.scrolled = ''
        this.opacity = ''
      } else {
        this.scrolled = true
        this.opacity = 1
      }
      this.scrollPosition = currentScroll
    },
    openDropdown (navitem) {
      this.nav.open = true
      this.nav.active = navitem
    },
    closeDropdown () {
      this.nav.open = false
    },
    keepDropdownOpen () {
      let opacity = getComputedStyle(this.$refs.dropdown).getPropertyValue('opacity')
      if (opacity > 0) this.nav.open = true
    },
    openDropdownMobile () {
      this.nav.openMobile = !this.nav.openMobile
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="sass">
@import './style/variables.sass'

header
  display: grid
  grid-template: 50% 50% / 4% 10% 72% 10% 4%
  align-items: center
  justify-content: center
  perspective: 2000px
.nav-logo
  grid-area: 1/2/2/3
  text-align: center
  height: 30px
.burger-menu
  display: none
.nav-face
  display: flex
  grid-area: 1/4/2/5
  height: 50px
.nav-span
  display: flex
  flex-flow: column wrap
  grid-area: 1/3/2/4
  text-align: center
  font-size: 0.5rem
  align-self: flex-start
  color: $grey-space
.nav-box
  display: flex
  flex-flow: row wrap
  justify-content: flex-end
  grid-area: 1/3/2/4
  padding: 0 30px
  opacity: 1
.nav-item
  text-decoration: none
  text-align: right
  font-size: 1rem
  padding: 10px
  margin: 15px 0
  transition: all 150ms ease
  font-weight: 600
  color: black
  &:hover
    cursor: pointer
    transform: translateY(-1px)
    color: $grey-space
.dropdown
  position: absolute
  top: 50px
  grid-area: 1/3/2/4
  align-self: right
  opacity: 1
  animation: all 0.25s
  .background
    display: flex
    flex-flow: column wrap
    align-items: flex-start
    width: 368px
    height: 300px
    background: white
    box-shadow: 0 50px 100px rgba(50,50,93,.1),0 15px 35px rgba(50,50,93,.15),0 5px 15px rgba(0,0,0,.1)
    border-radius: 5px
    animation: all .25s
  .link-group
    padding: 25px
    transition: all .25s
.dropdown-mobile
  display: none
.fade-enter-active, .fade-leave-active
  transition: opacity 0.7s
.fade-enter, .fade-leave-to
  opacity: 0
@media only screen and (max-width: 568px)
  header
    padding-top: 15px
    align-items: baseline
  .burger-menu
    display: flex
    grid-area: 1/4/2/5
    height: 15px
  .nav-face
    display: none
    height: 34px
  .nav-logo
    height: 20px
  .nav-box
    display: none
    grid-area: 2/3/3/4
    flex-flow: row nowrap
    justify-content: center
    padding: 0
.nav-affix
  display: flex
  flex-flow: row nowrap
  justify-content: center
  align-items: center
  grid-area: 2/1/3/6
  top: 0
  width: 100vw
  height: 35px
  background: white
  .nav-link
    padding: 0 2%
    text-decoration: none
    color: rgba($grey-space, 0.5)
    &:hover
      color: rgba($grey-space, 1)
.active
  position: sticky
  box-shadow: 0 3px 5px rgba(0,0,0,0.05)
.dropdown-mobile
  position: absolute
  display: grid
  grid-template: 80% 10% / 5% 90% 5%
  margin-top: 50px
  width: 100vw
  .background-mobile
    display: flex
    flex-flow: row wrap
    justify-content: center
    align-items: center
    grid-area: 1/2/2/3
    background: white
    box-shadow: 0 50px 100px rgba(50,50,93,.1),0 15px 35px rgba(50,50,93,.15),0 5px 15px rgba(0,0,0,.1)
    border-radius: 5px
    width: 100%
    height: 100%
    padding: 15px 5px
</style>
