import * as Yup from 'yup';

export const RegisterSchema = Yup.object().shape({
  date: Yup.date().required('Informe a data'),
  information: Yup.string().required('Conte como concluiu a atividade'),
});
