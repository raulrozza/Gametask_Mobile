import React from 'react';

// Styles
import { Container, Text } from './styles';

// Types
import { ErrorFieldProps } from './types';

const ErrorField: React.FC<ErrorFieldProps> = ({ message }) => {
  return (
    <Container>
      <Text>{message}</Text>
    </Container>
  );
};

export default ErrorField;
