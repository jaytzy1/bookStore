import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DetailProduct = () => {
    const { id } = useParams(); // Kuhanin ang product ID mula sa URL
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (!token) {
            console.error('No token found!');
            return;
        }

        axios.get(`http://localhost:5000/ProductRoutes/SellerProduct/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then(response => {
            setProduct(response.data.product);
        })
        .catch(error => {
            console.error('Error fetching product details:', error);
        });
    }, [id]);

    if (!product) {
        return <div>Loading product details...</div>;
    }

    return (
        <div className="container p-3">
            <div className='row'>
                <div className='col-md-4'>
                <img src={product.image} alt={product.descriptions} style={{ width: '400px' }} />
                </div>
                <div className='col-md-6'>
                <h2>{product.descriptions}</h2>
                <p><strong>Publisher: </strong>{product.gender}</p>
            <h2 className="text-success"><strong className='text-primary'>Price: </strong>₱{product.price}</h2>
            <h5><strong className='text-primary'>Stock:</strong> {product.stock}</h5>
            <p>{product.size}</p>
            <p><strong className='text-primary'>Category:</strong> {product.category}</p>
                </div>
           
            </div>
             {/* Assuming `details` is a field for product description */}
        </div>
    );
};

export default DetailProduct;
