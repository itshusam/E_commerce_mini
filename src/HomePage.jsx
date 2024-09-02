
import React from 'react';
import { Button, Container, Card, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage.css'; 

const HomePage = () => {
  const navigate = useNavigate(); 

  const handleShopNowClick = () => {
    navigate('/products'); 
  };

  return (
    <Container className="home-page text-center p-5" fluid>
      <Image 
        src={'./assets/candy.jpg'} 
        alt="Candy Shop Welcome" 
        className="mb-4 welcome-image" 
        fluid 
        rounded 
      />
      <Button 
        variant="primary" 
        className="shop-btn shadow-lg"
        onClick={handleShopNowClick} 
      >
        Shop Now
      </Button>
      <Card className="mt-4 shadow-sm border-primary">
        <Card.Body>
          <Card.Title>Featured Candy</Card.Title>
          <Card.Text>
            Discover our new range of delicious candies. Grab yours today!
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default HomePage;
