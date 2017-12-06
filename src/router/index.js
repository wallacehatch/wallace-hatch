import Vue from 'vue'
import Router from 'vue-router'
import Countdown from '@/components/countdown/Countdown'
import Home from '@/components/home/Home'
import ProductPage from '@/components/product/ProductPage'

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
    },
    { path: '/product/:id',
    name: 'ProductPage',
    component: ProductPage ,
  }
  ]
})
