import express from 'express'

import v1Routers from './routes'

const app = express()

// health check routes.
app.get('/health-check', (_, res) => {
  res.status(200).send('hello world')
})

app.use('/v1', v1Routers)

export default app
