import * as Yup from 'yup';

interface PasswordValues {
  password: string;
  confirmPassword: string;
}

interface PasswordsMatchErrors {
  confirmPassword?: string;
}

const passwordsDontMatchError = (
  password: string,
  confirmPassword: string,
): string | void => {
  if (password !== confirmPassword) return 'As senhas não são iguais';
};

export const passwordsMatchValidation = (
  values: PasswordValues,
): PasswordsMatchErrors => {
  const matchError = passwordsDontMatchError(
    values.password,
    values.confirmPassword,
  );

  if (matchError)
    return {
      confirmPassword: matchError,
    };

  return {};
};

const SignupSchema = Yup.object().shape({
  firstname: Yup.string().required('Digite seu nome'),
  lastname: Yup.string(),
  email: Yup.string().email('E-mail inválido').required('Digite um e-mail'),
  password: Yup.string().required('Digite uma senha'),
  confirmPassword: Yup.string().required('Repita sua senha'),
});

export default SignupSchema;
