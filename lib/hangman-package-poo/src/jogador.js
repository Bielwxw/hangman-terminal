class Jogador {
  constructor() {
    this._maiorPontuacao = 0;
    this._pontuacao = 0;
    this._vida = 0;
  }
  getMaiorPontuacao() {
    return this._maiorPontuacao;
  }
  setMaiorPontuacao(pontuacao) {
    this._maiorPontuacao = pontuacao;
  }
  getPontuacao() {
    return this._pontuacao;
  }
  setPontuacao(pontuacao) {
    this._pontuacao = pontuacao;

    if (pontuacao > this.getMaiorPontuacao()) {
      this.setMaiorPontuacao(pontuacao);
    }
  }
  getVida() {
    return this._vida;
  }
  setVida(vida) {
    this._vida = vida;
  }
}

module.exports = Jogador;