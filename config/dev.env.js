'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_URL: '"https://api-staging.wallacehatch.com/"',
  GA_ID: '"UA-115122323-1"'
})
