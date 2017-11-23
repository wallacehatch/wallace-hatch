import Vue from 'vue'
import Router from 'vue-router'
import Countdown from '@/components/countdown/Countdown'
import Home from '@/components/home/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Countdown',
      component: Countdown
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
    }
  ]
})
