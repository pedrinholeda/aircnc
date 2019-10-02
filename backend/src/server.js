const express = require("express");

const app = express();

// GET, POST, PUT, DELETE

// req.query = Acessar query params (para filtros)
// req.params = Acessar route params (para edição, delete)
// req.body = Acessar corpo da requisição (para criação)

app.post("/users", (req, res) => {
  return res.json({ message: "Hello World" });
});

app.listen(3333);
