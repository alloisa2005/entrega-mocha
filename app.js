require('dotenv').config();

const express = require('express');
const app = express();

let PORT = process.env.PORT || 8080;

const productRouter = require('./routes/product.routes');
const userRouter = require('./routes/user.routes');
const graphqlRouter = require('./routes/graphql.routes');

//////// Conexión MongoDB ////////
require('./database');

app.use(express.json());

////////////// Rutas //////////////  
app.use('/api/productos', productRouter);
app.use('/api/users', userRouter);
app.use('/graphql', graphqlRouter);

app.listen(PORT, () => console.log(`Server Up on Port ${PORT}`));