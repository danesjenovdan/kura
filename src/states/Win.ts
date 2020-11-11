import TextScreen from './_TextScreen';

export default class extends TextScreen {
  survival: boolean

  create() {
    super.create();
    this.game.stage.backgroundColor = '#222';

    this.nextScreen = 'AfterBeforeGiveUp';
    this.textObject.text = 
      'Uspelo ti je prepotovati na tisoče kilometrov in se soočiti z neštetimi ovirami. A odrešitve ni: znajdeš se pred z britvicami prepredeno žico, ki za marsikoga predstavlja smrtno nevarno oviro.';
    this.textObject.position.y = 78;

    const zica = this.game.add.image(112, 38, 'slovenija');
    zica.scale.set(2);
    zica.anchor.set(0.5);
    zica.smoothed = false;
  }
}
