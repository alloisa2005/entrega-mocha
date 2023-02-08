const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const { Router } = require('express');
const router = Router();



router.get('/', (req, res) => {
  res.send({ok: true, msg: 'JAJA'});
});

module.exports = router;