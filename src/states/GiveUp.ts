import Selection from './_Selection';
import { Position } from '../types';

export default class extends Selection {
  survival: boolean

  init(survival: boolean) {
    this.survival = survival;
  }

  create() {
    super.create();

    this.textObjects.title.text = 'Ak nç, vai vçlies padoties?'; // i18n
    this.textObjects.left.text = 'Jâ, noteikti!'; // i18n
    this.textObjects.left.position.x = 30;
    this.textObjects.right.text = 'Vçl ne!'; // i18n
    this.textObjects.right.position.x = 136;
  }

  continue(selectedOption: Position) {
    super.continue(selectedOption);
    if(selectedOption === Position.LEFT) {
      this.state.start('End', true, false, true);
    } else {
      this.state.start('Game', true, false, this.survival);
    }
  }
}
