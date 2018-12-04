import TextScreen from './_TextScreen';

export default class extends TextScreen {
  survival: boolean

  create() {
    super.create();
    this.game.stage.backgroundColor = '#222';

    this.nextScreen = 'Tutorial';
    this.textObject.text = 'In 3 years, we have quietly accepted the reality of the wire, allowing ourselves to forget that which should never be forgotten.\n\nTry taking on the role of a refugee attempting to reach safety. There is nothing nice to see here, only frustration and death.';
    this.textObject.position.y = 78;

    const zica = this.game.add.image(112, 38, 'zica');
    zica.scale.set(2);
    zica.anchor.set(0.5);
    zica.smoothed = false;
  }
}
