<template>
  <div id="blogPost">
    <section class="blog-section">
      <p class="info-top">By {{ post.fields.author.fields.name }}, on {{ ( new Date(post.fields.publishDate)).toDateString() }}</p>
      <h1>{{ post.fields.title }}</h1>
      <div class="post-hero" :style="{'background-image': 'url(' + post.fields.heroImage.fields.file.url + ')'}"></div>
      <h3>{{ post.fields.description }}</h3>
      <VueMarkdown class="post-single">{{ post.fields.body }}</VueMarkdown>
      <div class="author-profile">
        <img :src="post.fields.author.fields.image.fields.file.url" :alt="post.fields.author.fields.name">
        <div class="info">
          <h4>{{ post.fields.author.fields.name }}</h4>
          <p>{{ post.fields.author.fields.shortBio }} you can follow <span><a :href="'https://twitter.com/'+post.fields.author.fields.twitter">{{ post.fields.author.fields.name }} on Twitter.</a></span></p>
        </div>
      </div>
    </section>
    <div class="related-post">
      <blogCard v-for="(post, index) in relatedposts.slice(0, 3)" :key="index" :post="post"></blogCard>
    </div>
  </div>
</template>
<script>
import VueMarkdown from 'vue-markdown'
import {createClient} from '../../../utils/contentful-api'
import blogCard from '../../components/blog-card.vue'

const client = createClient()

export default {
  name: 'blogPost',
  components: {
    VueMarkdown,
    blogCard
  },
  data () {
    return {
      post: [],
      relatedposts: []
    }
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      client.getEntries({
        'content_type': 'blogPost',
        'fields.slug': this.$route.params.slug
      })
      .then(response => {
        this.post = response.items[0]
        return response
      })
      client.getEntries({
        'content_type': 'blogPost',
        'fields.tags[in]': this.$route.params.tag,
        order: '-sys.createdAt'
      })
      .then(response => {
        this.relatedposts = response.items
        return response
      })
    }
  },
  created () {
    this.fetchData()
  }
}
</script>
<style lang="sass" scoped>
@import '../../style/variables'
.post-single
  display: flex
  flex-flow: column wrap
  justify-content: center
  align-self: center
  text-align: justify
  width: 60vw
  line-height: 1.2rem
.blog-section
  text-align: center
  h1
    font-size: 2.5rem
    color: black
    margin-top: 0
    padding: 0 5%
.info-top
  color: rgba($grey-space, 0.6)
  margin-bottom: 5px
  font-size: 0.9rem
  font-weight: 400
.post-hero
  width: 100%
  height: 350px
  display: flex
  flex-flow: column wrap
  justify-content: flex-end
  background-position: center center
  background-size: 200%
  background-repeat: no-repeat
  border-radius: 5px
  border: 2px solid rgba($grey-space, 0.1)
.related-post
  display: flex
  flex-flow: row wrap
  justify-content: space-around
.author-profile
  display: grid
  grid-template: 1fr / 20% 80%
  align-self: center
  border-top: 1px solid rgba($grey-space, 0.3)
  padding: 15px
  margin-top: 30px
  width: 60%
.author-profile img
  grid-area: 1/1/1/2
  width: 85px
  height: 85px
  border-radius: 100%
  border: 1px solid rgba($grey-space, 0.3)
  justify-self: center
  align-self: center
.author-profile .info
  grid-area: 1/2/2/3
  display: flex
  flex-flow: column wrap
  align-items: left
  text-align: left
  color: $grey-space
  p
    padding: 0
    margin: 0
  h4
    margin-top: 10px
.author-profile .info a
  text-decoration: underline
  color: rgba($blue-space, 0.5)
  &:hover
    color: rgba($blue-space, 1)
@media only screen and (max-width: 568px)
  .post-single
    width: 90vw
    text-align: left
  .author-profile
    width: 90%
    grid-template: 1fr / 40% 60%
</style>
