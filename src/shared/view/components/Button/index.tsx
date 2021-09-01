import React from 'react';
import { ActivityIndicator, StyleProp, ViewStyle } from 'react-native';

import {
  DefaultTheme,
  FlattenInterpolation,
  StyledComponent,
  ThemeProps,
} from 'styled-components';

import { useThemeContext } from 'shared/view/contexts';

import {
  RectContainer,
  StyledContainer,
  TouchableContainer,
  Text,
} from './styles';

type ButtonTypes = 'rect-button' | 'touchable-opacity';

const ButtonComponent: Record<
  ButtonTypes,
  StyledComponent<any, DefaultTheme>
> = {
  'rect-button': RectContainer,
  'touchable-opacity': TouchableContainer,
};

export interface ButtonProps {
  outline?: boolean;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
  loading?: boolean;
  activeOpacity?: number;
  onPress?: () => void;
  textStyle?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
  type?: 'rect-button' | 'touchable-opacity';
  children: string;
}

const Button: React.FC<ButtonProps> = ({
  outline = false,
  disabled = false,
  loading = false,
  type = 'rect-button',
  style,
  activeOpacity,
  onPress,
  textStyle,
  children,
}) => {
  const { theme } = useThemeContext();

  const Container = ButtonComponent[type];

  return (
    <Container
      activeOpacity={activeOpacity}
      disabled={disabled || loading}
      onPress={onPress}
      style={style}
    >
      <StyledContainer outline={outline} disabled={disabled || loading}>
        {loading ? (
          <ActivityIndicator
            size="small"
            color={
              outline
                ? theme.palette.secondary.main
                : theme.palette.secondary.contrast
            }
          />
        ) : (
          <Text outline={outline} textStyle={textStyle}>
            {children}
          </Text>
        )}
      </StyledContainer>
    </Container>
  );
};

export default Button;
