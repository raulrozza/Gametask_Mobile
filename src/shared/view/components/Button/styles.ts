import {
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
} from 'styled-components';
import styled, { css } from 'styled-components/native';
import Typography from 'shared/view/components/Typography';

// Libs
import { RectButton } from 'react-native-gesture-handler';

interface StyledButtonProps {
  outline: boolean;
  disabled?: boolean;
}

export const Container = styled(RectButton)<StyledButtonProps>`
  ${({ theme, outline, disabled = false }) => css`
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

    min-width: 80px;

    ${disabled &&
    css`
      opacity: 0.5;
    `}
  `}
`;

interface TextProps {
  outline: boolean;
  textStyle?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
}

export const Text = styled(Typography)<TextProps>`
  ${({ theme, outline, textStyle }) => css`
    padding: ${theme.layout.spacing(2, 3)};
    text-align: center;
    border-radius: ${theme.layout.borderRadius.small};

    color: ${outline
      ? theme.palette.secondary.main
      : theme.palette.secondary.contrast};
    border-width: 1px;
    border-color: ${theme.palette.secondary.main};

    ${textStyle}
  `}
`;
