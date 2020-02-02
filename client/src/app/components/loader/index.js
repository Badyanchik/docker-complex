import React from 'react';
import PropTypes from 'prop-types';
import { Spinner } from 'react-bootstrap';
import cn from 'classnames';
import './style.scss';

export const Loader = ({ fullSize }) => (
  <div className={cn('loader', { 'loader--full-size': fullSize })}>
    <Spinner animation="border" role="status" variant="success">
      <span className="sr-only">Loading...</span>
    </Spinner>
  </div>
);

Loader.propTypes = {
  fullSize: PropTypes.bool,
};

Loader.defaultProps = {
  fullSize: false,
};
