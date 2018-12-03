import TextScreen from './_TextScreen';

export default class extends TextScreen {
  survival: boolean

  create() {
    super.create();
    this.game.stage.backgroundColor = '#222';

    this.nextScreen = 'GiveUp';
    this.textObject.text = 
      'You have managed to travel thousands of kilometers and faced countless barriers. However, there is no relief: you are now standing in front a barbed wire. Any attempt of crossing is futile.'
      +
      '\n\nThe wire cost Slovenia at least 6,6 million Euros, it caused economic harm to tourism and local inhabitants, it killed many animals and has symbolically legitimised violence, xenophobia and the idea of fortress Europe.'
    this.textObject.position.y = 18;
  }
}
