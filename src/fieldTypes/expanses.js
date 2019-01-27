import {
  GraphQLObjectType,
  GraphQLInt,
} from 'graphql'

const userExpanses = new GraphQLObjectType({
  name: 'userExpanses',
  fields: {
    id: {
      type: GraphQLInt,
    },
  },
})

export default userExpanses
