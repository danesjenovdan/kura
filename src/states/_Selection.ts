import { Position } from '../types';
import config from '../config';

export default abstract class extends Phaser.State {
  selector: Phaser.Sprite
  keys: any
  selected: Position
  textObjects: {
    title: Phaser.BitmapText,
    left: Phaser.BitmapText,
    right: Phaser.BitmapText
  }

  create() {
    this.selector = this.game.add.sprite(0 * config.renderScale, 80 * config.renderScale, 'chicken');
    this.selector.scale.set(1 * config.renderScale);
    this.selector.anchor.x = 0.5;
    this.selector.smoothed = false;
    this.selector.animations.add(Position.LEFT, [0, 0, 0, 0, 0, 0, 0, 0, 10], 3, true);
    this.selector.animations.add(Position.RIGHT, [9, 9, 9, 9, 9, 9, 9, 9, 11], 3, true);
    this.choose(Position.LEFT);

    this.keys = this.game.input.keyboard.addKeys({
      left: Phaser.KeyCode.LEFT,
      right: Phaser.KeyCode.RIGHT,
      enter: Phaser.KeyCode.ENTER,
      space: Phaser.KeyCode.SPACEBAR,
    });

    this.textObjects = {
      title: this.game.add.bitmapText(112 * config.renderScale, 40 * config.renderScale, 'PS2P', '', 6 * config.renderScale),
      left: this.game.add.bitmapText(66 * config.renderScale, 120 * config.renderScale, 'PS2P', '', 6 * config.renderScale),
      right: this.game.add.bitmapText(158 * config.renderScale, 120 * config.renderScale, 'PS2P', '', 6 * config.renderScale)
    }

    this.textObjects.title.anchor.setTo(0.5);
    this.textObjects.left.anchor.setTo(0.5);
    this.textObjects.right.anchor.setTo(0.5);

    this.input.onTap.add((pointer: Phaser.Pointer) => {
      if (pointer.worldX < 112) {
        if (this.selected == Position.LEFT) {
          this.continue(this.selected);
        } else {
          this.choose(Position.LEFT);
        }
      } else if (pointer.worldX > 112) {
        if (this.selected == Position.RIGHT) {
          this.continue(this.selected);
        } else {
        this.choose(Position.RIGHT);
        }
      }
    }, this);
  }

  update() {
    if (this.keys.left.isDown) {
      this.choose(Position.LEFT);
    } else if (this.keys.right.isDown) {
      this.choose(Position.RIGHT);
    } else if (this.keys.enter.isDown || this.keys.space.isDown) {
      this.continue(this.selected);
    }

    // else if (this.input.pointer1.isDown && this.input.pointer1.worldX < 112) {
    //   if (this.selected == Position.LEFT) {
    //     this.continue(this.selected);
    //   } else {
    //     this.choose(Position.LEFT);
    //   }
    // } else if (this.input.pointer1.isDown && this.input.pointer1.worldX > 112) {
    //   if (this.selected == Position.RIGHT) {
    //     this.continue(this.selected);
    //   } else {
    //   this.choose(Position.RIGHT);
    //   }
    // }
  }

  choose(position: Position) {
    this.selected = position;
    this.selector.animations.play(position);
    const xOffset = {
      LEFT: 66 * config.renderScale,
      RIGHT: 158 * config.renderScale,
    };
    this.selector.position.x = xOffset[position];
  }

  onTap() {
    alert('ping');
  }

  continue(selectedDirection: Position) {
    this.game.sound.play('ping');
  }
}
