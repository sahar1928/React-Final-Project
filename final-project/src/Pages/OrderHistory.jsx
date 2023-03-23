import React, { useState, useEffect } from 'react';
import URL from '../Assets/url';

const OrderHistory = ({ userId }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(`/api/orders?userId=${userId}`);
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOrders();
  }, [userId]);

  return (
    <div className="container my-5">
      <h2>Order History</h2>
      <hr />
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Order Date</th>
            <th>Order ID</th>
            <th>Items</th>
            <th>Total</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td>{new Date(order.createdAt).toLocaleDateString()}</td>
              <td>{order._id}</td>
              <td>
                {order.items.map((item) => (
                  <p key={item._id}>
                    {item.name} ({item.quantity})
                  </p>
                ))}
              </td>
              <td>{order.total}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderHistory;