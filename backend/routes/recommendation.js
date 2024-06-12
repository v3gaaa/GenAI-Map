const express = require('express');
const { getRecommendations } = require('../controllers/recommendation');

const router = express.Router();

router.post('/', getRecommendations);

module.exports = router;
