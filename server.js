import { GraphQLServer } from 'graphql-yoga'
import { start, models } from './db'
import resolvers from './graphql/resolvers'

const db = start('mongodb://localhost/polls')
const context = { models, db }

const Server = new GraphQLServer({
  typeDefs: `${__dirname}/graphql/schema.graphql`,
  resolvers,
  context
})

Server.start({ port: 4000 }, () => {
  console.log('Server is running on http://localhost:4000')
})