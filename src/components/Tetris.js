import React from "react";
// components
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";

import {
  StyledTetrisWrapper,
  StyledTetris,
} from "./styled-components/StyledTetris";

import { createStage } from "../gameHelpers";

const Tetris = () => {
  return (
    <StyledTetrisWrapper>
      <StyledTetris>
        <Stage stage={createStage()} />
        <aside>
          <div>
            <Display text="SCORE" />
            <Display text="ROWS" />
            <Display text="LEVELS" />
          </div>
          <StartButton />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
