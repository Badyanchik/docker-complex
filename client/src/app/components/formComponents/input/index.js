import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

export const FormInput = ({
  onChange,
  onBlur,
  value,
  label,
  placeholder,
  error,
  type,
  name,
  additionalLabel,
  touched,
  id,
  required,
  textarea,
  rows,
}) => (
  <Form.Group>
    {label && <Form.Label>{label}</Form.Label>}
    <Form.Control
      placeholder={placeholder}
      isInvalid={touched && !!error}
      id={id}
      value={value}
      name={name}
      onChange={onChange}
      type={type}
      required={required}
      onBlur={onBlur}
      as={textarea ? 'textarea' : 'input'}
      rows={rows}
    />
    {additionalLabel && <Form.Control.Feedback>{additionalLabel}</Form.Control.Feedback>}
    {error && touched && <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>}
  </Form.Group>
);

FormInput.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  additionalLabel: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  rows: PropTypes.string,
  required: PropTypes.bool,
  textarea: PropTypes.bool,
  touched: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
};

FormInput.defaultProps = {
  label: '',
  placeholder: '',
  id: '',
  additionalLabel: '',
  error: '',
  rows: '3',
  touched: false,
  required: false,
  textarea: false,
  onBlur: () => {},
};
