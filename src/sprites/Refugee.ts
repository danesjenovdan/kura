import { RefugeeParams } from '../types';

enum Direction {
  Left = 'Left',
  Right = 'Right',
  Up = 'Up',
  Down = 'Down',
}

export default class extends Phaser.Sprite {
  direction: Direction;

  constructor({game, x, y}: RefugeeParams) {
    super(game, x, y, 'refugee');

    this.animations.add('walk', [1, 2], 1, true);
    this.animations.add('idle', [0], 1, false);
    this.smoothed = false;
    this.anchor.setTo(0.5);
    this.scale.set(0.125);

    this.direction = Direction.Right;
    this.angle = 270;

    this.game.physics.enable(this, Phaser.Physics.ARCADE);
    this.body.collideWorldBounds = true;
  }

  update() {
    // this.game.physics.arcade.collide(this, this.cage);
  }

  moveLeft(speed: number) {
    this.direction = Direction.Left;
    this.animations.play('walk');
    this.body.velocity.x = -speed;
    this.body.velocity.y = 0;
    this.angle = 180;
  }
  moveRight(speed: number) {
    this.direction = Direction.Right;
    this.animations.play('walk');
    this.body.velocity.x = speed;
    this.body.velocity.y = 0;
    this.angle = 0;
  }
  moveUp(speed: number) {
    this.direction = Direction.Up;
    this.animations.play('walk');
    this.body.velocity.x = 0;
    this.body.velocity.y = speed;
    this.angle = 90;
  }
  moveDown(speed: number) {
    this.direction = Direction.Down;
    this.animations.play('walk');
    this.body.velocity.x = 0;
    this.body.velocity.y = -speed;
    this.angle = 270;
  }
  idle() {
    this.animations.play('idle');
    this.body.velocity.x = 0;
    this.body.velocity.y = 0;
  }
}
