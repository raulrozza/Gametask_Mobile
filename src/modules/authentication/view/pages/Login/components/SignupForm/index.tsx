import React from 'react';


import { Input, SubmitButton } from 'shared/view/components';
import Form from '../Form';

// Libs
import { Formik } from 'formik';


import useSignupController from 'modules/authentication/infra/controllers/useSignupController';


import SignupSchema, {
  passwordsMatchValidation,
} from 'modules/authentication/view/validation/Signup';


import { signInTextStyle } from './styles';

const initialValues = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  confirmPassword: '',
};

interface SignupFormProps {
  active: boolean;
}

const SignupForm: React.FC<SignupFormProps> = ({ active }) => {
  const { loading, onSubmit } = useSignupController();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignupSchema}
      validate={passwordsMatchValidation}
      onSubmit={onSubmit}
    >
      <Form active={active}>
        <Input
          name="firstname"
          textContentType="name"
          placeholder="Nome"
          autoCapitalize="words"
          required
        />

        <Input
          name="lastname"
          textContentType="familyName"
          placeholder="Sobrenome"
          autoCapitalize="words"
        />

        <Input
          name="email"
          textContentType="emailAddress"
          keyboardType="email-address"
          placeholder="E-mail"
          autoCapitalize="none"
          required
        />

        <Input
          name="password"
          textContentType="password"
          placeholder="Senha"
          secureTextEntry
          required
        />

        <Input
          name="confirmPassword"
          textContentType="password"
          placeholder="Confirme a senha"
          secureTextEntry
          required
        />

        <SubmitButton textStyle={signInTextStyle} loading={loading}>
          Cadastrar
        </SubmitButton>
      </Form>
    </Formik>
  );
};

export default SignupForm;
