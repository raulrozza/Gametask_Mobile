import React, { useState } from 'react';

// Components
import Input from '../../components/Input';

// Contexts
import { useAuth } from '../../contexts/Authorization';

// Libs
import { Formik } from 'formik';
import * as Yup from 'yup';
import { showMessage } from 'react-native-flash-message';

// Services
import api from '../../services/api';

// Styles
import {
  HomePage,
  TitleContainer,
  Title,
  FormContainer,
  Container,
  FormToggle,
  ToggleButton,
  Form,
  InputGroup,
  ErrorField,
  ConfirmText,
} from './styles';
import Button from '../../components/Button';

// Utils
import handleApiErrors from '../../utils/handleApiErrors';

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

  return (
    <HomePage>
      <TitleContainer>
        <Title.View>
          <Title.Text>GAMETASK</Title.Text>
        </Title.View>
      </TitleContainer>

      <FormContainer>
        <Container>
          <FormToggle>
            <ToggleButton.Button
              active={formToggle}
              onPress={() => setFormToggle(true)}
            >
              <ToggleButton.Text active={formToggle}>Entre</ToggleButton.Text>
            </ToggleButton.Button>

            <ToggleButton.Button
              active={!formToggle}
              onPress={() => setFormToggle(false)}
            >
              <ToggleButton.Text active={!formToggle}>
                Cadastre-se
              </ToggleButton.Text>
            </ToggleButton.Button>
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

                return signIn(response.data);
              } catch (error) {
                handleApiErrors(error);
              }

              return setLoginButtonDisabled(false);
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
                  <Button
                    onPress={() => handleSubmit()}
                    disabled={loginButtonDisabled}
                    id="login"
                  >
                    <ConfirmText>Entrar</ConfirmText>
                  </Button>
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
                await api.post('/user/signup', values);

                setFormToggle(true);
                showMessage({
                  message: 'Cadastro efetuado com sucesso!',
                  type: 'success',
                });
              } catch (error) {
                handleApiErrors(error);
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
                      <ErrorField.Text>
                        {errors.confirmPassword}
                      </ErrorField.Text>
                    </ErrorField.View>
                  ) : null}
                </InputGroup>

                <InputGroup>
                  <Button
                    onPress={() => handleSubmit()}
                    disabled={signupButtonDisabled}
                  >
                    <ConfirmText>Cadastrar</ConfirmText>
                  </Button>
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
