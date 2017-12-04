// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store';
import VeeValidate from 'vee-validate';
import { ApolloClient, createBatchingNetworkInterface } from 'apollo-client'
import VueApollo from 'vue-apollo'

Vue.config.productionTip = false
Vue.use(VeeValidate);
Vue.use(VueApollo)


const networkInterface = createNetworkInterface({
  uri: process.env.API_URL + 'graphql',
  transportBatching: true,
  mode: 'no-cors',
  connectToDevTools: true,
});


const middleware = {
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {};  // Create the header object if needed.
    }
    req.options.headers['X-Shopify-Storefront-Access-Token'] = process.env.SHOPIFY_STOREFRONT_TOKEN
    next();
  }
}


// Create the apollo client
const apolloClient = new ApolloClient({
  networkInterface: createBatchingNetworkInterface({
    uri: 'https://wallacehatch.myshopify.com/api/graphql',
  }),
  connectToDevTools: true,
})

networkInterface.use([middleware]);
networkInterface.useAfter([afterware]);

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
