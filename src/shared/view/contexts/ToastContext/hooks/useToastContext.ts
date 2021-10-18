import { createContext, useContext } from 'react';

import { isEmpty } from 'lodash';

import IToastContext from 'shared/domain/providers/IToastContext';

export const ToastContextProvider = createContext<IToastContext>(
  {} as IToastContext,
);

const useToastContext = (): IToastContext => {
  const toastProvider = useContext(ToastContextProvider);

  if (isEmpty(toastProvider))
    throw new Error(
      'useToastContext should be called inside a ToastContextProvider',
    );

  return toastProvider;
};

export default useToastContext;
