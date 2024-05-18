const express = require('express');
const router = express.Router();
const testdbRoutes = require('./testdb');

router.use('/testdb', testdbRoutes);

router.get("/", (req, res) => {
    res.json({ message: "API funcionando correctamente" });
});

module.exports = router;
