require('dotenv').config();

const express = require('express');
const app = express();

let PORT = process.env.PORT || 8080;

const productRouter = require('./routes/product.routes');
const userRouter = require('./routes/user.routes');

//////// Conexión MongoDB ////////
require('./database');

app.use(express.json());

////////////// Rutas //////////////  
app.use('/api/productos', productRouter);
app.use('/api/users', userRouter);


app.listen(PORT, () => console.log(`Server Up on Port ${PORT}`));