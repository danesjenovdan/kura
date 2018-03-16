export default class extends Phaser.BitmapText {
  currentScore: number = 0

  constructor(game: Phaser.Game) {
    super(game, 204, 140, 'FixedSys', '0', 16);
    this.game.add.existing(this);
  }

  update() {
    this.text = String(this.currentScore);
  }

  increase() {
    this.currentScore++;
  }
}
