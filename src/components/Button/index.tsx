import React from 'react';

// Styles
import { Container, Text } from './styles';

// Types
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({
  outline = false,
  disabled = false,
  style,
  children,
  onPress,
  activeOpacity,
  as,
}) => (
  <Container
    outline={outline}
    enabled={!disabled}
    style={style}
    onPress={onPress}
    activeOpacity={activeOpacity}
    as={as}
  >
    <Text outline={outline}>{children}</Text>
  </Container>
);

export default Button;
