import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import pkg from 'pg';

const { Pool } = pkg;

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Configuração do PostgreSQL
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

// 🟢 Rota para inserir dados na tabela "bookings"
app.post('/api/booking', async (req, res) => {
    const { name, phone, email, service, message } = req.body;

    // Validação: Todos os campos são obrigatórios, exceto "message"
    if (!name || !phone || !email || !service) {
        return res.status(400).json({ message: 'Todos os campos obrigatórios devem ser preenchidos.' });
    }

    try {
        const result = await pool.query(
            'INSERT INTO bookings (name, phone, email, service, message) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [name, phone, email, service, message || null] // Se "message" não for enviado, insere NULL
        );

        res.status(201).json({
            message: 'Reserva inserida com sucesso!',
            data: result.rows[0],
        });
    } catch (error) {
        console.error('Erro ao inserir dados no banco de dados:', error);
        res.status(500).json({ message: 'Erro interno do servidor' });
    }
});

// Iniciar o servidor
app.listen(3001, () => {
    console.log('Servidor backend rodando na porta 3001');
});

// Fechar conexão com o banco ao sair
process.on('exit', () => {
    pool.end();
});
