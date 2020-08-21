import styled, { css } from 'styled-components/native';
import { IStyledButton } from './types';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)<IStyledButton>`
  ${({ theme, outline, disabled = false }) => css`
    ${outline
      ? css`
          background-color: ${theme.primary};
          color: ${theme.secondary};
        `
      : css`
          background-color: ${theme.secondary};
          color: ${theme.secondaryContrast};
        `}

    border-radius: 2px;
    line-height: 24px;
    font-size: 16px;

    align-items: stretch;

    ${disabled &&
    css`
      opacity: 0.3;
    `}
  `}
`;

export const Text = styled.Text<IStyledButton>`
  padding: 8px 12px;
  text-align: center;
  border-radius: 2px;

  color: ${({ theme, outline }) =>
    outline ? theme.secondary : theme.secondaryContrast};
  border-width: 1px;
  border-color: ${({ theme }) => theme.secondary};
`;
