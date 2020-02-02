import React from 'react';
import PropTypes from 'prop-types';
import { equals } from 'ramda';
import cn from 'classnames';
import { Container } from 'react-bootstrap';
import './style.scss';

export const Title = ({ text, className, type }) => {
  const isTypeEqual = equals(type);
  return (
    <Container>
      {isTypeEqual('primary') && (
        <h2 className={cn('title-primary', className)}>
          <span>{text}</span>
        </h2>
      )}
      {isTypeEqual('default') && <h2 className={cn(className)}>{text}</h2>}
    </Container>
  );
};

Title.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Title.defaultProps = {
  className: '',
};
