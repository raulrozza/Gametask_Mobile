import React, { useState, useCallback } from 'react';

// Components
import Input from '../../../components/Input';

// Hooks
import { useGameData } from '../../../hooks/contexts/useGameData';
import { useApiPost } from '../../../hooks/api/useApiPost';
import { useRoute, useNavigation } from '@react-navigation/native';

// Libs
import { Formik } from 'formik';

// Schemas
import { RegisterSchema } from './schemas';

// Styles
import { Container, Title, Form, Errors, Footer } from './styles';

// Types
import { AchievementRegisterParams } from './types';

// Utils
import displaySuccessMessage from '../../../utils/displaySuccessMessage';

const AchievementRegister: React.FC = () => {
  const initialValues = {
    information: '',
  };

  // Hooks
  const {
    params: { achievement },
  } = useRoute<AchievementRegisterParams>();
  const { goBack } = useNavigation();
  const apiPost = useApiPost();
  const { game, player } = useGameData();

  // State
  const [confirmDisabled, setConfirmDisabled] = useState(false);

  if (!game || !player) return null;

  const onSubmit = useCallback(async values => {
    setConfirmDisabled(true);

    const body = {
      requester: player._id,
      achievement: achievement._id,
      requestDate: new Date(),
      information: values.information,
      gameId: game.id,
    };

    const result = await apiPost('/achievementRegister', body);

    if (result !== null) {
      displaySuccessMessage('Conquista requisitada!');
      return goBack();
    }

    return setConfirmDisabled(false);
  }, []);

  return (
    <Container>
      <Title>Requisitar Conquista</Title>
      <Title>{achievement.name}</Title>

      <Formik
        initialValues={initialValues}
        validationSchema={RegisterSchema}
        onSubmit={onSubmit}
      >
        {({
          handleSubmit,
          handleBlur,
          handleChange,
          values,
          errors,
          touched,
        }) => (
          <Form.Container>
            <Form.InputGroup>
              <Input
                value={values.information}
                onChangeText={handleChange('information')}
                onBlur={handleBlur('information')}
                placeholder="Como desbloqueou a conquista?"
                multiline={true}
              />
              {errors.information && touched.information ? (
                <Errors.Field>
                  <Errors.Text>{errors.information}</Errors.Text>
                </Errors.Field>
              ) : null}
            </Form.InputGroup>

            <Footer.Container>
              <Footer.Back outline onPress={() => goBack()}>
                Voltar
              </Footer.Back>

              <Footer.Button
                disabled={confirmDisabled}
                onPress={() => handleSubmit()}
              >
                Confirmar
              </Footer.Button>
            </Footer.Container>
          </Form.Container>
        )}
      </Formik>
    </Container>
  );
};

export default AchievementRegister;
