import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './AllProducts.css'

const AllProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products])
    return (
        <div>
            <h3>All Products</h3>
            <div className="row container">
                {
                    products.map(product => <Product product={product} key={product.id}></Product>)
                }
            </div>

        </div>
    );
};

export default AllProducts;