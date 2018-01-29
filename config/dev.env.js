'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_URL: '"http://localhost:8081/"',
  // USE FOR TEST
  STRIPE_API_KEY: '"pk_test_e1GnuueKJ1c6dwDFbXgn18Dv"',
  STRIPE_API_SECRET: '"sk_test_UXOcbanHyQm1m9YtWCNNY7Qx"',
})
