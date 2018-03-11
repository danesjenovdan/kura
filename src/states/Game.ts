/* globals __DEV__ */
import Cage from '../sprites/Cage';
import Chicken from '../sprites/Chicken';
import EggMeter from '../sprites/EggMeter';
import PoopPool from '../sprites/PoopPool';
import RoboChicken from '../sprites/RoboChicken';

export default class extends Phaser.State {
  cage: Cage
  chicken: Chicken
  eggMeter: EggMeter
  roboChickens: Phaser.Group
  jumping: boolean
  keys: any
  poopPool: PoopPool

  preload() {
    this.game.load.audio('soundtrack', 'assets/audio/kure.mp3');
  }

  create() {
    const music = this.game.add.audio('soundtrack');
    music.play();

    Phaser.Canvas.setImageRenderingCrisp(this.game.canvas);
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.physics.arcade.gravity.y = 300;
    this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.game.stage.backgroundColor = '#eee';

    this.cage = new Cage({ game: this.game });
    this.poopPool = new PoopPool({ game: this.game }, this.cage)

    this.chicken = new Chicken({
      game: this.game,
      x: this.world.centerX,
      y: this.world.centerY,
      poopPool: this.poopPool,
    });

    this.roboChickens = this.game.add.group();

    for (let i = 0; i < 7; i += 1) {
      for (let j = 0; j < 5; j += 1) {
        if (i !== 3 || j !== 2) {
          this.roboChickens.add(new RoboChicken({
            game: this.game,
            x: (i * 32) + 16,
            y: (j * 32) + 16,
            poopPool: this.poopPool,
          }));
        }
      }
    }

    this.jumping = false;
    this.keys = this.game.input.keyboard.addKeys({
      up: Phaser.KeyCode.UP,
      down: Phaser.KeyCode.DOWN,
      left: Phaser.KeyCode.LEFT,
      right: Phaser.KeyCode.RIGHT,
      space: Phaser.KeyCode.SPACEBAR
    });

    this.game.add.group(this.cage);
    this.game.add.existing(this.chicken);
    this.game.add.existing(this.roboChickens);

    this.game.world.bringToTop(this.poopPool);

    //  Our BitmapData (same size as our canvas)
    const bitmapData = this.game.make.bitmapData(224, 160);

    //  Add it to the world or we can't see it
    bitmapData.addToWorld();
    const grd = bitmapData.context.createRadialGradient(112, 80, 0, 112, 80, 112);
    grd.addColorStop(0, 'rgba(255, 255, 255, 0)');
    grd.addColorStop(0.3, 'rgba(0, 0, 0, 0.3');
    grd.addColorStop(1, 'rgba(0, 0, 0, 1');

    bitmapData.cls();
    // @ts-ignore
    bitmapData.circle(112, 80, 138, grd);

    this.eggMeter = new EggMeter(this.game);
  }

  update() {
    const collision = this.game.physics.arcade.collide(this.chicken, this.cage);
    this.game.physics.arcade.collide(this.roboChickens, this.cage);

    if (this.keys.space.isDown) {
      if (this.eggMeter.inTheGreen()) {
        this.chicken.layEgg();
      }
      this.eggMeter.resetMeter();
    } else if (this.keys.left.isDown) {
      this.chicken.moveLeft();
    } else if (this.keys.right.isDown) {
      this.chicken.moveRight();
    } else if (this.keys.down.isDown) {
      this.chicken.poop();
    } else if (this.keys.up.isDown && collision && !this.jumping) {
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
