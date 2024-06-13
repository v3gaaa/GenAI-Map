const db = require('../config/db');

const getAllUsers = async () => {
    const result = await db.query('SELECT * FROM usuarios');
    return result.rows;
};

const getUserById = async (id) => {
    const result = await db.query('SELECT * FROM usuarios WHERE id = $1', [id]);
    return result.rows[0];
};

const getUserByUsername = async (username) => {
    const result = await db.query('SELECT * FROM usuarios WHERE username = $1', [username]);
    return result.rows[0];
}

const getUserByEmail = async (email) => {
    const result = await db.query('SELECT * FROM usuarios WHERE email = $1', [email]);
    return result.rows[0];
}

const createUser = async (user) => {
    const result = await db.query(
        'INSERT INTO usuarios (username, email, password, created_at, updated_at, firstname, lastname) VALUES ($1, $2, $3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, $4, $5) RETURNING *',
        [user.username, user.email, user.password, user.firstname, user.lastname]
    );
    return result.rows[0];
};

const updateUser = async (id, user) => {
    const result = await db.query(
        'UPDATE usuarios SET username = $1, email = $2, password = $3, updated_at = CURRENT_TIMESTAMP WHERE id = $4 RETURNING *',
        [user.username, user.email, user.password, id]
    );
    return result.rows[0];
};

const deleteUser = async (id) => {
    await db.query('DELETE FROM usuarios WHERE id = $1', [id]);
};

module.exports = {
    getAllUsers,
    getUserById,
    getUserByUsername,
    getUserByEmail,
    createUser,
    updateUser,
    deleteUser,
};
