import React, { useState, useEffect } from 'react';
import { Container, Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';
import URL from '../Assets/url';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      const response = await fetch('/api/products/featured');
      const data = await response.json();
      setFeaturedProducts(data);
    }
    fetchFeaturedProducts();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  }

  const handleSearchSubmit = () => {
    // Redirect to products page with search term as query parameter
  }

  return (
    <Container>
      <Row>
        <Col>
          <h1>Welcome to My E-commerce Website</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Search for products"
              aria-label="Search for products"
              aria-describedby="basic-addon2"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <Button variant="outline-secondary" id="button-addon2" onClick={handleSearchSubmit}>
              Search
            </Button>
          </InputGroup>
        </Col>
      </Row>
      <Row>
        {featuredProducts.map((product) => (
          <Col key={product.id} xs={12} md={4}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
            {/* Add link to product detail page */}
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;