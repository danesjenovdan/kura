export default class extends Phaser.BitmapText {
  currentScore: number = 0
  survival: boolean

  constructor(game: Phaser.Game, survival: boolean) {
    super(game, 187 + (survival ? 16 : 0), 2, 'MunroSmall', '', 10);
    this.game.add.existing(this);
    this.survival = survival;
  }

  update() {
    this.text = this.currentScore + (this.survival ? '' : '/5');
  }

  increase() {
    this.currentScore++;
  }
}
