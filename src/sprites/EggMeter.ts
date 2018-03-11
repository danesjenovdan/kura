const BAR_POSITION = { x: 20, y: 15 }

export default class extends Phaser.Sprite {
  private meterPosition: number = 0
  private egg: Phaser.Sprite

  constructor(game: Phaser.Game) {
    super(game, BAR_POSITION.x, BAR_POSITION.y, 'meter');
    this.anchor.y = 0.5;

    this.game.add.existing(this);
    this.egg = this.game.add.sprite(BAR_POSITION.x, BAR_POSITION.y, 'egg');
    this.egg.anchor.y = 0.5;
    this.egg.anchor.x = 0.444444;
  }

  update() {
    this.meterPosition = this.meterPosition < 184 ? this.meterPosition + 1 : 0;
    this.egg.position.x = this.meterPosition + 20;
  }

  inTheGreen() {
    return this.meterPosition > 161;
  }

  resetMeter() {
    this.meterPosition = 0;
  }
}
