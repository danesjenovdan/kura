import TextScreen from './_TextScreen';
import config from '../config';

export default class extends TextScreen {
  survival: boolean

  init(survival: boolean) {
    this.survival = survival;
  }

  create() {
    super.create();
    this.nextScreen = 'Game';
    this.nextScreenPayload = this.survival;

    let text = '';

    if (this.game.device.desktop) {
      text =
        'Izmanto bulttaustiņus, lai pârvietotos.\n\n\n\n' + // i18n
        'Lai izdētu olu, īstajâ laikâ nospied atstarpes taustiņu.\n\n\n\n'; // i18n
    } else {
      text =
        'Pieskaries ekrânam, lai pârvietotos – vista sekos tavam pirkstam.\n\n\n' + // i18n
        'Lai izdētu olu, īstajâ laikâ divreiz pieskaries ekrânam.\n\n\n'; // i18n
    }

    if (this.survival) {
      text += 'Dēj olas 1 minûti, lai pârietu nâkamajâ līmenī.' // i18n
    }
    else {
      text += 'Izdēj 5 olas, lai pârietu nâkamajâ līmenī.' // i18n
    }

    this.textObject.text = text;
    if (this.game.device.desktop) {
      this.textObject.position.y = 38 * config.renderScale;

      const centerW = config.gameWidth / 2 * config.renderScale;

      const arrows = this.game.add.sprite(centerW, 20 * config.renderScale, 'arrows');
      arrows.scale.set(2 * config.renderScale);
      arrows.anchor.set(0.5);
      arrows.smoothed = false;

      const space = this.game.add.sprite(centerW, 65 * config.renderScale, 'space');
      space.scale.set(2 * config.renderScale);
      space.anchor.set(0.5);
      space.smoothed = false;

      const egg = this.game.add.sprite(centerW, 105 * config.renderScale, 'egg');
      egg.scale.set(1 * config.renderScale);
      egg.anchor.set(0.5);
      egg.smoothed = false;
    } else {
      this.textObject.position.y = 28;
    }
  }
}
