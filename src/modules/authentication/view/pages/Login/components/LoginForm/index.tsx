import React from 'react';

import { Formik } from 'formik';

import useLoginController from 'modules/authentication/infra/controllers/useLoginController';
import LoginSchema from 'modules/authentication/view/validation/Login';
import { Input, SubmitButton } from 'shared/view/components';

import Form from '../Form';
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
