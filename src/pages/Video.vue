<template>
  <div id="video">
    <TitleSpace>I like videos that are <br><span class="nav-word">
      <vue-typer
        :text='["pure", "colourful", "profound"]'
        :shuffle='true'
        :repeat='Infinity'
        initial-action='typing'
        erase-style='backspace'
        :type-delay='175'
        :erase-delay='100'
      ></vue-typer></span>
    </TitleSpace>
    <div class="iframe-video" v-for="(video, index) in public(videos)" :key="index" >
      <p>{{ video.name }}</p>
      <iframe :src="'https://player.vimeo.com' + video.uri.replace(/s/g, '')" width="80%" height="300px" frameborder="0" :title="video.name" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    </div>
    <router-link :to="{ name: 'Login'}">Login</router-link>
  </div>
</template>
<script>
import TitleSpace from '../components/title-space.vue'
import axios from 'axios'
const vimeoUrl = 'https://api.vimeo.com/users/jaubut/videos'

export default {
  name: 'video',
  components: {
    TitleSpace
  },
  data () {
    return {
      videos: []
    }
  },
  methods: {
    fetchData () {
      axios.get(vimeoUrl, {
        headers: {
          'Authorization': 'Bearer 6dd83de55e10c3b4d3cca9558c955f94'
        }
      })
      .then(response => {
        this.videos = response.data.data
      })
      .catch(error => {
        console.log(error)
      })
    },
    public: function (videos) {
      return videos.filter(function (video) {
        return video.privacy.view === 'anybody'
      })
    }
  },
  created () {
    this.fetchData()
  }
}
</script>
<style lang="sass" scoped>
@import '../style/variables'
.iframe-video
  display: flex
  flex-flow: column wrap
  width: 100vw
  justify-content: center
  align-items: center
  p
    color: $grey-space
    font-size: 0.85rem
    padding-top: 25px
</style>
