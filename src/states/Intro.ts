import TextScreen from './_TextScreen';

export default class extends TextScreen {
  survival: boolean

  create() {
    super.create();
    this.game.stage.backgroundColor = '#222';

    this.nextScreen = 'Menu';
    if (this.game.device.desktop) {
      this.textObject.text =
        'You are placed in a universe of battery-caged hens, who live for your morning ' + // i18n
        'omelette. Take on the role of a superhen, conquer your existential crisis and ' + // i18n
        'adopt its life mission!' + // i18n
        '\n\nPress ENTER to continue!'; // i18n
    } else {
      this.textObject.text =
        'You are placed in a universe of battery-caged hens, who live for your morning ' + // i18n
        'omelette. Take on the role of a superhen, conquer your existential crisis and ' + // i18n
        'adopt its life mission!' + // i18n
        '\n\nTouch the screen to continue!'; // i18n
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
