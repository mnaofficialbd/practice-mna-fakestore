import React, { useEffect, useState } from 'react';
import './AllProducts.css'

const AllProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <h3>All Products</h3>
        </div>
    );
};

export default AllProducts;