'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_URL: '"https://api.wallacehatch.com/"',
  SHOPIFY_ACCESS_TOKEN: '"f1a32da36076ff332251f34f69bb4029"',
  SHOPIFY_DOMAIN: '"wallacehatch.myshopify.com"',
  SHOPIFY_APP_ID: "11028430886",
})
