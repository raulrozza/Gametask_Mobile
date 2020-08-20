import styled, { css } from 'styled-components/native';
import { IBarContainer, IProgress } from './types';

export const BarContainer = styled.View<IBarContainer>`
  height: 48px;
  width: 100%;
  border-width: 3px;
  border-radius: 15px;
  overflow: hidden;
  ${({ backgroundColor, borderColor }) => css`
    background-color: ${backgroundColor};
    border-color: ${borderColor};
  `}
`;

export const Progress = styled.View<IProgress>`
  width: 100%;
  height: 100%;
  ${({ backgroundColor, width }) => css`
    background-color: ${backgroundColor};
    width: ${width}%;
  `}
`;
