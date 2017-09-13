import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Radio from '@/demo/radio'

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
    }
  ]
})
