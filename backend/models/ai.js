const db = require('../config/db');

const getAllAIs = async () => {
    const result = await db.query('SELECT * FROM AIs');
    return result.rows;
};

const getAIById = async (id) => {
    const result = await db.query('SELECT * FROM AIs WHERE id = $1', [id]);
    return result.rows[0];
};

const getAIsByCategory = async (category) => {
    const result = await db.query('SELECT * FROM AIs WHERE category = $1', [category]);
    return result.rows;
};

const createAI = async (ai) => {
    const result = await db.query(
        'INSERT INTO AIs (name, category, description, numero_contribuciones, stars, downloads, logo, created_at, updated_at) VALUES ($1, $2, $3, $4, $5, $6, $7, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP) RETURNING *',
        [ai.name, ai.category, ai.description, ai.numero_contribuciones, ai.stars, ai.downloads, ai.logo]
    );
    return result.rows[0];
};

const updateAI = async (id, ai) => {
    const result = await db.query(
        'UPDATE AIs SET name = $1, category = $2, description = $3, numero_contribuciones = $4, stars = $5, downloads = $6, logo = $7, updated_at = CURRENT_TIMESTAMP WHERE id = $8 RETURNING *',
        [ai.name, ai.category, ai.description, ai.numero_contribuciones, ai.stars, ai.downloads, ai.logo, id]
    );
    return result.rows[0];
};

const deleteAI = async (id) => {
    await db.query('DELETE FROM AIs WHERE id = $1', [id]);
};

module.exports = {
    getAllAIs,
    getAIById,
    getAIsByCategory,
    createAI,
    updateAI,
    deleteAI,
};
