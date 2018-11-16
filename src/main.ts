import 'pixi';
import 'p2';

import BootState from './states/Boot';
import IntroState from './states/Intro';
import Intro2State from './states/Intro2';
import Intro3State from './states/Intro3';
import TutorialState from './states/Tutorial';

import WarState from './states/War';
import KladusaState from './states/Kladusa';

import CampIntroState from './states/CampIntro';
import CampState from './states/Camp';
import DeathInWarState from './states/DeathInWar';

import config from './config';

class Game extends Phaser.Game {
  constructor() {
    super(config.gameWidth, config.gameHeight);

    this.antialias = false;

    this.state.add('Intro', IntroState);
    this.state.add('Intro2', Intro2State);
    this.state.add('Intro3', Intro3State);
    this.state.add('Tutorial', TutorialState);

    this.state.add('War', WarState);
    this.state.add('Kladusa', KladusaState);

    this.state.add('CampIntro', CampIntroState);
    this.state.add('Camp', CampState);
    this.state.add('Death', DeathInWarState);

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