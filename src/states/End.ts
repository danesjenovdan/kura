import TextScreen from './_TextScreen';

export default class extends TextScreen {
  survival: boolean

  init(survival: boolean) {
    this.survival = survival
  }

  create() {
    super.create();
    this.nextScreen = 'Menu';
    const variableText = this.survival
      ? 'Kokoši v baterijski reji ne morejo nikoli odnehati. '
      : 'Kokošim v baterijski reji se nikoli ne zgodi nič novega.';
    this.textObject.text =
      'Ne bo šlo! ' + variableText +
      'Njihovo življenje je približno tako zabavno kot ta igra.' +
      '\n\nPritisni tipko ENTER za ukrepanje!';
    this.textObject.position.y = 70;

    this.game.add.sprite(100, 28, 'chicken');
  }

  continue() {
    window.location.href = 'http://www.danesjenovdan.si';
  }
}
