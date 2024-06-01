const db = require("../config/db");

const getAllAIs = async () => {
  const result = await db.query("SELECT * FROM AIs");
  return result.rows;
};

const getAIById = async (id) => {
  const result = await db.query("SELECT * FROM AIs WHERE id = $1", [id]);
  return result.rows[0];
};

const getAIsByCategory = async (category) => {
  const result = await db.query("SELECT * FROM AIs WHERE category = $1", [
    category,
  ]);
  return result.rows;
};

const createAI = async (ai) => {
  const result = await db.query(
    "INSERT INTO AIs (name, category, description, numero_contribuciones, stars, downloads, fecha_añadido, logo) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
    [
      ai.name,
      ai.category,
      ai.description,
      ai.numero_contribuciones,
      ai.stars,
      ai.downloads,
      ai.fecha_añadido,
      ai.logo,
    ]
  );
  return result.rows[0];
};

const updateAI = async (id, ai) => {
  const result = await db.query(
    "UPDATE ais SET name = $1, category = $2, description = $3, numero_contribuciones = $4, stars = $5, downloads = $6, fecha_añadido = $7 WHERE id = $8 RETURNING *",
    [
      ai.name,
      ai.category,
      ai.description,
      ai.numero_contribuciones,
      ai.stars,
      ai.downloads,
      ai.fecha_añadido,
      id,
    ]
  );
  return result.rows[0];
};

const deleteAI = async (id) => {
  await db.query("DELETE FROM AIs WHERE id = $1", [id]);
};

module.exports = {
  getAllAIs,
  getAIById,
  getAIsByCategory,
  createAI,
  updateAI,
  deleteAI,
};
