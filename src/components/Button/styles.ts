import styled, { css } from 'styled-components/native';

// Libs
import { RectButton } from 'react-native-gesture-handler';

// Types
import { StyledButtonProps } from './types';

export const Container = styled(RectButton)<StyledButtonProps>`
  ${({ theme, outline, enabled = true }) => css`
    ${outline
      ? css`
          background-color: ${theme.palette.primary.main};
          color: ${theme.palette.secondary.main};
        `
      : css`
          background-color: ${theme.palette.secondary.main};
          color: ${theme.palette.secondary.contrast};
        `}

    border-radius: ${theme.layout.borderRadius.small};
    line-height: 24px;
    font-size: 16px;

    border-color: ${theme.palette.secondary.main};

    align-items: stretch;

    ${!enabled &&
    css`
      opacity: 0.3;
    `}
  `}
`;

export const Text = styled.Text<StyledButtonProps>`
  ${({ theme, outline }) => css`
    padding: ${theme.layout.spacing(2, 3)};
    text-align: center;
    border-radius: ${theme.layout.borderRadius.small};

    color: ${outline
      ? theme.palette.secondary.main
      : theme.palette.secondary.contrast};
    border-width: 1px;
    border-color: ${theme.palette.secondary.main};
  `}
`;
