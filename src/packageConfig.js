const pacote = require('../lib/hangman-package-poo/index');

const skins = require('./skinForca.json');

const jogador = new pacote.Jogador();

const forca = new pacote.Forca();
for (const skin in skins) {
  forca.addSkin(skin);
}

module.exports = {
  forca,
};