import config from '../config';

export default class extends Phaser.Sprite {
  constructor({game, x, y}: {
    game: Phaser.Game,
    x: number,
    y: number
  }) {
    super(game, x, y, 'egg');
    this.scale.set(config.renderScale);

    this.game.physics.enable(this, Phaser.Physics.ARCADE);
    this.checkWorldBounds = true;
    this.game.add.existing(this);
    this.events.onOutOfBounds.addOnce(this.kill);
  }
}
