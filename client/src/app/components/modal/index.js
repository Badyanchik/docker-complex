import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Modal } from 'react-bootstrap';

export const ModalWindow = ({
  onHide,
  onShow,
  centered,
  className,
  title,
  children,
  size,
  footerChild,
  scrollable,
  onEscapeKeyDown,
  isOpen,
  ...props
}) => {
  return (
    <Modal
      {...props}
      show={isOpen}
      size={size}
      centered={centered}
      className={cn(className, 'modal modal-default')}
      onShow={onShow}
      onHide={onHide}
      onEscapeKeyDown={onEscapeKeyDown}
    >
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      {footerChild && <Modal.Footer>{footerChild}</Modal.Footer>}
    </Modal>
  );
};

ModalWindow.propTypes = {
  onHide: PropTypes.func.isRequired,
  onShow: PropTypes.func,
  onEscapeKeyDown: PropTypes.func,
  children: PropTypes.node,
  footerChild: PropTypes.node,
  className: PropTypes.string,
  centered: PropTypes.bool,
  scrollable: PropTypes.bool,
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string,
  size: PropTypes.string,
};

ModalWindow.defaultProps = {
  onShow: () => {},
  onEscapeKeyDown: () => {},
  centered: true,
  scrollable: false,
  className: '',
  size: 'lg',
  children: '',
  footerChild: '',
  title: '',
};
