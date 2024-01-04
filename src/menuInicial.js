const prompt = require('prompt-sync') ({sigint: false});
const Menu = require('./menu');

const ClassMenuJogar = require('./menuJogar');
const menuJogar = new ClassMenuJogar();

const ClassMenuConfig = require('./menuDeConfiguracao');
const menuConfig = new ClassMenuConfig();

const { jogador } = require('./config/index');

class MenuInicial extends Menu {
  runMenu(msg) {
    this.options(msg);
    let opt = parseInt(prompt('>> '));

    msg = "";

    switch(opt) {
      case 0:
        msg = 'Saindo do Sistema...';
        this.options(msg);
        return;

      case 1:
        menuJogar.runMenu();
        break;

      case 2:
        menuConfig.runMenu();
        break;

      default:
        msg = "Opção Inválida!!!";
    }
    this.runMenu(msg);
  }

  options(warning) {
    console.clear();
    console.log(
      '\n'+
      'Menu Inicial\n'+
      '-----------------------\n'+
      '1- Jogar\n'+
      '2- Configurações\n'+
      '0- Sair\n'+
      '-----------------------\n'+
      `Maior Pontuação: ${jogador.getMaiorPontuacao()}\n`+
      `${warning ? `\n${warning}\n` : ""}`
    );
  }
}

module.exports = MenuInicial;