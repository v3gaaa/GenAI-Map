const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.get("/", async (req, res) => {
    try {
        // Prueba de conexión a la base de datos
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

module.exports = router;
