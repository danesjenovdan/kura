import TextScreen from './_TextScreen';

export default class extends TextScreen {
  survival: boolean

  create() {
    super.create();
    this.game.stage.backgroundColor = '#222';

    this.nextScreen = 'Intro3';
    this.textObject.text = 'Razor-wire fence legitimises politics of fear and hatred. It puts us next to countries such as Italy, which sentenced many to drowning by refusing to accept refugee boats, and Hungary, which is ruled by one of the most racist and xenophobic governments in the EU.';
    this.textObject.position.y = 78;

    const zica = this.game.add.image(112, 38, 'zica');
    zica.scale.set(2);
    zica.anchor.set(0.5);
    zica.smoothed = false;
  }
}
