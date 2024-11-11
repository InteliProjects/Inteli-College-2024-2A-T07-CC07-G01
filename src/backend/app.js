// app.js
const express = require('express');
const cors = require('cors');
const storesRouter = require('./routes/stores');
const db = require('./db'); // Importa a conexão com o MySQL

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use('/stores', storesRouter);

// Inicia o servidor na porta 3000
app.listen(port, '0.0.0.0', () => {
    console.log(`Servidor rodando em http://0.0.0.0:${port}/`);
});