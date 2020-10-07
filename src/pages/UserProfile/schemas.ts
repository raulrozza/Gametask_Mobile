import * as Yup from 'yup';

export const UserProfileSchema = Yup.object().shape({
  firstname: Yup.string().required('Você precisa de um nome.'),
  lastname: Yup.string(),
  image: Yup.mixed(),
});
