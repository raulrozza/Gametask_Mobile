import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Styles
import { withTheme } from 'styled-components';
import { StyledInput } from './styles';

// Types
import { IInput } from './types';
import { themeProps } from '../../modules/PropTypes';

const Input: React.FC<IInput> = ({ theme, onBlur, ...props }) => {
  const [focused, setFocus] = useState(false);

  return (
    <StyledInput
      onBlur={event => {
        setFocus(false);
        if (onBlur) onBlur(event);
      }}
      onFocus={() => setFocus(true)}
      focused={focused}
      placeholderTextColor={theme.primaryShade}
      {...props}
    />
  );
};

Input.propTypes = {
  theme: themeProps.isRequired,
  onBlur: PropTypes.func,
};

export default withTheme(Input);
