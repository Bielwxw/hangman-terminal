const colors = require('colors');

require('./src/config/index');

colors.setTheme({
  voltar: 'yellow',
  menuBlue: ['blue', 'bold'],
  menuGreen: ['green', 'bold'],
  menuMagenta: ['magenta', 'bold'],
  error: ['red', 'bold']
});

const MenuInicial = require('./src/menuInicial');
const menu = new MenuInicial();
menu.runMenu();