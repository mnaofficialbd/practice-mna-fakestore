import React from 'react';
import './Menuber.css'

const Menubar = () => {
    return (
        <div>
            <h2>Menuber</h2>
            <div className="container">
                <div className="row">
                    <div className="col-md-2 p-2">
                        logo
                    </div>
                    <div className="col-md-10 menu-container d-flex justify-content-end">
                        <li className=' items me-2 p-2'>Home</li>
                        <li className=' items me-2 p-2'>Contact</li>
                        <li className=' items me-2 p-2'>Cart</li>
                        <li className=' items me-2 p-2'>Login</li>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menubar;