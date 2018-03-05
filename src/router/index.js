import Vue from 'vue'
import Router from 'vue-router'
import Countdown from '@/components/countdown/Countdown'
import Home from '@/components/home/Home'
import ProductDetailPage from '@/components/product/ProductDetailPage'
import Terms from '@/components/legal/Terms'
import Privacy from '@/components/legal/Privacy'
import BagPage from '@/components/bag/BagPage'
import CheckoutRoot from '@/components/checkout/CheckoutRoot'
import CheckoutInfo from '@/components/checkout/CheckoutInfo'
import CheckoutReview from '@/components/checkout/CheckoutReview'
import Faq from '@/components/faq/FAQ'
import OurStory from '@/components/ourStory/OurStory';
Vue.use(Router)
const router = new Router({
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
      path: '/faq',
      component: Faq,
    }, {
      path: '/our-story',
      component: OurStory,
    }, {
      path: '/privacy',
      component: Privacy,
    }, {
      path: '/watches/:handle/:sku',
      name: 'ProductDetailPage',
      component: ProductDetailPage ,
    }, {
      path: '/bag',
      name: 'BagPage',
      component: BagPage ,
    }, {
      path: '/checkout',
      name: 'Checkout',
      component: CheckoutRoot,
      children: [{
        path: 'info/:section',
        component: CheckoutInfo,
      }, {
        path: 'info',
        component: CheckoutInfo,
      }, {
        path: 'review/:status',
        component: CheckoutReview,
      }, {
        path: 'review',
        component: CheckoutReview,
      }]
    }]
})
router.afterEach((to,from,next) => {
  // console.log(to)
  hj('stateChange', to.fullPath);
})

export default router
