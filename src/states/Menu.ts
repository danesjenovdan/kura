enum MenuPosition {
  Left = 48,
  Right = 140,
}

export default class extends Phaser.State {
  chicken: Phaser.Sprite
  keys: any

  create() {
    this.chicken = this.game.add.sprite(MenuPosition.Left, 80, 'chicken');
    this.chicken.animations.add('left', [0, 0, 0, 0, 0, 0, 0, 0, 10], 3, true);
    this.chicken.animations.add('right', [9, 9, 9, 9, 9, 9, 9, 9, 11], 3, true);
    this.pickStory();

    this.keys = this.game.input.keyboard.addKeys({
      left: Phaser.KeyCode.LEFT,
      right: Phaser.KeyCode.RIGHT,
      enter: Phaser.KeyCode.ENTER
    });

    const text = 'Story     Survival';
    this.game.add.bitmapText(30, 32, 'FixedSys', 'Izberi igralni način:', 16)
    this.game.add.bitmapText(40, 112, 'FixedSys', text, 16)
    this.game.stage.backgroundColor = '#222';
  }

  update() {
    if (this.keys.left.isDown) {
      this.pickStory();
    } else if (this.keys.right.isDown) {
      this.pickSurvival();
    } else if (this.keys.enter.isDown) {
      this.startGame();
    }
  }


  pickStory() {
    this.chicken.animations.play('left');
    this.chicken.position.x = MenuPosition.Left;
  }

  pickSurvival() {
    this.chicken.animations.play('right');
    this.chicken.position.x = MenuPosition.Right;
  }

  startGame() {
    this.state.start('Game');
  }
}
