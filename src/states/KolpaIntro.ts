import TextScreen from './_TextScreen';

export default class extends TextScreen {
  survival: boolean

  create() {
    super.create();
    this.game.stage.backgroundColor = '#222';

    this.nextScreen = 'Kolpa';
    this.textObject.text = 'You find yourself on the bank of the river Kolpa, which marks the border between Croatia and Slovenia. Although you cannot swim you still hope you will manage to enter Slovenia.';
    this.textObject.position.y = 78;

    const zica = this.game.add.image(112, 38, 'kolpa');
    zica.scale.set(2);
    zica.anchor.set(0.5);
    zica.smoothed = false;
  }
}
