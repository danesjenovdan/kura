import TextScreen from './_TextScreen';

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
        'Izmanto bulttaustiòus, lai pârvietotos.\n\n\n\n' + // i18n
        'Lai izdçtu olu, îstajâ laikâ nospied atstarpes taustiòu.\n\n\n\n'; // i18n
    } else {
      text =
        'Pieskaries ekrânam, lai pârvietotos – vista sekos tavam pirkstam.\n\n\n' + // i18n
        'Lai izdçtu olu, îstajâ laikâ divreiz pieskaries ekrânam.\n\n\n'; // i18n
    }

    if (this.survival) {
      text += 'Dçj olas 1 minûti, lai pârietu nâkamajâ lîmenî.' // i18n
    }
    else {
      text += 'Izdçj 5 olas, lai pârietu nâkamajâ lîmenî.' // i18n
    }

    this.textObject.text = text;
    if (this.game.device.desktop) {
      this.textObject.position.y = 38;
      this.game.add.sprite(104, 24, 'arrows');
      this.game.add.sprite(98, 74, 'space');
      this.game.add.sprite(108, 112, 'egg');
    } else {
      this.textObject.position.y = 28;
    }
  }
}
