<template>
  <div id="related-post">
    <div v-for="relatedpost in relatedposts" class="related-post">
      <blogCard :post="post"></blogCard>
    </div>
  </div>
</template>
<script>
import {createClient} from 'contentful'
import blogCard from './blog-card.vue'

var client = createClient({
  space: 'ppm5d7dyvmbe',
  accessToken: '19ba0e2acc0db06bad68a59b6e71ddd93a2a79dc8d752d6c0070ccc46c9a01fe'
})
export default {
  name: 'related-post',
  components: {
    blogCard
  },
  data () {
    return {
      relatedposts: []
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData (items) {
      client.getEntries({
        'content_type': 'blogPost',
        order: '-sys.createdAt'
      })
      if (items.fields.tags === this.post.fields.tags) {
        this.relatedposts = items
      }
    }
  }
}
</script>
<style lang="sass" scoped>
</style>
