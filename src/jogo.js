const prompt = require('prompt-sync') ({sigint: false});

const { jogador, forca, vidaIcon } = require('./config/index');

const {Palavra} = require('../lib/hangman-package-poo/index');
const palavra = new Palavra();

class Jogo {
  constructor() {
    this._letras = [];
    this._vidaPadrao = 6;
  }

  getLetras() {
    return this._letras;
  }

  setLetras(lista) {
    this._letras = lista;
  }

  addLetra(letra) {
    this._letras.push(letra);
  }

  getVidaPadrao() {
    return this._vidaPadrao;
  }

  run(tema) {
    jogador.setVida(6);
    palavra.novaPalavra(tema);

    while(jogador.getVida() > 0) {
      this.print();
      let letra = prompt('>> ');

      if (palavra.verificarLetra(letra)) {
        palavra.addLetra(letra);
      }
      else {
        const dano = jogador.getVida() - 1;
        jogador.setVida(dano);
        forca.setEstado(this.getVidaPadrao() - jogador.getVida());
      }
    }
  }

  print() {
    let vidaStr = "";
    if (vidaIcon.getHabilitado()) {
      const vidaPerdida = this.getVidaPadrao() - jogador.getVida();
      for (let i = 0; i < vidaPerdida; i++) {
        vidaStr += vidaIcon.getIconVidaPerdida() + " ";
      }
      for (let i = 0; i < jogador.getVida(); i++) {
        vidaStr += vidaIcon.getIconVida() + " ";
      }
    }
    vidaStr += "\n";

    console.clear();
    console.log(
      "\n" +
      `Letras: ${this.getLetras()}\n` +
      `Pontuação: ${jogador.getPontuacao()}\n` +
      `${forca.getSkinAtual()}\n` +
      `${vidaStr}\n` +
      `Tema: ${palavra.getTema()}\n`+
      `Texto: ${palavra.getPosicao().join(' ')}\n`
    );
  }

  printPerdeu() {

  }
}

module.exports = Jogo;