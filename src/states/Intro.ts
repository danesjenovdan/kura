import TextScreen from './_TextScreen';
import config from '../config';

export default class extends TextScreen {
  survival: boolean

  create() {
    super.create();
    this.game.stage.backgroundColor = '#222';

    this.nextScreen = 'Menu';
    if (this.game.device.desktop) {
      this.textObject.text =
        'Tu esi nokïuvis sprostos turçtu vistu pasaulç. Viòas dzîvo tavas ikrîta ' + // i18n
        'omletes dçï. Iejûties supervistas âdâ, pârvari savu eksistenciâlo krîzi ' + // i18n
        'un pieòem savu dzîves sûtîbu!' + // i18n
        '\n\nSpied ENTER, lai turpinâtu!'; // i18n
    } else {
      this.textObject.text =
        'Tu esi nokïuvis sprostos turçtu vistu pasaulç. Viòas dzîvo tavas ikrîta ' + // i18n
        'omletes dçï. Iejûties supervistas âdâ, pârvari savu eksistenciâlo krîzi ' + // i18n
        'un pieòem savu dzîves sûtîbu!' + // i18n
        '\n\nPieskaries ekrânam, lai turpinâtu!'; // i18n
    }
    this.textObject.position.y = 78 * config.renderScale;

    const chicken = this.game.add.sprite(112 * config.renderScale, 38 * config.renderScale, 'chicken');
    chicken.scale.set(2 * config.renderScale);
    chicken.anchor.set(0.5);
    chicken.smoothed = false;
    chicken.animations.add('idle', [0, 0, 0, 0, 0, 0, 0, 0, 10], 5, true);
    chicken.animations.play('idle');
  }
}
