import TextScreen from './_TextScreen';

export default class extends TextScreen {
  survival: boolean

  create() {
    super.create();
    this.game.stage.backgroundColor = '#222';

    this.nextScreen = 'Kolpa';
    this.textObject.text = 'Dosegel/-la si Kolpo. Čeprav ne znaš plavati, upaš, da ti uspe doseči Slovenijo.';
    this.textObject.position.y = 78;

    const zica = this.game.add.image(112, 38, 'kolpa');
    zica.scale.set(2);
    zica.anchor.set(0.5);
    zica.smoothed = false;
  }
}
