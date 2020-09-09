import React from 'react';

// Styles
import { Container, Text } from './styles';

// Types
import { IButton } from './types';
import { withTheme } from 'styled-components';

const Button: React.FC<IButton> = ({
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
