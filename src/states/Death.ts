import TextScreen from './_TextScreen';

export default class extends TextScreen {
  survival: boolean

  create() {
    super.create();
    this.game.stage.backgroundColor = '#222';

    this.nextScreen = 'Intro';
    // if (this.game.device.desktop) {
    //   this.textObject.text =
    //     'You find your self in a world of battery chicken, who live for your morning ' + // i18n
    //     'omelette. Step into the shoes of the heroic chicken, bet the existential crisis ' + // i18n
    //     'and take it upon yourself to fulfill her destiny!' + // i18n
    //     '\n\nPress ENTER to continue!'; // i18n
    // } else {
    //   this.textObject.text =
    //   'You find your self in a world of battery chicken, who live for your morning ' + // i18n
    //   'omelette. Step into the shoes of the heroic chicken, bet the existential crisis ' + // i18n
    //   'and take it upon yourself to fulfill her destiny!' + // i18n
    //   '\n\nTouch the screen to continue!'; // i18n
    // }
    this.textObject.text = 
      'NOT DONE\n\nSi eden od mnogih, ki so izgubili življenje v vojnih območjih. Samo v Siriji je letos umrlo že [vstavi številko tik pred objavo - http://www.iamsyria.org/death-tolls.html] civilistov.'
    this.textObject.position.y = 78;

    const refugee = this.game.add.sprite(112, 38, 'refugee');
    refugee.scale.set(0.5);
    refugee.anchor.set(0.5);
    refugee.smoothed = false;
    refugee.animations.add('idle', [0, 1, 2, 1, 0, 1, 2, 1], 5, true);
    refugee.animations.play('idle');
    refugee.angle = 270;
  }
}
