enum HelpText {
  MUTED = 'F1: Unmute',
  UNMUTED = 'F1: Mute',
}

export default class extends Phaser.BitmapText {
  helpText: Phaser.BitmapText

  constructor(game: Phaser.Game) {
    super(game, 24, 2, 'MunroSmall', HelpText.UNMUTED, 10);
    this.game.add.existing(this);
    this.game.sound.play('soundtrack');
  }

  toggle() {
    this.game.sound.mute = !this.game.sound.mute;
    this.text = this.game.sound.mute ? HelpText.MUTED : HelpText.UNMUTED;
  }
}
