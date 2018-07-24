export default class extends Phaser.Group {
  constructor(game: Phaser.Game) {
    super(game);

    this.addChild(new Phaser.Sprite(this.game, 16, 145, 'arrows'));
    this.addChild(new Phaser.BitmapText(this.game, 37, 146, 'MunroSmall', 'Move the hen', 10)); // i18n
    this.addChild(new Phaser.Sprite(this.game, 136, 148, 'space'));
    this.addChild(new Phaser.BitmapText(this.game, 170, 146, 'MunroSmall', 'Lay an egg', 10)); // i18n
    this.game.add.existing(this);
  }
}
