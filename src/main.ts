import 'pixi';
import 'p2';

import BootState from './states/Boot';
import IntroState from './states/Intro';
import Intro2State from './states/Intro2';
import Intro3State from './states/Intro3';
import ZicarState from './states/Zicar';
import DeathState from './states/Death';
import WinState from './states/Win';

import config from './config';

class Game extends Phaser.Game {
  constructor() {
    super(config.gameWidth, config.gameHeight);

    this.state.add('Intro', IntroState);
    this.state.add('Intro2', Intro2State);
    this.state.add('Intro3', Intro3State);
    this.state.add('Zicar', ZicarState);
    this.state.add('Death', DeathState);
    this.state.add('Win', WinState);

    this.state.add('Boot', BootState, true);
  }
}

new Game();

window.addEventListener('deviceorientation', event => {
  var x = event.beta;  // In degree in the range [-180,180]
  var y = event.gamma; // In degree in the range [-90,90]

  console.log("beta : " + x);
  console.log("gamma: " + y);
});