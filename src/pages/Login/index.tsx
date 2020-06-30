import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';

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
  const { signIn } = useAuth();

  return (
    <View style={styles.homePage}>
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
                <TextInput
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  placeholder="E-mail"
                  style={styles.input}
                />
                {errors.email && touched.email ? (
                  <View style={styles.errorField}>
                    <Text>{errors.email}</Text>
                  </View>
                ) : null}
              </View>

              <View style={styles.inputGroup}>
                <TextInput
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  placeholder="Senha"
                  style={styles.input}
                />
                {errors.password && touched.password ? (
                  <View style={styles.errorField}>
                    <Text>{errors.password}</Text>
                  </View>
                ) : null}
              </View>

              <View style={styles.inputGroup}>
                <TouchableOpacity
                  onPress={() => handleSubmit()}
                  disabled={loginButtonDisabled}
                >
                  <Text>Entrar</Text>
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

              window.location.reload();
            } catch (error) {
              console.error(error);
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
                <TextInput
                  value={values.firstname}
                  onChangeText={handleChange('firstname')}
                  onBlur={handleBlur('firstname')}
                  placeholder="Nome"
                  style={styles.input}
                />
                {errors.firstname && touched.firstname ? (
                  <View style={styles.errorField}>
                    <Text>{errors.firstname}</Text>
                  </View>
                ) : null}
              </View>

              <View style={styles.inputGroup}>
                <TextInput
                  value={values.lastname}
                  onChangeText={handleChange('lastname')}
                  onBlur={handleBlur('lastname')}
                  placeholder="Sobrenome"
                  style={styles.input}
                />
                {errors.lastname && touched.lastname ? (
                  <View style={styles.errorField}>
                    <Text>{errors.lastname}</Text>
                  </View>
                ) : null}
              </View>

              <View style={styles.inputGroup}>
                <TextInput
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  placeholder="E-mail"
                  style={styles.input}
                />
                {errors.email && touched.email ? (
                  <View style={styles.errorField}>
                    <Text>{errors.email}</Text>
                  </View>
                ) : null}
              </View>

              <View style={styles.inputGroup}>
                <TextInput
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  placeholder="Senha"
                  style={styles.input}
                />
                {errors.password && touched.password ? (
                  <View style={styles.errorField}>
                    <Text>{errors.password}</Text>
                  </View>
                ) : null}
              </View>

              <View style={styles.inputGroup}>
                <TextInput
                  value={values.confirmPassword}
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                  placeholder="Confirme a senha"
                  style={styles.input}
                />
                {errors.confirmPassword && touched.confirmPassword ? (
                  <View style={styles.errorField}>
                    <Text>{errors.confirmPassword}</Text>
                  </View>
                ) : null}
              </View>

              <View style={styles.inputGroup}>
                <TouchableOpacity
                  onPress={() => handleSubmit()}
                  disabled={signupButtonDisabled}
                >
                  <Text>Cadastrar</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
};

export default Login;
