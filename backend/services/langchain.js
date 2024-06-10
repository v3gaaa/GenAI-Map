require('dotenv').config();
const { ChatOpenAI } = require('@langchain/openai');
const { createSqlQueryChain } = require('langchain/chains/sql_db');
const { SqlDatabase } = require('langchain/sql_db');
const { DataSource } = require('typeorm');
const { QuerySqlTool } = require('langchain/tools/sql');
const { PromptTemplate } = require('@langchain/core/prompts');
const { StringOutputParser } = require('@langchain/core/output_parsers');
const { RunnablePassthrough, RunnableSequence } = require('@langchain/core/runnables');

const datasource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: {
    rejectUnauthorized: false,
  },
});

const setupLangChain = async () => {
  const db = await SqlDatabase.fromDataSourceParams({
    appDataSource: datasource,
  });
  const llm = new ChatOpenAI({
    model: 'gpt-4',
    temperature: 0,
    apiKey: process.env.OPENAI_API_KEY,
  });

  const executeQuery = new QuerySqlTool(db);
  const writeQuery = await createSqlQueryChain({
    llm,
    db,
    dialect: 'postgres',
  });

  const answerPrompt = PromptTemplate.fromTemplate(`Given the following user question, corresponding SQL query, and SQL result, answer the user question.

Question: {question}
SQL Query: {query}
SQL Result: {result}
Answer: `);

  const answerChain = answerPrompt.pipe(llm).pipe(new StringOutputParser());

  const chain = RunnableSequence.from([
    RunnablePassthrough.assign({ query: writeQuery }).assign({
      result: (i) => executeQuery.invoke(i.query),
    }),
    answerChain,
  ]);

  return chain;
};

module.exports = { setupLangChain };
