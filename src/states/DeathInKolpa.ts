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
      'Tvoje truplo so našli zapleteno v žico. Samo v Sredozemlju je na poti proti Evropski uniji od leta 2000 umrlo več kot 35 000 ljudi. V Kolpi se jih je v zadnjem letu utopilo najmanj 9.'
    this.textObject.position.y = 78;

    const death = this.game.add.image(112, 38, 'smrt-zica');
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
