import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Radio from '@/demo/radio'
import Icon from '@/demo/icon'
import Tag from '@/demo/tag'
import Checker from '@/demo/checker'
import Checklist from '@/demo/checklist'
import Swiper from '@/demo/swiper'
import Modal from '@/demo/modal'
import Avatar from '@/demo/avatar'

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
    },
    {
      path: '/checklist',
      name: 'Checklist',
      component: Checklist
    },
    {
      path: '/swiper',
      name: 'Swiper',
      component: Swiper
    },
    {
      path: '/modal',
      name: 'Modal',
      component: Modal
    },
    {
      path: '/avatar',
      name: 'Avatar',
      component: Avatar
    }
  ]
})
