require('dotenv').config()
const mongoose = require('./db/mongoose');
const { ApolloServer } = require('apollo-server');
const schema = require('./schema');
const resolvers = require('./resolvers');
const SERVER_PORT = process.env.SERVER_PORT;


mongoose.connect();
const server = new ApolloServer({
  typeDefs: schema,
  resolvers
});

server.listen(SERVER_PORT).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});


