import React, { useEffect, useState } from 'react';

const ToReceiveCustomer = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Retrieve all orders from localStorage
    const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    // Reverse the order to show the latest added order at the top
    setOrders(savedOrders.reverse());
  }, []);

  if (orders.length === 0) {
    return <p>No orders found</p>;
  }

  return (
    <div className="container mt-5">
      <h2>Orders Successfully Placed</h2>

      {orders.map((order, index) => (
        <div key={index} className="order-section mt-4">
          <h3>Order {index + 1}</h3>
          <h4>Delivery Date: {order.deliveryDate}</h4>
          <h4>Total Price: ₱{order.totalPrice}</h4>

          <div className="row mt-4">
            {order.items.map((item) => (
              <div key={item.id} className="col-md-12 mb-3">
                <div className="d-flex justify-content-between">
                  <div>
                    <img src={item.image} alt={item.descriptions} style={{ width: '100px' }} />
                    <p>{item.descriptions}</p>
                    <p>₱{item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Total: ₱{item.price * item.quantity}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ToReceiveCustomer;
