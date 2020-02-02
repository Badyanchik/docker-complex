import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { UnregisteredRoutes } from './unregisteredRoutes';

export const App = () => {
  return (
    <BrowserRouter>
      <UnregisteredRoutes />
    </BrowserRouter>
  );
};
