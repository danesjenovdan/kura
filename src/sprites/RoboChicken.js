import Phaser from 'phaser'
import Chicken from './Chicken'

export default class extends Chicken {
  constructor (config) {
    super(config);
    this.counter = Math.floor(Math.random() * 300);
  }

  update () {
    if (this.counter === 300) {
      this.counter = 0;
      this.leftPoint = Math.floor(Math.random() * 300);
      this.rightPoint = Math.floor(Math.random() * 300);
      this.jumpPoint = Math.floor(Math.random() * 300);
    } else {
      this.counter++;
    }

    if (this.counter > this.leftPoint && this.counter < this.leftPoint + 10) {
      this.moveLeft()
    } else if (this.counter > this.rightPoint && this.counter < this.rightPoint + 10) {
      this.moveRight()
    } else if (this.counter > this.jumpPoint && this.counter < this.jumpPoint + 10) {
      this.jump()
    } else {
      this.idle();
    }
  }
}
