const http = require('http')
const ServerDebug = require('debug')('server')

const app = require('./src')
const PORT = 3000

server = http.createServer(app)

server.listen(PORT, err => {
  if (err) {
    console.log()
  }

  ServerDebug(`server now hosted on port ${PORT}`)
})

