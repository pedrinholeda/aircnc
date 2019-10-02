const express = require("express");
const mongoose = require("mongoose");

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

app.use(express.json());
app.use(routes);

app.listen(3333);
