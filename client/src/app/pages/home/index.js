import React from 'react';
import { Container } from 'react-bootstrap';
import { Layout } from 'app/components';
import { Fib } from 'app/containers';

export const HomePage = () => {
  return (
    <Layout>
      <Container>
        <Fib />
      </Container>
    </Layout>
  );
};
