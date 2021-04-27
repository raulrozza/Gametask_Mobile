import React from 'react';
import { ActivityIndicator, StyleProp, ViewStyle } from 'react-native';
import useThemeContext from 'shared/container/contexts/ThemeContext/contexts/useThemeContext';
import { StyledButtonProps } from 'src/components/Button/types';
import {
  DefaultTheme,
  FlattenInterpolation,
  StyledComponent,
  ThemeProps,
} from 'styled-components';

// Styles
import { RectContainer, TouchableContainer, Text } from './styles';

type ButtonTypes = 'rect-button' | 'touchable-opacity';

const ButtonComponent: Record<
  ButtonTypes,
  StyledComponent<any, DefaultTheme, StyledButtonProps>
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
      outline={outline}
      disabled={disabled || loading}
      style={style}
      onPress={onPress}
      activeOpacity={activeOpacity}
    >
      <Text outline={outline} textStyle={textStyle}>
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
          children
        )}
      </Text>
    </Container>
  );
};

export default Button;
