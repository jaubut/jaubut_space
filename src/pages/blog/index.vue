<template>
  <div id="blog-index">
    <TitleSpace>Let's talk about <span class="nav-word">
      <vue-typer
        :text='["hemp", "technologies", "nature", "adventure"]'
        :shuffle='true'
        :repeat='Infinity'
        initial-action='typing'
        erase-style='backspace'
        :type-delay='175'
        :erase-delay='100'
      ></vue-typer></span>
    </TitleSpace>
    <p @click="lang = 'fr'">fr</p>
    <p @click="lang = 'en-US'">en</p>
    <div class="index-blog">
      <div v-for="post in posts">
        <blogCard :post="post"></blogCard>
      </div>
    </div>
  </div>
</template>
<script>
import {createClient} from '../../../utils/contentful-api'
import blogCard from '../../components/blog-card.vue'
import TitleSpace from '../../components/title-space.vue'

const client = createClient()

export default {
  name: 'blog-index',
  components: {
    TitleSpace,
    blogCard
  },
  data () {
    return {
      posts: [],
      lang: ''
    }
  },
  watch: {
    'lang': 'fetchData'
  },
  methods: {
    fetchData () {
      return client.getEntries({
        'content_type': 'blogPost',
        'locale': this.lang,
        order: '-sys.createdAt'
      })
      .then(response => {
        this.posts = response.items
        return response
      })
    }
  },
  created () {
    this.fetchData()
  }
}
</script>
<style lang="sass">
</style>
