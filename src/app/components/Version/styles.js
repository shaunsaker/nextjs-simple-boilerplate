import css from 'styled-jsx/css'; // eslint-disable-line

import { styleConstants } from '../../config';

const { rhythm } = styleConstants;

const styles = css`
  .container {
    top: 0;
    right: 0;
    padding: ${rhythm.vt / 2}px ${rhythm.hz / 2}px;
  }
`;

export default styles;