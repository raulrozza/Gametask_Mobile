import React, { useEffect } from 'react';
import Login from '../pages/Login';

import { useTheme } from '../contexts/Theme';

const DefaultRoutes: React.FC = () => {
  const { changeTheme } = useTheme();

  useEffect(() => {
    changeTheme();
  }, []);

  return <Login />;
};

export default DefaultRoutes;
