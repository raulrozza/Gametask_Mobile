import React, { useState } from 'react';
import useThemeContext from 'shared/container/contexts/ThemeContext/contexts/useThemeContext';

// Styles
import { StyledInput } from './styles';

// Types
import { InputProps } from './types';

const Input: React.FC<InputProps> = ({ onBlur, ...props }) => {
  const [focused, setFocus] = useState(false);

  const { theme } = useThemeContext();

  return (
    <StyledInput
      onBlur={event => {
        setFocus(false);
        if (onBlur) onBlur(event);
      }}
      onFocus={() => setFocus(true)}
      focused={focused}
      placeholderTextColor={theme.palette.primary.dark}
      {...props}
    />
  );
};

export default Input;
