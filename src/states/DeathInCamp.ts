import Selection from './_Selection';
import { Position } from '../types';

export default class extends Selection {
  survival: boolean
  textObject: Phaser.BitmapText

  init(survival: boolean) {
    this.survival = survival;
  }

  create() {
    super.create();

    this.textObject = this.game.add.bitmapText(16, 16, 'Munro', '', 10);
    this.textObject.maxWidth = 192;
    this.textObject.text = 
      'V begunskem taborišču te je med poskusom nadaljevanja poti ujela policija. Ker nimaš dokumentov, te vrnejo nazaj domov.'
    this.textObject.position.y = 78;

    const death = this.game.add.image(112, 38, 'nazaj');
    death.scale.set(2);
    death.anchor.set(0.5);
    death.smoothed = false;

    this.textObjects.left.text = 'Na začetek'; // i18n
    this.textObjects.left.position.x = 30;
    this.textObjects.right.text = 'Odnehaj'; // i18n
    this.textObjects.right.position.x = 136;
  }

  continue(selectedOption: Position) {
    super.continue(selectedOption);
    if(selectedOption === Position.LEFT) {
      this.state.start('Tutorial', true, false, true);
    } else {
      this.state.start('BeforeGiveUp', true, false, this.survival);
    }
  }
}
