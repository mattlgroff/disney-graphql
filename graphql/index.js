const typeDefs = require('./types');
const resolvers = require('./resolvers');
const { ApolloServer } = require('apollo-server-azure-functions');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
});

exports.graphqlHandler = server.createHandler();
