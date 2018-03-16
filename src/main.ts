import 'pixi';
import 'p2';

import BootState from './states/Boot';
import EndState from './states/End';
import GameState from './states/Game';
import IntroState from './states/Intro';
import MenuState from './states/Menu';

import config from './config';

class Game extends Phaser.Game {
  constructor() {
    super(config.gameWidth, config.gameHeight);

    this.state.add('Menu', MenuState);
    this.state.add('Intro', IntroState);
    this.state.add('Game', GameState);
    this.state.add('End', EndState);

    this.state.add('Boot', BootState, true);
  }
}

new Game();
