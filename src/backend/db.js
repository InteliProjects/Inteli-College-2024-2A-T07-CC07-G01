// db.js
const mysql = require('mysql2');

// Estabelece conexão com MySQL
const pool = mysql.createPool({
    host: 'rds-1.cl7gz9ycgegp.us-east-1.rds.amazonaws.com', // endpoint do RDS
    user: 'admin', // username
    password: 'GdE1234*', // senha
    database: 'estoque', // a base que será acessada
    waitForConnections: true,
    port: 3306
});

module.exports = pool.promise();