import http from 'http'
import debug from 'debug'

import app from './src'

const ServerDebug = debug('server')

const PORT = 3000

const server = http.createServer(app)

server.listen(PORT, err => {
  if (err) {
    console.log()
  }

  ServerDebug(`server now hosted on port ${PORT}`)
})
