const prompt = require('prompt-sync')({ sigint: false });

const { jogador, forca, vidaIcon } = require('./config/index');

const { Palavra } = require('../lib/hangman-package-poo/index');
const palavra = new Palavra();

const ClassFimDeJogo = require('./fimDeJogo');
const fimDeJogo = new ClassFimDeJogo();
class Jogo {
  constructor() {
    this._letras = [];
    this._vidaPadrao = 6;
    this._niveisDePontuacao = [40, 35, 30, 15, 10, 5, 0];
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

  getNiveisDePontuacao() {
    return this._niveisDePontuacao;
  }

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  verificarLetraRepetida(letra) {
    if (this.getLetras().includes(letra))
      return true;
    else
      return false;
  }

  reset() {
    this.setLetras([]);
    forca.setEstado(0);
  }

  async run(tema) {
    jogador.setVida(6);
    palavra.novaPalavra(tema);

    let text = "";

    while (jogador.getVida() > 0) {
      this.print(text);
      let letra = prompt('>> '.dim).trim().toUpperCase()[0] ?? "";

      text = "";

      if (letra === "") continue;

      if (letra === "-") {
        text = "Hífens já são Colocados Automaticamente!".error;
        continue;
      }

      const value = this.verificarLetraRepetida(letra);
      if (value) {
        text = "A Letra ".error + `{${letra}}`.green + " já foi Utilizada!".error;
        continue;
      }

      if (palavra.verificarLetra(letra)) {
        palavra.addLetra(letra);
        const p = this.getNiveisDePontuacao()[forca.getEstado()];
        jogador.addPontuacao(p);
      }
      else {
        const dano = jogador.getVida() - 1;
        jogador.setVida(dano);
        forca.setEstado(this.getVidaPadrao() - jogador.getVida());
      }

      this.addLetra(letra);

      if (palavra.verificarPalavra()) {
        this.print();
        await this.delay(800);
        await fimDeJogo.ganhou();
        this.reset();
        break;
      }
      if (jogador.getVida() <= 0) {
        this.print();
        await this.delay(800);
        await fimDeJogo.perdeu();
        jogador.setPontuacao(0);
        this.reset();
        break;
      }
    }
  }

  print(texto) {
    let vidaStr;

    if (vidaIcon.getHabilitado()) {
      vidaStr = "";
      const vidaPerdida = this.getVidaPadrao() - jogador.getVida();

      for (let i = 0; i < vidaPerdida; i++) {
        vidaStr += vidaIcon.getIconVidaPerdida().vidaPerdida + " ";
      }

      for (let i = 0; i < jogador.getVida(); i++) {
        vidaStr += vidaIcon.getIconVida().vida + " ";
      }
      vidaStr += "\n";
    }

    console.clear();
    console.log(
      "\n" +
      `Letras: ${this.getLetras().join(', ')}\n` +
      `Pontuação: ${jogador.getPontuacao()}\n` +
      `\n${forca.getSkinAtual()}\n` +
      `${vidaStr ? vidaStr : ""}\n` +
      `Tema: ${palavra.getTema()}\n` +
      `Texto: ${palavra.getPosicao().join(' ')}\n` +
      `${texto ? "\n"+texto : ""}`
    );
  }
}

module.exports = Jogo;