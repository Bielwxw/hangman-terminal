// const prompt = require('prompt-sync') ({sigint: false});
const MenuInicial = require('./src/menuInicial');
require('./src/config/index');

const menu = new MenuInicial();
menu.runMenu();