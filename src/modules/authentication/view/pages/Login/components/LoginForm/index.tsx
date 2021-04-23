import React from 'react';

// Components
import { Formik } from 'formik';
import { Input, SubmitButton } from 'shared/view/components';
import Form from '../Form';

// Hooks
import useLoginController from 'modules/authentication/infra/controllers/useLoginController';

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
  const { loading, onSubmit } = useLoginController();

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
          required
        />

        <Input
          name="password"
          textContentType="password"
          placeholder="Senha"
          secureTextEntry
          required
        />

        <SubmitButton loading={loading} textStyle={confirmTextStyle}>
          Entrar
        </SubmitButton>
      </Form>
    </Formik>
  );
};

export default LoginForm;
