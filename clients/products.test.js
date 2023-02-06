
const supertest = require('supertest');
const chai = require('chai');
const { expect } = require('chai');

const request = supertest('http://localhost:8080')

describe('Test API - Productos', () => {

  describe('GET api/productos', () => {
    it('La petición debería retornar status 200', async () => {
      let res = await request.get('/api/productos')
      expect(res.statusCode).to.equal(200);
    })
  })

  describe('GET api/productos/id', () => {
    it('La petición debería retornar un producto por ID', async () => {
      let res = await request.get('/api/productos/63dbce26836d503eb61293fa')
      expect(res.statusCode).to.equal(200);
    })
  })

  describe('GET api/productos/id', () => {
    it('Producto ID no existe', async () => {
      let res = await request.get('/api/productos/63dbce26836d503eb61293fb')
      expect(res.statusCode).to.equal(400);
    })
  })

  describe('POST api/productos', () => {
    it('La petición debería poder guardar un producto', async () => {
      let product = {nombre:'Prod Test', descripcion:'Prod Test 1', foto:'www.foto.com', precio:1500}
      let res = await request.post('/api/productos').send(product);
      expect(res.statusCode).to.equal(200);
      expect(res.body).to.includes.keys('status', 'result');
    })
  })

  describe('DELETE api/productos/id', () => {
    it('Borrar un producto por ID que existe en la BD', async () => {
      let res = await request.delete('/api/productos/63dbce26836d503eb61293fa')
      expect(res.statusCode).to.equal(200);
    })
  })

  describe('DELETE api/productos/id', () => {
    it('Borrar un producto que no existe', async () => {
      let res = await request.delete('/api/productos/63dbce26836d503eb61293fb')
      expect(res.statusCode).to.equal(400);
    })
  })

});

