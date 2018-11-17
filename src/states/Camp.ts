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

  init() {
    console.log('init');
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
    console.log(this.map);

    this.mapLayer = this.map.createLayer('Terrain');
    this.mapLayer.resizeWorld();

    this.tentLayer = this.map.createLayer('Tents');
    this.map.setCollisionBetween(1, 140, true, this.tentLayer);
    // this.tentLayer.resizeWorld();
    // this.mapLayer.wrap = true;

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
        console.log(key);
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
    // TANK COLLISION DETECTION
    // this.game.physics.arcade.collide(this.policeOfficers, this.policeOfficers, (policeOfficer1, policeOfficer2) => {
    //   policeOfficer1.body.velocity.x = 0;
    //   policeOfficer1.body.velocity.y = 0;
    //   policeOfficer2.body.velocity.x = 0;
    //   policeOfficer2.body.velocity.y = 0;
    // });
    this.game.physics.arcade.collide(this.policeOfficers, this.policeOfficers);
    this.game.physics.arcade.collide(this.refugees, this.refugees);
    this.game.physics.arcade.collide(this.refugees, this.policeOfficers);

    this.game.physics.arcade.collide(this.policeOfficers, this.tentLayer);
    this.game.physics.arcade.collide(this.refugees, this.tentLayer);
    
    this.game.physics.arcade.collide(this.refugee, this.refugees);
    this.game.physics.arcade.collide(this.refugee, this.policeOfficers, () => {
      this.nextScreen = 'CampDeath';
      this.continue();
    });
    this.game.physics.arcade.collide(this.refugee, this.tentLayer);

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