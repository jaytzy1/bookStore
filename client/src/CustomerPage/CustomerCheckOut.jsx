import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CustomerCheckOut = () => {
  const [cart, setCart] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [shippingFee] = useState(60); // Fixed shipping fee of ₱60
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  const calculateTotalPrice = () => {
    const total = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    return total + shippingFee; // Add shipping fee to total price
  };

  const handlePlaceOrder = () => {
    if (!paymentMethod || !deliveryAddress) {
      alert('Please select payment method and enter delivery address.');
      return;
    }

    alert('Order placed successfully!');

    const currentDate = new Date();
    const deliveryDate = new Date(currentDate.setDate(currentDate.getDate() + 3)).toLocaleDateString();

    const order = {
      items: cart,
      totalPrice: calculateTotalPrice(),
      deliveryDate: deliveryDate,
      paymentMethod: paymentMethod,
      deliveryAddress: deliveryAddress,
    };

    const existingOrders = JSON.parse(localStorage.getItem('orders')) || [];
    existingOrders.push(order);
    localStorage.setItem('orders', JSON.stringify(existingOrders));

    console.log('Saved Orders:', existingOrders);

    setCart([]);
    localStorage.removeItem('cart');
    navigate('/SucessFullyAdded');
  };

  return (
    <div className="container mt-5">
      <h1 className="text-danger text-center">Checkout</h1>

      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty</p>
      ) : (
        <div>
          <div className="row">
            {cart.map((item) => (
              <div key={item.id} className="col-md-3 mb-4">
                <div className="card h-100">
                  <img
                    src={item.image}
                    alt={item.descriptions}
                    className="card-img-top"
                    style={{ height: '280px', objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.descriptions}</h5>
                    <p className="card-text">Price: ₱{item.price}</p>
                    <p className="card-text">Quantity: {item.quantity}</p>
                    <p className="card-text font-weight-bold">Total: ₱{item.price * item.quantity}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4">
            <h4>Select Payment Method</h4>
            <div>
              <label className="d-block">
                <input
                  type="radio"
                  value="Credit Card"
                  checked={paymentMethod === 'Credit Card'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                Credit Card
              </label>
              <label className="d-block">
                <input
                  type="radio"
                  value="Gcash"
                  checked={paymentMethod === 'Gcash'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                Gcash
              </label>
              <label className="d-block">
                <input
                  type="radio"
                  value="Cash on Delivery"
                  checked={paymentMethod === 'Cash on Delivery'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                Cash on Delivery
              </label>
            </div>
          </div>

          <div className="mt-4">
            <h4>Delivery Address</h4>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your delivery address"
              value={deliveryAddress}
              onChange={(e) => setDeliveryAddress(e.target.value)}
            />
          </div>

          <div className="mt-4">
            <h4>Delivery Option</h4>
            <p>Standard (₱60 fixed shipping fee)</p>
          </div>

          <div className="row mt-4">
            <div className="col-md-12 d-flex justify-content-end align-items-center">
              <h3 className="mr-3">Total Price: ₱{calculateTotalPrice()} &nbsp;</h3>
              <button className="btn btn-primary" onClick={handlePlaceOrder}>
                Place Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerCheckOut;