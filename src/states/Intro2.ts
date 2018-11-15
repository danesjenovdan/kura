import TextScreen from './_TextScreen';

export default class extends TextScreen {
  survival: boolean

  create() {
    super.create();
    this.game.stage.backgroundColor = '#222';

    this.nextScreen = 'Intro3';
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
      `Žica simbolno legitimizira politiki strahu in sovraštva. Postavlja nas ob bok državam, kot sta Italija, ki zavrača sprejem čolnov z begunci in je mnoge posredno obsodila na smrt v morju, in Madžarska, ki jo vodi ena od najbolj rasističnih in ksenofobnih vlad v EU.`
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
