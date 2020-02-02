import React from 'react';
import { useLocation } from 'react-router';
import { Switch, Route, Redirect } from 'react-router-dom';
import { OtherPage, HomePage } from 'app/pages';
import { ROUTES } from 'app/constants';

export const UnregisteredRoutes = () => {
  const location = useLocation();
  const fixUrl = () =>
    location.pathname.slice(-1) !== '/' ? <Redirect to={`${location.pathname}/`} /> : <></>;
  return (
    <Switch>
      <Route exact strict path="/:url" render={fixUrl} />
      <Route exact path={ROUTES.HOME} render={HomePage} />
      <Route exact path={ROUTES.OTHER} render={OtherPage} />
    </Switch>
  );
};
