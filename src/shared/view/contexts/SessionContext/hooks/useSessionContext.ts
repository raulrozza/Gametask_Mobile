import { createContext, useContext } from 'react';
import ISessionContext from 'shared/domain/providers/ISessionContext';

export const SessionContextProvider = createContext<ISessionContext>(
  {} as ISessionContext,
);

const useSessionContext = (): ISessionContext => {
  const sessionProvider = useContext(SessionContextProvider);

  if (!sessionProvider)
    throw new Error(
      'useSessionContext should be called inside a SessionContextProvider',
    );

  return sessionProvider;
};

export default useSessionContext;
