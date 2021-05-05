import React, { useCallback } from 'react';

// Entities
import IActivity from 'modules/selectedGame/entities/IActivity';

// Components
import { Formik } from 'formik';
import { Input } from 'shared/view/components';
import { DateInput, Footer } from './components';

// Hooks
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import useRequestActivityController from 'modules/selectedGame/infra/controllers/useRequestActivityController';
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

interface IValues {
  date: string;
  information: string;
}

const initialValues: IValues = {
  date: new Date().toDateString(),
  information: '',
};

const ActivityRegister: React.FC = () => {
  // Hooks
  const {
    params: { activity },
  } = useRoute<ActivityParams>();
  const session = useSessionContext();
  const toast = useToastContext();
  const navigation = useNavigation();

  const { loading, requestActivity } = useRequestActivityController();

  const onSubmit = useCallback(
    async (values: IValues) => {
      const success = await requestActivity({
        id: activity.id,
        information: values.information,
        completionDate: values.date,
        playerId: session.playerId,
      });

      if (success) {
        toast.showSuccess('Atividade registrada!');
        return navigation.goBack();
      }
    },
    [activity.id, requestActivity, toast, navigation, session.playerId],
  );

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

          <Footer loading={loading} />
        </Form>
      </Formik>
    </Container>
  );
};

export default ActivityRegister;
