<template>
  <div id="menu-items">
    <router-link to="/video">
      <div class="menu-item-group">
        <img src="../assets/video-icon.svg" alt="video icon">
        <div class="menu-item">
          <h3>Video</h3>
          <p>Voir mes videos</p>
        </div>
      </div>
    </router-link>
    <router-link to="/photo">
      <div class="menu-item-group">
        <img src="../assets/photo-icon.svg" alt="photo icon">
        <div class="menu-item">
          <h3>Photo</h3>
          <p>Voir mes photos</p>
        </div>
      </div>
    </router-link>
    <router-link to="/blog">
      <div class="menu-item-group">
        <img src="../assets/blog-icon.svg" alt="blog icon">
        <div class="menu-item">
          <h3>Blog</h3>
          <p>Voir mes articles</p>
        </div>
      </div>
    </router-link>
    <router-link to="/web">
      <div class="menu-item-group">
        <img src="../assets/web-icon.svg" alt="web icon">
        <div class="menu-item">
          <h3>Web project</h3>
          <p>Voir mes projets web</p>
        </div>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'menu-items'
}
</script>
<style lang="sass" scoped>
  @import '../style/_variables'
  #menu-items
    display: grid
    grid-template: 1fr / 1fr
    grid-gap: 15px
    .menu-item-group
      display: grid
      grid-template: 1fr / 20% 80%
      grid-gap: 15px
      &:hover
        filter: opacity(70%)
      img
        height: 35px
        justify-self: center
      .menu-item
        grid-area: 1/2/2/3
        h3
          margin: 0
        p
          margin: 0
          font-size: 1rem
          color: rgba($grey-space, 1)
</style>
