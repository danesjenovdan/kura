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
    this.load.bitmapFont('FixedSys', 'assets/fonts/font.png', 'assets/fonts/font.fnt');
    this.load.audio('soundtrack', 'assets/audio/kure.mp3');
  }

  create() {
    Phaser.Canvas.setImageRenderingCrisp(this.game.canvas);
    this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

    this.state.start('Menu');
  }
}
