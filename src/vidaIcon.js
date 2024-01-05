class VidaIcon {
  constructor(icone_vida = 'O', icone_vida_perdida = 'X') {
    this._habilitado = true;
    this._iconeVida = icone_vida.green;
    this._iconeVidaPerdida = icone_vida_perdida.red;
  }

  toggleHabilitado() {
    const result = this.getHabilitado() ? false : true;
    this._habilitado = result;
  }

  getHabilitado() {
    return this._habilitado;
  }

  getIconVida() {
    return this._iconeVida;
  }

  getIconVidaPerdida() {
    return this._iconeVidaPerdida;
  }

  setIconVida(icon) {
    this._iconeVida = icon;
  }

  setIconVidaPerdida(icon) {
    this._iconeVidaPerdida = icon;
  }
}

module.exports = VidaIcon;