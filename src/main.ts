import 'pixi';
import 'p2';

import BootState from './states/Boot';
import GameState from './states/Game';
import MenuState from './states/Menu';

import config from './config';

class Game extends Phaser.Game {
  constructor() {
    super(config.gameWidth, config.gameHeight);
    this.state.add('Boot', BootState, false);
    this.state.add('Game', GameState, false);
    this.state.add('Menu', MenuState, false);

    this.state.start('Boot');
  }
}

new Game();
