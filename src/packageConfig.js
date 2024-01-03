const pacote = require('../lib/hangman-package-poo/index');


const skins = require('./skinForca.json');

const forca = new pacote.Forca();
for (const skin in skins) {
  forca.addSkin(skin);
}


const ClassVida = require('./vidaIcon');
const vidaIcon = new ClassVida();


const jogador = new pacote.Jogador();
const palavra = new pacote.Palavra();


const { Tema } = pacote;
const temas = require('./temas.json');

for (const tema in temas) {
  const {nome, palavras} = temas[tema];
  const novoTema = new Tema(nome, palavras);

  Tema.addTema(novoTema);
}


const ClassMenuJogar = require('./menuJogar');
const ClassMenuConfig = require('./menuConfig');

const menuJogar = new ClassMenuJogar();
const menuConfig = new ClassMenuConfig();


module.exports = {
  forca,
  jogador,
  palavra,
  vidaIcon,
  menuJogar,
  menuConfig
};