import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';
import URL from '../Assets/url';


const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      const response = await fetch('/api/cart');
      const data = await response.json();
      setCartItems(data);
    };

    fetchCartItems();
  }, []);

  const removeFromCartHandler = async (id) => {
    await fetch(`/api/cart/${id}`, {
      method: 'DELETE'
    });
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const renderCartItems = () => {
    if (cartItems.length === 0) {
      return <p>Your cart is empty.</p>;
    }

    return (
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>
                <Link to={`/products/${item.productId}`}>{item.name}</Link>
              </td>
              <td>${item.price.toFixed(2)}</td>
              <td>{item.quantity}</td>
              <td>
                <Button
                  variant='danger'
                  onClick={() => removeFromCartHandler(item.id)}
                >
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      {renderCartItems()}
      <Link to='/'>
        <Button variant='secondary'>Continue Shopping</Button>
      </Link>
      <Link to='/checkout'>
        <Button variant='primary'>Proceed to Checkout</Button>
      </Link>
    </div>
  );
};

export default Cart;;