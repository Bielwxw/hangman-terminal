const prompt = require('prompt-sync')({ sigint: false });
const Menu = require('./menu');

const { vidaIcon } = require('./config/');

class MenuAlterarIconVida extends Menu {
  runMenu(msg) {
    this.options(msg);
    let opt = parseInt(prompt('>> '));

    switch (opt) {
      case 1: break;
      case 2: break;
      case 3:
        vidaIcon.toggleCores();
        break;
      case 0: return;
      default:
        msg = '\nOpção Inválida!!!'.error;;
    }
    this.runMenu(msg);
  }

  options(warning) {
    const vidaText = vidaIcon.getCores() ? 'Desabilitar' : 'Habilitar';

    console.log(
      '\n' +
      'Alterar Ícones de Vida\n'.menuMagenta +
      '-----------------------------------\n'.menuMagenta +
      `1. Icone de Vida { ${vidaIcon.getIconVida()} }\n` +
      `2. Icone de Vida Perdida { ${vidaIcon.getIconVidaPerdida()} }\n` +
      `3. ${vidaText} Cores na Vida\n` +
      '-----------------------------------\n'.menuMagenta +
      '0. Voltar\n'.voltar +
      `${warning ? `\n${warning}\n` : ""}`
    );
  }
}

module.exports = MenuAlterarIconVida;