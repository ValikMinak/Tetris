import React from 'react';
import { TETROMINOS } from '../tetrominos';
import {StyledCell} from "./Styles/StyledCell";

// React.memo makes sure we only re-render the changed cells
const Cell = ({ type }) => (
  <StyledCell type={type} color={TETROMINOS[type].color}>
    {console.log('rerender cell')}
  </StyledCell>
);

export default React.memo(Cell);
