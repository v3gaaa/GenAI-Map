const express = require('express');
const router = express.Router();
const testdbRoutes = require('./testdb');
const aiRoutes = require('./ai');

router.use('/testdb', testdbRoutes);
router.use('/ais', aiRoutes);

router.get("/", (req, res) => {
    res.json({ message: "API funcionando correctamente" });
});

module.exports = router;
