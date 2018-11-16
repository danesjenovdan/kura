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
    // Load the map.
    this.map = this.game.add.tilemap('kolpa');
    this.map.addTilesetImage('ground', 'tiles');
    // this.map.addTilesetImage('truplo', 'truplo');
    console.log(this.map);

    this.mapLayer = this.map.createLayer('Terrain');
    // this.mapLayer.resizeWorld();
    // this.mapLayer.wrap = true;

    this.waterLayer = this.map.createLayer('Water');
    // this.map.setCollisionBetween(1, 84, false, this.waterLayer);

    // this.deathLayer = this.map.createLayer('Trupla');

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

    console.log('create');
  }

  update() {

    if (this.refugee.y < 10) {
      this.continue();
    }

    // if (this.refugee.y < 100) {
    //   console.log('voda')
    // }

    // const xTile = Phaser.Math.snapToFloor(Math.floor(this.refugee.x), 16) / 16;
    // const yTile = Phaser.Math.snapToFloor(Math.floor(this.refugee.y), 16) / 16;
    // if (yTile < 9) {
    //   console.log('voda');
    // }

    // const i = this.deathLayer.index;
    // const x = xTile;
    // const y = yTile;

    // console.log(this.map.layers.filter(l => l.name === 'Trupla'))
    // console.log(i, x, y);
    // console.log(this.map.layers[i].data[y]);
    // const leftTile = this.map.getTileLeft(i, x, y);
    // const rightTile = this.map.getTileRight(i, x, y);
    // const upTile = this.map.getTileAbove(i, x, y);
    // const downTile = this.map.getTileBelow(i, x, y);
    // console.log(upTile, rightTile, downTile, leftTile);

    // this.game.physics.arcade.collide(this.refugee, this.waterLayer, (a, b) => {
    //   // console.log(a.worldPosition.y);
    //   // debugger;
    // });

    if (this.keys.enter.isDown || this.keys.space.isDown || this.input.pointer1.isDown) {
      // this.continue();
      console.log('space or enter');
    }
     else if (this.keys.left.isDown || this.keys.a.isDown) {
      this.refugee.moveLeft(50);
    } else if (this.keys.right.isDown || this.keys.d.isDown) {
      this.refugee.moveRight(50);
    } else if (this.keys.down.isDown || this.keys.s.isDown) {
      this.refugee.moveUp(50);
    } else if (this.keys.up.isDown || this.keys.w.isDown) {
      this.refugee.moveDown(50);
    // } else if (this.keys.esc.isDown) {
    //   this.state.start('BeforeGiveUp', true, false, this.survival);
    } else {
      this.refugee.idle();
    }
  }

  continue() {
    // this.game.sound.play('ping');
    this.state.start(this.nextScreen, true, false, this.nextScreenPayload);
    console.log('continue');
  }
}