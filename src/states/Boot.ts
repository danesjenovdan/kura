export default class extends Phaser.State {
  loaderBg: Phaser.Sprite;
  loaderBar: Phaser.Sprite;
  music: Phaser.Sound;
  keys: any;
  
  preload() {
    this.load.image('arrows', 'assets/images/arrows.png');
    this.load.bitmapFont('FixedSys', 'assets/fonts/fixedsys.png', 'assets/fonts/fixedsys.fnt');
    this.load.bitmapFont('Munro', 'assets/fonts/munro.png', 'assets/fonts/munro.fnt');
    this.load.bitmapFont('MunroSmall', 'assets/fonts/munro-small.png', 'assets/fonts/munro-small.fnt');

    this.load.spritesheet('refugee', 'assets/images/begunec.png', 16, 16, 4);

    this.load.image('tiles', 'assets/images/tla.png');

    this.load.tilemap('war', 'assets/maps/war.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.image('tank', 'assets/images/tank.png');
    this.load.image('tank2', 'assets/images/tank2.png');
    this.load.image('tank3', 'assets/images/tank3.png');
    
    this.load.tilemap('camp', 'assets/maps/camp.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.image('sotor1', 'assets/images/sotor1.png');
    this.load.spritesheet('sotor2', 'assets/images/sotor2.png', 16, 16, 2);
    this.load.spritesheet('policija', 'assets/images/policija.png', 16, 16, 3);
    this.load.spritesheet('begunec2', 'assets/images/begunec2.png', 16, 16, 3);
    this.load.spritesheet('begunec3', 'assets/images/begunec3.png', 16, 16, 3);
    this.load.spritesheet('begunec4', 'assets/images/begunec4.png', 16, 16, 3);

    this.load.tilemap('kolpa', 'assets/maps/kolpa.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.spritesheet('truplo', 'assets/images/truplo.png', 32, 16, 1);

    this.load.image('selector', 'assets/images/selector2.png');
    this.load.image('zica', 'assets/images/zica.png');
    this.load.image('vojna', 'assets/images/vojna.png');
    this.load.image('taborisce', 'assets/images/taborisce.png');
    this.load.image('death', 'assets/images/umrl.png');
    this.load.image('nazaj', 'assets/images/nazaj.png');
    this.load.image('kolpa', 'assets/images/kolpa.png');
    this.load.image('smrt-zica', 'assets/images/smrt-zica.png');
    this.load.image('slovenija', 'assets/images/slovenija.png');

    this.load.audio('gameboy', 'assets/audio/gameboy.mp3');
  }

  create() {
    Phaser.Canvas.setImageRenderingCrisp(this.game.canvas);
    this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.game.cache.getBitmapFont('Munro').font.lineHeight = 11;

    // this.game.scale.pageAlignHorizontally = true;
    // this.game.scale.pageAlignVertically = true;
    // this.game.scale.refresh();

    this.music = this.game.add.audio('gameboy', 0.25, true);
    this.music.play();

    this.state.start('Intro');
  }
}
