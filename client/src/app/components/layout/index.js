import React from 'react';
import PropTypes from 'prop-types';
import { Header } from './components';
import './style.scss';

export const Layout = ({ children }) => (
  <div className="page-wrapper">
    <Header />
    <main className="main main-container">{children}</main>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
