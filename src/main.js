// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store';
import VeeValidate from 'vee-validate';
import {ApolloClient, createNetworkInterface} from 'apollo-client';
import VueApollo from 'vue-apollo'
import Vue2Filters from 'vue2-filters'
import VueScrollTo from 'vue-scrollto'
import VueTheMask from 'vue-the-mask'
import VueLazyLoad from 'vue-lazyload'
import VueTouch from 'vue-touch'
import VueAnalytics from 'vue-analytics'

Vue.config.productionTip = false
VueTouch.config.pan = {
  threshold: 1
}
Vue.use(VeeValidate);
Vue.use(VueScrollTo);
Vue.use(Vue2Filters);
Vue.use(VueTouch);

const config = {
  strict: false,
  classes: true,
}
const loadConfig = {
  observer: true,
}
const analyticsConfig = {
  id: 'UA-115122323-1',
  router,
}

Vue.use(VueTheMask, config);
Vue.use(VueLazyLoad, loadConfig);
Vue.use(VueAnalytics, analyticsConfig);



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})


// Watch Data: Do Not Uncomment

// // SoHo Hatch
// {
//   "sku":"BR140P",
//   "dialColor": "Black",
//   "size": 40,
//   "caseThickness": 6,
//   "caseColor": "Rose Gold",
//   "movement": "Japanese Quartz Movement",
//   "bandWidth": "20",
//   "band": "Leather strap",
//   "bandColor": "Black",
//   "interchangableBands": "Yes"
// }
// // Kallio Rose
// {
//   "sku":"WR140S",
//   "dialColor": "White",
//   "size": 40,
//   "caseThickness": 6,
//   "caseColor": "Rose Gold",
//   "movement": "Japanese Quartz Movement",
//   "bandWidth": "20",
//   "band": "Stainless mesh",
//   "bandColor": "Rose Gold",
//   "interchangableBands": "Yes"
// }
// // Polermo Soul
// {
//   "sku":"BB140S",
//   "dialColor": "Black",
//   "size": 40,
//   "caseThickness": 6,
//   "caseColor": "Black",
//   "movement": "Japanese Quartz Movement",
//   "bandWidth": "20",
//   "band": "Stainless mesh",
//   "bandColor": "Black",
//   "interchangableBands": "Yes"
// }
