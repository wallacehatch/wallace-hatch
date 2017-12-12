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

Vue.config.productionTip = false
Vue.use(VeeValidate);
Vue.use(VueApollo);
Vue.use(Vue2Filters);



const networkInterface = createNetworkInterface({
  uri: process.env.SHOPIFY_API_URL,
  transportBatching: true,
  mode: 'no-cors',
  connectToDevTools: true,
});

// 
// {
//   "dialColor": "black",
//   "size": "40",
//   "caseThickness": "6",
//   "caseColor": "Black",
//   "movement": "Japenese Quartz Movement",
//   "bandWidth": "20",
//   "band": "Leather Strap",
//   "bandColor": "black",
//   "interchangableBands": "Yes",
// }



const apolloClient = new ApolloClient({
	networkInterface: networkInterface,
})

const apolloProvider = new VueApollo({
	defaultClient: apolloClient,
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  apolloProvider,
  template: '<App/>',
  components: { App }
})
