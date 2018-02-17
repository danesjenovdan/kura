import Chicken from './Chicken';

type ChickenParams = {
  game: Phaser.Game,
  x: number,
  y: number,
  poopPool: Phaser.Group
};

export default class extends Chicken {
  counter: number
  randomPoint: number
  randomFinish: number
  randomAction: Function

  constructor(params: ChickenParams) {
    super(params);
    this.counter = 0;
    this.generateRandomActionPoint();
  }

  generateRandomActionPoint() {
    this.randomAction = [
      this.moveLeft,
      this.moveRight,
      this.jump,
      this.poop,
    ][Math.floor(Math.random() * 4)];
    this.randomPoint = Math.floor(Math.random() * 90);
    this.randomFinish = Math.floor(Math.random() * 100) + 10;
  }

  update() {
    if (this.counter === this.randomFinish) {
      this.counter = 0;
      this.generateRandomActionPoint();
    } else {
      this.counter += 1;
    }

    if (this.counter > this.randomPoint && this.counter < this.randomPoint + 20) {
      this.randomAction();
    } else {
      this.idle();
    }
  }
}
