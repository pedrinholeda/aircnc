const User = require("../models/User");
const Spot = require("../models/Spot");

module.exports = {
  async index(req, res) {
    const { tech } = req.query; //buscar um filtro

    const spots = await Spot.find({ techs: tech });

    return res.json(spots);
  },

  async store(req, res) {
    const { filename } = req.file; //importando somente o nome da imagem
    const { company, techs, price } = req.body;
    const { user_id } = req.headers;

    const user = await User.findById(user_id);

    if (!user) {
      res.status(400).json({ error: "User does not exists" });
    }

    const spot = await Spot.create({
      user: user_id,
      thumbnail: filename,
      company,
      techs: techs.split(",").map(tech => tech.trim()), //split para dividir as tecnologias pela virgula, e o .trim para remover espaços antes e depois da string
      price
    });

    return res.json(spot);
  }
};
