import Vue from 'vue'
import Router from 'vue-router'
import Countdown from '@/components/countdown/Countdown'
import Home from '@/components/home/Home'
import ProductDetailPage from '@/components/product/ProductDetailPage'
import Terms from '@/components/legal/Terms'
import Privacy from '@/components/legal/Privacy'
import BagPage from '@/components/bag/BagPage'

Vue.use(Router)
export default new Router({
  mode: 'history',
  scrollBehavior: (to, from, savedPosition) => {
    return {x: 0, y: 0};
  },
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/terms',
      component: Terms,
    }, {
      path: '/privacy',
      component: Privacy,
    }, {
      path: '/watches/:handle',
      name: 'ProductDetailPage',
      component: ProductDetailPage ,
    },
    {
      path: '/bag/',
      name: 'BagPage',
      component: BagPage ,
    }]
})
