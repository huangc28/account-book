import express from 'express'
import graphqlHTTP from 'express-graphql'
import { GraphQLSchema } from 'graphql'

import Query from './fieldTypes'

const app = express()

// health check routes.
app.get('/health-check', (_, res) => {
  res.status(200).send('hello world')
})

const schema = new GraphQLSchema({ query: Query })

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}))

export default app
