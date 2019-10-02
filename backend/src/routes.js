const express = require("express");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();

routes.post("/sessions", SessionController.store);

//exportando rotas para que a aplicação possa indentificar
module.exports = routes;
