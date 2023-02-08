require('dotenv').config();

const express = require('express');
const { graphqlHTTP } = require('express-graphql');

const app = express();

let PORT = process.env.PORT || 8080;

const productRouter = require('./routes/product.routes');
const userRouter = require('./routes/user.routes');
const { schema, root } = require('./config/graphql.config')

//////// Conexión MongoDB ////////
require('./database');

app.use(express.json());

////////////// Rutas //////////////  
app.use('/api/productos', productRouter);
app.use('/api/users', userRouter);
app.use('/graphql', graphqlHTTP({
  schema, 
  rootValue: root,
  graphiql: true
}));

app.listen(PORT, () => console.log(`Server Up on Port ${PORT}`));