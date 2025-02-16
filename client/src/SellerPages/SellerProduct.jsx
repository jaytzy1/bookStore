import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SellerProduct = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true); // To show loading state

    // Fetch products on component mount
    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (!token) {
            console.error('No token found!');
            return;
        }

        console.log('Fetching products with token:', token); // Debugging log

        axios.get('http://localhost:5000/ProductRoutes/SellerProducts', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then(response => {
            console.log('Fetched products:', response.data.products); // Debugging log
            setProducts(response.data.products);
            setLoading(false);
        })
        .catch(error => {
            console.error('Error fetching products:', error);
            setLoading(false);
        });
    }, []);

    // Handle product removal with confirmation
    const handleRemove = (id) => {
        const token = localStorage.getItem('authToken');
        if (!token) {
            console.error('No token found!');
            return;
        }

        // Show confirmation dialog
        const confirmDelete = window.confirm('Are you sure you want to remove this product?');

        if (confirmDelete) {
            console.log('Removing product with id:', id); // Debugging log

            // Send DELETE request to remove the product
            axios.delete(`http://localhost:5000/ProductRoutes/SellerProduct/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                console.log('Delete response:', response); // Debugging log
                alert('Product removed successfully!');
                // Update the state by filtering out the removed product
                setProducts((prevProducts) => prevProducts.filter(product => product.id !== id));
            })
            .catch(error => {
                console.error('Error removing product:', error);
                alert('Failed to remove product.');
            });
        } else {
            console.log('Product removal canceled');
        }
    };

    if (loading) {
        return <div>Loading...</div>; // Show loading state while fetching products
    }

    return (
        <section>
            <div className="container">
                <h2 className="text-center mb-4">My Products</h2>
                <div className="row d-flex flex-wrap">
                    {products.length > 0 ? (
                        products.map((product) => (
                            <div className="col-md-3 col-sm-4 col-lg-3 mb-4" key={product.id}>
                                <div className="card shadow-sm">
                                    <img
                                        className="card-img-top"
                                        src={product.image}
                                        alt={product.descriptions}
                                        style={{ height: '250px' }}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            {product.descriptions.length > 20
                                                ? `${product.descriptions.slice(0, 20)}...`
                                                : product.descriptions}
                                        </h5>
                                        <p className="card-text">{product.category}</p>
                                        <p className="card-text text-success">₱{product.price}</p>
                                    </div>
                                    <div className="card-footer text-center">
                                        {/* Link to product details page */}
                                        <Link to={`/DetailProduct/${product.id}`} className="btn btn-primary mx-2">
                                            View Details
                                        </Link>
                                        <button
                                            className="btn btn-danger ml-2"
                                            onClick={() => handleRemove(product.id)}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-12 text-center">
                            <p>No products available.</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default SellerProduct;
