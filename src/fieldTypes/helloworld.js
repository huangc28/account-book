import {
  GraphQLString,
} from 'graphql'

const helloWorld = {
  name: 'helloworld',
  type: GraphQLString,
  resolve: () => {
    return 'hello world'
  },
}

export default helloWorld
