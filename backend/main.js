require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// Se importa la configuración de la base de datos
const db = require("./config/db");

// Se importan las rutas
const routes = require("./routes");

// Inicio de la aplicación
const app = express();
const port = process.env.PORT || 8000;

// Middlewares (Plug-ins del servidor)
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Uso de las rutas
app.use("/api", routes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
