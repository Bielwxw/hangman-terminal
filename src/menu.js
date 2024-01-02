const prompt = require('prompt-sync') ({sigint: false});

class Menu {
  runMenu() {
    let opt = parseInt(prompt('>> '));

    switch(opt) {
      case 0: return;
      case 1: break;
      case 2: break;
      default: this.runMenu();
    }
  }
}

module.exports = Menu;