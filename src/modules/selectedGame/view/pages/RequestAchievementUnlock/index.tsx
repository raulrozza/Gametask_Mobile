import React, { useCallback } from 'react';

// Components
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
import { Formik } from 'formik';

// Entities
import IAchievement from 'modules/selectedGame/domain/entities/IAchievement';

// Hooks
import useRequestAchievementUnlockController from 'modules/selectedGame/infra/controllers/useRequestAchievementUnlockController';
import RequestAchievementUnlockSchema from 'modules/selectedGame/view/validation/RequestAchievementUnlockSchema';
import { Input } from 'shared/view/components';
import { useSessionContext } from 'shared/view/contexts';

// Schemas
import { useToastContext } from 'shared/view/contexts';

import { Container, Title, Form, Footer } from './styles';

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
