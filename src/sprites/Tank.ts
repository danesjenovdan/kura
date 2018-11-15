import { TankParams } from '../types';

enum Direction {
  Left = 'Left',
  Right = 'Right',
  Up = 'Up',
  Down = 'Down',
}

export default class extends Phaser.Sprite {
  direction: Direction;
  counter: number;
  randomPoint: number;
  randomFinish: number;
  randomAction: Function;
  enemy: boolean;

  constructor({game, x, y}: TankParams) {
    super(game, x, y, 'tank');

    this.animations.add('shoot', [0, 2, 0], 20, false);
    this.animations.add('idle', [0], 1, false);
    this.smoothed = false;
    this.anchor.setTo(0.5);
    this.direction = Direction.Right;
    this.scale.set(0.125);

    this.counter = 0;
    this.enemy = true;
    this.generateRandomActionPoint();

    this.game.physics.enable(this, Phaser.Physics.ARCADE);
    this.body.collideWorldBounds = true;
  }

  generateRandomActionPoint() {
    this.randomAction = [
      this.moveLeft,
      this.moveRight,
      this.moveUp,
      this.moveDown,
      this.shoot,
    ][Math.floor(Math.random() * 5)];
    this.randomPoint = Math.floor(Math.random() * 90);
    this.randomFinish = Math.floor(Math.random() * 100) + 10;
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
    // this.animations.play('walk');
    this.body.velocity.x = -speed;
    this.body.velocity.y = 0;
    this.angle = 180;
  }
  moveRight(speed: number) {
    this.direction = Direction.Right;
    // this.animations.play('walk');
    this.body.velocity.x = speed;
    this.body.velocity.y = 0;
    this.angle = 0;
  }
  moveUp(speed: number) {
    this.direction = Direction.Up;
    // this.animations.play('walk');
    this.body.velocity.x = 0;
    this.body.velocity.y = speed;
    this.angle = 90;
  }
  moveDown(speed: number) {
    this.direction = Direction.Down;
    // this.animations.play('walk');
    this.body.velocity.x = 0;
    this.body.velocity.y = -speed;
    this.angle = 270;
  }
  shoot() {
    this.animations.play('shoot');
  }
  idle() {
    // if (this.jumping) return;

    this.animations.play('idle');
    // this.body.velocity.x = 0;
  }
}
