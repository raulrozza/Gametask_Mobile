import React from 'react';
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
import { useTheme } from '../../contexts/Theme';
import { Activity } from 'game';

// Styles
import { Container, Title, Paragraph, Form, Errors, Footer } from './styles';

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

const RegisterSchema = Yup.object().shape({
  requestDate: Yup.date()
    .required('Informe a data, por favor')
    .typeError('Formato de data inválido!'),
  information: Yup.string().required('Digite sua senha'),
});

const ActivityInfo: React.FC = () => {
  const {
    params: { activity },
  } = useRoute<ActivityRouteProps>();
  const { goBack } = useNavigation();
  const { theme } = useTheme();

  return (
    <Container theme={theme}>
      <Title theme={theme}>Registrar Atividade</Title>
      <Title theme={theme}>{activity.name}</Title>
      <Paragraph theme={theme}>
        Então você completou esta atividade e quer ganhar seus merecidos{' '}
        {activity.experience} XP? Preencha as informações abaixo, por favor.
      </Paragraph>

      <Formik
        initialValues={{
          requestDate: '',
          information: '',
        }}
        validationSchema={RegisterSchema}
        onSubmit={async values => {
          console.log(values);
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
              <Input
                value={values.requestDate}
                onChangeText={handleChange('requestDate')}
                onBlur={handleBlur('requestDate')}
                placeholder="Data da conclusão"
                keyboardType="numbers-and-punctuation"
              />
              {errors.requestDate && touched.requestDate ? (
                <Errors.Field>
                  <Errors.Text>{errors.requestDate}</Errors.Text>
                </Errors.Field>
              ) : null}
            </Form.InputGroup>

            <Footer.Container>
              <Footer.Back onPress={() => goBack()} theme={theme}>
                <Footer.BackText theme={theme}>Voltar</Footer.BackText>
              </Footer.Back>

              <Footer.Confirm theme={theme}>
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
