import React from 'react';
import { Button, Container } from 'react-bootstrap';
import CV from './CVvanOsamaElAnzi.pdf';

const CVComponent = () => {
  const handleViewCV = () => {
    window.open(CV, '_blank');
  };

  return (
    <Container className="text-center py-5 d-flex flex-column align-items-center justify-content-center">
      <h1 className="mb-4 text-dark">My CV</h1>
      <Button
        variant="primary"
        size="lg"
        onClick={handleViewCV}
        className="px-4 py-2"
      >
        Bekijk mijn CV
      </Button>
    </Container>
  );
};

export default CVComponent;
