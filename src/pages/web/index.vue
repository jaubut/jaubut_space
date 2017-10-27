<template>
  <div id="web-index">
    <TitleSpace>Let's talk about <span class="nav-word">
      <vue-typer
        :text='["JS", "PWA", "SSR", "CDN"]'
        :shuffle='true'
        :repeat='Infinity'
        initial-action='typing'
        erase-style='backspace'
        :type-delay='175'
        :erase-delay='100'
      ></vue-typer></span>
    </TitleSpace>
    <div class="index-blog">
      <div v-for="post in posts">
        <webCard :post="post"></webCard>
      </div>
    </div>
  </div>
</template>
<script>
import {createClient} from '../../../utils/contentful-api'
import webCard from '../../components/web-card.vue'
import TitleSpace from '../../components/title-space.vue'

const client = createClient()

export default {
  name: 'web-index',
  components: {
    TitleSpace,
    webCard
  },
  data () {
    return {
      posts: []
    }
  },
  methods: {
    fetchData () {
      return client.getEntries({
        'content_type': 'webProject',
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
