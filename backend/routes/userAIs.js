const express = require('express');
const router = express.Router();
const userAIsController = require('../controllers/userAIsController');

router.get('/', userAIsController.getAllUserAIs);
router.get('/:userId', userAIsController.getUserAIsByUserId);
router.post('/like', userAIsController.likeAI);
router.delete('/unlike', userAIsController.unlikeAI);

module.exports = router;
