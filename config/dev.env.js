'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // API_URL: '"https://api.wallacehatch.com/"',
  API_URL: '"https://1ce21a3d.ngrok.io/"',
  SHOPIFY_API_URL: '"https://wallacehatch.myshopify.com/"',
  SHOPIFY_ACCESS_TOKEN: '"f1a32da36076ff332251f34f69bb4029"',
  SHOPIFY_DOMAIN: '"wallacehatch.myshopify.com"',
  SHOPIFY_APP_ID: "11028430886",

  STRIPE_KEY: '"pk_test_e1GnuueKJ1c6dwDFbXgn18Dv"',
  STRIPE_SECRET: '"sk_test_UXOcbanHyQm1m9YtWCNNY7Qx"',
})
