export default class extends Phaser.State {
  loaderBg: Phaser.Sprite
  loaderBar: Phaser.Sprite

  preload() {
    this.load.spritesheet('chicken', 'assets/images/chicken.png', 22, 29);
    this.load.image('cage-vertical', 'assets/images/cage-vertical.png');
    this.load.image('cage-horizontal', 'assets/images/cage-horizontal.png');
    this.load.image('egg', 'assets/images/egg.png');
    this.load.image('meter', 'assets/images/egg-meter.png');
    this.load.imageFromTexture('poop', [' 2 ', '212'], 1, 1);
  }

  create() {
    this.state.start('Game');
  }
}
