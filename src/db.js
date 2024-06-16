const mysql = require('mysql');

const connection = mysql.createConnection({
    host:process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

connection.connect((error) => {
    if(erro) throw error;
    console.log(`Conectado ao Banco de Dados: ${process.env.DB_NAME}`)
});

module.export = connection;