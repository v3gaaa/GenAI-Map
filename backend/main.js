require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

// Inicio de la aplicación
const app = express();
const port = 8000;

// Configuración de la base de datos
const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: {
    rejectUnauthorized: false
  }
});

// Middlewares (Plug-ins del servidor)
app.use(cors());
app.use(bodyParser.json());

// Se crea un endpoint para probar el servidor
app.get("/api/testdb", async (req, res) => {
    try {
        const client = await pool.connect();
        await client.query('SELECT NOW()');
        client.release();
        res.json({
            message: "Conexion con la base de datos funcionando correctamente",
            dbConnection: "Success",
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al conectar con la base de datos",
            dbConnection: "Failed",
        });
    }
});


app.get("/api", async (req, res) => {
    res.json({
        message: "API funcionando correctamente",
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});