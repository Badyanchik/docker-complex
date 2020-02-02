import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { MainNavigation } from '..';
import './style.scss';

export const Header = () => {
  return (
    <header className="header page-header">
      <Container>
        <Row className="align-content-center">
          <Col>
            <MainNavigation />
          </Col>
        </Row>
      </Container>
    </header>
  );
};

Header.propTypes = {};
