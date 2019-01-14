import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/Hello/home'
import Demo from '@/components/Demo'
import ListAbout from '@/views/ListAbout/ListAbout'
import NumberAbout from '@/views/NumberAbout/NumberAbout'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/demo',
      name: 'Demo',
      component: Demo
    },
    {
      path: '/listabout',
      name: 'ListAbout',
      component: ListAbout
    },
    {
      path: '/numberabout',
      name: 'NumberAbout',
      component: NumberAbout
    },

  ]
})
