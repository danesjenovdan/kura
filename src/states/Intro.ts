import TextScreen from './_TextScreen';

export default class extends TextScreen {
  survival: boolean

  create() {
    super.create();
    this.game.stage.backgroundColor = '#222';

    this.nextScreen = 'Intro2';
    this.textObject.text =  'November 2018 marked 3 years since Slovenia started building razor-wire fence on its southern border. So-called technical barriers did no reduce number of entries, they just made entry more dangerous.\n\Press SPACE or ENTER to continue.';
    this.textObject.position.y = 78;

    const zica = this.game.add.image(112, 38, 'zica');
    zica.scale.set(2);
    zica.anchor.set(0.5);
    zica.smoothed = false;
  }
}
