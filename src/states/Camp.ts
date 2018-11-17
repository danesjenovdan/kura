import Refugee from '../sprites/Refugee';
import Police from '../sprites/Police';
import NPC from '../sprites/NPC';

export default class extends Phaser.State {
  keys: any;
  nextScreen: string;
  nextScreenPayload: any;
  refugee: Refugee;
  policeOfficers: Phaser.Group;
  refugees: Phaser.Group;
  tiles: Phaser.TileSprite;
  map: Phaser.Tilemap;
  mapLayer: Phaser.TilemapLayer;
  tentLayer: Phaser.TilemapLayer;
  safetyLayer: Phaser.TilemapLayer;

  init() {
  }

  create() {
    this.nextScreen = 'KolpaIntro';
    this.game.stage.smoothed = false;

    // MAP
    // Load the map.
    this.map = this.game.add.tilemap('camp');
    this.map.addTilesetImage('ground', 'tiles');
    this.map.addTilesetImage('sotor1', 'sotor1');
    this.map.addTilesetImage('sotor2', 'sotor2');

    this.mapLayer = this.map.createLayer('Terrain');

    this.tentLayer = this.map.createLayer('Tents');
    this.map.setCollisionBetween(1, 160, true, this.tentLayer);

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

    this.policeOfficers = this.game.add.group();
    for (let key in this.map.objects) {
      if (key === 'Police') {
        this.map.objects[key].forEach((policeOfficer: Police) => {
          this.policeOfficers.add(new Police({
            game: this.game,
            x: policeOfficer.x,
            y: policeOfficer.y,
          }));
        });
      }
    }

    this.refugees = this.game.add.group();
    for (let key in this.map.objects) {
      if (key !== 'Police') {
        this.map.objects[key].forEach((npc: NPC) => {
          this.refugees.add(new NPC({
            game: this.game,
            x: npc.x,
            y: npc.y,
            npcTile: key,
          }));
        });
      }
    }

    this.game.add.existing(this.refugee);
    this.game.add.existing(this.policeOfficers);
    this.game.add.existing(this.refugees);

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
    // if (!this.game.device.desktop) {
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
    // }

    this.game.physics.arcade.collide(this.policeOfficers, this.safetyLayer);
    this.game.physics.arcade.collide(this.policeOfficers, this.policeOfficers);
    this.game.physics.arcade.collide(this.refugees, this.refugees);
    this.game.physics.arcade.collide(this.refugees, this.policeOfficers);

    this.game.physics.arcade.collide(this.policeOfficers, this.tentLayer);
    this.game.physics.arcade.collide(this.refugees, this.tentLayer);
    
    this.game.physics.arcade.collide(this.refugee, this.refugees);
    this.game.physics.arcade.collide(this.refugee, this.policeOfficers, () => {
    this.refugee.dying = true;
    this.game.time.events.add(Phaser.Timer.SECOND * 1.5, () => {
      this.nextScreen = 'CampDeath';
      this.continue();
    });
    });
    this.game.physics.arcade.collide(this.refugee, this.tentLayer);

    if (this.refugee.y < 9) {
      this.continue();
    }
  }

  continue() {
    this.state.start(this.nextScreen, true, false, this.nextScreenPayload);
  }
}