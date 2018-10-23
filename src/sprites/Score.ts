import config from '../config';

export default class extends Phaser.BitmapText {
  currentScore: number = 0
  survival: boolean

  constructor(game: Phaser.Game, survival: boolean) {
    super(game, (config.gameWidth - 24) * config.renderScale, 2 * config.renderScale, 'PS2P', '', 6 * config.renderScale);
    this.anchor.set(1, 0)
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
