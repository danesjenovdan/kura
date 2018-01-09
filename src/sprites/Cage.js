import Phaser from 'phaser';
import config from '../config';

export default class extends Phaser.Group {
  constructor({ game }) {
    super(game);

    const OFFSET = -1;

    for (let i = 0; i <= 7; i += 1) {
      this.create((config.cageSize * i) + OFFSET, OFFSET, 'cage-vertical', 0);
    }
    for (let j = 0; j <= 5; j += 1) {
      this.create(OFFSET, (config.cageSize * j) + OFFSET, 'cage-horizontal', 0);
    }
  }
}
