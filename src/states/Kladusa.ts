import TextScreen from './_TextScreen';

export default class extends TextScreen {
  survival: boolean

  create() {
    super.create();
    this.game.stage.backgroundColor = '#222';

    this.nextScreen = 'CampIntro';
    this.textObject.text = 'You reached an overcrowded refugee camp. Hygiene is unsatisfactory and there is a lack of basic necessities. One such camp in Lesbos was built for 2000 people, but hosts 6000.'
    this.textObject.position.y = 78;

    const zica = this.game.add.image(112, 38, 'taborisce');
    zica.scale.set(2);
    zica.anchor.set(0.5);
    zica.smoothed = false;
  }
}
