import React, { useCallback, useState } from 'react';

// Components
import Input from '../../../components/Input';

// Hooks
import { useApiPost } from '../../../hooks/api/useApiPost';

// Libs
import { Formik } from 'formik';

// Schemas
import { SignupSchema } from './schemas';

// Styles
import { Form, InputGroup, ErrorField, ConfirmText } from '../styles';
import Button from '../../../components/Button';

// Types
import { FormProps } from '../types';

// Utils
import displaySuccessMessage from '../../../utils/displaySuccessMessage';

const SignupForm: React.FC<FormProps> = ({ active }) => {
  const initialValues = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  // Hooks
  const apiPost = useApiPost();

  // States
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const onSubmit = useCallback(async (values, actions) => {
    if (values.password !== values.confirmPassword) {
      actions.setErrors({
        confirmPassword: 'As senhas não são iguais',
      });
      return;
    }

    setButtonDisabled(true);

    const response = await apiPost('/user/signup', values);

    if (response !== null)
      displaySuccessMessage('Cadastro efetuado com sucesso!');

    setButtonDisabled(false);
  }, []);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignupSchema}
      onSubmit={onSubmit}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <Form active={active}>
          <InputGroup>
            <Input
              textContentType="name"
              value={values.firstname}
              onChangeText={handleChange('firstname')}
              onBlur={handleBlur('firstname')}
              placeholder="Nome"
              autoCapitalize="words"
            />
            {errors.firstname && touched.firstname ? (
              <ErrorField.View>
                <ErrorField.Text>{errors.firstname}</ErrorField.Text>
              </ErrorField.View>
            ) : null}
          </InputGroup>

          <InputGroup>
            <Input
              textContentType="familyName"
              value={values.lastname}
              onChangeText={handleChange('lastname')}
              onBlur={handleBlur('lastname')}
              placeholder="Sobrenome"
              autoCapitalize="words"
            />
            {errors.lastname && touched.lastname ? (
              <ErrorField.View>
                <ErrorField.Text>{errors.lastname}</ErrorField.Text>
              </ErrorField.View>
            ) : null}
          </InputGroup>

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
            <Input
              textContentType="password"
              value={values.confirmPassword}
              onChangeText={handleChange('confirmPassword')}
              onBlur={handleBlur('confirmPassword')}
              placeholder="Confirme a senha"
              secureTextEntry
            />
            {errors.confirmPassword && touched.confirmPassword ? (
              <ErrorField.View>
                <ErrorField.Text>{errors.confirmPassword}</ErrorField.Text>
              </ErrorField.View>
            ) : null}
          </InputGroup>

          <InputGroup>
            <Button onPress={() => handleSubmit()} disabled={buttonDisabled}>
              <ConfirmText>Cadastrar</ConfirmText>
            </Button>
          </InputGroup>
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;
