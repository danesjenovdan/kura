import TextScreen from './_TextScreen';

export default class extends TextScreen {
  survival: boolean

  create() {
    super.create();
    this.game.stage.backgroundColor = '#222';

    this.nextScreen = 'Intro3';
    this.textObject.text = 'Slovenija je do beguncev in migrantov izjemno represivna. Ustrahujemo jih in izganjamo, ob tem pa kršimo načelo nevračanja v primeru grožnje mučenja, ki ga uveljavlja Evropska konvencija o človekovih pravicah. Žica je simbolna reprezentacija politike strahu in sovraštva, ki jo vodi tudi trenutna slovenska vlada.';
    this.textObject.position.y = 68;

    const zica = this.game.add.image(112, 38, 'zica');
    zica.scale.set(2);
    zica.anchor.set(0.5);
    zica.smoothed = false;
  }
}
