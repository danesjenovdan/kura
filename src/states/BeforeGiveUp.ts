import TextScreen from './_TextScreen';

export default class extends TextScreen {
  survival: boolean

  create() {
    super.create();
    this.game.stage.backgroundColor = '#222';

    this.nextScreen = 'AfterBeforeGiveUp';
    this.textObject.text = 
      'Kot mnogim beguncem tudi tebi ni uspelo priti do meje z EU. A tudi če bi zmogel/-la, bi te na reki Kolpi pričakala žica, ki za marsikoga predstavlja smrtno nevarno oviro.'
      +
      '\n\nŽica, ki stoji že 5 let, je mnoge oropala življenja in boljše prihodnosti, Slovenijo je stala najmanj 13 milijonov EUR, povzročila je ekonomsko škodo turizmu in lokalnemu prebivalstvu, pobila številne divje živali in simbolno legitimizirala nasilje, ksenofobijo in idejo trdnjave Evrope.';
    this.textObject.position.y = 18;
  }
}