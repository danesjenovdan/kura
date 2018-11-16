import TextScreen from './_TextScreen';

export default class extends TextScreen {
  survival: boolean

  init(survival: boolean) {
    this.survival = survival;
  }

  create() {
    super.create();
    this.nextScreen = 'War';
    this.nextScreenPayload = this.survival;

    let text = '';

    if (this.game.device.desktop) {
      text =
        'Si begunec, ki poskuša doseči Slovenijo. Najprej se moraš iz vojnega območja prebiti do begunskega taborišča. Za premikanje uporabi';
    // } else {
    //   text =
    //     'Move the chicken by touching the screen - it will follow your finger.\n\n\n' + // i18n
    //     'To lay an egg, double tab the screen at the right moment.\n\n\n'; // i18n
    }

    // if (this.survival) {
    //   text += 'Play 1 minute to continue to the next level.' // i18n
    // }
    // else {
    //   text += 'Lay 5 eggs to progress to the next level.' // i18n
    // }

    this.textObject.text = text;
    if (this.game.device.desktop) {
      // this.textObject.position.y = 38;
      const arrows = this.game.add.sprite(100, 126, 'arrows');
      arrows.scale.set(2);
      this.textObject.position.y = 78;

      const zica = this.game.add.image(112, 38, 'vojna');
      zica.scale.set(2);
      zica.anchor.set(0.5);
      zica.smoothed = false;
      // this.game.add.sprite(98, 74, 'space');
      // this.game.add.sprite(108, 112, 'egg');
    } else {
      this.textObject.position.y = 28;
    }
  }
}
