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
      name: 'Home',
      component: Home
      // redirect: '/Home'
    },
    // {
    //   path: '/Home',
    //   name: 'Home',
    //   component: Home,
    // },
    { path: '/product-page/:id',
    name: 'ProductPage',
    component: ProductPage ,
  }
  ]
})
