require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

// Se importa la configuración de la base de datos
const db = require('./config/db');

// Inicio de la aplicación
const app = express();
const port = 8000;

// Middlewares (Plug-ins del servidor)
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Se crea un endpoint para probar el servidor
app.get("/api/testdb", async (req, res) => {
    try {
        //Test connection to the db
        const result = await db.query("SELECT NOW()");
        res.json({
            message: "Successful connection to the database",
            data: result.rows[0],
        });
    } catch (error) {
        res.json({
            message: "Error connecting to the database",
            error: error.message,
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