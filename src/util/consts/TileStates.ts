export interface ITileStates {
  [key: string]: number;
}

export const TileStates: ITileStates = {
  CORRECT: 0,
  INCORRECT: 1,
  PARTIAL: 2,
  UNSELECTED: 3,
};
