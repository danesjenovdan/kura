import config from '../config';

const BAR_POSITION = { x: 20, y: 15 }

export default class extends Phaser.Sprite {
  private meterPosition: number = 0
  private egg: Phaser.Sprite
  private progressBlocked: boolean = false

  constructor(game: Phaser.Game) {
    super(game, BAR_POSITION.x * config.renderScale, BAR_POSITION.y * config.renderScale, 'meter');
    this.anchor.y = 0.5;
    this.scale.set(config.renderScale);
    this.smoothed = false;
    this.game.add.existing(this);

    this.egg = this.game.make.sprite(0, 0, 'egg');
    this.egg.anchor.y = 0.5;
    this.egg.anchor.x = 0.444444;
    this.egg.smoothed = false;
    this.addChild(this.egg);
  }

  update() {
    if (!this.progressBlocked) {
      this.meterPosition = this.meterPosition < 184 ? this.meterPosition + 1 : 0;
      this.egg.position.x = this.meterPosition;
    }
  }

  inTheGreen() {
    return this.meterPosition > 161;
  }

  resetMeter() {
    this.meterPosition = 0;
    this.egg.position.x = this.meterPosition;
    this.progressBlocked = true;
    this.game.time.events.add(
      Phaser.Timer.SECOND * 2,
      () => this.progressBlocked = false
    );
  }
}
