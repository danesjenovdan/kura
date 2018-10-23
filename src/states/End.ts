import TextScreen from './_TextScreen';
import config from '../config';

export default class extends TextScreen {
  survival: boolean

  init(survival: boolean) {
    this.survival = survival
  }

  create() {
    super.create();
    this.game.stage.backgroundColor = '#222';

    this.nextScreen = 'Menu';

    const variableText = this.survival
      ? 'Sprostos turçtu vistu dzîvçs nekad nekas jauns nenotiek. ' // i18n
      : 'Sprostos turçtas vistas nekad nepiedzîvo neko jaunu. '; // i18n
    const desktopMobileText = this.game.device.desktop
      ? '\n\nSpied ENTER, lai to mainîtu!' // i18n
      : '\n\nPieskaries ekrânam, lai to mainîtu!'; // i18n
    this.textObject.text =
      'Nekâ nebija! ' + variableText + // i18n
      'Viòu dzîve ir apmçram tikpat aizraujoða kâ ðî spçle.' + // i18n
      desktopMobileText;

    this.textObject.position.y = 78 * config.renderScale;

    const chicken = this.game.add.sprite(112 * config.renderScale, 38 * config.renderScale, 'chicken');
    chicken.scale.set(2 * config.renderScale);
    chicken.anchor.set(0.5);
    chicken.smoothed = false;
    chicken.animations.add('idle', [0, 0, 0, 0, 0, 0, 0, 0, 10], 5, true);
    chicken.animations.play('idle');
  }

  continue() {
    window.location.href = config.finalURL;
  }
}
