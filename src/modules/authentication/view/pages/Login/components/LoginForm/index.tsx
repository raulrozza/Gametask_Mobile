import React from 'react';

// Components
import { Input, SubmitButton } from 'shared/view/components';
import { Form } from '..';

// Libs
import { Formik } from 'formik';

// Schemas
import LoginSchema from 'modules/authentication/validation/Login';

// Styles
import { confirmTextStyle } from './styles';
import useLoginController from 'modules/authentication/infra/controllers/useLoginController';

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
        />

        <Input
          name="password"
          textContentType="password"
          placeholder="Senha"
          secureTextEntry
        />

        <SubmitButton loading={loading} textStyle={confirmTextStyle}>
          Entrar
        </SubmitButton>
      </Form>
    </Formik>
  );
};

export default LoginForm;
