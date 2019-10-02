const multer = require("multer");
const path = require("path");
module.exports = {
  storage: multer.diskStorage({
    //path.resolve -> porque o ../../ nao e entendivel pelo windows, e separamos cada parte por ","
    //__dirname -> para o codigo compreender qual diretorio esta esse arquivo
    destination: path.resolve(__dirname, "..", "..", "uploads"),
    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname); //pegando extensão da imagem
      const name = path.basename(file.originalname, ext); //pegando nome da imagem

      //funação que vai ser chamada assim que o nome do arquivo estiver pronto
      cb(
        null, // primeiro paramentro para identificar erros, como e uma operação simples vou deixar como null
        `${name}-${Date.now()}-${ext}` //formando o nome do arquivo com(nome do arquivo-contagem de segundos-extensão)
      );
    }
  })
};
