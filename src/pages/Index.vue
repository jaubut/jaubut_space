<template>
  <div class="hello">
    <TitleSpace>I like to work on idea that mix <span class="nav-word"><br>
      <vue-typer
        :text='["hemp", "video", "photo"]'
        :shuffle='true'
        :repeat='Infinity'
        initial-action='typing'
        erase-style='backspace'
        :type-delay='175'
        :erase-delay='100'
      ></vue-typer></span> and turn them into great projects.</TitleSpace>
    <SectionIndex link="/video" name="video"><div v-for="(video, index) in public(videos)" :key="index" class="index-img" :style="{'background-image': 'url(' + video.pictures.sizes[3].link + ')'}"></div></SectionIndex>
    <SectionIndex align="right" link="/photo" name="Photo"><div v-for="(indexphoto, index) in indexphotos" :key="index" class="index-img" :style="{'background-image': 'url(' + indexphoto.urls.small + ')'}"></div></SectionIndex>
    <SectionIndex link="/blog" name="blog"><div v-for="(post, index) in posts.slice(0, 6)" :key="index" class="index-img" :style="{'background-image': 'url(' + post.fields.heroImage.fields.file.url + ')'}"></div></SectionIndex>
    <SectionIndex align="right" link="/web" name="web"><div v-for="(web, index) in webs.slice(0, 6)" :key="index" class="index-img" :style="{'background-image': 'url(' + web.fields.heroImage.fields.file.url + ')'}"></div></SectionIndex>
  </div>
</template>

<script>
const SectionIndex = () => import('../components/section-index.vue')
import {createClient} from '../../utils/contentful-api'
import TitleSpace from '../components/title-space.vue'
import axios from 'axios'

const vimeoUrl = 'https://api.vimeo.com/users/jaubut/videos'
const url = 'https://api.unsplash.com/users/jeaubut/photos'
const client = createClient()

export default {
  name: 'hello',
  components: {
    TitleSpace,
    SectionIndex
  },
  data () {
    return {
      indexphotos: [],
      perPage: 6,
      videos: [],
      posts: [],
      webs: []
    }
  },
  methods: {
    public: function (videos) {
      return videos.filter(function (video) {
        return video.privacy.view === 'anybody'
      })
    },
    fetchData () {
      client.getEntries({
        'content_type': 'blogPost',
        order: '-sys.createdAt'
      })
      .then(response => {
        this.posts = response.items
        return response
      })
      client.getEntries({
        'content_type': 'webProject',
        order: '-sys.createdAt'
      })
      .then(response => {
        this.webs = response.items
        return response
      })
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
      const config = {
        params: {
          client_id: '6f4d3134dae83411f959c6372d6b98f701f812491bee1eff182c067f0811b392',
          per_page: this.perPage
        }
      }
      axios.get(url, config)
      .then(response => {
        this.indexphotos = response.data
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
</style>
