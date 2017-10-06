// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueTyperPlugin from 'vue-typer'
import { AsyncDataPlugin } from 'vue-async-data-2'

var contentful = require('contentful')
const Affix = require('vue-affix')

Vue.use(AsyncDataPlugin)
Vue.use(contentful)
Vue.use(VueTyperPlugin)
Vue.use(Affix)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
