import React from 'react';

const Test = (props) => {
    console.log(props.count)
    return (
        <div>
            <div className='container mt-5'>
                <button className='ms-2 p-3'>+</button>
                <button className='ms-2 p-3'>-</button>

            </div>
        </div>
    );
};

export default Test;