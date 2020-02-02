import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import cn from 'classnames';

export const FormCheck = ({ onChange, value, label, error, type, name, touched, id }) => (
  <Form.Check
    type={type}
    isValid={touched && !error}
    id={id}
    value={value}
    touched={touched.toString()}
    name={name}
    onChange={onChange}
    label={label}
    className={cn('form-check-default', `form-check-${type}`)}
  />
);

FormCheck.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string,
  error: PropTypes.string,
  touched: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.instanceOf(Object)])
    .isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

FormCheck.defaultProps = {
  id: '',
  error: '',
  touched: false,
};
