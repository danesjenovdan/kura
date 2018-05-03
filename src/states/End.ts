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
      ? 'Chicken in battery cages can never quit. ' // i18n
      : 'Nothing new ever happens to them. '; // i18n
    const desktopMobileText = this.game.device.desktop
      ? '\n\nPress ENTER to do something about it!' // i18n
      : '\n\nTouch the screen to do something about it!'; // i18n
    this.textObject.text =
      'No go. :( ' + variableText + // i18n
      'Their life is as fun as this game.' + // i18n
      desktopMobileText;
    
    this.textObject.position.y = 70;

    this.game.add.sprite(100, 28, 'chicken');
  }

  continue() {
    window.location.href = 'https://imasjajca.si/'; // i18n
  }
}
