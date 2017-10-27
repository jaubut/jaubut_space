import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Photo from '@/pages/Photo'
import Blog from '@/pages/blog/index'
import Slug from '@/pages/blog/_slug'
import Video from '@/pages/Video'
import Tag from '@/pages/tags/_tag'
import Web from '@/pages/web/index'
import WebSlug from '@/pages/web/_slug'
import Test from '@/pages/Test'
import Locked from '@/pages/Locked'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/photo',
      name: 'Photo',
      component: Photo
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/video',
      name: 'Video',
      component: Video
    },
    {
      path: '/blog/:tag/:slug',
      name: ':slug',
      component: Slug,
      props: true
    },
    {
      path: '/tags/:tag',
      name: ':tag',
      component: Tag,
      props: true
    },
    {
      path: '/web',
      name: 'Web',
      component: Web
    },
    {
      path: '/web/:slug',
      name: ':slug',
      component: WebSlug
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/locked',
      name: 'Locked',
      component: Locked
    }
  ]
})
