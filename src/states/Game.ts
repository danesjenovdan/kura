/* globals __DEV__ */
import Chicken from '../sprites/Chicken';
import RoboChicken from '../sprites/RoboChicken';
import Cage from '../sprites/Cage';
import Poop from '../sprites/Poop';
// import config from '../config';

export default class extends Phaser.State {
  cage: Cage
  chicken: Chicken
  roboChickens: Phaser.Group
  jumping: boolean
  cursors: Phaser.CursorKeys
  poop: Poop

  preload() {
    this.game.load.audio('soundtrack', 'assets/audio/kure.mp3');
  }

  create() {
    // const music = this.game.add.audio('soundtrack');
    // music.play();

    Phaser.Canvas.setImageRenderingCrisp(this.game.canvas);
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.physics.arcade.gravity.y = 300;
    this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

    this.cage = new Cage({ game: this.game });
    this.poop = new Poop({ game: this.game })

    this.chicken = new Chicken({
      game: this.game,
      x: this.world.centerX,
      y: this.world.centerY,
      poopPool: this.poop,
    });


    this.roboChickens = this.game.add.group();

    for (let i = 0; i < 7; i += 1) {
      for (let j = 0; j < 5; j += 1) {
        if (i !== 3 || j !== 2) {
          this.roboChickens.add(new RoboChicken({
            game: this.game,
            x: (i * 32) + 16,
            y: (j * 32) + 16,
            poopPool: this.poop,
          }));
        }
      }
    }

    this.jumping = false;
    this.cursors = this.game.input.keyboard.createCursorKeys();

    this.game.add.group(this.cage);
    this.game.add.existing(this.chicken);
    this.game.add.existing(this.roboChickens);


    //  Our BitmapData (same size as our canvas)
    const bitmapData = this.game.make.bitmapData(224, 160);

    //  Add it to the world or we can't see it
    bitmapData.addToWorld();
    const grd = bitmapData.context.createRadialGradient(112, 80, 0, 112, 80, 112);
    grd.addColorStop(0, 'rgba(255, 255, 255, 0)');
    grd.addColorStop(0.5, 'rgba(0, 0, 0, 0.75');
    grd.addColorStop(1, 'rgba(0, 0, 0, 1');

    bitmapData.cls();
    // @ts-ignore
    bitmapData.circle(112, 80, 138, grd);

    this.game.world.bringToTop(this.poop);
  }

  update() {
    const collision = this.game.physics.arcade.collide(this.chicken, this.cage);
    this.game.physics.arcade.collide(this.roboChickens, this.cage);

    if (this.cursors.left.isDown) {
      this.chicken.moveLeft();
    } else if (this.cursors.right.isDown) {
      this.chicken.moveRight();
    } else if (this.cursors.down.isDown) {
      this.chicken.poop();
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
    // if (__DEV__) {
      // this.game.debug.body(this.chicken)
      // this.game.debug.body(this.cage)
    // }
  }
}
