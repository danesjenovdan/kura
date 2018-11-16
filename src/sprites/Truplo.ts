import { TruploParams } from '../types';

export default class extends Phaser.Sprite {
  enemy: boolean;
  direction: string;

  constructor({game, y, direction, speed}: TruploParams) {
    const x = direction === 'left' ? 224 : -32
    super(game, x, y, 'truplo');

    this.direction = direction;
    this.enemy = false;
    
    this.game.physics.enable(this, Phaser.Physics.ARCADE);
    this.body.collideWorldBounds = false;

    if (direction === 'left') {
      this.body.velocity.x = -speed;
    } else {
      this.body.velocity.x = speed;
    }
  }

  update() {
    super.update();

    if ((this.x < -33) || (this.x > 225)) {
      this.kill();
    }
  }
}
