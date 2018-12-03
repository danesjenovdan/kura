import TextScreen from './_TextScreen';

export default class extends TextScreen {
  survival: boolean

  create() {
    super.create();
    this.game.stage.backgroundColor = '#222';

    this.nextScreen = 'CampIntro';
    this.textObject.text = 'You have managed to reach an overcrowded refugee camp. Hygiene is unsatisfactory and there is lack of basic necessities. One such camp on Lesbos for 2000 people hosts 6000 refugees.'
    this.textObject.position.y = 78;

    const zica = this.game.add.image(112, 38, 'taborisce');
    zica.scale.set(2);
    zica.anchor.set(0.5);
    zica.smoothed = false;
  }
}
