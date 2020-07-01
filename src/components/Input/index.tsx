import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TextInput, TextInputProps } from 'react-native';

import styles from './styles';

const Input: React.FC<TextInputProps> = ({ onBlur, ...props }) => {
  const [focused, setFocus] = useState(false);

  return (
    <TextInput
      onBlur={event => {
        setFocus(false);
        if (onBlur) onBlur(event);
      }}
      onFocus={() => setFocus(true)}
      style={[styles.input, focused ? styles.focused : undefined]}
      {...props}
    />
  );
};

Input.propTypes = {
  onBlur: PropTypes.func,
};

export default Input;
