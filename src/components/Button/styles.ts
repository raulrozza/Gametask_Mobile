import styled, { css } from 'styled-components/native';

// Libs
import { RectButton } from 'react-native-gesture-handler';

// Types
import { StyledButtonProps } from './types';

export const Container = styled(RectButton)<StyledButtonProps>`
  ${({ theme, outline, enabled = true }) => css`
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

    border-color: ${theme.secondary};

    align-items: stretch;

    ${!enabled &&
    css`
      opacity: 0.3;
    `}
  `}
`;

export const Text = styled.Text<StyledButtonProps>`
  padding: 8px 12px;
  text-align: center;
  border-radius: 2px;

  color: ${({ theme, outline }) =>
    outline ? theme.secondary : theme.secondaryContrast};
  border-width: 1px;
  border-color: ${({ theme }) => theme.secondary};
`;
