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
    this.textObject.text =  'Našli so tvoje truplo. Samo v Sredozemlju je na poti proti EU letos umrlo že 705 ljudi, od leta 2014 pa kar 17 226. To so zgolj dokumentirane smrti, dejansko število je žal še mnogo večje. Ljudje umirajo tudi na slovenski meji. S pomočjo žice smo na najbolj krut način onemogočili boljšo prihodnost vsaj dvajsetim beguncem.';
    this.textObject.position.y = 8;

    // const death = this.game.add.image(112, 38, 'smrt-zica');
    // death.scale.set(2);
    // death.anchor.set(0.5);
    // death.smoothed = false;

    this.textObjects.left.text = 'Nazaj'; // i18n
    this.textObjects.left.position.x = 30;
    this.textObjects.right.text = 'Odnehaj'; // i18n
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
