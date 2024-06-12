// routes/ai.js
const express = require('express');
const router = express.Router();
const aiController = require('../controllers/aiController');

router.get('/', aiController.getAllAIs);
router.get('/:id', aiController.getAIById);
router.get('/name/:name', aiController.getAIByName);
router.get('/category/:category', aiController.getAIsByCategory);
router.post('/', aiController.createAI);
router.put('/:id', aiController.updateAI);
router.delete('/:id', aiController.deleteAI);

module.exports = router;
