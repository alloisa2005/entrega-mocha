
const UserModel = require('../models/user.model')

class UserController  {

  async getAll(req, res) {    
    
    try {

      let result = await UserModel.find()      
      return res.status(200).send({status:'OK', result});             

    } catch (error) {

      return {status:'ERROR', result: error.message};             
    }
  }

  async getById(req, res) {    
    
    let { id } = req.params;

    try {

      let user = await UserModel.findById(id);
      if(!user) return res.status(400).send({status:'ERROR', msg: 'User not found'});      
      
      return res.status(200).send({status:'OK', user});      

    } catch (error) {

      return {status:'ERROR', result: error.message};             
    }
  }

  async addUser(req, res) {    
    
    let { nombre, password, email, foto } = req.body;

    try {
      let user = {nombre, password, email, foto };      

      let result = await UserModel.create(user);
      console.log(result);
      
      return res.status(200).send({status:'OK', result});

    } catch (error) {

      return {status:'ERROR', result: error.message};             
    }
  }

  async deleteUser(req, res) {    
    
    let { id } = req.params;

    try {      

      let result = await UserModel.findByIdAndDelete(id);
      return res.status(200).send({status:'OK', result});

    } catch (error) {

      return {status:'ERROR', result: error.message};             
    }
  }

  async updateUser(req, res) {    
    
    let { id } = req.params;
    let { nombre, password, email, foto } = req.body;

    try {

      let user = await UserModel.findById(id);
      if(!user) return res.status(401).send({status:'ERROR', result: 'User no existe'});      

      let result = await UserModel.findByIdAndUpdate(id, {nombre,password,email,foto}, {new: true});
      return res.status(200).send({status:'OK', result});

    } catch (error) {

      return {status:'ERROR', result: error.message};             
    }
  }

}

module.exports = new UserController();