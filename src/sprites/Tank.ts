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

  constructor({game, x, y, tankTile}: TankParams) {
    super(game, x, y, tankTile);

    this.animations.add('shoot', [0, 2, 0], 20, false);
    this.animations.add('idle', [0], 1, false);
    this.smoothed = false;
    this.anchor.setTo(0.5);
    this.direction = Direction.Right;
    this.scale.set(1);

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
    ][Math.floor(Math.random() * 4)];
    this.randomPoint = Math.floor(Math.random() * 90);
    this.randomFinish = Math.floor(Math.random() * 100) + 10;
  }

  update() {
    super.update();
    // this.randomAction(20);

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
    this.body.velocity.x = -speed;
    this.angle = 180;
  }
  moveRight(speed: number) {
    this.direction = Direction.Right;
    this.body.velocity.x = speed;
    this.angle = 0;
  }
  moveUp(speed: number) {
    this.direction = Direction.Up;
    this.body.velocity.y = -speed;
    this.angle = 270;
  }
  moveDown(speed: number) {
    this.direction = Direction.Down;
    this.body.velocity.y = speed;
    this.angle = 90;
  }
  idle() {
    this.animations.play('idle');
  }
}
