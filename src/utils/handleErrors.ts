import { showMessage } from 'react-native-flash-message';
import { AxiosError } from 'axios';

/*****
 * Errors mapping
 *
 * 100: User already exists
 * 101: Player already exists
 * 102: Achievement register already exists
 * 200: User and password don't match
 * 300: Missing parameters
 *
 * *****/

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isAxiosError = (error: any): error is AxiosError =>
  error.isAxiosError || false;

const handleErrors: (
  error: Error | AxiosError,
  signOut?: () => void,
) => void = (error, signOut) => {
  if (isAxiosError(error)) {
    const response = error.response;

    if (!response)
      return showMessage({
        message: 'Houve um problema de conexão.',
        type: 'danger',
      });

    switch (response.status) {
      case 403:
        showMessage({
          message: 'Você não tem permissão para acessar esta página.',
          type: 'danger',
        });
        if (signOut) return signOut();
        return;

      case 500:
        return showMessage({
          message: 'Não foi possível completar a requisição.',
          type: 'danger',
        });

      case 400:
        switch (response.data.code) {
          case 100:
            return showMessage({
              message: 'O usuário já existe.',
              type: 'danger',
            });

          case 101:
            return showMessage({
              message: 'Você já está cadastrado neste jogo.',
              type: 'danger',
            });

          case 102:
            return showMessage({
              message: 'Você já requisitou esta conquista.',
              type: 'danger',
            });

          case 200:
            return showMessage({
              message: 'Usuário ou senha incorretos.',
              type: 'danger',
            });

          case 300:
            return showMessage({
              message: 'Dados ausentes na sua requisição.',
              type: 'danger',
            });

          default:
            return showMessage({
              message: 'Houve um erro com a requisição',
              type: 'danger',
            });
        }
      default:
        return showMessage({
          message: 'Houve um erro com a requisição',
          type: 'danger',
        });
    }
  } else showMessage({ message: 'Ocorreu um erro.', type: 'danger' });
};

export default handleErrors;
