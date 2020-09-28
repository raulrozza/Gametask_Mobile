import { useContext } from 'react';

// Contexts
import { AuthorizationContext } from '../../contexts/rawContexts';

// Types
import { IAuth } from '../../interfaces/hooks/UseAuth';

export function useAuth(): IAuth {
  const auth = useContext(AuthorizationContext);

  return auth;
}
