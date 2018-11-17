import TextScreen from './_TextScreen';

export default class extends TextScreen {
  survival: boolean

  create() {
    super.create();
    this.game.stage.backgroundColor = '#222';

    this.nextScreen = 'CampIntro';
    this.textObject.text = 'Uspelo ti je doseči begunsko taborišče, ki je prenatrpano, higienske razmere so neprimerne, manjka osnovnih potrebščin. Na Lezbosu je v enem takih kampov nastanjenih 6000 beguncev, prostora pa je le za 2000 oseb.'
    this.textObject.position.y = 78;

    const zica = this.game.add.image(112, 38, 'taborisce');
    zica.scale.set(2);
    zica.anchor.set(0.5);
    zica.smoothed = false;
  }
}
