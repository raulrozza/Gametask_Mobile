import React, { useCallback, useMemo } from 'react';

import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';

import useGetUserController from 'modules/chooseGame/infra/controllers/useGetUserController';
import useUpdateUserController from 'modules/chooseGame/infra/controllers/useUpdateUserController';
import UserSchema from 'modules/chooseGame/view/validation/UserSchema';
import { Input, SubmitButton } from 'shared/view/components';
import { useToastContext, useSessionContext } from 'shared/view/contexts';

import { ImageInput } from './components';
import { Form, InputGroup } from './styles';



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
