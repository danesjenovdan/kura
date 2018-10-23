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
      ? 'Sprostos turçtu vistu dzîvçs nekad nekas jauns nenotiek. ' // i18n
      : 'Sprostos turçtas vistas nekad nepiedzîvo neko jaunu. '; // i18n
    const desktopMobileText = this.game.device.desktop
      ? '\n\nSpied ENTER, lai to mainîtu!' // i18n
      : '\n\nPieskaries ekrânam, lai to mainîtu!'; // i18n
    this.textObject.text =
      'Nekâ nebija! ' + variableText + // i18n
      'Viòu dzîve ir apmçram tikpat aizraujoða kâ ðî spçle.' + // i18n
      desktopMobileText;

    this.textObject.position.y = 70;

    this.game.add.sprite(100, 28, 'chicken');
  }

  continue() {
    window.location.href = 'https://www.rikojies.lv/olu-cena#section01'; // i18n
  }
}
