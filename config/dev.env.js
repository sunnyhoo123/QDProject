'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_ROOT: '"http://test.admin.broker.hm.com:10010/exchange_api"'   ////接口访问地址 业务系统(测试环境)------代理商  
})
