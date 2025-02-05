const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const porta = process.env.PORT || 3001;

// Iniciando o APP
const app = express();
app.use(express.json());
app.use(cors());

requireDir("./src/models");

// Rotas
app.use("/api", require("./src/routes"));

app.listen(porta);

// Iniciando o DB
// admin
// FdHB83x5Dz7pvlNM
//xjEybjHsRyRHhYPb
mongoose.connect(
  "mongodb+srv://matheus23:xjEybjHsRyRHhYPb@gfin-api.2vd7e.mongodb.net/?retryWrites=true&w=majority&appName=gfin-api",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.error("Erro ao conectar ao MongoDB:", err);
    } else {
      console.log("Conectado ao MongoDB com sucesso!");
    }
  }
);
