const { setupLangChain, getLastSqlQuery } = require("../services/langchain");
const db = require("../config/db");

const getRecommendations = async (req, res) => {
  const { prompt } = req.body;
  try {
    // Configurar LangChain
    const chain = await setupLangChain();
    const result = await chain.invoke({ question: prompt });

    // Obtener la última consulta SQL logueada
    const lastSqlQuery = getLastSqlQuery();

    // Ejecutar la consulta SQL obtenida
    const queryResult = await db.query(lastSqlQuery);

    res.json({
      response: result,
      queryResult: queryResult.rows, // Asumiendo que quieres los resultados de la consulta en formato de filas
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getRecommendations };
