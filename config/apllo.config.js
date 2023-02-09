const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')

 const miApollo = new ApolloServer({
  typeDefs,
  resolvers
 });

 module.exports = miApollo;