const prompt = require('prompt-sync') ({sigint: false});
const Menu = require('./menu');

const ClassJogo = require('./jogo');
const jogo = new ClassJogo();

class MenuJogar extends Menu {
  runMenu() {
    console.log(
    '\n'+
    'Temas:\n'+
    '-----------------\n'+
    '1- Tema 1\n'+
    '2- Tema 2\n'+
    '0- Voltar'
    );
    let opt = parseInt(prompt('>> '));

    switch(opt) {
      case 0:
        return;

      case 1:
        jogo.run(1);
        break;

      case 2:
        jogo.run(2);
        break;

      default:
        console.log('Opção Inválida!');
      }
      this.runMenu();
  }
}

module.exports = MenuJogar;