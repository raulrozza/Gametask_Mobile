import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import {
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
} from 'styled-components';

// Styles
import { Container, Text } from './styles';

interface ButtonProps {
  outline?: boolean;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
  activeOpacity?: number;
  onPress?: () => void;
  textStyle?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
  children: string;
}

const Button: React.FC<ButtonProps> = ({
  outline = false,
  disabled = false,
  style,
  activeOpacity,
  onPress,
  textStyle,
  children,
}) => (
  <Container
    outline={outline}
    disabled={disabled}
    style={style}
    onPress={onPress}
    activeOpacity={activeOpacity}
  >
    <Text outline={outline} textStyle={textStyle}>
      {children}
    </Text>
  </Container>
);

export default Button;
