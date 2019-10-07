const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const routes = require("./routes"); // caminho relativo para arquivo.

const app = express();

//CONECTANDO COM ATLAS

// mongoose.connect(
//   "mongodb+srv://oministack:oministack@aircnc-vuuqo.mongodb.net/aircnc?retryWrites=true&w=majority",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   }
// );

//CONECTANDO COM LOCAL

mongoose.connect("mongodb://localhost/Aircnc", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// GET, POST, PUT, DELETE

// req.query = Acessar query params (para filtros)
// req.params = Acessar route params (para edição, delete)
// req.body = Acessar corpo da requisição (para criação)

app.use(cors());
app.use(express.json());
app.use("/files", express.static(path.resolve(__dirname, "..", "uploads"))); //usando o path para manipular imagem
app.use(routes);

app.listen(3333);
