'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // API_URL: '"http://localhost:8081/"',
  API_URL: '"https://1ce21a3d.ngrok.io/"',
})
