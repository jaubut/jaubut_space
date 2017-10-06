<template>
  <div id="photo">
    <TitleSpace>I like photos that are <br><span class="nav-word">
      <vue-typer
        :text='["pure", "colourful", "profound"]'
        :shuffle='true'
        :repeat='Infinity'
        initial-action='typing'
        erase-style='backspace'
        :type-delay='175'
        :erase-delay='100'
      ></vue-typer></span></TitleSpace>
    <PhotoPage></PhotoPage>
    <SocialSharing></SocialSharing>
  </div>
</template>
<script>
import TitleSpace from '../components/title-space.vue'
import PhotoPage from '../components/photo-page.vue'

export default {
  name: 'photo',
  components: {
    TitleSpace,
    PhotoPage
  }
}
</script>
<style lang="sass" scoped>
</style>
