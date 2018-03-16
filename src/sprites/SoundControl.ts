enum HelpText {
  MUTED = 'F1:Unmute',
  UNMUTED = 'F1:Mute',
}

export default class extends Phaser.SoundManager {
  helpText: Phaser.BitmapText

  constructor(game: Phaser.Game) {
    super(game);

    this.helpText = this.game.add.bitmapText (
      16,
      140,
      'FixedSys',
      HelpText.UNMUTED,
      16
    );

    this.play('soundtrack');
  }

  toggle() {
    this.game.sound.mute = !this.game.sound.mute;
    this.helpText.text = this.game.sound.mute ? HelpText.MUTED : HelpText.UNMUTED;
  }
}
