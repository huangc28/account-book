import express from 'express'
import expressGraphQL from 'express-graphql'
import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLList,
  GraphQLSchema,
} from 'graphql'

import v1Routers from './routes'

const app = express()

// health check routes.
app.get('/health-check', (_, res) => {
  res.status(200).send('hello world')
})

app.use('/v1', v1Routers)

const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    rollDice: {
      type: GraphQLList(GraphQLInt),
      args: {
        numDice: {
          type: GraphQLInt,
        },
        numSides: {
          type: GraphQLInt,
        },
      },
      resolve: (_, { numDice, numSides }) => {
        const output = [];

        for (let i = 0; i < numDice; i++) {
          output.push(1 + Math.floor(Math.random() * (numSides || 6)))
        }

        return output
      },
    },
  },
})

// GraphQL schema
const schema = new GraphQLSchema({ query: queryType })

app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true,
}))

export default app
