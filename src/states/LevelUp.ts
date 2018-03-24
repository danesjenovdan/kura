import Selection from './_Selection';

export default class extends Selection {
  survival: boolean

  init(survival: boolean) {
    this.survival = survival;
  }

  create() {
    super.create();

    this.textObjects.title.text = 'Čestitke! Želiš nadalje-\nvati v naslednjo stopnjo?';
    this.textObjects.left.text = 'Seveda!';
    this.textObjects.left.position.x = 30;
    this.textObjects.right.text = 'Ne še!';
    this.textObjects.right.position.x = 136;
  }

  continue(selectedOption: 'LEFT' | 'RIGHT') {
    if(selectedOption === 'LEFT') {
      this.state.start('End');
    } else {
      this.state.start('Game', true, false, this.survival);
    }
  }
}
