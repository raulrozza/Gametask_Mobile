import React, { useCallback, useState } from 'react';

// Components
import { Button, Input } from 'shared/view/components';

// Hooks
import useSessionContext from 'shared/container/contexts/SessionContext/contexts/useSessionContext';
import { useApiPost } from '../../../../../../../hooks/api/useApiPost';

// Libs
import { Formik } from 'formik';

// Schemas
import LoginSchema from 'modules/authentication/validation/Login';

// Styles
import { Form, InputGroup } from '../../styles';
import { confirmTextStyle } from './styles';

interface LoginFormProps {
  active: boolean;
}

const LoginForm: React.FC<LoginFormProps> = ({ active }) => {
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
      {({ handleSubmit }) => (
        <Form active={active}>
          <Input
            name="email"
            placeholder="E-mail"
            textContentType="emailAddress"
            autoCapitalize="none"
            keyboardType="email-address"
          />

          <Input
            name="password"
            textContentType="password"
            placeholder="Senha"
            secureTextEntry
          />

          <InputGroup>
            <Button
              onPress={() => handleSubmit()}
              disabled={buttonDisabled}
              textStyle={confirmTextStyle}
            >
              Entrar
            </Button>
          </InputGroup>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
