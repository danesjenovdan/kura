import Refugee from '../sprites/Refugee';
import ControlsOverlay from '../sprites/ControlsOverlay';
import Truplo from '../sprites/Truplo';

export default class extends Phaser.State {
  keys: any;
  nextScreen: string;
  nextScreenPayload: any;
  refugee: Refugee;
  truplo: Truplo;
  bodies: Phaser.Group;
  tiles: Phaser.TileSprite;
  map: Phaser.Tilemap;
  mapLayer: Phaser.TilemapLayer;
  waterLayer: Phaser.TilemapLayer;
  deathLayer: Phaser.TilemapLayer;

  init() {
    console.log('init');
  }

  create() {
    this.nextScreen = 'Kladusa';
    this.game.stage.smoothed = false;

    // MAP
    this.map = this.game.add.tilemap('kolpa');
    this.map.addTilesetImage('ground', 'tiles');

    this.mapLayer = this.map.createLayer('Terrain');
    this.waterLayer = this.map.createLayer('Water');

    this.refugee = new Refugee({
      game: this.game,
      x: this.world.centerX,
      y: this.world.height,
    });

    this.bodies = this.game.add.group();

    this.game.add.existing(this.bodies);
    this.game.add.existing(this.refugee);

    this.game.time.events.loop(Phaser.Timer.SECOND * 2, () => {
      this.bodies.add(new Truplo({
        game: this.game,
        y: 80,
        direction: 'left',
        speed: 30,
      }));
    }, this);
    this.game.time.events.loop(Phaser.Timer.SECOND * 3, () => {
      this.bodies.add(new Truplo({
        game: this.game,
        y: 64,
        direction: 'right',
        speed: 30,
      }));
    }, this);
    this.game.time.events.loop(Phaser.Timer.SECOND * 3.5, () => {
      this.bodies.add(new Truplo({
        game: this.game,
        y: 48,
        direction: 'left',
        speed: 35,
      }));
    }, this);
    this.game.time.events.loop(Phaser.Timer.SECOND * 3, () => {
      this.bodies.add(new Truplo({
        game: this.game,
        y: 32,
        direction: 'right',
        speed: 25,
      }));
    }, this);
    this.game.time.events.loop(Phaser.Timer.SECOND * 4, () => {
      this.bodies.add(new Truplo({
        game: this.game,
        y: 16,
        direction: 'right',
        speed: 30,
      }));
    }, this);

    this.keys = this.game.input.keyboard.addKeys({
      enter: Phaser.KeyCode.ENTER,
      space: Phaser.KeyCode.SPACEBAR,

      up: Phaser.KeyCode.UP,
      w: Phaser.KeyCode.W,
      down: Phaser.KeyCode.DOWN,
      s: Phaser.KeyCode.S,
      left: Phaser.KeyCode.LEFT,
      a: Phaser.KeyCode.A,
      right: Phaser.KeyCode.RIGHT,
      d: Phaser.KeyCode.D,

      // f1: Phaser.KeyCode.F1,
      // esc: Phaser.KeyCode.ESC,
    });

    this.keys.left.onDown.add(() => {
      this.refugee.body.velocity.x -= 40 + this.refugee.baseXSpeed;
      this.refugee.animations.play('walk');
      this.refugee.angle = 180;
    });
    this.keys.left.onUp.add(() => {
      if (this.refugee.body.velocity.x !== 0) {
        this.refugee.body.velocity.x += 40 + this.refugee.baseXSpeed;
        this.refugee.animations.play('idle');
        this.refugee.angle = 180;
      }
    });
    this.keys.right.onDown.add(() => {
      this.refugee.body.velocity.x += 40 + this.refugee.baseXSpeed;
      this.refugee.animations.play('walk');
      this.refugee.angle = 0;
    });
    this.keys.right.onUp.add(() => {
      if (this.refugee.body.velocity.x !== 0) {
        this.refugee.body.velocity.x -= 40 + this.refugee.baseXSpeed;
        this.refugee.animations.play('idle');
        this.refugee.angle = 0;
      } else {
        console.log('dafuq');
      }
    });
    this.keys.up.onDown.add(() => {
      this.refugee.body.velocity.y -= 40 + this.refugee.baseYSpeed;
      this.refugee.animations.play('walk');
      this.refugee.angle = 270;
    });
    this.keys.up.onUp.add(() => {
      if (this.refugee.body.velocity.y !== 0) {
        this.refugee.body.velocity.y += 40 + this.refugee.baseYSpeed;
        this.refugee.animations.play('idle');
        this.refugee.angle = 270;
      }
    });
    this.keys.down.onDown.add(() => {
      this.refugee.body.velocity.y += 40 + this.refugee.baseYSpeed;
      this.refugee.animations.play('walk');
      this.refugee.angle = 90;
    });
    this.keys.down.onUp.add(() => {
      if (this.refugee.body.velocity.y !== 0) {
        this.refugee.body.velocity.y -= 40 + this.refugee.baseYSpeed;
        this.refugee.animations.play('idle');
        this.refugee.angle = 90;
      }
    });

    console.log('create');
  }

  update() {
    if (this.game.physics.arcade.overlap(this.refugee, this.bodies)) {
      this.game.physics.arcade.overlap(this.refugee, this.bodies, (r, b) => {
        if (r.baseXSpeed !== b.body.velocity.x) {
          r.body.velocity.x += b.body.velocity.x - r.baseXSpeed;
        }
        r.baseXSpeed = b.body.velocity.x;
      });
    } else {
      if (this.refugee.baseXSpeed !== 0) {
        this.refugee.body.velocity.x -= this.refugee.baseXSpeed;
      }
      this.refugee.baseXSpeed = 0;

      const tileX = Phaser.Math.snapToFloor(Math.floor(this.refugee.x), 16) / 16;
      const tileY = Phaser.Math.snapToFloor(Math.floor(this.refugee.y), 16) / 16;

      if (tileY < 5) {
        this.nextScreen = 'KolpaDeath';
        this.continue();
      }
    }

    if (this.refugee.y < 10) {
      this.continue();
    }
  }

  continue() {
    // this.game.sound.play('ping');
    this.state.start(this.nextScreen, true, false, this.nextScreenPayload);
    console.log('continue');
  }
}