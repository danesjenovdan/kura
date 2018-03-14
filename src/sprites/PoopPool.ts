import Poop from './Poop';

export default class extends Phaser.Group {
  cage: Phaser.Group
  hitFloor: Phaser.Signal

  constructor(config: { game: Phaser.Game }, cage: Phaser.Group) {
    super(config.game)

    this.enableBody = true;
    this.physicsBodyType = Phaser.Physics.ARCADE;
    this.cage = cage;
  }

  produce({x, y}: {x: number, y: number}): Poop {
    const poop = new Poop({game: this.game, x, y, cage: this.cage});
    this.add(poop);
    return poop;
  }
}
