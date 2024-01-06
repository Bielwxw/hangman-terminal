const prompt = require('prompt-sync')({ sigint: false });

class Menu {
  runMenu(msg) {
    this.options(msg);
    let opt = parseInt(prompt('>> '));

    switch (opt) {
      case 1: break;
      case 2: break;
      case 0: return;
      default:
        msg = '\nOpção Inválida!!!'.error;;
    }
    this.runMenu(msg);
  }

  options(warning) {
    console.log(
      "\n" +
      "0- Opção 0\n" +
      "1- Opção 1\n" +
      "2- Opção 2\n" +
      `${warning ? `\n${warning}\n` : ""}`
    );
  }
}

module.exports = Menu;