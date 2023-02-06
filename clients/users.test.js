
const supertest = require('supertest');
const chai = require('chai');
const { expect } = require('chai');

const request = supertest('http://localhost:8080')


describe('Test API - Usuarios', () => {

  describe('GET api/users',  () => {
    it('La petición debería retornar status 200', async () => {
      let res = await request.get('/api/users')
      expect(res.statusCode).to.equal(200);
    })
  })  

  describe('POST api/users', () => {
    it('La petición debería poder guardar un usuario', async () => {
      let user = {nombre:'User Test', email:'usertest@gmail.com', foto:'www.foto.com', password:'Mipassword'}
      let res = await request.post('/api/users').send(user);
      expect(res.statusCode).to.equal(200);
      //expect(res.body).to.includes.keys('status', 'result');
    })
  })

  describe('GET api/users/id', () => {
    it('La petición debería retornar un user por ID', async () => {
      let res = await request.get('/api/productos/63dbce26836d503eb61293fa');      
      expect(res.statusCode).to.equal(200);
    })
  })

  describe('GET api/users/id', () => {
    it('La petición debe retornar status 400 si el usuario no existe', async () => {
      let res = await request.get('/api/users/63dbce26836d503eb61293fa')
      expect(res.statusCode).to.equal(400);
    })
  })

});