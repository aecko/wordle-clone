export interface ITileStates {
  CORRECT: number;
  INCORRECT: number;
  PARTIAL: number;
  UNSELECTED: number;
}

export const TileStates: ITileStates = {
  CORRECT: 0,
  INCORRECT: 1,
  PARTIAL: 2,
  UNSELECTED: 3,
};

export interface IGameStates {
  PLAYING: number;
  WON: number;
  LOST: number;
}

export const GameStates: IGameStates = {
  PLAYING: 0,
  WON: 1,
  LOST: 2,
};
