import TextScreen from './_TextScreen';

export default class extends TextScreen {
  survival: boolean

  create() {
    super.create();
    this.game.stage.backgroundColor = '#222';

    this.nextScreen = 'Intro2';
    this.textObject.text =  'November 2018 marked 3 years since Slovenia started building razor wire and fences on its southern border. The so-called technical barriers did not reduce the number of illegal entries, they just made them more dangerous.\n\Press SPACE or ENTER to continue.';
    this.textObject.position.y = 78;

    const zica = this.game.add.image(112, 38, 'zica');
    zica.scale.set(2);
    zica.anchor.set(0.5);
    zica.smoothed = false;
  }
}
