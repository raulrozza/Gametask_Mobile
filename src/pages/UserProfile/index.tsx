import React, { useCallback, useState } from 'react';

// Components
import Button from '../../components/Button';
import ErrorField from '../../components/ErrorField';
import ImageInput from '../../components/ImageInput';
import Input from '../../components/Input';

// Hooks
import { useApiPut } from '../../hooks/api/useApiPut';
import { useAuth } from '../../hooks/contexts/useAuth';
import { useNavigation } from '@react-navigation/native';

// Libs
import { Formik } from 'formik';

// Schemas
import { UserProfileSchema } from './schemas';

// Styles
import { Form, InputGroup } from './styles';

// Types
import { FormValues } from './types';

// Utils
import { imageUriToFormData } from './utils';
import displaySuccessMessage from '../../utils/displaySuccessMessage';

const UserProfile: React.FC = () => {
  const [disableButton, setDisableButton] = useState(false);

  // Hooks
  const apiPut = useApiPut();
  const { user, updateUser } = useAuth();
  const { goBack } = useNavigation();

  if (!user) return null;

  const initialValues: FormValues = {
    firstname: user.firstname,
    lastname: user.lastname,
    image: user.image,
  };

  const onSubmit = useCallback(async values => {
    setDisableButton(true);

    const { firstname, lastname, image } = values;

    const unknownFormattedImage = imageUriToFormData(image) as unknown;

    const data = new FormData();
    data.append('firstname', firstname);
    data.append('lastname', lastname);
    data.append('avatar', unknownFormattedImage as Blob);

    const response = await apiPut('/user', data, {
      'content-type': 'multipart/form-data',
    });

    setDisableButton(false);

    if (response !== null) {
      displaySuccessMessage('Dados atualizados!');
      updateUser({ firstname, lastname, image });
      goBack();
    }
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
          <ImageInput value={values.image} onChange={handleChange('image')} />

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
            <Button onPress={() => handleSubmit()} disabled={disableButton}>
              Salvar Alterações
            </Button>
          </InputGroup>
        </Form>
      )}
    </Formik>
  );
};

export default UserProfile;