'use strict';
const path = require('path');

const config = {
  cssModulesExcludes:[
    path.resolve(__dirname, '../node_modules'),
    path.resolve(__dirname, '../src/routes/SelfComponent')
  ]
}
module.exports = config;