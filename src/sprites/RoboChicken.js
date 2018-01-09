import Chicken from './Chicken';

export default class extends Chicken {
  constructor(config) {
    super(config);
    this.counter = 0;
    this.generateRandomActionPoint();
  }

  generateRandomActionPoint() {
    this.randomAction = [
      this.moveLeft,
      this.moveRight,
      this.jump,
    ][Math.floor(Math.random() * 3)];
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
