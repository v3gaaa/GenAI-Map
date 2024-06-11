const AIModel = require('../models/ai');

const getAllAIs = async (req, res) => {
    try {
        const ais = await AIModel.getAllAIs();
        res.json(ais);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAIById = async (req, res) => {
    try {
        const ai = await AIModel.getAIById(req.params.id);
        if (ai) {
            res.json(ai);
        } else {
            res.status(404).json({ message: 'AI not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAIByName = async (req, res) => {
    try {
        const ai = await AIModel.getAIByName(req.params.name);
        if (ai) {
            res.json(ai);
        } else {
            res.status(404).json({ message: 'AI not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getAIsByCategory = async (req, res) => {
    try {
        const ais = await AIModel.getAIsByCategory(req.params.category);
        res.json(ais);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createAI = async (req, res) => {
    try {
        const newAI = await AIModel.createAI(req.body);
        res.status(201).json(newAI);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateAI = async (req, res) => {
    try {
        const updatedAI = await AIModel.updateAI(req.params.id, req.body);
        if (updatedAI) {
            res.json(updatedAI);
        } else {
            res.status(404).json({ message: 'AI not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteAI = async (req, res) => {
    try {
        await AIModel.deleteAI(req.params.id);
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllAIs,
    getAIById,
    getAIByName,
    getAIsByCategory,
    createAI,
    updateAI,
    deleteAI,
};
