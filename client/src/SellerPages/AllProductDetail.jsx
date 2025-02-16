import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const AllProductDetail = () => {
  const { id } = useParams();  // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/Customer/CustomerProductDetail/${id}`);
        setProduct(response.data.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchProductDetail();
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <img src={product.image} alt={product.descriptions} style={{ width: '100%' }} />
        </div>
        <div className="col-md-6 p-5">
          <h2>{product.descriptions}</h2>
          <p><strong>Publisher:</strong>{product.gender}</p>
          <p><strong>Stock:</strong> {product.stock}</p>
          <p><strong>Price:</strong> ₱{product.price}</p>
          <p><strong>Category:</strong> {product.category}</p>
          {/* You can add more product details here */}
        </div>
      </div>
    </div>
  );
};

export default AllProductDetail;
