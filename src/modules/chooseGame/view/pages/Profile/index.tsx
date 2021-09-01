import React, { useCallback, useMemo } from 'react';

// Components
import { Input, SubmitButton } from 'shared/view/components';
import { ImageInput } from './components';
import { Formik } from 'formik';
import { Form, InputGroup } from './styles';

// Hooks
import { useNavigation } from '@react-navigation/native';
import { useToastContext } from 'shared/view/contexts';
import { useSessionContext } from 'shared/view/contexts';
import useUpdateUserController from 'modules/chooseGame/infra/controllers/useUpdateUserController';
import useGetUserController from 'modules/chooseGame/infra/controllers/useGetUserController';

// Schemas
import UserSchema from 'modules/chooseGame/view/validation/UserSchema';

const Profile: React.FC = () => {
  const { userData } = useSessionContext();
  const { goBack } = useNavigation();
  const toast = useToastContext();

  const { loading, updateUser } = useUpdateUserController();
  const { loading: loadingUser, user } = useGetUserController({
    userId: userData.id,
  });

  const onSubmit = useCallback(
    async values => {
      const success = await updateUser(values);

      if (success) {
        toast.showSuccess('Dados atualizados!');
        goBack();
      }
    },
    [goBack, toast, updateUser],
  );

  const initialValues = useMemo(
    () => ({
      firstname: user.firstname,
      lastname: user.lastname,
      image: user.profile_url,
    }),
    [user],
  );

  if (loadingUser) return null;

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={UserSchema}
      onSubmit={onSubmit}
      enableReinitialize
    >
      <Form>
        <ImageInput name="image" />

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
          <SubmitButton loading={loading}>Salvar Alterações</SubmitButton>
        </InputGroup>
      </Form>
    </Formik>
  );
};

export default Profile;
