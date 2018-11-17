import Refugee from '../sprites/Refugee';
import Tank from '../sprites/Tank';

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

    this.mapLayer = this.map.createLayer('Terrain');

    this.safetyLayer = this.map.createLayer('Safety');
    this.map.setCollisionBetween(1, 160, true, this.safetyLayer);

    this.keys = this.game.input.keyboard.addKeys({
      up: Phaser.KeyCode.UP,
      down: Phaser.KeyCode.DOWN,
      left: Phaser.KeyCode.LEFT,
      right: Phaser.KeyCode.RIGHT,
    });

    this.refugee = new Refugee({
      game: this.game,
      x: this.world.centerX,
      y: this.world.height,
    });

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

    this.game.add.existing(this.refugee);
    this.game.add.existing(this.tanks);

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
        if (this.input.pointer1.worldX < this.refugee.worldPosition.x - 10) {
          this.refugee.keyXSpeed = -40;
          this.refugee.angle = 180;
        }
        if (this.input.pointer1.worldX > this.refugee.worldPosition.x + 10) {
          this.refugee.keyXSpeed = 40;
          this.refugee.angle = 0;
        }
        if (this.input.pointer1.worldY > this.refugee.worldPosition.y + 10) {
          this.refugee.keyYSpeed = 40;
          this.refugee.angle = 90;
        }
        if (this.input.pointer1.worldY < this.refugee.worldPosition.y - 10) {
          this.refugee.keyYSpeed = -40;
          this.refugee.angle = 270;
        }
      } else {
      // if (this.input.pointer1.isUp) {
        this.refugee.keyXSpeed = 0;
        this.refugee.keyYSpeed = 0;
      }
    }

    // TANK COLLISION DETECTION
    this.game.physics.arcade.collide(this.tanks, this.tanks);
    this.game.physics.arcade.collide(this.tanks, this.safetyLayer);
    this.game.physics.arcade.collide(this.refugee, this.tanks, () => {
      this.refugee.dying = true;
      this.game.time.events.add(Phaser.Timer.SECOND * 1.5, () => {
        this.nextScreen = 'WarDeath';
        this.continue();
      });
    });

    if (this.refugee.y < 10) {
      this.continue();
    }
  }

  continue() {
    // this.game.sound.play('ping');
    this.state.start(this.nextScreen, true, false, this.nextScreenPayload);
  }
}