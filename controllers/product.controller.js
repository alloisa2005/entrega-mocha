
const ProductModel = require('../models/product.model')

class ProductController  {

  async getAll(req, res) {    
    
    try {

      let result = await ProductModel.find()      
      return res.status(200).send({status:'OK', result});             

    } catch (error) {

      return {status:'ERROR', result: error.message};             
    }
  }

  async getById(req, res) {    
    
    let { id } = req.params;

    try {

      let result = await ProductModel.findById(id);
      return res.status(200).send({status:'OK', result});      

    } catch (error) {

      return {status:'ERROR', result: error.message};             
    }
  }

  async addProduct(req, res) {    
    
    let { nombre, descripcion, precio, foto } = req.body;

    try {
      let product = { nombre, descripcion, precio, foto };      

      let result = await ProductModel.create(product);
      return res.status(200).send({status:'OK', result});

    } catch (error) {

      return {status:'ERROR', result: error.message};             
    }
  }

  async deleteProduct(req, res) {    
    
    let { id } = req.params;

    try {      

      let result = await ProductModel.findByIdAndDelete(id);
      return res.status(200).send({status:'OK', result});

    } catch (error) {

      return {status:'ERROR', result: error.message};             
    }
  }

  async updateProduct(req, res) {    
    
    let { id } = req.params;
    let { nombre, descripcion, precio, foto } = req.body;

    try {

      let product = await ProductModel.findById(id);
      if(!product) return res.status(401).send({status:'ERROR', result: 'Producto no existe'});      

      let result = await ProductModel.findByIdAndUpdate(id, {nombre, descripcion, precio, foto}, {new: true});
      return res.status(200).send({status:'OK', result});

    } catch (error) {

      return {status:'ERROR', result: error.message};             
    }
  }

}

module.exports = new ProductController();