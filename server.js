import { GraphQLServer } from 'graphql-yoga'
import { start, models } from './db'
import resolvers from './graphql/resolvers'
import dotenv from 'dotenv'

dotenv.config()

const db = start(process.env.MONGODB_URI)
const context = { models, db }

const Server = new GraphQLServer({
  typeDefs: `${__dirname}/graphql/schema.graphql`,
  resolvers,
  context
})

Server.start({ port: 4000 }, () => {
  console.log('Server is running on http://localhost:4000')
})