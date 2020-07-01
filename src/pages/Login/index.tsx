import React, { useState } from 'react';
import { AppLoading } from 'expo';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';

// Components
import Input from '../../components/Input';

// Contexts
import { useAuth } from '../../contexts/Authorization';

// Formik
import { Formik } from 'formik';

// Yup
import * as Yup from 'yup';

// Services
import api from '../../services/api';

import styles from './styles';

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
  const { signIn, loading } = useAuth();

  if (loading) return <AppLoading />;

  return (
    <ScrollView contentContainerStyle={styles.homePage}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Gamification App</Text>
      </View>

      <View style={styles.container}>
        <View style={styles.formToggle}>
          <TouchableOpacity
            style={[
              styles.toggleButton,
              formToggle ? styles.toggleButtonActive : undefined,
            ]}
            onPress={() => setFormToggle(true)}
          >
            <Text
              style={[
                styles.toggleButtonText,
                formToggle ? styles.toggleButtonTextActive : undefined,
              ]}
            >
              Entre
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.toggleButton,
              formToggle ? undefined : styles.toggleButtonActive,
            ]}
            onPress={() => setFormToggle(false)}
          >
            <Text
              style={[
                styles.toggleButtonText,
                formToggle ? undefined : styles.toggleButtonTextActive,
              ]}
            >
              Cadastre-se
            </Text>
          </TouchableOpacity>
        </View>
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
            <View
              style={[styles.form, formToggle ? styles.formActive : undefined]}
            >
              <View style={styles.inputGroup}>
                <Input
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  placeholder="E-mail"
                  autoCapitalize="none"
                />
                {errors.email && touched.email ? (
                  <View style={styles.errorField}>
                    <Text style={styles.errorFieldText}>{errors.email}</Text>
                  </View>
                ) : null}
              </View>

              <View style={styles.inputGroup}>
                <Input
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  placeholder="Senha"
                  secureTextEntry
                />
                {errors.password && touched.password ? (
                  <View style={styles.errorField}>
                    <Text style={styles.errorFieldText}>{errors.password}</Text>
                  </View>
                ) : null}
              </View>

              <View style={styles.inputGroup}>
                <TouchableOpacity
                  onPress={() => handleSubmit()}
                  disabled={loginButtonDisabled}
                  style={[
                    styles.confirmButton,
                    loginButtonDisabled
                      ? styles.confirmButtonDisabled
                      : undefined,
                  ]}
                >
                  <Text style={styles.confirmButtonText}>Entrar</Text>
                </TouchableOpacity>
              </View>
            </View>
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
            <View
              style={[styles.form, formToggle ? undefined : styles.formActive]}
            >
              <View style={styles.inputGroup}>
                <Input
                  value={values.firstname}
                  onChangeText={handleChange('firstname')}
                  onBlur={handleBlur('firstname')}
                  placeholder="Nome"
                  autoCapitalize="words"
                />
                {errors.firstname && touched.firstname ? (
                  <View style={styles.errorField}>
                    <Text style={styles.errorFieldText}>
                      {errors.firstname}
                    </Text>
                  </View>
                ) : null}
              </View>

              <View style={styles.inputGroup}>
                <Input
                  value={values.lastname}
                  onChangeText={handleChange('lastname')}
                  onBlur={handleBlur('lastname')}
                  placeholder="Sobrenome"
                  autoCapitalize="words"
                />
                {errors.lastname && touched.lastname ? (
                  <View style={styles.errorField}>
                    <Text style={styles.errorFieldText}>{errors.lastname}</Text>
                  </View>
                ) : null}
              </View>

              <View style={styles.inputGroup}>
                <Input
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  placeholder="E-mail"
                  autoCapitalize="none"
                />
                {errors.email && touched.email ? (
                  <View style={styles.errorField}>
                    <Text style={styles.errorFieldText}>{errors.email}</Text>
                  </View>
                ) : null}
              </View>

              <View style={styles.inputGroup}>
                <Input
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  placeholder="Senha"
                  secureTextEntry
                />
                {errors.password && touched.password ? (
                  <View style={styles.errorField}>
                    <Text style={styles.errorFieldText}>{errors.password}</Text>
                  </View>
                ) : null}
              </View>

              <View style={styles.inputGroup}>
                <Input
                  value={values.confirmPassword}
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                  placeholder="Confirme a senha"
                  secureTextEntry
                />
                {errors.confirmPassword && touched.confirmPassword ? (
                  <View style={styles.errorField}>
                    <Text style={styles.errorFieldText}>
                      {errors.confirmPassword}
                    </Text>
                  </View>
                ) : null}
              </View>

              <View style={styles.inputGroup}>
                <TouchableOpacity
                  onPress={() => handleSubmit()}
                  disabled={signupButtonDisabled}
                  style={[
                    styles.confirmButton,
                    signupButtonDisabled
                      ? styles.confirmButtonDisabled
                      : undefined,
                  ]}
                >
                  <Text style={styles.confirmButtonText}>Cadastrar</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
};

export default Login;
