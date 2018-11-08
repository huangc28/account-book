import express from 'express'
import expressGraphQL from 'express-graphql'
import graphql from 'graphql'

import v1Routers from './routes'

const app = express()

// health check routes.
app.get('/health-check', (_, res) => {
  res.status(200).send('hello world')
})

app.use('/v1', v1Routers)

const queryType = new graphql.GraphQLObjectType({
  name: 'Query',
  fields: {
    rollDice: {
      type: graphql.GraphQLList(graphql.GraphQLInt),
      args: {
        numDice: graphql.GraphQLInt,
      }
    }
  }
})

// GraphQL schema
const schema = new graphql.GraphQLSchema({ query: queryType })

// const schema = buildSchema(`
//   type Query {
//     rollDice(numDice: Int!, numSides: Int): [Int]
//     quoteOfTheDay: String
//     random: Float!
//     rollThreeDice: [Int]
//   }
// `)

// Root resolver
const rootResolver = {
  rollDice: ({ numDice, numSides }) => {
    const output = [];

    for (let i = 0; i < numDice; i++) {
      output.push(1 + Math.floor(Math.random() * (numSides || 6)))
    }

    return output
  },
  quoteOfTheDay: () => {
    return Math.random() < 0.5 ? 'Take it easy' : 'Salvation lies within'
  },
  random: () => {
    return Math.random()
  },
  rollThreeDice: () => {
    return [1, 2, 3].map(_ => 1 + Math.floor(Math.random() * 6))
  }
}

app.use('/graphql', expressGraphQL({
  schema,
  rootValue: rootResolver,
  graphiql: true,
}))

export default app
