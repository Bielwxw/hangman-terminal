const colors = require('colors');

colors.setTheme({
  voltar: 'yellow',
  error: ['red', 'bold'],
  menuBlue: ['blue', 'bold'],
  menuGreen: ['green', 'bold'],
  menuMagenta: ['magenta', 'bold'],
  vidaPerdida: 'red',
  vida: 'green'
});

require('./src/config/index');

const MenuInicial = require('./src/menuInicial');
const menu = new MenuInicial();
menu.runMenu();