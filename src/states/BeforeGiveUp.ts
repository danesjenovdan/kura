import TextScreen from './_TextScreen';

export default class extends TextScreen {
  survival: boolean

  create() {
    super.create();
    this.game.stage.backgroundColor = '#222';

    this.nextScreen = 'GiveUp';
    this.textObject.text = 
      'Like many refugees before you, you did not succeed in reaching the EU. Even if you had, a razor-wire fence waits for you on the Slovenian border. For many it has been a death trap.'
      +
      '\n\nThe wire cost Slovenia at least 6,6 million Euros, it caused economic harm to tourism and local inhabitants, it killed many animals and has symbolically legitimised violence, xenophobia and the idea of fortress Europe.';
    this.textObject.position.y = 18;
  }
}
