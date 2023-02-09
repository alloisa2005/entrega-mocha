const Product = require('../models/product.model')
const User = require('../models/user.model')

const resolvers = {
  Query: {
    getAllProducts: async () => {
      let prods = await Product.find()      
      return prods
    },
    getProductById: async (parent, args) => {
      let prod = await Product.findById(args.id) 
      return prod
    },
    getAllUsers: async () => {
      let users = await User.find()      
      return users
    },
    getUserById: async (parent, args) => {
      let user = await User.findById(args.id) 
      return user
    }    
  },
  Mutation: {    
    createUser: async (parent, args, context, info) => {
      const {nombre, password, foto, email } = args;
      let user = new User({nombre, password, foto, email})
      await user.save()
      return user;
    },
    deleteUser: async (parent, args, context, info) => {
      const { id } = args;      
      let user = await User.findByIdAndDelete(id);
      return user;
    },
    createProduct: async (parent, args, context, info) => {
      const {nombre, descripcion, foto, precio } = args;
      let prod = new Product({nombre, descripcion, foto, precio})
      await prod.save()
      return prod;
    },
    deleteProduct: async (parent, args, context, info) => {
      const { id } = args;      
      let prod = await Product.findByIdAndDelete(id);
      return prod;
    },
  }
};

module.exports = resolvers;