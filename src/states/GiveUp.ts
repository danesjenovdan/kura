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

    this.textObjects.title.text = 'Ak nē, vai vēlies padoties?'; // i18n
    this.textObjects.left.text = 'Jâ, noteikti!'; // i18n
    this.textObjects.right.text = 'Vēl ne!'; // i18n
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
