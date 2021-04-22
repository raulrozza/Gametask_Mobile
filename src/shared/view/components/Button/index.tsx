import React from 'react';
import { ActivityIndicator, StyleProp, ViewStyle } from 'react-native';
import useThemeContext from 'shared/container/contexts/ThemeContext/contexts/useThemeContext';
import {
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
} from 'styled-components';

// Styles
import { Container, Text } from './styles';

export interface ButtonProps {
  outline?: boolean;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
  loading?: boolean;
  activeOpacity?: number;
  onPress?: () => void;
  textStyle?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
  children: string;
}

const Button: React.FC<ButtonProps> = ({
  outline = false,
  disabled = false,
  loading = false,
  style,
  activeOpacity,
  onPress,
  textStyle,
  children,
}) => {
  const { theme } = useThemeContext();

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
