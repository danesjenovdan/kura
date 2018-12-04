import TextScreen from './_TextScreen';

export default class extends TextScreen {
  survival: boolean

  create() {
    super.create();
    this.game.stage.backgroundColor = '#222';

    this.nextScreen = 'GiveUp';
    this.textObject.text = 
      'Like many refugees before you, you did not succeed in reaching the EU. Even if you had, a razor wire waits for you on the Slovenian border. For many it has been a death trap.'
      +
      '\n\nThe wire cost Slovenia at least 6.6 million Eur, causing economic harm to tourism and local inhabitants, killing many wild animals and symbolically legitimising violence, xenophobia and the idea of fortress Europe.';
    this.textObject.position.y = 18;
  }
}
