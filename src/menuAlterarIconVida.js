const prompt = require('prompt-sync')({ sigint: false });
const Menu = require('./menu');

const { vidaIcon } = require('./config/');

class MenuAlterarIconVida extends Menu {
  runMenu(msg) {
    this.options(msg);
    let opt = prompt('>> '.dim);
    opt = opt === '' ? undefined : parseInt(opt);

    switch (opt) {
      case undefined: break;
      case 0: return;

      case 1:
        msg = "";
        vidaIcon.setIconVida(this.mudarIcon(1));
        break;

      case 2:
        msg = "";
        vidaIcon.setIconVidaPerdida(this.mudarIcon(2));
        break;

      case 3:
        vidaIcon.toggleHabilitado();
        break;

      default:
        msg = 'Opção Inválida!!!'.error;;
    }
    this.runMenu(msg);
  }

  options(warning) {
    const vidaHabilitado = vidaIcon.getHabilitado() ? 'Desabilitar' : 'Habilitar';

    console.clear();
    console.log(
      '\n' +
      'Alterar Ícones de Vida\n'.menuMagenta +
      '-----------------------------------\n'.menuMagenta +
      `1. Icone de Vida { ${vidaIcon.getIconVida().vida} }\n` +
      `2. Icone de Vida Perdida { ${vidaIcon.getIconVidaPerdida().vidaPerdida} }\n` +
      `3. ${vidaHabilitado} os Ícones de Vida\n` +
      '-----------------------------------\n'.menuMagenta +
      '0. Voltar\n'.voltar +
      `${warning ? `\n${warning}\n` : ""}`
    );
  }

  mudarIcon(num) {
    let text;
    if (num === 1)
      text = "Vida";
    else if (num === 2)
      text = "Vida Perdida";

    // console.clear();
    console.log(`\nEscolha um Novo Símbolo para ${text}`);
    const result = prompt('>> ')[0] || " ";
    return result;
  }
}

module.exports = MenuAlterarIconVida;