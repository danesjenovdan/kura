import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset }) {
    super(game, x, y, asset)

    this.animations.add('walkLeft', [1, 0], 10, true)
    this.animations.add('walkRight', [2, 9], 10, true)
    this.animations.add('idleLeft', [0, 0, 0, 0, 0, 0, 0, 0, 10], 5)
    this.animations.add('idleRight', [9, 9, 9, 9, 9, 9, 9, 9, 11], 5)
    this.animations.add('idleRight', [9, 9, 9, 9, 9, 9, 9, 9, 11], 5)
    this.animations.add('jumpLeft', [5], 0, true)
    this.animations.add('jumpRight', [6], 0, true)
    this.smoothed = false;
    this.anchor.setTo(0.5)
    this.direction = Math.random() > 0.5 ? 'Left' : 'Right';
  }

  update () {
    // this.angle += 1
  }

  moveLeft() {
    this.direction = 'Left';
    this.animations.play('walkLeft');
    this.body.velocity.x = -75;
  }
  moveRight() {
    this.direction = 'Right';
    this.animations.play('walkRight');
    this.body.velocity.x = 75;
  }
  idle() {
    this.animations.play('idle' + this.direction);
    this.body.velocity.x = 0;
  }
  jump() {
    this.animations.play('jump' + this.direction);
    this.body.velocity.y = -30;
  }
}
