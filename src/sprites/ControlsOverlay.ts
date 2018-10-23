import config from '../config';

export default class extends Phaser.Group {
  constructor(game: Phaser.Game) {
    super(game);

    const bottomPos = (config.gameHeight - 2) * config.renderScale;

    const arrows = new Phaser.Sprite(this.game, 16 * config.renderScale, bottomPos, 'arrows');
    arrows.scale.set(config.renderScale);
    arrows.anchor.set(0, 1);
    arrows.smoothed = false;
    this.addChild(arrows);

    const arrowsText = new Phaser.BitmapText(this.game, 37 * config.renderScale, bottomPos, 'PS2P', 'Kustēties', 6 * config.renderScale); // i18n
    arrowsText.anchor.set(0, 1);
    this.addChild(arrowsText);

    const space = new Phaser.Sprite(this.game, 120 * config.renderScale, bottomPos - (2.5 * config.renderScale), 'space');
    space.scale.set(config.renderScale);
    space.anchor.set(0, 1);
    space.smoothed = false;
    this.addChild(space);

    const spaceText = new Phaser.BitmapText(this.game, 153 * config.renderScale, bottomPos, 'PS2P', 'Izdēt olu', 6 * config.renderScale); // i18n
    spaceText.anchor.set(0, 1);
    this.addChild(spaceText);

    this.game.add.existing(this);
  }
}
