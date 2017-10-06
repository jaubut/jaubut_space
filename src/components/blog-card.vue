<template>
  <div id="blog-card">
    <div class="blog-card">
      <router-link class="img-blog" :to="'/blog/'+post.fields.tags[0]+'/'+post.fields.slug">
        <div class="img-blog" :style="{'background-image': 'url(' + post.fields.heroImage.fields.file.url + ')'}"></div>
      </router-link>
      <time class="date-blog">{{ ( new Date(post.fields.publishDate)).toDateString() }}</time>
      <div class="text-blog">
        <router-link :to="'/blog/'+post.fields.tags[0]+'/'+post.fields.slug">
          <h3 class="title-blog">{{ post.fields.title }}</h3>
        </router-link>
        <div class="tags-blog">
          <div v-for="tag in post.fields.tags" :key="tag" class="tag">
            <router-link :to="'../../tags/'+ tag">{{ tag }}</router-link>
          </div>
        </div>
        <router-link :to="'/blog/'+post.fields.tags[0]+'/'+post.fields.slug" class="description-blog">
          <p class="">{{ truncate(post.fields.description) }}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
var stop = 40

export default {
  name: 'blog-card',
  props: ['post'],
  methods: {
    truncate (text, clamp) {
      return text.slice(0, stop) + (stop < text.length ? clamp || '...' : '')
    }
  }
}
</script>
<style lang="sass" scoped>
@import '../style/variables'
.blog-card
  display: grid
  grid-template: 40% 32.5px 32.5px 40% / 1fr
  justify-content: center
  align-items: center
  height: auto
  width: 300px
  text-align: center
  border-radius: 5px
  margin-top: 15px
  background: rgba($grey-space, 0.03)
  .img-blog
    grid-area: 1/1/3/2
    background-size: 200% 200%
    background-position: center center
    background-repeat: no-repeat
    height: 200px
  .date-blog
    grid-area: 2/1/4/2
    display: flex
    flex-flow: row wrap
    justify-content: center
    align-items: center
    margin: auto
    border-radius: 999px
    height: 65px
    width: 65px
    background: $dark-grey
    color: white
    font-size: 0.7rem
  .text-blog
    grid-area: 4/1/5/2
    display: flex
    flex-flow: column wrap
    justify-content: center
    align-items: center
    color: black
  .description-blog
    width: 70%
    color: $grey-space
  .tags-blog
    display: flex
    flex-flow: row wrap
    font-size: 0.85rem
  .tag a
    padding: 5px
    color: rgba($grey-space, 0.5)
    &:hover
      color: rgba($grey-space, 0.9)
  .title-blog
    color: rgba($blue-space, 0.7)
    &:hover
      color: rgba($blue-space, 1)
</style>
