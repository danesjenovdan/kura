import Poop from './Poop';

export default class extends Phaser.Group {
  cage: Phaser.Group
  hitFloor: Phaser.Signal

  constructor(config: { game: Phaser.Game }, cage: Phaser.Group) {
    super(config.game)

    this.enableBody = true;
    this.physicsBodyType = Phaser.Physics.ARCADE;

    // this.createMultiple(500, 'poop');
    this.cage = cage;
    // this.setAll('checkWorldBounds', true);
    // this.setAll('outOfBoundsKill', true);
    // this.setAll('body.collideWorldBounds', true);

  }

  produce(x: number, y: number): Poop {
    const poop = new Poop({game: this.game, x, y, cage: this.cage});
    this.add(poop);
    return poop;
    // const poop = this.getFirstDead();
    // poop.reset(x, y);
    // return poop;
  }

}
