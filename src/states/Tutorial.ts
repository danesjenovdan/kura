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
        'Za premikanje uporabi puščice na tipkovnici.\n\n\n\n' +
        'Da izležeš jajce, pravočasno pritisni presledek.\n\n\n\n';
    } else {
      text =
        'Za premikanje se dotakni zaslona. Kura bo sledila tvojemu prstu.\n\n\n' +
        'Da izležeš jajce, se dvakrat hitro dotakni zaslona.\n\n\n';
    }

    if (this.survival) {
      text += 'Igraj 1 minuto za napredovanje v naslednjo stopnjo.'
    }
    else {
      text += 'Zberi 5 jajc za napredovanje v naslednjo stopnjo.'
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
