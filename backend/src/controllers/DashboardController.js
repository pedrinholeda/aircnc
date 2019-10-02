const Spot = require("../models/Spot");
module.exports = {
  async show(req, res) {
    const { user_id } = req.headers; //buscando id do usuario logado

    const spots = await Spot.find({ user: user_id }); //buscando todos os spots que o campo user e igual ao campo user que esta vindo do cabeçalho

    return res.json(spots);
  }
};
