// routes/stores.js
const express = require('express');
const router = express.Router();
const db = require('../db'); // Importa a conexão com o banco de dados

// Rota para obter todos os produtos
router.get('/', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM product_inventory');
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro no servidor');
    }
});

// Rota para adicionar um novo produto
router.post('/', async (req, res) => {
    const { tracking_id, product_name, cep, quantidade, loja_estoque, status } = req.body;

    try {
        const [result] = await db.execute(
            'INSERT INTO product_inventory (tracking_id, product_name, cep, quantidade, loja_estoque, status) VALUES (?, ?, ?, ?, ?, ?)',
            [tracking_id, product_name, cep, quantidade, loja_estoque, status]
        );
        res.status(201).send(`Produto adicionado com ID: ${result.insertId}`);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro no servidor');
    }
});

module.exports = router;