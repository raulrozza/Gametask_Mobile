import React from 'react';

// Styles
import { withTheme } from 'styled-components';
import { Container, Text } from './styles';

// Types
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({
  outline = false,
  disabled = false,
  style,
  children,
  theme,
  ...rest
}) => {
  return (
    <Container
      outline={outline}
      enabled={!disabled}
      style={style}
      theme={theme}
      {...rest}
    >
      <Text outline={outline} theme={theme}>
        {children}
      </Text>
    </Container>
  );
};

export default withTheme(Button);
