const { Tema } = require('../../lib/hangman-package-poo/index');
const temas = require('./temas.json');

for (const tema in temas) {
  const { nome, palavras } = temas[tema];
  const novoTema = new Tema(nome, palavras);

  Tema.addTema(novoTema);
}