/* globals __DEV__ */
import Cage from '../sprites/Cage';
import Chicken from '../sprites/Chicken';
import EggMeter from '../sprites/EggMeter';
import PoopPool from '../sprites/PoopPool';
import RoboChicken from '../sprites/RoboChicken';
import Score from '../sprites/Score';

export default class extends Phaser.State {
  cage: Cage
  chicken: Chicken
  eggMeter: EggMeter
  jumping: boolean
  keys: any
  poopPool: PoopPool
  roboChickens: Phaser.Group
  score: Score
  endGameTriggered: boolean = false

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
      cage: this.cage,
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
            cage: this.cage,
          }));
        }
      }
    }

    this.jumping = false;
    this.keys = this.game.input.keyboard.addKeys({
      up: Phaser.KeyCode.UP,
      w: Phaser.KeyCode.W,
      down: Phaser.KeyCode.DOWN,
      s: Phaser.KeyCode.S,
      left: Phaser.KeyCode.LEFT,
      a: Phaser.KeyCode.A,
      right: Phaser.KeyCode.RIGHT,
      d: Phaser.KeyCode.D,
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
    this.score = new Score(this.game);
  }

  update() {
    if (this.keys.space.isDown) {
      this.layEgg();

      if (this.score.currentScore > 10) {
        this.triggerEndGame();
      }
    } else if (this.keys.left.isDown || this.keys.a.isDown) {
      this.chicken.moveLeft();
    } else if (this.keys.right.isDown || this.keys.d.isDown) {
      this.chicken.moveRight();
    } else if (this.keys.down.isDown || this.keys.s.isDown) {
      this.chicken.poop();
    } else if (this.keys.up.isDown || this.keys.w.isDown) {
      this.chicken.jump();
    } else {
      this.chicken.idle();
    }
  }

  layEgg() {
    if (this.eggMeter.inTheGreen()) {
      this.chicken.layEgg();
      this.score.increase();
    }

    this.eggMeter.resetMeter();
  }

  triggerEndGame() {
    if (this.endGameTriggered) return;

    this.eggMeter.kill();
    this.score.kill();
    const text = this.game.add.text(
      22,
      20,
      'V Sloveniji se vsak dan proda 1234567 jajc iz baterijske reje. Življenje kokoši, ki jih znesejo, je približno tako zabavno, kot ta igra.',
      {
        fill: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        font: 'Arial',
        wordWrap: true,
        wordWrapWidth: 180,
        stroke: 'black',
        strokeThickness: 1,
      }
    )
    text.lineSpacing = -5;
  }
}
