import TextScreen from './_TextScreen';

export default class extends TextScreen {
  survival: boolean

  create() {
    super.create();
    this.game.stage.backgroundColor = '#222';

    this.nextScreen = 'Camp';
    this.textObject.text = 'You try to gather your strenghts and continue your journey.'
    this.textObject.position.y = 78;

    const zica = this.game.add.image(112, 38, 'taborisce');
    zica.scale.set(2);
    zica.anchor.set(0.5);
    zica.smoothed = false;
  }
}
