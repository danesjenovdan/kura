import TextScreen from './_TextScreen';

export default class extends TextScreen {
  survival: boolean

  create() {
    super.create();
    this.game.stage.backgroundColor = '#222';

    this.nextScreen = 'GiveUp';
    this.textObject.text = 
      'Žica, ki stoji že 5 let, je mnoge oropala življenja in boljše prihodnosti, Slovenijo je stala najmanj 13 milijonov EUR, povzročila je ekonomsko škodo turizmu in lokalnemu prebivalstvu, pobila številne divje živali in simbolno legitimizirala nasilje, ksenofobijo in idejo trdnjave Evrope.\n\nOpozori svoje prijatelje, da žica stoji že 5 let!'
    this.textObject.position.y = 18;
  }
}
