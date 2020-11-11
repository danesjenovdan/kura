import TextScreen from './_TextScreen';

export default class extends TextScreen {
  survival: boolean

  create() {
    super.create();
    this.game.stage.backgroundColor = '#222';

    this.nextScreen = 'AfterAfterBeforeGiveUp';
    this.textObject.text = 
      'Tudi, če uspeš prečkati žico, to še nič ne pomeni. Kar dve tretjini beguncev, ki pridejo s Hrvaške, po postopku izročitve izženemo nazaj, četudi obstajajo jasni dokazi in pričevanja o mučenju. Tiste redke, ki sploh uspejo vložiti prošnjo za azil, zapremo v centre za tujce, omejimo njihovo prosto gibanje in delo, obsodimo jih na življenje v neprimernih razmerah in revščini, povrhu vsega pa jim vloge najverjetneje itak ne bomo odobrili.'
    this.textObject.position.y = 18;
  }
}
