import Selection from './_Selection';

export default class extends Selection {
  create() {
    super.create();

    this.textObjects.title.text = 'Izberi igralni način:';
    this.textObjects.left.text = 'Zgodba';
    this.textObjects.left.position.x = 30;
    this.textObjects.right.text = 'Preživetje';
    this.textObjects.right.position.x = 116;
  }

  continue(selectedOption: 'LEFT' | 'RIGHT') {
    this.state.start('Tutorial', true, false, selectedOption === 'RIGHT');
  }
}
