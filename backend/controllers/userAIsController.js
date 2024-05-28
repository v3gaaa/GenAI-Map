const UserAIsModel = require('../models/userAIs');

const getAllUserAIs = async (req, res) => {
    try {
        const userAIs = await UserAIsModel.getAllUserAIs();
        res.json(userAIs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getUserAIsByUserId = async (req, res) => {
    try {
        const userAIs = await UserAIsModel.getUserAIsByUserId(req.params.userId);
        res.json(userAIs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const likeAI = async (req, res) => {
    try {
        const newLike = await UserAIsModel.likeAI(req.body.userId, req.body.aiId);
        res.status(201).json(newLike);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const unlikeAI = async (req, res) => {
    try {
        await UserAIsModel.unlikeAI(req.body.userId, req.body.aiId);
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllUserAIs,
    getUserAIsByUserId,
    likeAI,
    unlikeAI,
};
