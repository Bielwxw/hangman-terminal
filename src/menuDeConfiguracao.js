const prompt = require('prompt-sync')({ sigint: false });
const Menu = require('./menu');

const { vidaIcon } = require('./config/');

class MenuConfiguracao extends Menu {
  runMenu(msg) {
    this.options(msg);
    let opt = parseInt(prompt('>> '.dim));

    msg = "";

    switch (opt) {
      case 0:
        return;

      case 1:
        break;

      case 2:
        break;

      case 3:
        break;

      case 4:
        vidaIcon.toggleHabilitado();
        break;

      default:
        msg = '\nOpção Inválida!!!'.error;
    }
    this.runMenu(msg);
  }

  options(warning) {
    const text = vidaIcon.getHabilitado() ? 'Desabilitar' : 'Habilitar';
    text.yellow

    console.clear();
    console.log(
      '\n' +
      'Configurações\n'.menuMagenta +
      '-----------------------------------\n'.menuMagenta +
      '1. Alterar Forca\n' +
      '2. Alterar os Ícone de Vida\n' +
      '3. Adicionar Palavra\n' +
      `4. ${text} os Ícones de Vida\n` +
      '-----------------------------------\n'.menuMagenta +
      '0. Voltar\n'.voltar +
      `${warning ? `\n${warning}\n` : ""}`
    );
  }
}

module.exports = MenuConfiguracao;