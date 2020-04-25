export const GAME_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () =>
    new Array(GAME_WIDTH).fill([0, "clear"])
  );
