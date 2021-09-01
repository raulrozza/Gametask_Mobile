import React, { useState } from 'react';
import { TextInputProps } from 'react-native';

import { useField } from 'formik';
import { darken } from 'polished';

import { useThemeContext } from 'shared/view/contexts';

// Styles
import { Container, ErrorField, ErrorFieldText, StyledInput } from './styles';

interface InputProps {
  name: string;
  fullWidth?: boolean;
  required?: boolean;
  textContentType?: TextInputProps['textContentType'];
  keyboardType?: TextInputProps['keyboardType'];
  placeholder?: TextInputProps['placeholder'];
  autoCapitalize?: TextInputProps['autoCapitalize'];
  secureTextEntry?: TextInputProps['secureTextEntry'];
  multiline?: boolean;
}

const Input: React.FC<InputProps> = ({
  name,
  required,
  fullWidth = false,
  ...props
}) => {
  const [focused, setFocus] = useState(false);
  const [field, meta, helpers] = useField(name);

  const { theme } = useThemeContext();

  const placeholder =
    props.placeholder && `${props.placeholder}${required ? ' *' : ''}`;

  return (
    <Container fullWidth={fullWidth}>
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
        placeholder={placeholder}
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
