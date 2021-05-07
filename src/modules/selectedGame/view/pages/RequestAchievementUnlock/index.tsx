import React, { useCallback } from 'react';

// Components
import { Formik } from 'formik';
import { Input } from 'shared/view/components';
import { Container, Title, Form, Footer } from './styles';

// Entities
import IAchievement from 'modules/selectedGame/entities/IAchievement';

// Hooks
import useRequestAchievementUnlockController from 'modules/selectedGame/infra/controllers/useRequestAchievementUnlockController';
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
import useToastContext from 'shared/container/contexts/ToastContext/contexts/useToastContext';
import useSessionContext from 'shared/container/contexts/SessionContext/contexts/useSessionContext';

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
  const session = useSessionContext();

  const {
    loading,
    requestAchievement,
  } = useRequestAchievementUnlockController();

  const onSubmit = useCallback(
    async values => {
      const result = await requestAchievement({
        id: achievement.id,
        information: values.information,
        playerId: session.playerId,
      });

      if (result !== null) {
        toast.showSuccess('Conquista requisitada!');
        return goBack();
      }
    },
    [goBack, toast, achievement.id, session.playerId, requestAchievement],
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

            <Footer.Button loading={loading}>Confirmar</Footer.Button>
          </Footer.Container>
        </Form>
      </Formik>
    </Container>
  );
};

export default RequestAchievementUnlock;
