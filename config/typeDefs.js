
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Product {
    id: ID
    nombre: String
    descripcion: String
    foto: String
    precio: Float
  }

  type User {
    id: ID
    email: String
    nombre: String
    password: String
    foto: String    
  }

  type Query {
    getAllProducts: [Product]
    getProductById(id:String): Product
    getAllUsers: [User]
    getUserById(id:String): User
  }

  type Mutation {
    createProduct(nombre: String, descripcion: String, foto: String, precio: Float): Product
    createUser(email: String, nombre: String, password: String, foto: String): User
  }
`

module.exports = typeDefs;