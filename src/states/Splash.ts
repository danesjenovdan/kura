import { centerGameObjects } from '../utils';

export default class extends Phaser.State {
  loaderBg: Phaser.Sprite
  loaderBar: Phaser.Sprite

  preload() {
    this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBg');
    this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBar');
    centerGameObjects([this.loaderBg, this.loaderBar]);

    this.load.setPreloadSprite(this.loaderBar);
    this.load.spritesheet('chicken', 'assets/images/chicken.png', 22, 29);
    this.load.image('cage-vertical', 'assets/images/cage-vertical.png');
    this.load.image('cage-horizontal', 'assets/images/cage-horizontal.png');
    this.load.imageFromTexture('poop', ['6'], 1, 1);
  }

  create() {
    this.state.start('Game');
  }
}
