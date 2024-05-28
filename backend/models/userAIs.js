const db = require('../config/db');

const getAllUserAIs = async () => {
    const result = await db.query('SELECT * FROM usuarios_ais_likeadas');
    return result.rows;
};

const getUserAIsByUserId = async (userId) => {
    const result = await db.query('SELECT * FROM usuarios_ais_likeadas WHERE usuario_id = $1', [userId]);
    return result.rows;
};

const likeAI = async (userId, aiId) => {
    const result = await db.query(
        'INSERT INTO usuarios_ais_likeadas (usuario_id, ai_id, liked_at) VALUES ($1, $2, CURRENT_TIMESTAMP) RETURNING *',
        [userId, aiId]
    );
    return result.rows[0];
};

const unlikeAI = async (userId, aiId) => {
    await db.query('DELETE FROM usuarios_ais_likeadas WHERE usuario_id = $1 AND ai_id = $2', [userId, aiId]);
};

module.exports = {
    getAllUserAIs,
    getUserAIsByUserId,
    likeAI,
    unlikeAI,
};
