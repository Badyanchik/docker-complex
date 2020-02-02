import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Container } from 'react-bootstrap';
import './style.scss';

export const Label = ({ name, className, description, align }) => {
  return (
    <Container className="text-label-container">
      <div
        className={cn('text-label text-label-default', className, {
          [`text-label-${align}`]: align,
        })}
      >
        <span className="text-label__name">
          <b>{name}</b>
        </span>
        {description && <span className="text-label__description">{description}</span>}
      </div>
    </Container>
  );
};

Label.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  className: PropTypes.string,
  align: PropTypes.string,
};

Label.defaultProps = {
  className: '',
  description: '',
  align: '',
};
