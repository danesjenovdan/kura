export default class extends Phaser.State {
  loaderBg: Phaser.Sprite
  loaderBar: Phaser.Sprite

  preload() {
    this.load.spritesheet('chicken', 'assets/images/chicken.png', 22, 29);
    this.load.image('cage-vertical', 'assets/images/cage-vertical.png');
    this.load.image('cage-horizontal', 'assets/images/cage-horizontal.png');
    this.load.image('egg', 'assets/images/egg.png');
    this.load.image('meter', 'assets/images/egg-meter.png');
    this.load.image('arrows', 'assets/images/arrows.png');
    this.load.image('space', 'assets/images/space.png');
    this.load.imageFromTexture('poop', [' 2 ', '212'], 1, 1);
    this.load.bitmapFont('FixedSys', 'assets/fonts/fixedsys.png', 'assets/fonts/fixedsys.fnt');
    this.load.bitmapFont('Munro', 'assets/fonts/munro.png', 'assets/fonts/munro.fnt');
    this.load.bitmapFont('MunroSmall', 'assets/fonts/munro-small.png', 'assets/fonts/munro-small.fnt');
    this.load.audio('soundtrack', 'assets/audio/soundtrack.mp3');
    this.load.audio('poop', 'assets/audio/poop.mp3');
    this.load.audio('jump', 'assets/audio/jump.mp3');
    this.load.audio('fanfare', 'assets/audio/fanfare.mp3');
    this.load.audio('ping', 'assets/audio/ping.mp3');
  }

  create() {
    Phaser.Canvas.setImageRenderingCrisp(this.game.canvas);
    this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.game.cache.getBitmapFont('Munro').font.lineHeight = 11;

    this.state.start('Intro');
  }
}
