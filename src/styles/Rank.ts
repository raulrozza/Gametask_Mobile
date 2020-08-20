import styled, { css } from 'styled-components/native';
import { IRankStyle } from './types';

const Rank = styled.Text<IRankStyle>`
  padding: 4px;
  border-radius: 8px;
  ${({ background, text }) => css`
    background-color: ${background};
    color: ${text};
  `}
  margin-right: 4px;
  font-weight: bold;
`;

export default Rank;
