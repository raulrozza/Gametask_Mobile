import displayErrorMessage from './displayErrorMessage';
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

const toastMessages = {
  0: 'Ocorreu um erro.',
  1: 'Você não tem permissão para acessar esta página.',
  2: 'Não foi possível completar a requisição.',
  3: 'O usuário já existe',
  4: 'Usuário ou senha incorretos.',
  5: 'Dados ausentes na sua requisição.',
  6: 'Houve um erro com a requisição',
  7: 'Houve um problema de conexão.',
  8: 'Não é possível excluir títulos já obtidos.',
  9: 'Você já está cadastrado neste jogo.',
  10: 'Você já requisitou esta conquista.',
};

interface IToastIds {
  [key: string]: keyof typeof toastMessages;
}

const toastIds: IToastIds = {
  UNKNOWN: 0,
  FORBIDDEN: 1,
  INTERNAL_ERROR: 2,
  USER_EXISTS: 3,
  USER_PASSWORD_DONT_MATCH: 4,
  MISSING_PARAMETERS: 5,
  DEFAULT_TOAST: 6,
  NO_DATA_RESPONSE: 7,
  UNABLE_TO_DELETE_TITLE: 8,
  ALREADY_IN_GAME: 9,
  ACHIEVEMENT_ALREADY_OBTAINED: 10,
};

const errorCodesToToastIds = {
  100: toastIds.USER_EXISTS,
  101: toastIds.ALREADY_IN_GAME,
  102: toastIds.ACHIEVEMENT_ALREADY_OBTAINED,
  200: toastIds.USER_PASSWORD_DONT_MATCH,
  201: toastIds.UNABLE_TO_DELETE_TITLE,
  300: toastIds.MISSING_PARAMETERS,
};

type ErrorCode = keyof typeof errorCodesToToastIds;

const handleDefaultError = () => {
  displayErrorMessage(
    toastMessages[toastIds.DEFAULT_TOAST],
    toastIds.DEFAULT_TOAST,
  );
};

const handleErrorWithoutResponse = () => {
  displayErrorMessage(
    toastMessages[toastIds.NO_DATA_RESPONSE],
    toastIds.NO_DATA_RESPONSE,
  );
};

const handleForbiddenStatus = (signOut?: () => void) => {
  displayErrorMessage(toastMessages[toastIds.FORBIDDEN], toastIds.FORBIDDEN);
  if (signOut) signOut();
};

const handleIntervalErrorStatus = () => {
  displayErrorMessage(
    toastMessages[toastIds.INTERNAL_ERROR],
    toastIds.INTERNAL_ERROR,
  );
};

const handleRequestErrors = (errorCode: ErrorCode) => {
  const messageCode = errorCodesToToastIds[errorCode];
  if (messageCode)
    return displayErrorMessage(toastMessages[messageCode], messageCode);

  handleDefaultError();
};

const handleUnknownError = () => {
  displayErrorMessage(toastMessages[toastIds.UNKNOWN], toastIds.UNKNOWN);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isAxiosError = (error: any): error is AxiosError =>
  error.isAxiosError || false;

const handleApiErrors: (
  error: Error | AxiosError,
  signOut?: () => void,
) => void = (error, signOut) => {
  if (isAxiosError(error)) {
    const response = error.response;

    if (!response) return handleErrorWithoutResponse();

    switch (response.status) {
      case 403:
        return handleForbiddenStatus(signOut);

      case 500:
        return handleIntervalErrorStatus();

      case 400:
        return handleRequestErrors(response.data.code);

      default:
        return handleDefaultError();
    }
  } else handleUnknownError();
};

export default handleApiErrors;
