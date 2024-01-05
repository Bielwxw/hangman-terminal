class FimDeJogo {
  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async ganhou() {
    const emote1 =
      "         \n" +
      "    O     \n" +
      "   /|\\   \n" +
      "   / \\   \n";

    const emote2 =
      "         \n" +
      "   \\O/    \n" +
      "    |     \n" +
      "   / \\   \n";

    await this.print(emote1, emote2);
  }

  async perdeu() {
    const emote1 = "Perdeu";
    const emote2 = "Perdeu".error;

    await this.print(emote1, emote2);
  }

  async print(emote1, emote2) {
    for (let i = 0; i <= 3; i++) {
      console.clear();
      console.log(emote1);

      await this.delay(300);

      console.clear();
      console.log(emote2);

      await this.delay(300);
    }
  }
}

module.exports = FimDeJogo;