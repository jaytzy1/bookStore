import React, { useState, useEffect } from 'react';

const ToReceiveCustomer = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(savedOrders);
  }, []);

  return (
    <div className="container mt-5">
      <h2>Orders to Receive</h2>

      {orders.length === 0 ? (
        <p>You have no orders yet.</p>
      ) : (
        orders.map((order, index) => (
          <div key={index} className="mb-4">
            <h3>Order {index + 1}</h3>
            <ul>
              {order.products.map((product, i) => (
                <li key={i} className="d-flex justify-content-between">
                  <div>
                    <img src={product.image} alt={product.descriptions} style={{ width: '100px' }} />
                    <p>{product.descriptions}</p>
                    <p>₱{product.price}</p>
                    <p>Quantity: {product.quantity}</p>
                  </div>
                  <div>
                    <p><strong>Status:</strong> {order.status}</p>
                    <p><strong>Estimated Delivery:</strong> {order.estimatedDelivery.toLocaleDateString()}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default ToReceiveCustomer;
