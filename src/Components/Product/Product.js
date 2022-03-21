import React from 'react';
import './Product.css'

const Product = (props) => {
    return (
        <div className='col-md-4'>
            <div className="card p-2 border m-3">
                <h3>{props.product.title.slice(0, 10)}</h3>
                <img className='w-50 m-auto' src={props.product.image} alt="" />
                <div className="d-flex justify-content-around">
                    <button className='btn btn-success'>Add to card</button>
                    <button className='btn btn-danger'>Delete</button>
                    <button className='btn btn-info'>Details</button>
                </div>
            </div>

        </div>
    );
};

export default Product;