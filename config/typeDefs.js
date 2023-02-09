
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
    createUser(email: String, nombre: String, password: String, foto: String): User
    deleteUser(id: String): User
    updateUser(id: String, email: String, nombre: String, password: String, foto: String): User
    createProduct(nombre: String, descripcion: String, foto: String, precio: Float): Product        
    deleteProduct(id: String): Product
    updateProduct(id: String, nombre: String, descripcion: String, foto: String, precio: Float): Product        
  }
`

module.exports = typeDefs;