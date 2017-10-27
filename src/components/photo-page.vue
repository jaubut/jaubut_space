<template>
  <div id="photo-page">
    <div class="photo-page">
      <div @click="photo.id = !photo.id" class="photo" v-for="(photo, index) in photos" :key="index" :style="{ 'background-image': 'url(' + photo.urls.regular + ')' }">
        <a v-show="!photo.id" class="photo-download" :href="photo.links.download + '?utm_source=jaubutspace&utm_medium=referral&utm_campaign=api-credit'" target="_blank">download</a>
      </div>
    </div>
    <h2>Go see all my picture on <span><a :href="credit" target="_blank">unsplash.</a></span></h2>
    <div class="splash-logo"><a :href="credit" target="_blank">
      <svg version="1.1" viewBox="0 0 32 32" width="32" height="32" aria-labelledby="back-home" aria-hidden="false"><title id="back-home">Back home</title><path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path></svg>
    </a></div>
  </div>
</template>
<script>
import axios from 'axios'

const url = 'https://api.unsplash.com/users/jeaubut/photos'

export default {
  name: 'photo-page',
  data () {
    return {
      credit: 'https://unsplash.com/@jeaubut?utm_source=jaubutspace&utm_medium=referral&utm_campaign=api-credit',
      photos: [],
      perPage: 24
    }
  },
  methods: {
    fetchData () {
      const config = {
        params: {
          client_id: '6f4d3134dae83411f959c6372d6b98f701f812491bee1eff182c067f0811b392',
          per_page: this.perPage
        }
      }
      axios.get(url, config)
        .then(response => {
          this.photos = response.data
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  created () {
    this.fetchData()
  }
}
</script>
<style lang="sass" scoped>
.photo-page
  display: grid
  grid-template: 45% 25% 25% / repeat(auto-fill, 23%)
  grid-gap: 5px
  justify-content: center
  .photo
    display: flex
    flex-flow: column wrap
    justify-content: flex-end
    min-height: 250px
    background-position: center center
    background-size: cover
    background-repeat: no-repeat
    &:hover
      cursor: pointer
    .photo-download
      display: flex
      flex-flow: column wrap
      justify-content: center
      height: 32px
      width: auto
      padding: 0 5px
      margin: 15px
      background: hsla(0,0%,100%,.85)
      border-radius: 5px
      text-decoration: none
      align-self: right
      transition: all .2s ease-in-out
      text-decoration: none
      color: black
      &:hover
        background: white
  .photo:nth-child(3n)
    grid-row: span 2
::selection
  background: transparent
h2
  text-align: center
a
  text-decoration: none
  color: rgba(#535bb7,0.5)
  &:hover
    color: rgba(#535bb7,1)
.photo-modal
  display: none
  position: fixed
  z-index: 0
  width: 1px
  height: 1px
  text-align: center
  top: 0
  left: 0
  background: rgba(255, 255, 255, 0.95)
  img
    max-width: 90%
    max-height: 80%
    margin-top: 2%
  &:target
    outline: none
    display: none
.splash-logo
  grid-area: 1/2/2/3
  text-align: center
</style>
