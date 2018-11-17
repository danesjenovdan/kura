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
        'Si begunec/-ka, ki poskuša doseči Slovenijo. Najprej se moraš iz vojnega območja prebiti do begunskega taborišča. Za premikanje uporabi:';
    } else {
      text =
      'Si begunec/-ka, ki poskuša doseči Slovenijo. Najprej se moraš iz vojnega območja prebiti do begunskega taborišča. Za premikanje se dotakni zaslona.';
    }

    const zica = this.game.add.image(112, 38, 'vojna');
    zica.scale.set(2);
    zica.anchor.set(0.5);
    zica.smoothed = false;

    this.textObject.text = text;
    if (this.game.device.desktop) {
      const arrows = this.game.add.sprite(100, 126, 'arrows');
      arrows.scale.set(2);
      this.textObject.position.y = 78;
    } else {
      this.textObject.position.y = 78;
    }
  }
}
