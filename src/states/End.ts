export default class extends Phaser.State {
  keys: any

  create() {
    this.game.stage.backgroundColor = '#222';

    this.keys = this.game.input.keyboard.addKeys({
      enter: Phaser.KeyCode.ENTER,
      space: Phaser.KeyCode.SPACEBAR,
    });

    this.game.add.bitmapText(
      16,
      12,
      'FixedSys',
      'Večina v Sloveniji pro-\rdanih jajc je iz bate-\rrijske reje. ' +
      'Življenja\rkokoši, ki jih znesejo,\rso približno tako zaba-\rvna, kot ta igra.\r' +
      '\rENTER za ukrepanje.',
      16
    )

  }

  update() {
    if (this.keys.enter.isDown || this.keys.space.isDown) {
      window.location.href = 'http://www.danesjenovdan.si';
    }
  }
}
