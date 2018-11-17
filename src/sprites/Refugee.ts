import { RefugeeParams } from '../types';

export default class extends Phaser.Sprite {
  baseXSpeed: number;
  baseYSpeed: number;

  constructor({game, x, y}: RefugeeParams) {
    super(game, x, y, 'refugee');

    this.baseXSpeed = 0;
    this.baseYSpeed = 0;

    this.animations.add('walk', [1, 1, 2, 2], 15, true);
    this.animations.add('idle', [0], 1, false);
    this.smoothed = false;
    this.anchor.setTo(0.5);
    // this.scale.set(1);

    this.angle = 270;

    this.game.physics.enable(this, Phaser.Physics.ARCADE);
    this.body.collideWorldBounds = true;
    this.body.bounce.set(0);

    // console.log('bounds', this.body.setSize(10, 16, 4, 0));
  }

  update() {
    if ((this.body.velocity.x === 0) && (this.body.velocity.y === 0)) {
      this.animations.play('idle');
    }
  }
}
