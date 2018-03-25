import 'pixi';
import 'p2';

import BootState from './states/Boot';
import EndState from './states/End';
import GameState from './states/Game';
import GiveUpState from './states/GiveUp';
import IntroState from './states/Intro';
import LevelUpState from './states/LevelUp';
import MenuState from './states/Menu';
import TutorialState from './states/Tutorial';

import config from './config';

class Game extends Phaser.Game {
  constructor() {
    super(config.gameWidth, config.gameHeight);

    this.state.add('Menu', MenuState);
    this.state.add('Intro', IntroState);
    this.state.add('Tutorial', TutorialState);
    this.state.add('Game', GameState);
    this.state.add('LevelUp', LevelUpState);
    this.state.add('GiveUp', GiveUpState);
    this.state.add('End', EndState);

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