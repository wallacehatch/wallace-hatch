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


dae889c6dcc6ded81b5232a9ae866ef1 - key

7fda7925e78efe4a63698ab0c7105d25 - secret