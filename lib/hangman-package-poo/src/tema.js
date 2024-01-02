class Tema {
  static _allTemas = [];

  static addTema(tema) {
    Tema._allTemas.push(tema);
  }

  constructor(tema) {
    this._tema = tema;
    this._palavras = new Set();
  }

  getTema() {
    return this._tema;
  }

  setTema(tema) {
    this._tema = tema;
  }

  getPalavras() {
    return this._palavras;
  }

  adicionarPalavra(palavra) {
    const uppercase = palavra.toUpperCase();
    this._palavras.add(uppercase);
  }

  removerPalavra(palavra) {
    this._palavras.delete(palavra);
  }

  palavraAleatoria() {
    const palavras = this.getPalavras();
    const index = Math.floor(Math.random() * palavras.size);
    return [...palavras][index];
  }

}

module.exports = Tema;