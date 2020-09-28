import React, { useState } from 'react';

// Styles
import { withTheme } from 'styled-components';
import { StyledInput } from './styles';

// Types
import { InputProps } from './types';

const Input: React.FC<InputProps> = ({ theme, onBlur, ...props }) => {
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

export default withTheme(Input);
