import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Home from '../Pages/Home';
import Products from '../Pages/Products';
import ProductDetails from '../Pages/ProductDetails';
import Cart from '../Pages/Cart';
import CheckOut from '../Pages/Checkout';
import OrderHistory from '../Pages/OrderHistory';
import SignIn from '../Pages/SignIn';
import SignUp from '../Pages/SignUp';
import NotFound from '../Pages/NotFound';

const Nevigation = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="/product/:id" element={<ProductDetails/>} />
      <Route path="/products" element={<Products/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/checkout" element={<CheckOut/>} />
      <Route path="/order-history" element={<OrderHistory/>} />
      <Route path="/signin" element={<SignIn/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  );
};

export default Nevigation;