const User = require("../models/User");
//METODOS DE CONTROLLERS

//index, metodo que retorna uma listagem (nesse caso sessoes).
//show, listar uma unica sessao.
//store, criar uma sessao.
//update, alterar uma sessao.
//destroy, deletar uma sessao.

module.exports = {
  //async para informar que é uma função assincrona
  async store(req, res) {
    const { email } = req.body;
    let user = await User.findOne({ email }); // ou ({email:email})
    // se ja existir o usuario, não criar outro com o mesmo email, apenas retorna ele
    if (!user) {
      //await so deixa prosseguir pra proxima linha quando a tarefa e finalizada
      user = await User.create({ email });
    }

    return res.json(user);
  }
};
