import Cage from './Cage';

const POOP_COLORS = [0xD9CD9E, 0xCD8846, 0xD1B683, 0xCABFA5];

export default class extends Phaser.Sprite {
  onHitFloor: Phaser.Signal
  cage: Cage

  constructor({game, x, y, cage}: {
    game: Phaser.Game,
    x: number,
    y: number,
    cage: Cage
  }) {
    super(game, x, y, 'poop');
    this.onHitFloor = new Phaser.Signal();
    this.cage = cage;
    this.tint = POOP_COLORS[Math.floor(Math.random() * POOP_COLORS.length)];
  }

  update() {
    const collision = this.game.physics.arcade.collide(this, this.cage);
    if (collision) {
      this.onHitFloor.dispatch();
    }
  }
}
