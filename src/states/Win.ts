import TextScreen from './_TextScreen';

export default class extends TextScreen {
  survival: boolean

  create() {
    super.create();
    this.game.stage.backgroundColor = '#222';

    this.nextScreen = 'GiveUp';
    this.textObject.text = 
      'You travelled thousands of kilometres and faced countless barriers. However, there is no relief: you are now standing in front of a barbed wire. Any attempt of crossing is futile.'
      +
      '\n\nThe wire cost Slovenia at least 6.6 million Eur, causing economic harm to tourism and local inhabitants, killing many wild animals and symbolically legitimising violence, xenophobia and the idea of fortress Europe.'
    this.textObject.position.y = 18;
  }
}
