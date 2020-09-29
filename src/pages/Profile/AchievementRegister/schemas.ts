import * as Yup from 'yup';

export const RegisterSchema = Yup.object().shape({
  information: Yup.string().required('Conte como desbloqueou a conquista.'),
});
