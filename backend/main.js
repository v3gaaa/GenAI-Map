
require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');

// Inicio de la aplicación
const app = express();
const port = 8000;

// Middlewares (Plug-ins del servidor)
app.use(cors());
app.use(bodyParser.json());

// Se crea un endpoint para probar el servidor
app.post("/api/test", (req, res) => {
    res.json({
        message: "API funcionando correctamente"
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});