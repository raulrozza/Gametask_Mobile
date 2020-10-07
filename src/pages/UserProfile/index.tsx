import React, { useCallback } from 'react';

// Components
import Button from '../../components/Button';
import ErrorField from '../../components/ErrorField';
import Input from '../../components/Input';

// Hooks
import { useApiPut } from '../../hooks/api/useApiPut';
import { useAuth } from '../../hooks/contexts/useAuth';

// Libs
import { Formik } from 'formik';

// Schemas
import { UserProfileSchema } from './schemas';

// Styles
import { Form, InputGroup } from './styles';

// Types
import { FormValues } from './types';

// Utils
import displaySuccessMessage from '../../utils/displaySuccessMessage';

const UserProfile: React.FC = () => {
  // Hooks
  const apiPut = useApiPut();
  const { user } = useAuth();

  if (!user) return null;

  const initialValues: FormValues = {
    firstname: user.firstname,
    lastname: user.lastname,
    image: user.image,
  };

  const onSubmit = useCallback(async values => {
    const response = await apiPut('/user/signup', values);

    if (response !== null)
      displaySuccessMessage('Cadastro efetuado com sucesso!');
  }, []);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={UserProfileSchema}
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
        <Form>
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
              <ErrorField message={errors.firstname} />
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
              <ErrorField message={errors.lastname} />
            ) : null}
          </InputGroup>

          <InputGroup>
            <Button onPress={() => handleSubmit()}>Salvar Alterações</Button>
          </InputGroup>
        </Form>
      )}
    </Formik>
  );
};

export default UserProfile;
