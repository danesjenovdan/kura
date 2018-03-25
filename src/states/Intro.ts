import TextScreen from './_TextScreen';

export default class extends TextScreen {
  survival: boolean

  create() {
    super.create();
    this.game.stage.backgroundColor = '#222';

    this.nextScreen = 'Menu';
    if (this.game.device.desktop) {
      this.textObject.text =
        'Nahajaš se v vesolju baterijskih kur, ki živijo za tvojo jutranjo ' +
        'omleto. Prevzemi vlogo junaške koklje, premagaj eksistencialno krizo ' +
        'in vzemi nase njeno življenjsko poslanstvo!' +
        '\n\nPritisni tipko ENTER za nadaljevanje!';
    } else {
      this.textObject.text =
        'Nahajaš se v vesolju baterijskih kur, ki živijo za tvojo jutranjo ' +
        'omleto. Prevzemi vlogo junaške koklje, premagaj eksistencialno krizo ' +
        'in vzemi nase njeno življenjsko poslanstvo!' +
        '\n\nDotakni se zaslona za nadaljevanje!';
    }
    this.textObject.position.y = 78;

    const chicken = this.game.add.sprite(112, 38, 'chicken');
    chicken.scale.set(2);
    chicken.anchor.set(0.5);
    chicken.smoothed = false;
    chicken.animations.add('idle', [0, 0, 0, 0, 0, 0, 0, 0, 10], 5, true);
    chicken.animations.play('idle');
  }
}
