import React from 'react';
import { ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

// Styles
import { Container, Text } from './styles';

// Types
import { IButton } from './types';
import { themeProps } from '../../modules/PropTypes';
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

Button.propTypes = {
  outline: PropTypes.bool,
  disabled: PropTypes.bool,
  style: ViewPropTypes.style,
  children: PropTypes.node,
  theme: themeProps.isRequired,
};

export default withTheme(Button);
