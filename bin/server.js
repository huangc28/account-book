const fs = require('fs')
const { resolve } = require('path')

const config = JSON.parse(
  fs.readFileSync(resolve(__dirname, '..', '.babelrc'), 'utf-8')
)

require('@babel/register')(config)

require('../server.js')
