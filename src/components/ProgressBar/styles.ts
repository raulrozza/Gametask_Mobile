import styled, { css } from 'styled-components/native';

interface ContainerProps {
  backgroundColor: string;
  borderColor: string;
}

interface ProgressProps {
  backgroundColor: string;
  width: number;
}

export const BarContainer = styled.View<ContainerProps>`
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

export const Progress = styled.View<ProgressProps>`
  width: 100%;
  height: 100%;
  ${({ backgroundColor, width }) => css`
    background-color: ${backgroundColor};
    width: ${width}%;
  `}
`;
