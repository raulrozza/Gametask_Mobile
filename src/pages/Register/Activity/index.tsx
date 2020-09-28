import React, { useCallback, useState } from 'react';

// Components
import DatePicker from '@react-native-community/datetimepicker';
import Input from '../../../components/Input';

// Hooks
import { useGameData } from '../../../hooks/contexts/useGameData';
import { useRoute, useNavigation } from '@react-navigation/native';

// Libs
import { Formik } from 'formik';
import * as Yup from 'yup';
import { showMessage } from 'react-native-flash-message';

// Services
import api from '../../../services/api';

// Styles
import {
  Container,
  Title,
  Paragraph,
  Info,
  Form,
  DateInput,
  Errors,
  Footer,
} from './styles';

// Types
import { ActivityRouteProp } from '../types';

// Utils
import showDate from '../../../utils/showDate';
import handleApiErrors from '../../../utils/handleApiErrors';

const RegisterSchema = Yup.object().shape({
  date: Yup.date().required('Informe a data'),
  information: Yup.string().required('Conte como concluiu a atividade'),
});

const ActivityInfo: React.FC = () => {
  const initialValues = {
    date: undefined,
    information: '',
  };

  // Hooks
  const {
    params: { activity },
  } = useRoute<ActivityRouteProp>();
  const { goBack } = useNavigation();
  const { game, player } = useGameData();

  if (!game || !player) return null;

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

    try {
      const data = {
        requester: player._id,
        activity: activity._id,
        requestDate: new Date(),
        completionDate: selectedDate,
        information: values.information,
        gameId: game.id,
      };

      await api.post('/activityRegister', data);

      showMessage({ message: 'Atividade registrada!', type: 'success' });
      goBack();
    } catch (error) {
      handleApiErrors(error);
      setConfirmDisabled(false);
    }
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
                <Errors.Field>
                  <Errors.Text>{errors.information}</Errors.Text>
                </Errors.Field>
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
                <Errors.Field>
                  <Errors.Text>{errors.date}</Errors.Text>
                </Errors.Field>
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

export default ActivityInfo;
