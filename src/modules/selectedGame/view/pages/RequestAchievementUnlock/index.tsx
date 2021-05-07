import React, { useState, useCallback } from 'react';

// Components
import { Formik } from 'formik';
import { Input } from 'shared/view/components';
import { Container, Title, Form, Footer } from './styles';

// Entities
import IAchievement from 'modules/selectedGame/entities/IAchievement';

// Hooks
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
import useToastContext from 'shared/container/contexts/ToastContext/contexts/useToastContext';

// Schemas
import RequestAchievementUnlockSchema from 'modules/selectedGame/view/validation/RequestAchievementUnlockSchema';

const initialValues = {
  information: '',
};

type RequestAchievementUnlockParams = RouteProp<
  {
    requestAchievementUnlock: {
      achievement: IAchievement;
    };
  },
  'requestAchievementUnlock'
>;

const RequestAchievementUnlock: React.FC = () => {
  // Hooks
  const {
    params: { achievement },
  } = useRoute<RequestAchievementUnlockParams>();
  const { goBack } = useNavigation();
  const toast = useToastContext();

  // State
  const [confirmDisabled, setConfirmDisabled] = useState(false);

  const onSubmit = useCallback(
    async values => {
      setConfirmDisabled(true);

      /* const body = {
      requester: player._id,
      achievement: achievement._id,
      requestDate: new Date(),
      information: values.information,
      gameId: session.selectedGame,
    }; */

      const result = null; // await apiPost('/achievementRegister', body);

      if (result !== null) {
        toast.showSuccess('Conquista requisitada!');
        return goBack();
      }

      return setConfirmDisabled(false);
    },
    [goBack, toast],
  );

  return (
    <Container>
      <Title>Requisitar Conquista</Title>

      <Title>{achievement.name}</Title>

      <Formik
        initialValues={initialValues}
        validationSchema={RequestAchievementUnlockSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <Input
            name="information"
            multiline={true}
            placeholder="Como desbloqueou a conquista?"
            fullWidth
          />

          <Footer.Container>
            <Footer.Back outline onPress={goBack}>
              Voltar
            </Footer.Back>

            <Footer.Button loading={confirmDisabled}>Confirmar</Footer.Button>
          </Footer.Container>
        </Form>
      </Formik>
    </Container>
  );
};

export default RequestAchievementUnlock;
