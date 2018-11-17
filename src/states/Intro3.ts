import TextScreen from './_TextScreen';

export default class extends TextScreen {
  survival: boolean

  create() {
    super.create();
    this.game.stage.backgroundColor = '#222';

    this.nextScreen = 'Tutorial';
    this.textObject.text = 'Zdi se, da smo v teh treh letih žico sprejeli kot dano realnost. Dovolili smo si pozabiti, kar ne sme biti pozabljeno.\n\nPričujoča “igra” te postavlja v čevlje begunca/-ke na poti v krasni novi svet. V njej te ne čaka nič lepega, le frustracije in smrt.';
    this.textObject.position.y = 78;

    const zica = this.game.add.image(112, 38, 'zica');
    zica.scale.set(2);
    zica.anchor.set(0.5);
    zica.smoothed = false;
  }
}
