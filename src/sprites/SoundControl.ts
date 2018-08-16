enum HelpText {
  MUTED = 'F1: UNMUTE', // i18n
  UNMUTED = 'F1: MUTE', // i18n
}

export default class extends Phaser.BitmapText {
  helpText: Phaser.BitmapText

  constructor(game: Phaser.Game) {
    super(game, 24, 2, 'MunroSmall', '', 10);
    this.game.sound.mute = false;
    this.game.add.existing(this);
    this.game.sound.play('soundtrack', 0.25, true);

    this.text = this.game.device.desktop ? HelpText.UNMUTED : '';
  }

  toggle() {
    this.game.sound.mute = !this.game.sound.mute;
    this.text = this.game.sound.mute ? HelpText.MUTED : HelpText.UNMUTED;
  }

  stop() {
    this.game.sound.removeAll();
  }
}
