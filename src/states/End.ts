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
      : 'Kokošim v baterijski reji se nikoli ne zgodi nič novega. ';
    const desktopMobileText = this.game.device.desktop
      ? '\n\nPritisni tipko ENTER za ukrepanje!'
      : '\n\nDotakni se zaslona za ukrepanje!';
    this.textObject.text =
      'Ne bo šlo! ' + variableText +
      'Njihovo življenje je približno tako zabavno kot ta igra.' +
      desktopMobileText;
    
    this.textObject.position.y = 70;

    this.game.add.sprite(100, 28, 'chicken');
  }

  continue() {
    window.location.href = 'https://imasjajca.si/';
  }
}
