import React, { useState, useCallback } from 'react';

// Components
import Input from '../../../components/Input';

// Contexts
import { useGame } from '../../../contexts/Game';

// Libs
import { Formik } from 'formik';
import * as Yup from 'yup';
import { showMessage } from 'react-native-flash-message';
import { useRoute, useNavigation } from '@react-navigation/native';

// Services
import api from '../../../services/api';

// Styles
import { Container, Title, Form, Errors, Footer } from './styles';

// Types
import { AchievementRegisterRouteProp } from '../types';

// Utils
import handleApiErrors from '../../../utils/handleApiErrors';

const RegisterSchema = Yup.object().shape({
  information: Yup.string().required('Conte como desbloqueou a conquista.'),
});

const AchievementRegister: React.FC = () => {
  const initialValues = {
    information: '',
  };

  // Hooks
  const {
    params: { achievement },
  } = useRoute<AchievementRegisterRouteProp>();
  const { goBack } = useNavigation();
  const { game, player } = useGame();

  // State
  const [confirmDisabled, setConfirmDisabled] = useState(false);

  const onSubmit = useCallback(async values => {
    setConfirmDisabled(true);

    try {
      const data = {
        requester: player._id,
        achievement: achievement._id,
        requestDate: new Date(),
        information: values.information,
        gameId: game.id,
      };

      await api.post('/achievementRegister', data);

      showMessage({ message: 'Conquista requisitada!', type: 'success' });
      goBack();
    } catch (error) {
      handleApiErrors(error);
      setConfirmDisabled(false);
    }
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
