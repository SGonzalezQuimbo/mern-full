const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const mainRouter = require('./routes/mainRouter');
const cookieParser = require('cookie-parser');//permite agregar un middleware para poder convertir una cookie en un objeto json para poder leer sin problemas el token
const app = express();



app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use("/api", mainRouter);

module.exports = app;