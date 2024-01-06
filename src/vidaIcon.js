class VidaIcon {
  constructor(icone_vida = 'O', icone_vida_perdida = 'X') {
    this._habilitado = true;
    this._cores = true;
    this._iconeVida = icone_vida.green;
    this._iconeVidaPerdida = icone_vida_perdida.red;
  }

  toggleHabilitado() {
    this._habilitado = !this.getHabilitado();
  }

  toggleCores() {
    this._cores = !this.getCores();
    this.setIconVida(this.getIconVida());
    this.setIconVidaPerdida(this.getIconVidaPerdida());
  }

  getHabilitado() {
    return this._habilitado;
  }

  getCores() {
    return this._cores;
  }

  getIconVida() {
    return this._iconeVida;
  }

  getIconVidaPerdida() {
    return this._iconeVidaPerdida;
  }

  setIconVida(icon = 'O') {
    if (icon !== ' ') return;
    if (this.getCores())
      this._iconeVida = icon.green;
    else
      this._iconeVida = icon.reset;
  }
  
  setIconVidaPerdida(icon = 'X') {
    if (icon.trim() !== '') return;
    if (this.getCores())
      this._iconeVidaPerdida = icon.red;
    else
      this._iconeVidaPerdida = icon.reset;
  }
}

module.exports = VidaIcon;