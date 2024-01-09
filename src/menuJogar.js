const prompt = require('prompt-sync')({ sigint: false });
const Menu = require('./menu');

const { Tema } = require('../lib/hangman-package-poo/index');

const ClassJogo = require('./jogo');
const jogo = new ClassJogo();

class MenuJogar extends Menu {
  async runMenu(msg) {
    let optTemas = "";
    Tema.getAllTemas().forEach((tema, index) => {
      optTemas += `${index + 1}. ${tema}\n`;
    });

    this.options(optTemas, msg);
    let opt = prompt('>> '.dim);
    opt = opt === '' ? undefined : parseInt(opt.trim());

    if (opt === 0) return;
    if (opt === undefined) {
      await this.runMenu(msg);
      return;
    }

    const temaSelected = Tema.selectTema(opt - 1);

    if (temaSelected === undefined) {
      msg = 'Opção Inválida!!!'.error;
      await this.runMenu(msg);
    }
    else {
      await jogo.run(temaSelected);
    }
  }

  options(optTemas, warning) {
    console.clear();
    console.log(
      '\n' +
      'Temas\n'.menuGreen +
      '-----------------\n'.menuGreen +
      optTemas +
      '-----------------\n'.menuGreen +
      '0. Voltar\n'.voltar +
      `${warning ? `\n${warning}\n` : ""}`
    );
  }
}

module.exports = MenuJogar;