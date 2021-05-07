import styled, { css } from 'styled-components/native';

export const BarContainer = styled.View`
  height: 48px;
  width: 100%;
  border-width: 3px;
  border-radius: 15px;
  overflow: hidden;
  ${({ theme }) => css`
    background-color: ${theme.palette.primary.main};
    border-color: ${theme.palette.primary.dark};
  `}
`;

interface ProgressProps {
  width: number;
}

export const Progress = styled.View<ProgressProps>`
  width: 100%;
  height: 100%;
  ${({ theme, width }) => css`
    background-color: ${theme.palette.secondary.main};
    width: ${width}%;
  `}
`;
