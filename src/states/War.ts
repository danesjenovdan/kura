import Refugee from '../sprites/Refugee';
import Tank from '../sprites/Tank';
import ControlsOverlay from '../sprites/ControlsOverlay';

export default class extends Phaser.State {
  keys: any;
  nextScreen: string;
  nextScreenPayload: any;
  refugee: Refugee;
  tanks: Phaser.Group;
  tiles: Phaser.TileSprite;
  map: Phaser.Tilemap;
  mapLayer: Phaser.TilemapLayer;
  safetyLayer: Phaser.TilemapLayer;

  init() {
    console.log('init');
  }

  create() {
    this.nextScreen = 'Kladusa';
    this.game.stage.smoothed = false;

    // MAP
    // Load the map.
    this.map = this.game.add.tilemap('war');
    this.map.addTilesetImage('ground', 'tiles');
    this.map.addTilesetImage('tank', 'tank');
    this.map.addTilesetImage('tank2', 'tank2');
    this.map.addTilesetImage('tank3', 'tank3');
    console.log(this.map);

    this.mapLayer = this.map.createLayer('Terrain');
    this.mapLayer.resizeWorld();
    // this.mapLayer.wrap = true;

    this.safetyLayer = this.map.createLayer('Safety');

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

    console.log('map', this.map);
    this.tanks = this.game.add.group();
    for (let key in this.map.objects) {
      this.map.objects[key].forEach((tank: Tank) => {
        this.tanks.add(new Tank({
          game: this.game,
          x: tank.x,
          y: tank.y,
          tankTile: key,
        }));
      });
    }
    // this.map.objects.tank.forEach((tank: Tank) => {
    //   this.tanks.add(new Tank({
    //     game: this.game,
    //     x: tank.x,
    //     y: tank.y,
    //     tankTile: 'tank';
    //   }));
    // });;
    // this.map.createFromObjects('Tanks', 5, 'tank', 0, true, false, this.tanks);

    // for (let i = 0; i < 7; i += 1) {
    //   for (let j = 0; j < 5; j += 1) {
    //     if (i !== 3 || j !== 4) {
    //       if (Math.random() > 0.3) {
    //         this.tanks.add(new Tank({
    //           game: this.game,
    //           x: (i * 32) + 16,
    //           y: (j * 32) + 16,
    //         }));
    //       }
    //     }
    //   }
    // }

    this.game.add.existing(this.refugee);
    this.game.add.existing(this.tanks);

    this.keys.left.onDown.add(() => {
      this.refugee.body.velocity.x -= 40 + this.refugee.baseXSpeed;
      this.refugee.animations.play('walk');
      this.refugee.angle = 180;
    });
    this.keys.left.onUp.add(() => {
      if (this.refugee.body.velocity.x !== 0) {
        this.refugee.body.velocity.x += 40 + this.refugee.baseXSpeed;
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
        this.refugee.angle = 90;
      }
    });

    console.log('create');
  }

  update() {
    // TANK COLLISION DETECTION
    this.game.physics.arcade.collide(this.tanks, this.tanks, (tank1, tank2) => {
      tank1.body.velocity.x = 0;
      tank1.body.velocity.y = 0;
      tank2.body.velocity.x = 0;
      tank2.body.velocity.y = 0;
    });
    this.game.physics.arcade.collide(this.refugee, this.tanks, () => {
      this.nextScreen = 'WarDeath';
      this.continue();
    });

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