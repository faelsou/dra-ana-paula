// db.js
import dotenv from 'dotenv'; // Usando import para carregar as variáveis do .env
import pkg from 'pg'; // Importando o pacote como padrão
const { Pool } = pkg; // Extraindo o Pool da importação

// Carregando as variáveis do .env
dotenv.config();

// Criando o pool de conexões com o banco de dados
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

// Função para realizar uma consulta
const queryDatabase = async (query) => {
    try {
        const res = await pool.query(query);
        console.log(res.rows); // Exibe os dados retornados da consulta
    } catch (err) {
        console.error('Erro ao executar consulta', err.stack);
    }
};

// Exemplo de consulta: Selecionando todos os registros da tabela "users"
queryDatabase('SELECT * FROM bookings;');
