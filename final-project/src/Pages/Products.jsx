import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import URL from '../Assets/url';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState({ category: '', brand: '', minPrice: '', maxPrice: '' });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const params = new URLSearchParams(filter);
        const response = await fetch(`/api/products?${params.toString()}`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, [filter]);

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilter(prevFilter => ({ ...prevFilter, [name]: value }));
  };

  const handleFilterSubmit = (event) => {
    event.preventDefault();
    // Fetch products with new filter parameters
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Products</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={handleFilterSubmit}>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Category</Form.Label>
                  <Form.Control name="category" value={filter.category} onChange={handleFilterChange} />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Brand</Form.Label>
                  <Form.Control name="brand" value={filter.brand} onChange={handleFilterChange} />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Min Price</Form.Label>
                  <Form.Control name="minPrice" value={filter.minPrice} onChange={handleFilterChange} />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Max Price</Form.Label>
                  <Form.Control name="maxPrice" value={filter.maxPrice} onChange={handleFilterChange} />
                </Form.Group>
              </Col>
              <Col>
                <Button type="submit">Filter</Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
      <Row>
        {products.map((product) => (
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

export default Products;
