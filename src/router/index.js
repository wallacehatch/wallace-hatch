import Vue from 'vue'
import Router from 'vue-router'
import Countdown from '@/components/countdown/Countdown'
import Home from '@/components/home/Home'
import ProductPage from '@/components/product/ProductPage'
import Terms from '@/components/legal/Terms'
import Privacy from '@/components/legal/Privacy'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
      // redirect: '/Home'
    }, {
      path: '/terms',
      component: Terms,
    }, {
      path: '/privacy',
      component: Privacy,
    }, {
      path: '/product-page/:id',
      name: 'ProductPage',
      component: ProductPage ,
    }]
})
