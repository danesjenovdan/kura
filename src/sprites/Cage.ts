import config from '../config';

export default class extends Phaser.Group {
  constructor({ game }: { game: Phaser.Game }) {
    super(game);

    const OFFSET = -1;

    for (let i = 0; i <= 7; i += 1) {
      this.create((config.cageSize * config.renderScale * i) + OFFSET, OFFSET, 'cage-vertical', 0);
    }
    for (let j = 0; j <= 5; j += 1) {
      this.create(OFFSET, (config.cageSize * config.renderScale * j) + OFFSET, 'cage-horizontal', 0);
    }

    // DON'T USE: this just scales the graphics up and physics and hit boxes stay small and don't
    // match with the new sprite sizes and positions
    // this.scale.set(config.renderScale);

    this.setAll('scale.x', config.renderScale);
    this.setAll('scale.y', config.renderScale);

    this.game.physics.enable(this, Phaser.Physics.ARCADE);
    this.setAll('body.immovable', true);
    this.setAll('body.allowGravity', false);
  }
}
