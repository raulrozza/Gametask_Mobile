import React, { useState } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';

// Contexts
import { useGame } from '../../../contexts/Game';

// Libs
import { Formik } from 'formik';
import * as Yup from 'yup';
import { showMessage } from 'react-native-flash-message';

// Components
import Input from '../../../components/Input';

// Services
import api from '../../../services/api';

// Types
import { AchievementRegisterRouteProp } from '../types';

// Styles
import { Container, Title, Form, Errors, Footer } from './styles';

// Utils
import handleErrors from '../../../utils/handleErrors';

const RegisterSchema = Yup.object().shape({
  information: Yup.string().required('Conte como desbloqueou a conquista.'),
});

const AchievementRegister: React.FC = () => {
  const {
    params: { achievement },
  } = useRoute<AchievementRegisterRouteProp>();
  const { goBack } = useNavigation();
  const { game, player } = useGame();

  // State
  const [confirmDisabled, setConfirmDisabled] = useState(false);

  return (
    <Container>
      <Title>Requisitar Conquista</Title>
      <Title>{achievement.name}</Title>

      <Formik
        initialValues={{
          information: '',
        }}
        validationSchema={RegisterSchema}
        onSubmit={async values => {
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
            handleErrors(error);
            setConfirmDisabled(false);
          }
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
