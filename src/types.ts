export enum Position {
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
}

export type RefugeeParams = {
  game: Phaser.Game,
  x: number,
  y: number,
};

export type TankParams = {
  game: Phaser.Game,
  x: number,
  y: number,
  tankTile: string,
};