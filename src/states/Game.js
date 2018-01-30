/* globals __DEV__ game */
import Phaser from 'phaser';
import Chicken from '../sprites/Chicken';
import RoboChicken from '../sprites/RoboChicken';
import Cage from '../sprites/Cage';
// import config from '../config';

export default class extends Phaser.State {
  preload() {
    game.load.audio('soundtrack', 'assets/audio/kure.mp3');
  }

  create() {
    const music = game.add.audio('soundtrack');
    music.play();

    Phaser.Canvas.setImageRenderingCrisp(game.canvas);
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.physics.arcade.gravity.y = 300;
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;



    this.cage = new Cage({ game });

    this.chicken = new Chicken({
      game: this.game,
      x: this.world.centerX,
      y: this.world.centerY,
      asset: 'chicken',
    });

    this.roboChickens = game.add.group();

    for (let i = 0; i < 7; i += 1) {
      for (let j = 0; j < 5; j += 1) {
        if (i !== 3 || j !== 2) {
          this.roboChickens.add(new RoboChicken({
            game: this.game,
            x: (i * 32) + 16,
            y: (j * 32) + 16,
            asset: 'chicken',
          }));
        }
      }
    }

    this.jumping = false;

    game.add.group(this.cage);

    game.physics.arcade.enable([this.roboChickens, this.chicken, this.cage], Phaser.Physics.ARCADE);
    this.cage.setAll('body.immovable', true);
    this.cage.setAll('body.allowGravity', false);

    this.chicken.body.bounce.y = 0.2;
    this.chicken.body.collideWorldBounds = true;
    // this.roboChicken.body.bounce.y = 0.2;
    // this.roboChicken.body.collideWorldBounds = true;

    this.cursors = game.input.keyboard.createCursorKeys();
    game.add.existing(this.chicken);
    game.add.existing(this.roboChickens);


    //  Our BitmapData (same size as our canvas)
    const bitmapData = game.make.bitmapData(224, 160);

    //  Add it to the world or we can't see it
    bitmapData.addToWorld();
    const grd = bitmapData.context.createRadialGradient(112, 80, 0, 112, 80, 112);
    grd.addColorStop(0, 'rgba(255, 255, 255, 0)');
    grd.addColorStop(0.5, 'rgba(0, 0, 0, 0.75');
    grd.addColorStop(1, 'rgba(0, 0, 0, 1');

    bitmapData.cls();
    bitmapData.circle(112, 80, 138, grd);
  }

  update() {
    const collision = game.physics.arcade.collide(this.chicken, this.cage);
    game.physics.arcade.collide(this.roboChickens, this.cage);

    if (this.cursors.left.isDown) {
      this.chicken.moveLeft();
    } else if (this.cursors.right.isDown) {
      this.chicken.moveRight();
    } else if (this.cursors.up.isDown && collision && !this.jumping) {
      this.chicken.jump();
      this.jumping = true;
    } else if (this.jumping && collision) {
      this.jumping = false;
    } else if (collision) {
      this.chicken.idle();
    }
  }

  render() {
    if (__DEV__) {
      // this.game.debug.body(this.chicken)
      // this.game.debug.body(this.cage)
    }
  }
}
