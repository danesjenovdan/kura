import Selection from './_Selection';
import { Position } from '../types';

export default class extends Selection {
  survival: boolean

  init(survival: boolean) {
    this.survival = survival;
  }

  create() {
    super.create();
    this.game.sound.play('fanfare');

    this.textObjects.title.text = 'Čestitke! Želiš nadalje-\nvati v naslednjo stopnjo?'; // i18n
    this.textObjects.left.text = 'Seveda!'; // i18n
    this.textObjects.left.position.x = 30;
    this.textObjects.right.text = 'Ne še!'; // i18n
    this.textObjects.right.position.x = 136;
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
