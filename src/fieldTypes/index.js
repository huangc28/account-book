import {
  GraphQLObjectType,
} from 'graphql'

import helloworld from './helloworld'

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    helloworld,
  },
})

export default Query
