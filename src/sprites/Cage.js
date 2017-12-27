import Phaser from 'phaser';
import config from '../config';

export default class extends Phaser.Group {
  constructor ({ game }) {
    super(game);

    const CAGE_SIZE = 32;
    const WALL_SIZE = 2;

    for (let i = 0; i < config.gameWidth / WALL_SIZE + 1; i++) {
      for (let j = 0; j < config.gameHeight / WALL_SIZE + 1; j++) {
        if (i % (CAGE_SIZE / WALL_SIZE) === 0 ||
            j % (CAGE_SIZE / WALL_SIZE) === 0) {
          this.create(
            i * WALL_SIZE - WALL_SIZE / 2,
            j * WALL_SIZE - WALL_SIZE / 2,
            'cage-bar',
            0
          );
        }
      }
    }
  }
}
