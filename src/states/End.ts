import TextScreen from './_TextScreen';

export default class extends TextScreen {
  survival: boolean

  create() {
    super.create();
    this.game.stage.backgroundColor = '#222';

    this.nextScreen = 'Menu';
    this.textObject.text =
      'Ne bo šlo! Kokošim v baterijski reji se nikoli ne zgodi nič novega. ' +
      'Njihovo življenje je približno tako zabavno kot ta igra.' +
      '\n\nPritisni tipko ENTER za ukrepanje!';
    this.textObject.position.y = 70;

    this.game.add.sprite(100, 28, 'chicken');
  }

  continue() {
    window.location.href = 'http://www.danesjenovdan.si';
  }
}
