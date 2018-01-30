import 'pixi';
import 'p2';
import Phaser from 'phaser';

import BootState from './states/Boot';
import SplashState from './states/Splash';
import GameState from './states/Game';

import config from './config';

class Game extends Phaser.Game {
  constructor() {
    const docElement = document.documentElement;
    const width = Math.min(docElement.clientWidth, config.gameWidth);
    const height = Math.min(docElement.clientHeight, config.gameHeight);

    super(width, height, Phaser.WEBGL, 'content', undefined, true, false);

    this.state.add('Boot', BootState, false);
    this.state.add('Splash', SplashState, false);
    this.state.add('Game', GameState, false);

    this.state.start('Boot');
  }
}

window.game = new Game();
