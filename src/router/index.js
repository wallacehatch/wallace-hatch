import Vue from 'vue'
import Router from 'vue-router'
import Countdown from '@/components/countdown/Countdown'
import Home from '@/components/home/Home'
import Terms from '@/components/legal/Terms.vue'
import Privacy from '@/components/legal/Privacy.vue'

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
    }, {
      path: '/Terms',
      name: 'Terms',
      component: Terms,
    }, {
      path: '/Privacy',
      name: 'Privacy',
      component: Privacy,
    }
  ]
})
