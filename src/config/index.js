const pacote = require('../../lib/hangman-package-poo/index');
require('./temaConfig');

const forca = require('./forcaConfig');

const ClassVida = require('../vidaIcon');
const vidaIcon = new ClassVida();

const jogador = new pacote.Jogador();

module.exports = {
  forca,
  jogador,
  vidaIcon
};