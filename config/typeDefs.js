
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Product {
    id: ID
    nombre: String
    descripcion: String
    foto: String
    precio: Float
  }

  type Query {
    getAllProducts: [Product]
    getProductById(id:String): Product
  }

  type Mutation {
    createProduct(nombre: String, descripcion: String, foto: String, precio: Float): Product
  }
`

module.exports = typeDefs;