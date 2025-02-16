import React from 'react';
import { useNavigate } from 'react-router-dom';

const SuccessFullyAdded = () => {
  const navigate = useNavigate();

  const handleViewOrderDetails = () => {
    navigate('/ToReceiveCustomer');
  };

  return (
    <div className="container mt-5">
      <h2>Your Order Has Been Placed Successfully!</h2>
      <p>Thank you for your order! Your items will be delivered soon.</p>

      {/* Button to view order details */}
      <button className="btn btn-primary" onClick={handleViewOrderDetails}>
        View Order Details
      </button>
    </div>
  );
};

export default SuccessFullyAdded;
