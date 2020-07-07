import React, { useState } from 'react';

// Components
import Input from '../../components/Input';

// Contexts
import { useAuth } from '../../contexts/Authorization';
import { useTheme } from '../../contexts/Theme';

// Formik
import { Formik } from 'formik';

// Yup
import * as Yup from 'yup';

// Services
import api from '../../services/api';

import {
  HomePage,
  TitleContainer,
  Title,
  TitleText,
  FormContainer,
  Container,
  FormToggle,
  ToggleButton,
  ToggleButtonText,
  Form,
  InputGroup,
  ErrorField,
  ErrorFieldText,
  ConfirmButton,
  ConfirmButtonText,
} from './styles';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Digite um e-mail válido')
    .required('Digite seu email'),
  password: Yup.string().required('Digite sua senha'),
});

const SignupSchema = Yup.object().shape({
  firstname: Yup.string().required('Digite seu nome'),
  lastname: Yup.string(),
  email: Yup.string().email('E-mail inválido').required('Digite um e-mail'),
  password: Yup.string().required('Digite uma senha'),
  confirmPassword: Yup.string().required('Repita sua senha'),
});

const Login: React.FC = () => {
  const [loginButtonDisabled, setLoginButtonDisabled] = useState(false);
  const [signupButtonDisabled, setSignupButtonDisabled] = useState(false);
  const [formToggle, setFormToggle] = useState(true);
  // Auth
  const { signIn } = useAuth();
  // Theme
  const { theme } = useTheme();

  return (
    <HomePage theme={theme}>
      <TitleContainer>
        <Title theme={theme}>
          <TitleText theme={theme}>GAMETASK</TitleText>
        </Title>
      </TitleContainer>

      <FormContainer>
        <Container theme={theme}>
          <FormToggle>
            <ToggleButton
              theme={theme}
              active={formToggle}
              onPress={() => setFormToggle(true)}
            >
              <ToggleButtonText theme={theme} active={formToggle}>
                Entre
              </ToggleButtonText>
            </ToggleButton>

            <ToggleButton
              theme={theme}
              active={!formToggle}
              onPress={() => setFormToggle(false)}
            >
              <ToggleButtonText theme={theme} active={!formToggle}>
                Cadastre-se
              </ToggleButtonText>
            </ToggleButton>
          </FormToggle>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={LoginSchema}
            onSubmit={async values => {
              setLoginButtonDisabled(true);

              // Login
              try {
                const response = await api.post('/login', values);

                signIn(response.data);
              } catch (error) {
                console.error(error, error.response?.data);
                alert('Houve um problema ao entrar.');
              }
              setLoginButtonDisabled(false);
            }}
          >
            {({
              handleSubmit,
              handleBlur,
              handleChange,
              values,
              errors,
              touched,
            }) => (
              <Form active={formToggle}>
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
                    <ErrorField>
                      <ErrorFieldText>{errors.email}</ErrorFieldText>
                    </ErrorField>
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
                    <ErrorField>
                      <ErrorFieldText>{errors.password}</ErrorFieldText>
                    </ErrorField>
                  ) : null}
                </InputGroup>

                <InputGroup>
                  <ConfirmButton
                    onPress={() => handleSubmit()}
                    disabled={loginButtonDisabled}
                    theme={theme}
                  >
                    <ConfirmButtonText theme={theme}>Entrar</ConfirmButtonText>
                  </ConfirmButton>
                </InputGroup>
              </Form>
            )}
          </Formik>

          <Formik
            initialValues={{
              firstname: '',
              lastname: '',
              email: '',
              password: '',
              confirmPassword: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={async (values, actions) => {
              if (values.password !== values.confirmPassword) {
                actions.setErrors({
                  confirmPassword: 'As senhas não são iguais',
                });
                return;
              }
              setSignupButtonDisabled(true);

              // Post user in the API
              try {
                await api.post('/signup', values);

                setFormToggle(true);
              } catch (error) {
                console.error(error);
                alert('Houve um problema ao cadastrar.');
              }

              setSignupButtonDisabled(false);
            }}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <Form active={!formToggle}>
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
                    <ErrorField>
                      <ErrorFieldText>{errors.firstname}</ErrorFieldText>
                    </ErrorField>
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
                    <ErrorField>
                      <ErrorFieldText>{errors.lastname}</ErrorFieldText>
                    </ErrorField>
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
                    <ErrorField>
                      <ErrorFieldText>{errors.email}</ErrorFieldText>
                    </ErrorField>
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
                    <ErrorField>
                      <ErrorFieldText>{errors.password}</ErrorFieldText>
                    </ErrorField>
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
                    <ErrorField>
                      <ErrorFieldText>{errors.confirmPassword}</ErrorFieldText>
                    </ErrorField>
                  ) : null}
                </InputGroup>

                <InputGroup>
                  <ConfirmButton
                    onPress={() => handleSubmit()}
                    disabled={signupButtonDisabled}
                    theme={theme}
                  >
                    <ConfirmButtonText theme={theme}>
                      Cadastrar
                    </ConfirmButtonText>
                  </ConfirmButton>
                </InputGroup>
              </Form>
            )}
          </Formik>
        </Container>
      </FormContainer>
    </HomePage>
  );
};

export default Login;
