const prompt = require('prompt-sync')({ sigint: false });
const Menu = require('./menu');

const { Tema } = require('../lib/hangman-package-poo/index');
const { palavra } = require('./config/index');

const ClassJogo = require('./jogo');
const jogo = new ClassJogo();

class MenuJogar extends Menu {
  runMenu(msg) {
    let optTemas = "";
    Tema.getAllTemas().forEach((tema, index) => {
      optTemas += `${index + 1}- ${tema}\n`;
    });

    this.options(optTemas, msg);
    let opt = parseInt(prompt('>> '));

    msg = "";
    if (opt === 0) return;

    const temaSelected = Tema.selectTema(opt - 1);

    if (temaSelected === undefined) {
      msg = 'Opção Inválida!!!';
      this.runMenu(msg);
    }
    else {
      jogo.run(temaSelected);
    }
  }

  options(optTemas, warning) {
    console.clear();
    console.log(
      '\n' +
      'Temas\n' +
      '-----------------\n' +
      optTemas +
      '\n0- Voltar\n'+
      `${warning ? `\n${warning}\n` : ""}`
    );
  }
}

module.exports = MenuJogar;