import TextScreen from './_TextScreen';

export default class extends TextScreen {
  survival: boolean

  create() {
    super.create();
    this.game.stage.backgroundColor = '#222';

    this.nextScreen = 'Intro2';
    this.textObject.text =  'Mineva 5 let, odkar je vlada Mira Cerarja na južni meji začela postavljati žico. Vlada Janeza Janše politiko oteževanja prestopa meje seveda nadaljuje. Žica ni zmanjšala želje beguncev po boljši prihodnosti, je pa prestop meje naredila bolj nevaren.\n\nPritisni SPACE ali ENTER za nadaljevanje.';
    this.textObject.position.y = 68;

    const zica = this.game.add.image(112, 38, 'zica');
    zica.scale.set(2);
    zica.anchor.set(0.5);
    zica.smoothed = false;
  }
}
