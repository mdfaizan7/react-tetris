import React from "react";
import { StyledCell } from "./styled-components/StyledCell";
import { TETROMINOS } from "../util/tetrominos";

const Cell = ({ type }) => (
  <StyledCell type={type} color={TETROMINOS[type].color} />
);

export default Cell;
