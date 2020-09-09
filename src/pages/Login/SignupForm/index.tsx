import React, { useCallback, useState } from 'react';

// Components
import Input from '../../../components/Input';

// Libs
import { Formik } from 'formik';
import * as Yup from 'yup';
import { showMessage } from 'react-native-flash-message';

// Services
import api from '../../../services/api';

// Styles
import { Form, InputGroup, ErrorField, ConfirmText } from '../styles';
import Button from '../../../components/Button';

// Types
import { IForm } from '../types';

// Utils
import handleApiErrors from '../../../utils/handleApiErrors';

const SignupSchema = Yup.object().shape({
  firstname: Yup.string().required('Digite seu nome'),
  lastname: Yup.string(),
  email: Yup.string().email('E-mail inválido').required('Digite um e-mail'),
  password: Yup.string().required('Digite uma senha'),
  confirmPassword: Yup.string().required('Repita sua senha'),
});

const SignupForm: React.FC<IForm> = ({ active }) => {
  const initialValues = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

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

    // Post user in the API
    try {
      await api.post('/user/signup', values);

      showMessage({
        message: 'Cadastro efetuado com sucesso!',
        type: 'success',
      });
    } catch (error) {
      handleApiErrors(error);
    }

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
