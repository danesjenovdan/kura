export default class extends Phaser.State {
  keys: any
  survival: boolean
  nextScreen: string
  textObject: Phaser.BitmapText
  nextScreenPayload: any

  init(survival: boolean) {
    this.survival = survival;
  }

  create() {
    this.keys = this.game.input.keyboard.addKeys({
      enter: Phaser.KeyCode.ENTER,
      space: Phaser.KeyCode.SPACEBAR,
    });

    this.textObject = this.game.add.bitmapText(16, 16, 'Munro', '', 10);
    this.textObject.maxWidth = 192;
  }

  update() {
    if (this.keys.enter.isDown || this.keys.space.isDown) {
      this.continue();
    }
  }

  continue() {
    this.state.start(this.nextScreen, true, false, this.nextScreenPayload);
  }
}
