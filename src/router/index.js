import Vue from 'vue'
import Router from 'vue-router'
import Countdown from '@/components/Countdown'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Countdown',
      component: Countdown
    }
  ]
})
