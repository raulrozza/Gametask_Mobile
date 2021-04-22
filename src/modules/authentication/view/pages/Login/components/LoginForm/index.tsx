import React, { useCallback, useState } from 'react';

// Components
import { Input, SubmitButton } from 'shared/view/components';
import { Form } from '..';

// Hooks
import useSessionContext from 'shared/container/contexts/SessionContext/contexts/useSessionContext';
import { useApiPost } from '../../../../../../../hooks/api/useApiPost';

// Libs
import { Formik } from 'formik';

// Schemas
import LoginSchema from 'modules/authentication/validation/Login';

// Styles
import { confirmTextStyle } from './styles';

const initialValues = {
  email: '',
  password: '',
};

interface LoginFormProps {
  active: boolean;
}

const LoginForm: React.FC<LoginFormProps> = ({ active }) => {
  const { login } = useSessionContext();
  const apiPost = useApiPost<string>();

  const [buttonDisabled, setButtonDisabled] = useState(true);

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

        <SubmitButton loading={buttonDisabled} textStyle={confirmTextStyle}>
          Entrar
        </SubmitButton>
      </Form>
    </Formik>
  );
};

export default LoginForm;
