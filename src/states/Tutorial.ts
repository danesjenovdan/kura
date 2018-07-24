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
        'Use the arrow keys to move.\n\n\n\n' + // i18n
        'To lay an egg, press the SPACEBAR on time.\n\n\n\n'; // i18n
    } else {
      text =
        'Move the chicken by touching the screen - it will follow your finger.\n\n\n' + // i18n
        'To lay an egg, double tab the screen at the right moment.\n\n\n'; // i18n
    }

    if (this.survival) {
      text += 'Lay eggs for 1 minute to advance to the next level.' // i18n
    }
    else {
      text += 'Lay 5 eggs to advance to the next level.' // i18n
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
