import React, { useCallback, useState } from 'react';

// Entities
import IActivity from 'modules/selectedGame/entities/IActivity';

// Components
import { Formik } from 'formik';
import { Input } from 'shared/view/components';
import { DateInput, Footer } from './components';

// Hooks
import { useGameData } from '../../../../../hooks/contexts/useGameData';
import { useApiPost } from '../../../../../hooks/api/useApiPost';
import { useRoute, RouteProp } from '@react-navigation/native';
import useToastContext from 'shared/container/contexts/ToastContext/contexts/useToastContext';
import useSessionContext from 'shared/container/contexts/SessionContext/contexts/useSessionContext';

// Schemas
import RequestActivitySchema from 'modules/selectedGame/view/validation/RequestActivitySchema';

// Styles
import { Container, Title, Paragraph, Info, Form } from './styles';

type ActivityParams = RouteProp<
  {
    requestActivity: { activity: IActivity };
  },
  'requestActivity'
>;

const initialValues = {
  date: undefined as string | undefined,
  information: '',
};

const ActivityRegister: React.FC = () => {
  // Hooks
  const {
    params: { activity },
  } = useRoute<ActivityParams>();
  const apiPost = useApiPost();
  const { player } = useGameData();
  const session = useSessionContext();
  const toast = useToastContext();

  const [confirmDisabled, setConfirmDisabled] = useState(false);

  const onSubmit = useCallback(async values => {
    setConfirmDisabled(true);

    /* const body = {
      requester: player._id,
      activity: activity._id,
      requestDate: new Date(),
      completionDate: selectedDate,
      information: values.information,
      gameId: session.selectedGame,
    };

    const result = await apiPost('/activityRegister', body);

    if (result !== null) {
      toast.showSuccess('Atividade registrada!');
      return goBack();
    } */

    return setConfirmDisabled(false);
  }, []);

  return (
    <Container>
      <Title variant="title">Registrar Atividade</Title>

      <Title>{activity.name}</Title>

      <Paragraph>
        Então você completou esta atividade e quer ganhar seus merecidos{' '}
        {activity.experience} XP? Preencha as informações abaixo, por favor.
      </Paragraph>

      <Info>{activity.description}</Info>

      <Formik
        initialValues={initialValues}
        validationSchema={RequestActivitySchema}
        onSubmit={onSubmit}
      >
        <Form>
          <Input
            name="information"
            placeholder="Como foi sua atividade?"
            multiline
            fullWidth
          />

          <DateInput />

          <Footer loading={confirmDisabled} />
        </Form>
      </Formik>
    </Container>
  );
};

export default ActivityRegister;
