export default class extends Phaser.State {
  keys: any;
  survival: boolean;
  nextScreen: string;
  textObject: Phaser.BitmapText;
  nextScreenPayload: any;
  upListener: any;
  downListener: any;
  leftListener: any;
  rightListener: any;

  init(survival: boolean) {
    this.survival = survival;
  }

  create() {
    // TODO THIS IS A HACK
    document.getElementById('tipke').classList.add('transparent');
    this.keys = this.game.input.keyboard.addKeys({
      enter: Phaser.KeyCode.ENTER,
      space: Phaser.KeyCode.SPACEBAR,
      m: Phaser.KeyCode.M,
    });

    this.textObject = this.game.add.bitmapText(16, 16, 'Munro', '', 10);
    this.textObject.maxWidth = 192;
  }

  update() {
    if (this.keys.enter.isDown || this.keys.space.isDown || this.input.pointer1.isDown) {
      this.continue();
    }

    if (this.keys.m.justPressed()) {
      console.log('ping');
      this.game.sound.mute = !this.game.sound.mute;
    }
  }

  continue() {
    this.state.start(this.nextScreen, true, false, this.nextScreenPayload);
  }
}
