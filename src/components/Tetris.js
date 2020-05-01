import React, { useState } from "react";
// components
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";
// styled-components
import {
  StyledTetrisWrapper,
  StyledTetris,
} from "./styled-components/StyledTetris";
// custom-hooks
import { usePlayer } from "../hooks/usePlayer";
import { useStage } from "../hooks/useStage";

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player] = usePlayer();
  const [stage, setStage] = useStage(player);

  return (
    <StyledTetrisWrapper>
      <StyledTetris>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over" />
          ) : (
            <div>
              <Display text="SCORE" />
              <Display text="ROWS" />
              <Display text="LEVELS" />
            </div>
          )}
          <StartButton />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
