import React, { useState } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import DatePicker from '@react-native-community/datetimepicker';

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
import { ActivityRouteProp } from '../types';

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

// Utils
import showDate from '../../../utils/showDate';
import handleErrors from '../../../utils/handleErrors';

const RegisterSchema = Yup.object().shape({
  date: Yup.date().required('Informe a data'),
  information: Yup.string().required('Conte como concluiu a atividade'),
});

const ActivityInfo: React.FC = () => {
  const {
    params: { activity },
  } = useRoute<ActivityRouteProp>();
  const { goBack } = useNavigation();
  const { game, player } = useGame();

  // State
  const [confirmDisabled, setConfirmDisabled] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  const handleDateChange = (date: Date | undefined) => {
    setShowDatePicker(false);
    setSelectedDate(date);
  };

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
        initialValues={{
          date: undefined,
          information: '',
        }}
        validationSchema={RegisterSchema}
        onSubmit={async values => {
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
