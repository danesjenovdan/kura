import TextScreen from './_TextScreen';

export default class extends TextScreen {
  survival: boolean

  create() {
    super.create();
    this.game.stage.backgroundColor = '#222';

    this.nextScreen = 'Menu';
    this.textObject.text =
      'Nahajaš se v vesolju baterijskih kur, ki živijo za tvojo jutranjo ' +
      'omleto. Prevzemi vlogo junaške koklje, premagaj eksistencialno krizo ' +
      'in vzemi nase njeno življenjsko poslanstvo!' +
      '\n\nPritisni tipko ENTER za nadaljevanje!';
    this.textObject.position.y = 70;

    this.game.add.sprite(100, 28, 'chicken');
  }
}
