const prompt = require('prompt-sync') ({sigint: false});
const Menu = require('./menu');

const { vidaIcon } = require('./packageConfig');

class MenuConfig extends Menu {
  runMenu() {
    console.log(
    '\n'+
    'Configurações\n'+
    '-----------------\n'+
    '1- Alterar Forca\n'+
    '2- Alterar os Ícone de Vida\n'+
    '3- Adicionar Palavra\n'+
    `4- ${vida.getHabilitado() ? 'Desabilitar' : 'Habilitar'} os Ícones de Vida\n`+
    '0- Sair\n'
    );
    let opt = parseInt(prompt('>> '));

    switch(opt) {
      case 0:
        console.log('\nSaindo do Sistema...\n');
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
        console.log('\nOpção Inválida!');
    }
    this.runMenu();
  }
}

module.exports = MenuConfig;