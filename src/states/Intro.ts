export default class extends Phaser.State {
  keys: any
  survival: boolean

  init(survival: boolean) {
    this.survival = survival;
  }

  create() {
    this.keys = this.game.input.keyboard.addKeys({
      enter: Phaser.KeyCode.ENTER,
      space: Phaser.KeyCode.SPACEBAR,
    });

    let text =
      'Uporabi puščice na tip-\nkovnici za premikanje.\n' +
      '\nDa izležeš jajce, pravo-\nčasno pritisni presledek.\n';

    if (this.survival) {
      text += '\nZberi čimveč jajc, čas\nni omejen.'
    }
    else {
      text += '\nZberi 5 jajc za napredo-\nvanje v drugo stopnjo.'
    }

    this.game.add.bitmapText(16, 12, 'FixedSys', text, 16)
    this.game.time.events.add(Phaser.Timer.SECOND * 10, () => this.startGame());
  }

  update() {
    if (this.keys.enter.isDown || this.keys.space.isDown) {
      this.startGame();
    }
  }

  startGame() {
    this.state.start('Game', true, false, this.survival);
  }
}
