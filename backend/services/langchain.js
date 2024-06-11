require('dotenv').config();
const { ChatOpenAI } = require('@langchain/openai');
const { createSqlQueryChain } = require('langchain/chains/sql_db');
const { SqlDatabase } = require('langchain/sql_db');
const { DataSource } = require('typeorm');
const { QuerySqlTool } = require('langchain/tools/sql');
const { PromptTemplate } = require('@langchain/core/prompts');
const { StringOutputParser } = require('@langchain/core/output_parsers');
const { RunnablePassthrough, RunnableSequence } = require('@langchain/core/runnables');

// Envolver console.log para capturar el último valor logueado
(function() {
  var originalLog = console.log;
  var lastLog;

  console.log = function() {
    lastLog = Array.from(arguments).join(' ');
    originalLog.apply(console, arguments);
  };

  console.getLastLog = function() {
    return lastLog;
  };
})();

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

let lastSqlQuery = '';

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

  const answerPrompt = PromptTemplate.fromTemplate(`Given the following user question, generate a SQL query that finds the info that the user wants, execute the query, and return the results (The query should always start with=(SELECT "id",). The user is not aware of SQL or technical details, so provide a concise and user-friendly description of the results. Start with a general overview (summary), followed by why they are good (Based on the description that each AI has). Dont tell the user anything about databases is super important you give the user relevant info only. Be an assistant

  User's Question: {question}
  SQL Query: {query}
  SQL Result: {result}
  Answer:

  Summary: Provide a general summary of the results.`);
  
  const answerQuery = await answerPrompt.pipe(llm).pipe(new StringOutputParser());
  
  const answerChain = answerPrompt.pipe(llm).pipe(new StringOutputParser());

  const chain = RunnableSequence.from([
    RunnablePassthrough.assign({ query: writeQuery }).assign({
      console: (i) => {
        lastSqlQuery = i.query;
        console.log(i.query);
      },
      result: (i) => executeQuery.invoke(i.query),
    }),
    answerChain,
  ]);

  return chain;
};

const getLastSqlQuery = () => lastSqlQuery;

module.exports = { setupLangChain, getLastSqlQuery };
