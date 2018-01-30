import Phaser from 'phaser';
import { centerGameObjects } from '../utils';

export default class extends Phaser.State {
  preload() {
    this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBg');
    this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBar');
    centerGameObjects([this.loaderBg, this.loaderBar]);

    this.load.setPreloadSprite(this.loaderBar);
    this.load.spritesheet('chicken', 'assets/images/chicken.png', 22, 29);
    this.load.image('mushroom', 'assets/images/mushroom2.png', 32, 32);
    this.load.image('cage-vertical', 'assets/images/cage-vertical.png', 2, 2);
    this.load.image('cage-horizontal', 'assets/images/cage-horizontal.png', 2, 2);
  }

  create() {
    this.state.start('Game');
  }
}
