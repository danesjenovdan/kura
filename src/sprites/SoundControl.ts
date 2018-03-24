enum HelpText {
  MUTED = 'F1: Vklopi zvok',
  UNMUTED = 'F1: Utišaj',
}

export default class extends Phaser.BitmapText {
  helpText: Phaser.BitmapText
  musicObject: Phaser.Sound

  constructor(game: Phaser.Game) {
    super(game, 24, 2, 'MunroSmall', HelpText.UNMUTED, 10);
    this.game.add.existing(this);
    this.musicObject = this.game.sound.play('soundtrack', 1, true);
  }

  toggle() {
    this.game.sound.mute = !this.game.sound.mute;
    this.text = this.game.sound.mute ? HelpText.MUTED : HelpText.UNMUTED;
  }

  stop() {
    this.musicObject.stop();
  }
}
