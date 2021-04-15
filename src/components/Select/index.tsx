import React, { useMemo } from 'react';

// Lib
import RNPCSelect from 'react-native-picker-select';

// Style
import { withTheme } from 'styled-components';
import { generalContainerStyles, generalInputStyles } from './styles';

// Types
import { SelectProps } from './types';

const Select: React.FC<SelectProps> = ({ style, theme, ...rest }) => {
  const inputStyle = useMemo(() => {
    let newInputStyle = {};

    style.forEach(element => {
      newInputStyle = {
        ...newInputStyle,
        ...element,
      };
    });

    return {
      ...generalInputStyles(theme),
      ...newInputStyle,
    };
  }, [style]);

  return (
    <RNPCSelect
      style={{
        inputAndroid: inputStyle,
        inputIOS: inputStyle,
        placeholder: { color: theme.palette.primary.dark },
        headlessAndroidContainer: generalContainerStyles,
        inputAndroidContainer: generalContainerStyles,
      }}
      {...rest}
    />
  );
};

export default withTheme(Select);
