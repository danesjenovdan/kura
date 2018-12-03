import TextScreen from './_TextScreen';

export default class extends TextScreen {
  survival: boolean

  create() {
    super.create();
    this.game.stage.backgroundColor = '#222';

    this.nextScreen = 'Tutorial';
    this.textObject.text = 'It seems in 3 years we have accepted the wire. We have allowed ourselves to forget that which should not be forgotten.\n\nYou are put in the shoes of a refugee trying to reach brave new world. There is nothing nice to see here, only frustration and death.';
    this.textObject.position.y = 78;

    const zica = this.game.add.image(112, 38, 'zica');
    zica.scale.set(2);
    zica.anchor.set(0.5);
    zica.smoothed = false;
  }
}
