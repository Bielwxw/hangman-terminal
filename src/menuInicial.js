const prompt = require('prompt-sync') ({sigint: false});
const Menu = require('./menu');

const { menuJogar, menuConfig } = require('./packageConfig');

class MenuInicial extends Menu {
  runMenu() {
    console.log(
    '\n'+
    'Menu Inicial\n'+
    '-----------------\n'+
    '1- Jogar\n'+
    '2- Configurações\n'+
    '0- Sair\n'
    );
    let opt = parseInt(prompt('>> '));

    switch(opt) {
      case 0:
        console.log('\nSaindo do Sistema...\n');
        return;

      case 1:
        menuJogar.runMenu();
        break;

      case 2:
        menuConfig.runMenu();
        break;

      default:
        console.log('\nOpção Inválida!');
    }
    this.runMenu();
  }
}

module.exports = MenuInicial;