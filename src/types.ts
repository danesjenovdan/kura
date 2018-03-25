import Cage from './sprites/Cage';
import PoopPool from './sprites/PoopPool';

export enum Position {
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
}

export type ChickenParams = {
  game: Phaser.Game,
  x: number,
  y: number,
  poopPool: PoopPool,
  cage: Cage,
};
