const { Forca: ClassForca } = require('../../lib/hangman-package-poo/index');

const skins = require('./skinForca.json');

const forca = new ClassForca();
for (const skin in skins) {
  forca.addSkin(skins[skin]);
}

module.exports = forca;