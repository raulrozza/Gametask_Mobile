import React, { useEffect } from 'react';

// Hooks
import { useTheme } from '../hooks/contexts/useTheme';

// Pages
import Login from '../pages/Login';

const DefaultRoutes: React.FC = () => {
  const { changeTheme } = useTheme();

  useEffect(() => {
    changeTheme({});
  }, []);

  return <Login />;
};

export default DefaultRoutes;
