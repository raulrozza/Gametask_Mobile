import React, { useCallback, useState } from 'react';

// Components
import Input from '../../../components/Input';

// Hooks
import { useAuth } from '../../../hooks/contexts/useAuth';

// Libs
import { Formik } from 'formik';

// Services
import api from '../../../services/api';

// Schemas
import { LoginSchema } from './schemas';

// Styles
import { Form, InputGroup, ErrorField, ConfirmText } from '../styles';
import Button from '../../../components/Button';

// Types
import { FormProps } from '../types';

// Utils
import handleApiErrors from '../../../utils/handleApiErrors';

const LoginForm: React.FC<FormProps> = ({ active }) => {
  const initialValues = {
    email: '',
    password: '',
  };

  // Auth
  const { signIn } = useAuth();

  // States
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const onSubmit = useCallback(async values => {
    setButtonDisabled(true);

    // Login
    try {
      const response = await api.post('/login', values);

      return signIn(response.data);
    } catch (error) {
      handleApiErrors(error);
    }

    return setButtonDisabled(false);
  }, []);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={LoginSchema}
      onSubmit={onSubmit}
    >
      {({
        handleSubmit,
        handleBlur,
        handleChange,
        values,
        errors,
        touched,
      }) => (
        <Form active={active}>
          <InputGroup>
            <Input
              textContentType="emailAddress"
              keyboardType="email-address"
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              placeholder="E-mail"
              autoCapitalize="none"
            />
            {errors.email && touched.email ? (
              <ErrorField.View>
                <ErrorField.Text>{errors.email}</ErrorField.Text>
              </ErrorField.View>
            ) : null}
          </InputGroup>

          <InputGroup>
            <Input
              textContentType="password"
              value={values.password}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              placeholder="Senha"
              secureTextEntry
            />
            {errors.password && touched.password ? (
              <ErrorField.View>
                <ErrorField.Text>{errors.password}</ErrorField.Text>
              </ErrorField.View>
            ) : null}
          </InputGroup>

          <InputGroup>
            <Button onPress={() => handleSubmit()} disabled={buttonDisabled}>
              <ConfirmText>Entrar</ConfirmText>
            </Button>
          </InputGroup>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;