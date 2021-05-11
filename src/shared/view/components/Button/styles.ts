import {
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
} from 'styled-components';
import styled, { css } from 'styled-components/native';
import Typography from 'shared/view/components/Typography';

// Libs
import { RectButton } from 'react-native-gesture-handler';

export interface StyledButtonProps {
  outline: boolean;
  disabled?: boolean;
}

export const StyledContainer = styled.View<StyledButtonProps>`
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

    height: ${theme.layout.spacing(10)};

    border-width: 1px;
    border-color: ${theme.palette.secondary.main};

    align-items: stretch;
    justify-content: center;

    min-width: 80px;

    ${disabled &&
    css`
      opacity: 0.5;
    `}
  `}
`;

export const RectContainer = styled(RectButton)`
  min-width: 80px;
`;

export const TouchableContainer = styled.TouchableOpacity`
  min-width: 80px;
`;

interface TextProps {
  outline: boolean;
  textStyle?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
}

export const Text = styled(Typography)<TextProps>`
  ${({ theme, outline, textStyle }) => css`
    text-align: center;

    color: ${outline
      ? theme.palette.secondary.main
      : theme.palette.secondary.contrast};

    ${textStyle}
  `}
`;
