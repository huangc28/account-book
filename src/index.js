const app = require('express')()

app.get('/health-check', (req, res) => {
  res.status(200).send('hello world')
})

module.exports = app