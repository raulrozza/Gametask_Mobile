import React from 'react';
import { ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

// Styles
import { Container, Text } from './styles';

// Types
import { IButton } from './types';

const Button: React.FC<IButton> = ({
  outline = false,
  disabled = false,
  style,
  children,
  ...rest
}) => {
  return (
    <Container outline={outline} enabled={!disabled} style={style} {...rest}>
      <Text outline={outline}>{children}</Text>
    </Container>
  );
};

Button.propTypes = {
  outline: PropTypes.bool,
  disabled: PropTypes.bool,
  style: ViewPropTypes.style,
  children: PropTypes.node,
};

export default Button;
