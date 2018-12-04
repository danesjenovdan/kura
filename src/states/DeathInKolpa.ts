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
    this.textObject.text =  'Your body washed up on the river bank. Since 2000 more than 35.000 people drowned trying to reach the EU. In the last year at least 9 people drowned trying to enter Slovenia.';
    this.textObject.position.y = 78;

    const death = this.game.add.image(112, 38, 'smrt-zica');
    death.scale.set(2);
    death.anchor.set(0.5);
    death.smoothed = false;

    this.textObjects.left.text = 'Try again'; // i18n
    this.textObjects.left.position.x = 30;
    this.textObjects.right.text = 'Quit'; // i18n
    this.textObjects.right.position.x = 136;
  }

  continue(selectedOption: Position) {
    super.continue(selectedOption);
    if(selectedOption === Position.LEFT) {
      this.state.start('KolpaIntro', true, false, true);
    } else {
      this.state.start('BeforeGiveUp', true, false, this.survival);
    }
  }
}
