const express = require('express');
const router = express.Router();
const userAIsController = require('../controllers/userAIsController');

router.get('/', userAIsController.getAllUserAIs);
router.get('/:userId', userAIsController.getUserAIsByUserId);
router.post('/like/:userId/:aiId', userAIsController.likeAI);
router.delete('/unlike/:userId/:aiId', userAIsController.unlikeAI);

module.exports = router;
