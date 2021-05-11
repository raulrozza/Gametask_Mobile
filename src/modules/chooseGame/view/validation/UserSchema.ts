import * as Yup from 'yup';

const UserSchema = Yup.object().shape({
  firstname: Yup.string().required('Você precisa de um nome.'),
  lastname: Yup.string(),
  image: Yup.mixed(),
});

export default UserSchema;
