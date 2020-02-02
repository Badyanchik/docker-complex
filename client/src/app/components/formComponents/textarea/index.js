import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

export const Textarea = ({
  onChange,
  value,
  label,
  error,
  rows,
  name,
  additionalLabel,
  touched,
  id,
}) => (
  <Form.Group>
    {label && <Form.Label>{label}</Form.Label>}
    <Form.Control
      isInvalid={touched && !!error}
      id={id}
      value={value}
      touched={touched}
      name={name}
      onChange={onChange}
      as="textarea"
      rows={rows}
    />
    {additionalLabel && <Form.Control.Feedback>{additionalLabel}</Form.Control.Feedback>}
    {error && <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>}
  </Form.Group>
);

Textarea.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  additionalLabel: PropTypes.string,
  error: PropTypes.string,
  touched: PropTypes.bool.isRequired,
  value: PropTypes.instanceOf(Object).isRequired,
  rows: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Textarea.defaultProps = {
  label: '',
  id: '',
  additionalLabel: '',
  error: '',
  rows: '3',
};
