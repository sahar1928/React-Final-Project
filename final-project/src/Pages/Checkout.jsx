import React, { useState, useEffect } from 'react';
import URL from '../Assets/url';

const Checkout = ({ cartItems, onClearCart }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [country, setCountry] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('creditcard');
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchTotal = async () => {
      try {
        const response = await fetch('/api/checkout/total', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(cartItems)
        });

        const data = await response.json();
        setTotal(data.total);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTotal();
  }, [cartItems]);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleZipCodeChange = (e) => {
    setZipCode(e.target.value);
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const order = {
      firstName,
      lastName,
      email,
      address,
      city,
      zipCode,
      country,
      paymentMethod,
      total,
      items: cartItems,
    };

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(order)
      });

      if (response.ok) {
        alert('Order placed successfully!');
        onClearCart();
      } else {
        alert('Error placing order.');
      }
    } catch (error) {
      console.log(error);
      alert('Error placing order.');
    }
  };

  return (
    <div className="container my-5">
      <h2>Checkout</h2>
      <hr />
      <div className="row">
        <div className="col-md-6">
          <h4>Shipping Information</h4>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                value={firstName}
                onChange={handleFirstNameChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                value={lastName}
                onChange={handleLastNameChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                value={address}
                onChange={handleAddressChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                className="form-control"
                id="city"
                value={city}
                onChange={handleCityChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="zipCode">Zip Code</label>
              <input
                type="text"
                className="form-control"
                id="zipCode"
                value={zipCode}
                onChange={handleZipCodeChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="country">Country</label>
              <input
                type="text"
                className="form-control"
                id="country"
                value={country}
                onChange={handleCountryChange}
                required
              />
            </div>
            <h4>Payment Information</h4>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="paymentMethod"
                id="creditCard"
                value="creditcard"
                checked={paymentMethod === 'creditcard'}
                onChange={handlePaymentMethodChange}
                required
              />
              <label className="form-check-label" htmlFor="creditCard">
                Credit Card
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="paymentMethod"
                id="paypal"
                value="paypal"
                checked={paymentMethod === 'paypal'}
                onChange={handlePaymentMethodChange}
              />
              <label className="form-check-label" htmlFor="paypal">
                PayPal
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="paymentMethod"
                id="cashOnDelivery"
                value="cashondelivery"
                checked={paymentMethod === 'cashondelivery'}
                onChange={handlePaymentMethodChange}
              />
              <label className="form-check-label" htmlFor="cashOnDelivery">
                Cash on Delivery
              </label>
            </div>
            <hr />
            <h4>Order Summary</h4>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>{item.quantity}</td>
                    <td>{item.price.toFixed(2)}</td>
                  </tr>
                ))}
                <tr>
                  <td></td>
                  <td>Total:</td>
                  <td>{total.toFixed(2)}</td>
                </tr>
              </tbody>
            </table>
            <button type="submit" className="btn btn-primary">
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;