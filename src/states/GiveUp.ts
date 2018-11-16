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
      'Opozori svoje prijatelje, da žica stoji že 3 leta!';
    this.textObject.position.y = 78;

    const death = this.game.add.image(112, 38, 'smrt-zica');
    death.scale.set(2);
    death.anchor.set(0.5);
    death.smoothed = false;

    this.textObjects.left.text = 'Facebook'; // i18n
    this.textObjects.left.position.x = 30;
    this.textObjects.right.text = 'Twitter'; // i18n
    this.textObjects.right.position.x = 136;
  }

  continue(selectedOption: Position) {
    const title = 'Break Free SI';
    const text = 'Čas je zdaj: osvobodimo se fosilnih goriv!';
    const hashtags = '#breakfree';

    super.continue(selectedOption);
    if(selectedOption === Position.LEFT) {
      // this.state.start('Tutorial', true, false, true);
      const url = `https://www.facebook.com/dialog/feed?app_id=301375193309601&redirect_uri=${encodeURIComponent(document.location.href)}&link=${encodeURIComponent(document.location.href)}&ref=responsive&name=${encodeURIComponent(title)}`;
      document.location.href = url;
    } else {
      // this.state.start('Intro', true, false, this.survival);
      const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text + ' ' + hashtags + ' ' + document.location.href)}`;
      document.location.href = url;
    }
  }
}
