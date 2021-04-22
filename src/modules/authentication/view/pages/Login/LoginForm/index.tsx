import React, { useCallback, useState } from 'react';

// Components
import Input from '../../../../../../components/Input';
import ErrorField from '../../../../../../components/ErrorField';

// Hooks
import useSessionContext from 'shared/container/contexts/SessionContext/contexts/useSessionContext';
import { useApiPost } from '../../../../../../hooks/api/useApiPost';

// Libs
import { Formik } from 'formik';

// Schemas
import { LoginSchema } from './schemas';

// Styles
import { Form, InputGroup, ConfirmText } from '../styles';
import Button from '../../../../../../components/Button';

// Types
import { FormProps } from '../types';

const LoginForm: React.FC<FormProps> = ({ active }) => {
  const initialValues = {
    email: '',
    password: '',
  };

  // Hooks
  const { login } = useSessionContext();
  const apiPost = useApiPost<string>();

  // States
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const onSubmit = useCallback(async values => {
    setButtonDisabled(true);

    const data = await apiPost('/login', values);

    if (data) return login(data);

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
              <ErrorField message={errors.email} />
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
              <ErrorField message={errors.password} />
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
