import Selection from './_Selection';
import { Position } from '../types';

export default class extends Selection {
  survival: boolean

  init(survival: boolean) {
    this.survival = survival;
  }

  create() {
    super.create();
    this.game.stage.backgroundColor = '#222';

    this.game.sound.play('fanfare');

    this.textObjects.title.text = 'Labi pastrâdâts! Vai vçlies\nizmçìinât nâkamo lîmeni?'; // i18n
    this.textObjects.left.text = 'Protams!'; // i18n
    this.textObjects.right.text = 'Vçl ne!'; // i18n
  }

  continue(selectedOption: Position) {
    super.continue(selectedOption);
    if(selectedOption === Position.LEFT) {
      this.state.start('End');
    } else {
      this.state.start('Game', true, false, this.survival);
    }
  }
}
