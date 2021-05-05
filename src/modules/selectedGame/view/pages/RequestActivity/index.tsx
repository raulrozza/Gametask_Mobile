import React, { useCallback, useState } from 'react';

// Entities
import IActivity from 'modules/selectedGame/entities/IActivity';

// Components
import { Formik } from 'formik';
import DatePicker from '@react-native-community/datetimepicker';
import { Input as MInput } from 'shared/view/components';
import { Footer } from './components';
import Input from '../../../../../components/Input';
import ErrorField from '../../../../../components/ErrorField';

// Hooks
import { useGameData } from '../../../../../hooks/contexts/useGameData';
import { useApiPost } from '../../../../../hooks/api/useApiPost';
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
import useToastContext from 'shared/container/contexts/ToastContext/contexts/useToastContext';
import useSessionContext from 'shared/container/contexts/SessionContext/contexts/useSessionContext';

// Schemas
import RequestActivitySchema from 'modules/selectedGame/view/validation/RequestActivitySchema';

// Styles
import { Container, Title, Paragraph, Info, Form, DateInput } from './styles';

// Utils
import showDate from '../../../../../utils/showDate';

type ActivityParams = RouteProp<
  {
    requestActivity: { activity: IActivity };
  },
  'requestActivity'
>;

const initialValues = {
  date: undefined,
  information: '',
};

const ActivityRegister: React.FC = () => {
  // Hooks
  const {
    params: { activity },
  } = useRoute<ActivityParams>();
  const { goBack } = useNavigation();
  const apiPost = useApiPost();
  const { player } = useGameData();
  const session = useSessionContext();
  const toast = useToastContext();

  // State
  const [confirmDisabled, setConfirmDisabled] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  const handleDateChange = useCallback((date: Date | undefined) => {
    setShowDatePicker(false);
    setSelectedDate(date);
  }, []);

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
        {({ handleChange, errors, touched }) => (
          <Form.Container>
            <MInput
              name="information"
              placeholder="Como foi sua atividade?"
              multiline
            />

            <Form.InputGroup>
              <DateInput.View
                onTouchEnd={() => {
                  setShowDatePicker(true);
                }}
              >
                <DateInput.Text date={!!selectedDate}>
                  {selectedDate ? showDate(selectedDate) : 'Data da conclusão'}
                </DateInput.Text>
              </DateInput.View>
              {errors.date && touched.date ? (
                <ErrorField message={errors.date} />
              ) : null}

              {showDatePicker && (
                <DatePicker
                  value={selectedDate || new Date()}
                  onChange={(_, date) => {
                    handleDateChange(date);
                    handleChange('date')(date ? date.toLocaleString() : '');
                  }}
                  maximumDate={new Date()}
                />
              )}
            </Form.InputGroup>

            <Footer loading={confirmDisabled} />
          </Form.Container>
        )}
      </Formik>
    </Container>
  );
};

export default ActivityRegister;
