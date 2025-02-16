import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CustomerAddProduct = () => {
  const [cart, setCart] = useState([]);
  const [checkedItems, setCheckedItems] = useState({});

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart.reverse()); // Reverse the cart to show recent items first

    const initialCheckedState = {};
    savedCart.forEach((item) => {
      initialCheckedState[item.id] = true;
    });
    setCheckedItems(initialCheckedState);
  }, []);

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return;

    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });

    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const addToCart = (newItem) => {
    const updatedCart = [newItem, ...cart]; // Add the new item to the beginning
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));

    const updatedCheckedItems = { ...checkedItems };
    delete updatedCheckedItems[id];
    setCheckedItems(updatedCheckedItems);
  };

  const handleCheckboxChange = (id) => {
    setCheckedItems((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => {
      if (checkedItems[item.id]) {
        return total + item.price * item.quantity;
      }
      return total;
    }, 0);
  };

  return (
    <>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          backgroundColor: '#f8f9fa',
          padding: '10px',
          zIndex: 1000,
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div className="container d-flex justify-content-between align-items-center">
          <h4>Your Cart</h4>
          <div className="mt-4">
            <h3>Total Price: ₱{calculateTotalPrice()}</h3>
          </div>
          <Link to="/CustomerCheckOut">
            <button className="btn btn-success">Proceed to Checkout</button>
          </Link>
        </div>
      </div>

      <div className="container" style={{ marginTop: '80px' }}>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div className="row">
            {cart.map((item) => (
              <div key={item.id} className="col-md-4 p-3">
                <div className="card h-100 d-flex flex-column justify-content-between">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3">
                      <input
                        style={{
                          marginRight: '10px',
                          width: '20px',
                          height: '20px',
                          cursor: 'pointer',
                          color: 'green',
                          border: '2px solid green',
                        }}
                        type="checkbox"
                        checked={checkedItems[item.id] || false}
                        onChange={() => handleCheckboxChange(item.id)}
                      />
                      <img
                        src={item.image}
                        alt={item.descriptions}
                        style={{
                          width: '80px',
                          height: '80px',
                          objectFit: 'cover',
                          display: 'block',
                          margin: '0 auto',
                        }}
                        className="rounded"
                      />
                    </div>
                    <h5 className="card-title text-center">{item.descriptions}</h5>
                    <p className="card-text text-center text-danger">Price: ₱{item.price}</p>

                    <div className="d-flex justify-content-center align-items-center mb-3">
                      <button
                        className="btn btn-primary me-2"
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <input
                        type="number"
                        value={item.quantity}
                        min="1"
                        onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                        style={{ width: '50px', textAlign: 'center' }}
                      />
                      <button
                        className="btn btn-primary ms-2"
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>

                    <p className="text-center">Total: ₱{item.price * item.quantity}</p>
                  </div>
                  <div className="card-footer text-center">
                    <button
                      className="btn btn-danger w-100"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default CustomerAddProduct;
