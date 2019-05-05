const typeDefs = require('./types');
const resolvers = require('./resolvers');

const { ApolloServer } = require('apollo-server');

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`TouringPlans.com GraphQL Disney API ready at ${url}`);
});
