const { setupLangChain } = require('../services/langchain');

const getRecommendations = async (req, res) => {
  const { prompt } = req.body;
  try {
    const chain = await setupLangChain();
    const result = await chain.invoke({ question: prompt });

    res.json({
      recommendations: result.data,
      explanation: result.text,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getRecommendations };
