import React from 'react';
import { useRouteMatch } from 'react-router';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { ROUTES } from 'app/constants/routes';
import './style.scss';

export const MainNavigation = () => {
  const matchUrl = useRouteMatch();
  return (
    <Nav className="justify-content-end main-navigation" activeKey={matchUrl.path}>
      <Nav.Item>
        <Nav.Link as={NavLink} exact to={ROUTES.HOME}>
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to={ROUTES.OTHER}>
          Other
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};
