import TextScreen from './_TextScreen';

export default class extends TextScreen {
  survival: boolean

  create() {
    super.create();
    this.game.stage.backgroundColor = '#222';

    this.nextScreen = 'GiveUp';
    this.textObject.text = 
      'Uspelo ti je prepotovati na tisoče kilometrov in se soočiti z neštetimi ovirami. A odrešitve ni: znajdeš se pred z britvicami prepredeno žico. Poskus prečkanja je nemogoč.'
      +
      '\n\nŽica, ki stoji že 3 leta, je Slovenijo stala najmanj 6,6 milijonov EUR, povzročila je ekonomsko škodo turizmu in lokalnemu prebivalstvu, pobila številne divje živali in simbolno legitimizirala nasilje, ksenofobijo in idejo trdnjave Evrope.'
    this.textObject.position.y = 18;
  }
}
