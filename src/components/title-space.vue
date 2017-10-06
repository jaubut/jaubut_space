<template>
  <div id="title-space">
    <div class="nav-title">
      <h1><slot></slot></h1>
    </div>
  </div>
</template>
<script>
export default {
  name: 'title-space'
}
</script>
<style lang="sass" scoped>
@import '../style/variables.sass'
#title-space
  display: grid
  grid-template: 50px 1fr / 4% 5% 82% 5% 4%
  justify-content: center
.nav-title
  grid-area: 2/2/3/5
  width: 100%
  h1
    font-size: 1.2rem
    color: $grey-space
    font-weight: bold
  .nav-word
    color: $blue-space
@media only screen and (min-width: 568px)
  #title-space
      grid-template: 50px 1fr / 4% 10% 72% 10% 4%
  .nav-title
    text-align: left
    margin-right: 20%
    h1
      font-size: 48px
</style>
