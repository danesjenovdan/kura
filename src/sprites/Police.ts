import { PoliceParams } from '../types';

enum Direction {
  Left = 'Left',
  Right = 'Right',
  Up = 'Up',
  Down = 'Down',
}

export default class extends Phaser.Sprite {
  direction: Direction;
  counter: number;
  enemy: boolean;
  randomPoint: number;
  randomFinish: number;
  randomAction: Function;

  constructor({game, x, y}: PoliceParams) {
    super(game, x, y, 'policija');

    this.animations.add('walk', [1, 2], 10, true);
    this.animations.add('idle', [0], 1, false);
    this.smoothed = false;
    this.anchor.setTo(0.5);
    this.scale.set(1);

    this.counter = 0;
    this.enemy = true;
    this.generateRandomActionPoint();

    this.direction = Direction.Right;
    this.angle = 270;

    this.game.physics.enable(this, Phaser.Physics.ARCADE);
    this.body.collideWorldBounds = true;
  }

  generateRandomActionPoint() {
    if (this.y < 130) {
      this.randomAction = [
        this.moveLeft,
        this.moveRight,
        this.moveUp,
        this.moveDown,
      ][Math.floor(Math.random() * 4)];
      this.randomPoint = Math.floor(Math.random() * 90);
      this.randomFinish = Math.floor(Math.random() * 100) + 10;
    }
  }

  update() {
    super.update();

    if (this.counter === this.randomFinish) {
      this.counter = 0;
      this.generateRandomActionPoint();
    } else {
      this.counter += 1;
    }

    if (this.counter > this.randomPoint && this.counter < this.randomPoint + 20) {
      this.randomAction(20);
    } else {
      this.idle();
    }
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
