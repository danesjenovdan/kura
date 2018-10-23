import Selection from './_Selection';
import { Position } from '../types';

export default class extends Selection {
  create() {
    super.create();

    this.textObjects.title.text = 'Izvçlies spçles reþîmu:'; // i18n
    this.textObjects.left.text = 'Stâsts'; // i18n
    this.textObjects.right.text = 'Izdzîvoðana'; // i18n
  }

  continue(selectedOption: Position) {
    super.continue(selectedOption);
    this.state.start('Tutorial', true, false, selectedOption === Position.RIGHT);
  }
}
