import TextScreen from './_TextScreen';

export default class extends TextScreen {
  survival: boolean

  create() {
    super.create();
    this.game.stage.backgroundColor = '#222';

    this.nextScreen = 'Intro2';
    this.textObject.text =  'Letošnji november zaznamuje 3 leta, odkar je vlada na južni meji začela postavljati žico. T.i. tehnične ovire niso zmanjšale števila vstopov v Slovenijo, so jih pa naredile bolj nevarne.';
    this.textObject.position.y = 78;

    const zica = this.game.add.image(112, 38, 'zica');
    zica.scale.set(2);
    zica.anchor.set(0.5);
    zica.smoothed = false;
  }
}
