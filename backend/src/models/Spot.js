const mongoose = require("mongoose");

const SpotSchema = new mongoose.Schema({
  thumbnail: String,
  company: String,
  price: Number,
  techs: [String],
  user: {
    type: mongoose.Schema.Types.ObjectId, //vai pegar o id que e gerado automaticamente pelo mongo
    ref: "User" //referencia ao model
  }
});

module.exports = mongoose.model("Spot", SpotSchema);
