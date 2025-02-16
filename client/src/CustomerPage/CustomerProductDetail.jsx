// ProductDetail.js
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const CustomerProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/Customer/CustomerProductDetail/${id}`);
        setProduct(response.data.data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchProduct();
  }, [id]);

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProduct = cart.find(item => item.id === product.id);
  
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
  
    console.log('Cart before update:', cart); // Debugging: I-check ang cart bago ang update
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log('Cart after update:', cart); // Debugging: I-check ang cart pagkatapos ng update
  
    navigate('/CustomerAddProduct'); // Redirect to cart page
  };
  
  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container p-2">
      <div className="row">
        <div className="col-md-4">
          <img src={product.image} alt={product.descriptions} style={{ width: '400px' }} />
        </div>
        <div className="col-md-6 p-5">
          <h2>{product.descriptions}</h2>
          <p><strong>Stock:</strong>{product.stock}</p>
          <p><strong>Price:</strong> ₱{product.price}</p>
          <p><strong>Category:</strong> {product.category}</p>

          <div className="row">
            <div className="col-md-9">
              <button className="btn btn-danger" onClick={addToCart}>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerProductDetail;
