const prompt = require('prompt-sync')({ sigint: false });

class Menu {
  async runMenu(msg) {
    this.options(msg);
    let opt = parseInt(prompt('>> '));

    switch (opt) {
      case 0: return;
      case 1: break;
      case 2: break;
      default: this.runMenu();
    }
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