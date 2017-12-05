// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store';
import VeeValidate from 'vee-validate';
import {ApolloClient, createNetworkInterface} from 'apollo-client';
import VueApollo from 'vue-apollo'
import ShopifyBuy from 'shopify-buy'
Vue.config.productionTip = false
Vue.use(VeeValidate);
Vue.use(VueApollo)


// EXAMPLE OF UISNG SHOPIFY SDK
var shopClient = ShopifyBuy.buildClient({
  accessToken: process.env.SHOPIFY_ACCESS_TOKEN,
  domain: process.env.SHOPIFY_DOMAIN,
  appId: process.env.SHOPIFY_APP_ID,
});

// fetch a product using resource id
shopClient.fetchProduct('430086357030')
  .then(function (product) {
    console.log(product);
  })
  .catch(function () {
    console.log('Request failed');
  });
//END OF SHOPIFY SDK






const networkInterface = createNetworkInterface({
  uri: process.env.SHOPIFY_API_URL,
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


networkInterface.use([middleware]);

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
