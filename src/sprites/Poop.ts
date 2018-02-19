export default class extends Phaser.Group {
  constructor(config: { game: Phaser.Game }) {
    super(config.game)

    this.enableBody = true;
    this.physicsBodyType = Phaser.Physics.ARCADE;

    this.createMultiple(50, 'poop');
    this.setAll('checkWorldBounds', true);
    this.setAll('outOfBoundsKill', true);
  }

  produce(x: number, y: number): Phaser.Sprite {
    const poop = this.getFirstDead();
    poop.reset(x, y);
    return poop;
  }
}
