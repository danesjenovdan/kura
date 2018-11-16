import TextScreen from './_TextScreen';

export default class extends TextScreen {
  survival: boolean

  create() {
    super.create();
    this.game.stage.backgroundColor = '#222';

    this.nextScreen = 'GiveUp';
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
      'Kot mnogim beguncem tudi tebi ni uspelo priti do meje z EU. A tudi če bi zmogel/-la, bi te na reki Kolpi pričakala žica, ki za marsikoga predstavlja smrtno nevarno oviro.'
      +
      '\n\nŽica, ki stoji že 3 leta, je Slovenijo stala najmanj 6,6 milijonov EUR, povzročila je ekonomsko škodo turizmu in lokalnemu prebivalstvu, pobila številne divje živali in simbolno legitimizirala nasilje, ksenofobijo in idejo trdnjave Evrope.'
    this.textObject.position.y = 18;

    // const zica = this.game.add.image(112, 38, 'kolpa');
    // zica.scale.set(2);
    // zica.anchor.set(0.5);
    // zica.smoothed = false;
  }
}
