<template>
  <div id="blog-index">
    <TitleSpace>Let's talk about <span class="nav-word">{{ tag }}</span>
    </TitleSpace>
    <div class="index-blog">
      <div v-for="post in posts">
        <blogCard :post="post"></blogCard>
      </div>
    </div>
  </div>
</template>
<script>
import {createClient} from 'contentful'
import blogCard from '../../components/blog-card.vue'
import TitleSpace from '../../components/title-space.vue'

var client = createClient({
  space: 'ppm5d7dyvmbe',
  accessToken: '19ba0e2acc0db06bad68a59b6e71ddd93a2a79dc8d752d6c0070ccc46c9a01fe'
})
export default {
  name: 'blog-index',
  components: {
    TitleSpace,
    blogCard
  },
  data () {
    return {
      posts: []
    }
  },
  props: ['tag'],
  created () {
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      client.getEntries({
        'content_type': 'blogPost',
        'fields.tags[in]': this.$route.params.tag,
        order: '-sys.createdAt'
      })
      .then(response => {
        this.posts = response.items
        return response
      })
    }
  }
}
</script>
<style lang="sass">
</style>
