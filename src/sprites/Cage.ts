import CONFIG from '../config';

export default class extends Phaser.Group {
  constructor(config: { game: Phaser.Game }) {
    super(config.game);

    const OFFSET = -1;

    for (let i = 0; i <= 7; i += 1) {
      this.create((CONFIG.cageSize * i) + OFFSET, OFFSET, 'cage-vertical', 0);
    }
    for (let j = 0; j <= 5; j += 1) {
      this.create(OFFSET, (CONFIG.cageSize * j) + OFFSET, 'cage-horizontal', 0);
    }

    this.game.physics.enable(this, Phaser.Physics.ARCADE);
    this.setAll('body.immovable', true);
    this.setAll('body.allowGravity', false);
  }
}
