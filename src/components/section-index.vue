<template>
  <div id="section-index" :class="align">
    <router-link class="text-photo" :to="link">
      <h2>{{ name }}</h2>
    </router-link>
    <router-link :to="link" class="photo-index" :class="align">
        <slot></slot>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'section-index',
  props: ['link', 'name', 'align']
}
</script>
<style lang="sass">
#section-index
  display: grid
  grid-template: 2fr / 4% 10% 72% 10% 4%
  .photo-index
    display: grid
    grid-gap: 10px
    grid-template: 2fr / 100px 100px
    grid-area: 2/3/3/4
    margin: 5% 10%
  .index-img
    background-position: center center
    background-repeat: no-repeat
    background-size: 200%
    height: 100px
    width: auto
    border-radius: 5px
  .text-photo
    grid-area: 1/3/2/4
    font-size: 2rem
    font-weight: 600
    color: black
  a
    text-decoration: none
.right
  justify-content: right
  text-align: right
@media only screen and (min-width : 568px)
  #section-index
    .photo-index
      grid-template: 150px 150px 35px / repeat(3, 150px)
    .index-img
      height: 100%
</style>
