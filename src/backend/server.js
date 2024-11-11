const express = require('express');
const cors = require('cors');
const multer = require('multer'); // Importa multer para lidar com uploads de arquivos
const csvParser = require('csv-parser'); // Importa csv-parser para processar arquivos CSV
const fs = require('fs'); // Importa o módulo fs para trabalhar com arquivos
const db = require('./db'); // Importa a conexão com o banco de dados
const path = require('path'); // Importa path para servir arquivos estáticos
const app = express();

app.use(cors());
app.use(express.json());

// Configura a pasta 'public' para servir arquivos estáticos, como HTML
app.use(express.static(path.join(__dirname, 'public')));

// Configuração do multer para salvar os arquivos CSV no diretório 'uploads'
const upload = multer({ dest: 'uploads/' });

// Endpoint para processar o upload de arquivos CSV
app.post('/upload-csv', upload.single('csvFile'), (req, res) => {
    const file = req.file; // O arquivo enviado está acessível via req.file

    // Verifica se o arquivo foi enviado
    if (!file) {
        return res.status(400).send('Nenhum arquivo enviado.');
    }

    const results = []; // Array para armazenar os dados do CSV

    // Lê e processa o arquivo CSV
    fs.createReadStream(file.path)
        .pipe(csvParser()) // Converte o arquivo CSV em objetos JSON
        .on('data', (row) => {
            results.push(row); // Adiciona cada linha do CSV ao array de resultados
        })
        .on('end', async () => {
            // Após a leitura completa, insere os dados no banco de dados
            for (const product of results) {
                try {
                    await db.execute(
                        'INSERT INTO product_inventory (tracking_id, product_name, cep, quantidade, loja_estoque) VALUES (?, ?, ?, ?, ?)',
                        [product.sku, product.product, product.cep, product.quantity, product.store] // Substitui pelos valores do CSV
                    );
                } catch (error) {
                    console.error('Erro ao inserir produto:', error); // Loga qualquer erro
                }
            }

            res.status(200).send('Arquivo CSV processado com sucesso.'); // Retorna uma mensagem de sucesso
        });
});

// Endpoint para listar produtos do banco de dados
app.get('/produtos', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM product_inventory'); // Consulta todos os produtos
        res.json(rows); // Retorna os produtos como JSON
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro no servidor');
    }
});

// Endpoint para consultar um produto pelo nome
app.get('/produto/:name', async (req, res) => {
    const nome = req.params.name;

    try {
        const [rows] = await db.query('SELECT * FROM product_inventory WHERE product_name = ?', [nome]);
        res.json(rows); 
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro no servidor');
    }
});

// Endpoint para adicionar um novo produto
app.post('/produtos', async (req, res) => {
    console.log(req.body);
    const { sku, product, cep, quantity, store } = req.body; // Coleta os dados do corpo da requisição

    try {
        // Insere um novo produto no banco de dados
        await db.execute(
            'INSERT INTO product_inventory (tracking_id, product_name, cep, quantidade, loja_estoque) VALUES (?, ?, ?, ?, ?)',
            [sku, product, cep, quantity, store]
        );
        res.status(201).send('Produto adicionado com sucesso!'); // Retorna mensagem de sucesso
    } catch (error) {
        console.error('Erro ao adicionar produto:', error);
        res.status(500).send('Erro no servidor');
    }
});

// Endpoint para deletar um produto do banco de dados
app.delete('/produtos/:id', async (req, res) => {
    const id = parseInt(req.params.id); // Coleta o ID da URL
    try {
        // Deleta o produto do banco de dados
        await db.execute('DELETE FROM product_inventory WHERE tracking_id = ?', [id]);
        res.status(204).send(); // Responde com status 204 (Sem conteúdo)
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro no servidor');
    }
});

// Servir o listadeestoque.html como página inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'listadeestoque.html')); // Caminho para o HTML
});

// Adiciona rotas para os outros arquivos HTML
app.get('/calculadora', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'calculadora.html'));
});

app.get('/cadastrar', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'cadastrar.html'));
});

const PORT = 3001; // Porta que o servidor está escutando
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`); // Mensagem de log ao iniciar o servidor
});