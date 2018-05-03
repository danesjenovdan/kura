import Selection from './_Selection';
import { Position } from '../types';

export default class extends Selection {
  create() {
    super.create();

    this.textObjects.title.text = 'Choose game mode:'; // i18n
    this.textObjects.left.text = 'Story'; // i18n
    this.textObjects.left.position.x = 30;
    this.textObjects.right.text = 'Survival'; // i18n
    this.textObjects.right.position.x = 116;
  }

  continue(selectedOption: Position) {
    super.continue(selectedOption);
    this.state.start('Tutorial', true, false, selectedOption === Position.RIGHT);
  }
}
