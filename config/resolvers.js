const Product = require('../models/product.model')

const resolvers = {
  Query: {
    getAllProducts: async () => {
      let prods = await Product.find()      
      return prods
    },
    getProductById: async (parent, args) => {
      let prod = await Product.findById(args.id) 
      return prod
    }
  },
  Mutation: {
    createProduct: async (parent, args, context, info) => {
      const {nombre, descripcion, foto, precio } = args;
      let prod = new Product({nombre, descripcion, foto, precio})
      await prod.save()
      return prod;
    }
  }
};

module.exports = resolvers;