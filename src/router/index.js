import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Radio from '@/demo/radio'
import Icon from '@/demo/icon'
import Tag from '@/demo/tag'
import Checker from '@/demo/checker'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/radio',
      name: 'Radio',
      component: Radio
    },
    {
      path: '/icon',
      name: 'Icon',
      component: Icon
    },
    {
      path: '/tag',
      name: 'Tag',
      component: Tag
    },
    {
      path: '/checker',
      name: 'Checker',
      component: Checker
    }
  ]
})
