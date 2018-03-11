export default class extends Phaser.Text {
  currentScore: number = 0

  constructor(game: Phaser.Game) {
    super(game, 204, 140, '0', {
      font: 'Arial',
      fontSize: 16,
      fill: 'white',
      fontWeight: 'bold',
    })

    this.game.add.existing(this);
  }

  update() {
    this.text = String(this.currentScore);
  }

  increase() {
    this.currentScore++;
  }
}
