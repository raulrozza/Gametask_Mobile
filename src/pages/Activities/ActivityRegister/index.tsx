import React, { useCallback, useState } from 'react';

// Components
import DatePicker from '@react-native-community/datetimepicker';
import Input from '../../../components/Input';
import ErrorField from '../../../components/ErrorField';

// Hooks
import { useGameData } from '../../../hooks/contexts/useGameData';
import { useApiPost } from '../../../hooks/api/useApiPost';
import { useRoute, useNavigation } from '@react-navigation/native';

// Libs
import { Formik } from 'formik';

// Schemas
import { RegisterSchema } from './schemas';

// Styles
import {
  Container,
  Title,
  Paragraph,
  Info,
  Form,
  DateInput,
  Footer,
} from './styles';

// Types
import { ActivityParams } from './types';

// Utils
import showDate from '../../../utils/showDate';
import displaySuccessMessage from '../../../utils/displaySuccessMessage';

const ActivityRegister: React.FC = () => {
  const initialValues = {
    date: undefined,
    information: '',
  };

  // Hooks
  const {
    params: { activity },
  } = useRoute<ActivityParams>();
  const { goBack } = useNavigation();
  const apiPost = useApiPost();
  const { game, player } = useGameData();

  // State
  const [confirmDisabled, setConfirmDisabled] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  if (!game || !player) return null;

  const handleDateChange = useCallback((date: Date | undefined) => {
    setShowDatePicker(false);
    setSelectedDate(date);
  }, []);

  const onSubmit = useCallback(async values => {
    setConfirmDisabled(true);

    const body = {
      requester: player._id,
      activity: activity._id,
      requestDate: new Date(),
      completionDate: selectedDate,
      information: values.information,
      gameId: game.id,
    };

    const result = await apiPost('/activityRegister', body);

    if (result !== null) {
      displaySuccessMessage('Atividade registrada!');
      return goBack();
    }

    return setConfirmDisabled(false);
  }, []);

  return (
    <Container>
      <Title>Registrar Atividade</Title>
      <Title>{activity.name}</Title>
      <Paragraph>
        Então você completou esta atividade e quer ganhar seus merecidos{' '}
        {activity.experience} XP? Preencha as informações abaixo, por favor.
      </Paragraph>

      <Info>{activity.description}</Info>

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
                placeholder="Como foi sua atividade?"
                multiline={true}
              />
              {errors.information && touched.information ? (
                <ErrorField message={errors.information} />
              ) : null}
            </Form.InputGroup>

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

            <Footer.Container>
              <Footer.Back onPress={() => goBack()}>
                <Footer.BackText>Voltar</Footer.BackText>
              </Footer.Back>

              <Footer.Confirm
                disabled={confirmDisabled}
                onPress={() => handleSubmit()}
              >
                <Footer.ConfirmText>Confirmar</Footer.ConfirmText>
              </Footer.Confirm>
            </Footer.Container>
          </Form.Container>
        )}
      </Formik>
    </Container>
  );
};

export default ActivityRegister;
