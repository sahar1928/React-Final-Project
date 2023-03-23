import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import URL from '../ssets/url';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);

  const addToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const existingItemIndex = cartItems.findIndex(item => item.id === product.id);
    if (existingItemIndex !== -1) {
      cartItems[existingItemIndex].quantity += quantity;
    } else {
      cartItems.push({ ...product, quantity });
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    alert('Product added to cart!');
  };

  const addToWishlist = () => {
    const wishlistItems = JSON.parse(localStorage.getItem('wishlistItems')) || [];
    if (!wishlistItems.some(item => item.id === product.id)) {
      wishlistItems.push(product);
      localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
      alert('Product added to wishlist!');
    } else {
      alert('Product is already in wishlist!');
    }
  };

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then(response => response.json())
      .then(data => {
        setProduct(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);

  return (
    <Container className="my-5">
      <Row>
        <Col md={5}>
          <Card>
            <Card.Img variant="top" src={product.image} />
          </Card>
        </Col>
        <Col md={7}>
          <h3>{product.name}</h3>
          <p><strong>Price:</strong> ${product.price}</p>
          <p><strong>Description:</strong> {product.description}</p>
          <hr />
          <p><strong>Quantity:</strong></p>
          <div className="d-flex">
            <Button variant="secondary" size="sm" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</Button>
            <p className="mx-3">{quantity}</p>
            <Button variant="secondary" size="sm" onClick={() => setQuantity(quantity + 1)}>+</Button>
          </div>
          <hr />
          <Button variant="primary" size="lg" onClick={addToCart}>Add to Cart</Button>
          <Button variant="secondary" size="lg" className="ml-3" onClick={addToWishlist}>Add to Wishlist</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
