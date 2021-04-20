import React, { useMemo } from 'react';

// Lib
import RNPCSelect from 'react-native-picker-select';
import useThemeContext from 'shared/container/contexts/ThemeContext/contexts/useThemeContext';

// Style
import { generalInputStyles } from './styles';

// Types
import { SelectProps } from './types';

const Select: React.FC<SelectProps> = ({ style, ...rest }) => {
  const { theme } = useThemeContext();

  const inputStyle = useMemo(() => {
    let newInputStyle = {};

    style?.forEach(element => {
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
      }}
      {...rest}
    />
  );
};

export default Select;
