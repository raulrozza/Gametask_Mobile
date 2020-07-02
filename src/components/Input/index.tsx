import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TextInputProps } from 'react-native';

// Contexts
import { useTheme } from '../../contexts/Theme';

import { StyledInput } from './styles';

const Input: React.FC<TextInputProps> = ({ onBlur, ...props }) => {
  const [focused, setFocus] = useState(false);
  const { theme } = useTheme();

  return (
    <StyledInput
      onBlur={event => {
        setFocus(false);
        if (onBlur) onBlur(event);
      }}
      onFocus={() => setFocus(true)}
      focused={focused}
      theme={theme}
      placeholderTextColor={theme.primaryShade}
      {...props}
    />
  );
};

Input.propTypes = {
  onBlur: PropTypes.func,
};

export default Input;
