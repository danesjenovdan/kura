import config from '../config';

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

    this.load.bitmapFont('PS2P', 'assets/fonts/ps2p_0.png', 'assets/fonts/ps2p.fnt');

    this.load.audio('soundtrack', 'assets/audio/soundtrack.mp3');
    this.load.audio('poop', 'assets/audio/poop.mp3');
    this.load.audio('jump', 'assets/audio/jump.mp3');
    this.load.audio('fanfare', 'assets/audio/fanfare.mp3');
    this.load.audio('ping', 'assets/audio/ping.mp3');
    this.load.audio('egg', 'assets/audio/egg.mp3');
  }

  create() {
    this.game.stage.backgroundColor = '#222';

    Phaser.Canvas.setImageRenderingCrisp(this.game.canvas);
    this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.game.cache.getBitmapFont('PS2P').font.lineHeight = 8 * config.renderScale;

    this.state.start('Intro');
  }
}
