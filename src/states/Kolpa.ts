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
    this.nextScreen = 'Win';
    this.game.stage.smoothed = false;

    // MAP
    this.map = this.game.add.tilemap('kolpa');
    this.map.addTilesetImage('ground', 'tiles');
    this.map.addTilesetImage('zica', 'zica');

    this.mapLayer = this.map.createLayer('Terrain');
    this.waterLayer = this.map.createLayer('Water');
    this.waterLayer = this.map.createLayer('Wire');

    this.refugee = new Refugee({
      game: this.game,
      x: this.world.centerX,
      y: this.world.height,
    });

    this.bodies = this.game.add.group();

    this.game.add.existing(this.bodies);
    this.game.add.existing(this.refugee);

    this.game.time.events.loop(Phaser.Timer.SECOND * 6, () => {
      this.bodies.add(new Truplo({
        game: this.game,
        y: 112,
        direction: 'left',
        speed: 20,
      }));
    }, this);
    this.game.time.events.loop(Phaser.Timer.SECOND * 10, () => {
      this.bodies.add(new Truplo({
        game: this.game,
        y: 96,
        direction: 'left',
        speed: 10,
      }));
    }, this);
    this.game.time.events.loop(Phaser.Timer.SECOND * 12, () => {
      this.bodies.add(new Truplo({
        game: this.game,
        y: 80,
        direction: 'left',
        speed: 5,
      }));
    }, this);
    this.game.time.events.loop(Phaser.Timer.SECOND * 15, () => {
      this.bodies.add(new Truplo({
        game: this.game,
        y: 64,
        direction: 'left',
        speed: 20,
      }));
    }, this);
    this.game.time.events.loop(Phaser.Timer.SECOND * 13, () => {
      this.bodies.add(new Truplo({
        game: this.game,
        y: 48,
        direction: 'left',
        speed: 15,
      }));
    }, this);
    this.game.time.events.loop(Phaser.Timer.SECOND * 21, () => {
      this.bodies.add(new Truplo({
        game: this.game,
        y: 32,
        direction: 'left',
        speed: 4,
      }));
    }, this);
    this.game.time.events.loop(Phaser.Timer.SECOND * 11, () => {
      this.bodies.add(new Truplo({
        game: this.game,
        y: 16,
        direction: 'left',
        speed: 20,
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
      this.refugee.keyXSpeed -= 40;
      this.refugee.angle = 180;
    });
    this.keys.left.onUp.add(() => {
      this.refugee.keyXSpeed += 40;
    });
    this.keys.right.onDown.add(() => {
      this.refugee.keyXSpeed += 40;
      this.refugee.angle = 0;
    });
    this.keys.right.onUp.add(() => {
      this.refugee.keyXSpeed -= 40;
    });
    this.keys.up.onDown.add(() => {
      this.refugee.keyYSpeed -= 40;
      this.refugee.angle = 270;
    });
    this.keys.up.onUp.add(() => {
      this.refugee.keyYSpeed += 40;
    });
    this.keys.down.onDown.add(() => {
      this.refugee.keyYSpeed += 40;
      this.refugee.angle = 90;
    });
    this.keys.down.onUp.add(() => {
      this.refugee.keyYSpeed -= 40;
    });
  }

  update() {
    if (!this.game.device.desktop) {
      if (this.input.pointer1.isDown) {
        if (this.input.pointer1.worldX < this.refugee.worldPosition.x - 15) {
          this.refugee.keyXSpeed = -40;
          this.refugee.angle = 180;
        }
        if (this.input.pointer1.worldX > this.refugee.worldPosition.x + 15) {
          this.refugee.keyXSpeed = 40;
          this.refugee.angle = 0;
        }
        if (this.input.pointer1.worldY > this.refugee.worldPosition.y + 15) {
          this.refugee.keyYSpeed = 40;
          this.refugee.angle = 90;
        }
        if (this.input.pointer1.worldY < this.refugee.worldPosition.y - 15) {
          this.refugee.keyYSpeed = -40;
          this.refugee.angle = 270;
        }
      } else {
      // if (this.input.pointer1.isUp) {
        this.refugee.keyXSpeed = 0;
        this.refugee.keyYSpeed = 0;
      }
    }

    if (this.game.physics.arcade.overlap(this.refugee, this.bodies)) {
      this.game.physics.arcade.overlap(this.refugee, this.bodies, (refugee: Refugee, truplo: Truplo) => {
        if (refugee.baseXSpeed !== truplo.body.velocity.x) {
          refugee.body.velocity.x += truplo.body.velocity.x - refugee.baseXSpeed;
        }
        refugee.baseXSpeed = truplo.body.velocity.x;
      });
    } else {
      if (this.refugee.baseXSpeed !== 0) {
        this.refugee.body.velocity.x -= this.refugee.baseXSpeed;
      }
      this.refugee.baseXSpeed = 0;

      const tileX = Phaser.Math.snapToFloor(Math.floor(this.refugee.x), 16) / 16;
      const tileY = Phaser.Math.snapToFloor(Math.floor(this.refugee.y), 16) / 16;

      if ((tileY < 8) && (tileY > 0)) {
        this.refugee.dying = true;
        this.game.time.events.add(Phaser.Timer.SECOND * 1.5, () => {
          this.nextScreen = 'KolpaDeath';
          this.continue();
        }
      }
    }

    if (this.refugee.y < 10) {
      this.continue();
    }
  }

  continue() {
    // this.game.sound.play('ping');
    this.state.start(this.nextScreen, true, false, this.nextScreenPayload);
  }
}