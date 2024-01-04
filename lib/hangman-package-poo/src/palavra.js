class Palavra {
  constructor() {
    this._palavraSecreta = [];
    this._posicao = [];
    this._tema = "";
  }

  getPosicao() {
    return this._posicao;
  }

  getTema() {
    return this._tema;
  }

  novaPalavra(tema) {
    const palavraDoTema = tema.palavraAleatoria();
    this.setPalavra(palavraDoTema);
    this._tema = tema.getTema();
  }

  setPalavra(palavra) {
    this._palavraSecreta = Array.from(palavra);
    this._posicao = [];
    this._palavraSecreta.forEach(letra => {
      this._posicao.push(letra !== ' ' ? '_' : ' ');
    });
  }

  verificarPalavra() {
    if (this.getPosicao().join() === this._palavraSecreta.join())
      return true;
    else
      return false;
  }

  verificarLetra(letra) {
    const txt = this._palavraSecreta.join('').normalize("NFD").replace(/[\u0300-\u036f]/g, '');
    const listaLetras = txt.toUpperCase().split('');
    letra = letra.toUpperCase();

    if (listaLetras.includes(letra)) return true;

    return false;
  }

  addLetra(letra) {
    const txt = this._palavraSecreta.join('').normalize("NFD").replace(/[\u0300-\u036f]/g, '');
    const listaLetras = txt.toUpperCase().split('');
    letra = letra.toUpperCase();

    listaLetras.forEach((letraDaLista, index) => {
      if (letraDaLista !== letra) return;
      this._posicao[index] = this._palavraSecreta[index];
    });
  }

}

module.exports = Palavra;