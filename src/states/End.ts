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
      ? 'Battery-caged hens never experience anything new. ' // i18n
      : 'Nothing new ever happens to battery-caged hens. '; // i18n
    const desktopMobileText = this.game.device.desktop
      ? '\n\nPress ENTER to do something about it!' // i18n
      : '\n\nTouch the screen to do something about it!'; // i18n
    this.textObject.text =
      'No can do! ' + variableText + // i18n
      'Their life is about as fun as this game.' + // i18n
      desktopMobileText;

    this.textObject.position.y = 70;

    this.game.add.sprite(100, 28, 'chicken');
  }

  continue() {
    window.location.href = 'https://imasjajca.si/'; // i18n
  }
}
