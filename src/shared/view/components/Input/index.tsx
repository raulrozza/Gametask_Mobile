import { useField } from 'formik';
import { darken } from 'polished';
import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import useThemeContext from 'shared/container/contexts/ThemeContext/contexts/useThemeContext';

// Styles
import { Container, ErrorField, ErrorFieldText, StyledInput } from './styles';

interface InputProps {
  name: string;
  textContentType?: TextInputProps['textContentType'];
  keyboardType?: TextInputProps['keyboardType'];
  placeholder?: TextInputProps['placeholder'];
  autoCapitalize?: TextInputProps['autoCapitalize'];
  secureTextEntry?: TextInputProps['secureTextEntry'];
}

const Input: React.FC<InputProps> = ({ name, ...props }) => {
  const [focused, setFocus] = useState(false);
  const [field, meta, helpers] = useField(name);

  const { theme } = useThemeContext();

  return (
    <Container>
      <StyledInput
        onBlur={() => {
          setFocus(false);
          helpers.setTouched(true);
        }}
        onFocus={() => setFocus(true)}
        onChangeText={helpers.setValue}
        focused={focused}
        placeholderTextColor={darken(0.4, theme.palette.primary.main)}
        value={field.value}
        {...props}
      />

      {meta.touched && meta.error && (
        <ErrorField>
          <ErrorFieldText>{meta.error}</ErrorFieldText>
        </ErrorField>
      )}
    </Container>
  );
};

export default Input;
