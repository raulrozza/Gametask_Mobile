import * as Yup from 'yup';

const RequestActivitySchema = Yup.object().shape({
  date: Yup.date().required('Informe a data'),
  information: Yup.string().required('Conte como concluiu a atividade'),
});

export default RequestActivitySchema;
