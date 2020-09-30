import { toastMessages } from '../../config/errors/toastMessages';

export interface IToastIds {
  [key: string]: keyof typeof toastMessages;
}
