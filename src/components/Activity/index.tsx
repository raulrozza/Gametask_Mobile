import React, { useState } from 'react';
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
import DatePicker from '@react-native-community/datetimepicker';

// Contexts
import { useAuth } from '../../contexts/Authorization';
import { useTheme } from '../../contexts/Theme';
import { useGame } from '../../contexts/Game';

// Modules
import { Activity } from 'game';

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

// Formik
import { Formik } from 'formik';

// Yup
import * as Yup from 'yup';

// Components
import Input from '../Input';

// Services
import api from '../../services/api';

type ParamList = {
  activity: { activity: Activity };
};

type ActivityRouteProps = RouteProp<ParamList, 'activity'>;

const showDate = (date: Date) => {
  return `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;
};

const RegisterSchema = Yup.object().shape({
  date: Yup.date().required('Informe a data'),
  information: Yup.string().required('Digite sua senha'),
});

const ActivityInfo: React.FC = () => {
  const {
    params: { activity },
  } = useRoute<ActivityRouteProps>();
  const { goBack } = useNavigation();
  const { user } = useAuth();
  const { theme } = useTheme();
  const { game } = useGame();

  // State
  const [confirmDisabled, setConfirmDisabled] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  const handleDateChange = (date: Date | undefined) => {
    setShowDatePicker(false);
    setSelectedDate(date);
  };

  return (
    <Container theme={theme}>
      <Title theme={theme}>Registrar Atividade</Title>
      <Title theme={theme}>{activity.name}</Title>
      <Paragraph theme={theme}>
        Então você completou esta atividade e quer ganhar seus merecidos{' '}
        {activity.experience} XP? Preencha as informações abaixo, por favor.
      </Paragraph>

      <Info theme={theme}>{activity.description}</Info>

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
              requester: user._id,
              activity: activity._id,
              requestDate: new Date(),
              completionDate: selectedDate,
              information: values.information,
              gameId: game.id,
            };

            await api.post('/activityRegister', data);

            goBack();
          } catch (error) {
            console.error(error);
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
                theme={theme}
                onTouchEnd={() => {
                  setShowDatePicker(true);
                }}
              >
                <DateInput.Text theme={theme} date={!!selectedDate}>
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
              <Footer.Back onPress={() => goBack()} theme={theme}>
                <Footer.BackText theme={theme}>Voltar</Footer.BackText>
              </Footer.Back>

              <Footer.Confirm
                disabled={confirmDisabled}
                theme={theme}
                onPress={() => handleSubmit()}
              >
                <Footer.ConfirmText theme={theme}>Confirmar</Footer.ConfirmText>
              </Footer.Confirm>
            </Footer.Container>
          </Form.Container>
        )}
      </Formik>
    </Container>
  );
};

export default ActivityInfo;
