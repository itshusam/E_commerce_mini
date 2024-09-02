import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NotFound.css'; 
import notFoundImage from './assets/NotFound.jpg'; 

const NotFound = () => {
  return (
    <Container className="not-found text-center py-5" fluid>
      <Row className="justify-content-center">
        <Col md={6}>
          <Image src={notFoundImage} alt="404 Not Found" className="mb-4" fluid />
          <h1 className="mb-3">Oops! Page Not Found</h1>
          <p className="lead mb-4">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
          <Button href="/" variant="primary">Back to Home</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
