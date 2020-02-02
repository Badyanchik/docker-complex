import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

export const Button = ({ onClick, type, className, variant, children, text, disabled }) => {
  return (
    // eslint-disable-next-line react/button-has-type
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={cn(
        {
          'button-default': variant === 'primary',
          'button-secondary': variant === 'secondary',
        },
        className,
      )}
    >
      {children || text}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  text: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  onClick: () => {},
  className: '',
  children: '',
  text: '',
  disabled: false,
};
