enum Direction {
  Left = 'Left',
  Right = 'Right',
}

type ChickenParams = {
  game: Phaser.Game,
  x: number,
  y: number,
  poopPool: Phaser.Group
};

const BUTT_POSITION = {
  Left: [16, 27],
  Right: [5, 27],
}

export default class extends Phaser.Sprite {
  direction: Direction
  poopPool: any
  myPoop: Phaser.Sprite | null

  constructor({game, x, y, poopPool}: ChickenParams) {
    super(game, x, y, 'chicken');

    this.animations.add('walkLeft', [1, 0], 10, true);
    this.animations.add('walkRight', [2, 9], 10, true);
    this.animations.add('idleLeft', [0, 0, 0, 0, 0, 0, 0, 0, 10], 5);
    this.animations.add('idleRight', [9, 9, 9, 9, 9, 9, 9, 9, 11], 5);
    this.animations.add('idleRight', [9, 9, 9, 9, 9, 9, 9, 9, 11], 5);
    this.animations.add('jumpLeft', [5], 0, true);
    this.animations.add('jumpRight', [6], 0, true);
    this.smoothed = false;
    this.anchor.setTo(0.5);
    this.direction = Math.random() > 0.5 ? Direction.Left : Direction.Right;

    this.game.physics.enable(this, Phaser.Physics.ARCADE);
    this.body.bounce.y = 0.2;
    this.body.collideWorldBounds = true;
    this.poopPool = poopPool;
  }

  moveLeft() {
    this.direction = Direction.Left;
    this.animations.play('walkLeft');
    this.body.velocity.x = -75;
  }
  moveRight() {
    this.direction = Direction.Right;
    this.animations.play('walkRight');
    this.body.velocity.x = 75;
  }
  idle() {
    this.animations.play(`idle${this.direction}`);
    this.body.velocity.x = 0;
  }
  jump() {
    this.animations.play(`jump${this.direction}`);
    this.body.velocity.y = -30;
  }
  poop() {
    if (this.myPoop && this.myPoop.alive) {
      return
    }

    const poop = this.poopPool.produce(
      this.body.x + BUTT_POSITION[this.direction][0],
      this.body.y + BUTT_POSITION[this.direction][1],
    );

    // Remove reference to current poop sprite so pooping isn't disabled if it
    // gets assigned to another chicken.
    poop.events.onKilled.addOnce(() => this.myPoop = null);

    this.myPoop = poop;
  }
}