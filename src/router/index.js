import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Radio from '@/demo/radio'
import Icon from '@/demo/icon'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
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
    }
  ]
})
