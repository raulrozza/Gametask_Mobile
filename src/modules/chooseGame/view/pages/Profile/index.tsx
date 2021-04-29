import React, { useCallback, useState } from 'react';

// Components
import { Input, SubmitButton } from 'shared/view/components';
import ImageInput from '../../../../../components/ImageInput';

// Hooks
import { useApiPut } from '../../../../../hooks/api/useApiPut';
import { useNavigation } from '@react-navigation/native';
import useToastContext from 'shared/container/contexts/ToastContext/contexts/useToastContext';
import useSessionContext from 'shared/container/contexts/SessionContext/contexts/useSessionContext';

// Libs
import { Formik } from 'formik';

// Schemas
import UserSchema from 'modules/chooseGame/view/validation/UserSchema';

// Styles
import { Form, InputGroup } from './styles';

// Utils
import { imageUriToFormData } from './utils';

interface FormValues {
  firstname: string;
  lastname: string;
  image?: string | null;
}

const Profile: React.FC = () => {
  const [disableButton, setDisableButton] = useState(false);

  // Hooks
  const apiPut = useApiPut();
  const { userData } = useSessionContext();
  const { goBack } = useNavigation();
  const toast = useToastContext();

  const initialValues: FormValues = {
    firstname: userData.name,
    lastname: '',
    image: userData.profile_img,
  };

  const onSubmit = useCallback(
    async values => {
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
        toast.showSuccess('Dados atualizados!');
        // updateUser({ firstname, lastname, image });
        goBack();
      }
    },
    [goBack, toast],
  );

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={UserSchema}
      onSubmit={onSubmit}
    >
      {({ handleChange, values }) => (
        <Form>
          <ImageInput value={values.image} onChange={handleChange('image')} />

          <Input
            name="firstname"
            textContentType="name"
            placeholder="Nome"
            autoCapitalize="words"
          />

          <Input
            name="lastname"
            textContentType="familyName"
            placeholder="Sobrenome"
            autoCapitalize="words"
          />

          <InputGroup>
            <SubmitButton loading={disableButton}>
              Salvar Alterações
            </SubmitButton>
          </InputGroup>
        </Form>
      )}
    </Formik>
  );
};

export default Profile;
