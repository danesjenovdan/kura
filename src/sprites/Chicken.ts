import Cage from './Cage';
import Egg from './Egg';
import Poop from './Poop';
import PoopPool from './PoopPool';
import {ChickenParams} from '../types';

enum Direction {
  Left = 'Left',
  Right = 'Right',
}

const BUTT_POSITION = {
  Left: [16, 27],
  Right: [5, 27],
}

export default class extends Phaser.Sprite {
  cage: Cage
  direction: Direction
  poopPool: PoopPool
  myPoop: Poop | null
  myEgg: Egg | null
  jumping: boolean = false
  robot: boolean = false

  constructor({game, x, y, poopPool, cage}: ChickenParams) {
    super(game, x, y, 'chicken');

    this.animations.add('walkLeft', [1, 0], 10, true);
    this.animations.add('walkRight', [2, 9], 10, true);
    this.animations.add('poopLeft', [10], 1, false);
    this.animations.add('poopRight', [11], 1, false);
    this.animations.add('idleLeft', [0, 0, 0, 0, 0, 0, 0, 0, 10], 5);
    this.animations.add('idleRight', [9, 9, 9, 9, 9, 9, 9, 9, 11], 5);
    this.animations.add('jumpLeft', [5], 0, false);
    this.animations.add('jumpRight', [6], 0, false);
    this.smoothed = false;
    this.anchor.setTo(0.5);
    this.direction = Math.random() > 0.5 ? Direction.Left : Direction.Right;

    this.game.physics.enable(this, Phaser.Physics.ARCADE);
    this.body.collideWorldBounds = true;

    this.poopPool = poopPool;
    this.cage = cage;
  }

  update() {
    this.game.physics.arcade.collide(this, this.cage);
  }

  moveLeft() {
    this.direction = Direction.Left;
    this.animations.play('walkLeft');
    this.body.velocity.x = -75;
  }
  moveRight() {
    this.direction = Direction.Right;
    this.animations.play('walkRight');
    this.body.velocity.x = 75;
  }
  idle() {
    if (this.jumping) return;

    this.animations.play(`idle${this.direction}`);
    this.body.velocity.x = 0;
  }
  jump() {
    if (this.jumping) return;

    this.jumping = true;
    this.animations.play(`jump${this.direction}`);
    this.body.velocity.y = -100;
    if (!this.robot) {
      this.game.sound.play('jump');
    }

    this.game.time.events.add(
      Phaser.Timer.SECOND / 4,
      () => this.jumping = false
    );
  }
  poop() {
    if (this.myPoop) return;

    this.animations.play(`poop${this.direction}`);
    const poop = this.poopPool.produce(this.getCurrentButtPosition());
    if (!this.robot) {
      this.game.sound.play('poop');
    }
    poop.onHitFloor.addOnce(() => this.myPoop = null);

    this.myPoop = poop;
  }
  layEgg() {
    if (this.myEgg) {
      return;
    }

    this.animations.play(`poop${this.direction}`);
    const egg = new Egg({
      game: this.game,
      ...this.getCurrentButtPosition()
    });

    egg.events.onOutOfBounds.addOnce(() => this.myEgg = null);

    this.myEgg = egg;
  }
  getCurrentButtPosition() {
    return {
      x: Math.round(this.body.x) + BUTT_POSITION[this.direction][0],
      y: Math.round(this.body.y) + BUTT_POSITION[this.direction][1],
    }
  }
}
